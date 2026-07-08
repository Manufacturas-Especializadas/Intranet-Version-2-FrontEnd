import { FeaturedNewsCarousel } from "../../components/UI/FeaturedNewsCarousel/FeaturedNewsCarousel";
import { QuickAccess } from "../../components/UI/QuickAccess/QuickAccess";

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
        <FeaturedNewsCarousel />
        <QuickAccess />
      </div>
    </div>
  );
};
