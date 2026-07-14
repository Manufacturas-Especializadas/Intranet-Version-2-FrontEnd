import { BirthdaySection } from "../../components/UI/BirthdaySection/BirthdaySection";
import { CalendarWidget } from "../../components/UI/CalendarWidget/CalendarWidget";
import { DamesaideaSection } from "../../components/UI/DamesaideaSection/DamesaideaSection";
import { DepartmentNews } from "../../components/UI/DepartmentNews/DepartmentNews";
import { DirectoryWidget } from "../../components/UI/DirectoryWidget/DirectoryWidget";
import { FeaturedNewsCarousel } from "../../components/UI/FeaturedNewsCarousel/FeaturedNewsCarousel";
import { MotivationalBanner } from "../../components/UI/MotivationalBanner/MotivationalBanner";
import { NewHiresSection } from "../../components/UI/NewHiresSection/NewHiresSection";
import { QuickAccess } from "../../components/UI/QuickAccess/QuickAccess";
import { RecentPosts } from "../../components/UI/RecentPosts/RecentPosts";
import { SmallReminderCard } from "../../components/UI/SmallReminderCard/SmallReminderCard";

export const Dashboard = () => {
  return (
    <div
      className="
        mx-auto w-full max-w-[1680px]
        px-4 pb-12 pt-6
        sm:px-5
        lg:px-6
        2xl:px-8
      "
    >
      <div
        className="
          grid min-w-0
          grid-cols-1
          items-start
          gap-2
          2xl:grid-cols-[minmax(0,1fr)_350px]
        "
      >
        <main className="flex min-w-0 flex-col gap-2">
          <div
            className="
              grid min-w-0
              grid-cols-1
              items-start
              gap-2
              lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.95fr)]
            "
          >
            <div className="min-w-0">
              <FeaturedNewsCarousel />
            </div>

            <div className="min-w-0">
              <QuickAccess />
            </div>
          </div>
          <div
            className="
    grid min-w-0
    grid-cols-1
    items-stretch
    gap-2
    lg:grid-cols-2
    lg:auto-rows-fr
  "
          >
            <div className="min-w-0 h-full">
              <DepartmentNews />
            </div>

            <div className="min-w-0 h-full">
              <RecentPosts />
            </div>
          </div>

          <div className="min-w-0">
            <DamesaideaSection />
          </div>

          <div
            className="
    grid min-w-0
    grid-cols-1
    items-stretch
    gap-2
    lg:grid-cols-[minmax(340px,0.75fr)_minmax(0,1.25fr)]
  "
          >
            <div className="min-w-0">
              <NewHiresSection />
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <SmallReminderCard />
              <MotivationalBanner />
            </div>
          </div>


        </main>

        <aside
          className="
            grid min-w-0
            auto-rows-max
            grid-cols-1
            items-start
            gap-2
            md:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-1
          "
        >
          <div className="min-w-0">
            <BirthdaySection />
          </div>

          <div className="min-w-0">
            <CalendarWidget />
          </div>

          <div
            className="
              min-w-0
              md:col-span-2
              xl:col-span-1
              2xl:col-span-1
            "
          >
            <DirectoryWidget />
          </div>
        </aside>
      </div>
    </div>
  );
};