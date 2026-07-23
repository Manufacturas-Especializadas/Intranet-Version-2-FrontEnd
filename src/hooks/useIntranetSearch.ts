import {
  useState,
  useMemo,
  useEffect,
  type KeyboardEvent as ReactKeyboardEvent,
  type RefObject,
} from "react";
import { useNavigate } from "react-router-dom";
import { registerRecentAccess } from "../data/accessRegistry";
import {
  normalizeText,
  searchableItems,
  type SearchResult,
} from "../data/navbar.data";

interface UseIntranetSearchProps {
  searchInputRef: RefObject<HTMLInputElement | null>;
  searchContainerRef: RefObject<HTMLDivElement | null>;
}

export const useIntranetSearch = ({
  searchInputRef,
  searchContainerRef,
}: UseIntranetSearchProps) => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const normalizedQuery = normalizeText(query);

  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];

    const searchTerms = normalizedQuery.split(/\s+/).filter(Boolean);

    return searchableItems
      .map((item) => {
        const normalizedTitle = normalizeText(item.title);
        const normalizedGroup = normalizeText(item.group);

        const matchesEveryTerm = searchTerms.every((term) =>
          item.searchableText.includes(term),
        );

        if (!matchesEveryTerm) return { item, score: 0 };

        let score = 30;
        if (normalizedTitle === normalizedQuery) score = 100;
        else if (normalizedTitle.startsWith(normalizedQuery)) score = 85;
        else if (normalizedTitle.includes(normalizedQuery)) score = 70;
        else if (normalizedGroup === normalizedQuery) score = 60;
        else if (normalizedGroup.includes(normalizedQuery)) score = 50;

        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((firstResult, secondResult) => {
        if (secondResult.score !== firstResult.score) {
          return secondResult.score - firstResult.score;
        }
        return firstResult.item.title.localeCompare(
          secondResult.item.title,
          "es",
        );
      })
      .slice(0, 8)
      .map(({ item }) => item);
  }, [normalizedQuery]);

  useEffect(() => {
    setActiveIndex(0);
  }, [normalizedQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchContainerRef]);

  useEffect(() => {
    const handleSearchShortcut = (event: globalThis.KeyboardEvent) => {
      const isSearchShortcut =
        (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (!isSearchShortcut) return;

      event.preventDefault();
      searchInputRef.current?.focus();
      searchInputRef.current?.select();

      if (normalizedQuery) {
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleSearchShortcut);
    return () => window.removeEventListener("keydown", handleSearchShortcut);
  }, [normalizedQuery, searchInputRef]);

  const closeSearch = () => {
    setQuery("");
    setIsSearchOpen(false);
    setActiveIndex(0);
  };

  const clearSearch = () => {
    closeSearch();
    window.requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });
  };

  const openSearchResult = (item: SearchResult) => {
    if (item.path !== "/") {
      registerRecentAccess(item.id);
    }

    if (item.external) {
      const newWindow = window.open(item.path, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    } else {
      navigate(item.path);
    }
    closeSearch();
  };

  const handleSearchKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setIsSearchOpen(false);
      return;
    }

    if (searchResults.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((curr) =>
        curr >= searchResults.length - 1 ? 0 : curr + 1,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((curr) =>
        curr <= 0 ? searchResults.length - 1 : curr - 1,
      );
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const selectedItem = searchResults[activeIndex];
      if (selectedItem) openSearchResult(selectedItem);
    }
  };

  return {
    query,
    setQuery,
    isSearchOpen,
    setIsSearchOpen,
    activeIndex,
    setActiveIndex,
    searchResults,
    normalizedQuery,
    clearSearch,
    openSearchResult,
    handleSearchKeyDown,
  };
};
