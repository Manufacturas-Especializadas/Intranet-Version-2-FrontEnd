import { BirthdaySection } from "../../components/UI/BirthdaySection/BirthdaySection";
import { CalendarWidget } from "../../components/UI/CalendarWidget/CalendarWidget";
import { DepartmentNews } from "../../components/UI/DepartmentNews/DepartmentNews";
import { DirectoryWidget } from "../../components/UI/DirectoryWidget/DirectoryWidget";
import { FeaturedNewsCarousel } from "../../components/UI/FeaturedNewsCarousel/FeaturedNewsCarousel";
import { MotivationalBanner } from "../../components/UI/MotivationalBanner/MotivationalBanner";
import { NewHiresSection } from "../../components/UI/NewHiresSection/NewHiresSection";
import { QuickAccess } from "../../components/UI/QuickAccess/QuickAccess";
import { RecentPosts } from "../../components/UI/RecentPosts/RecentPosts";
import { DamesaideaSection } from "../../components/UI/DamesaideaSection/DamesaideaSection";

export const Dashboard = () => {
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-6 px-4 pb-8 sm:px-5 lg:px-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
        <main className="flex min-w-0 flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <FeaturedNewsCarousel />
            <QuickAccess />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
            <DepartmentNews />
            <RecentPosts />
          </div>
          <DamesaideaSection />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
            <NewHiresSection />
            <MotivationalBanner />
          </div>
        </main>

        <aside className="flex min-w-0 flex-col gap-6">
          <BirthdaySection />
          <CalendarWidget />
          <DirectoryWidget />
        </aside>
      </div>
    </div>
  );
};