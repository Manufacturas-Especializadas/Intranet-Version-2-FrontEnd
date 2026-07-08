import { FeaturedNewsCarousel } from "../../components/UI/FeaturedNewsCarousel/FeaturedNewsCarousel";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 mb-6">
      <FeaturedNewsCarousel />
    </div>
  );
};
