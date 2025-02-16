import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-[#6b2828] text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=agri-technology"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Agri Technology
        </Link>
        <Link
          to="/posts?cat=plant-diseases"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Plant Diseases
        </Link>

        <Link
          to="/posts?cat=market-trends"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Market Trends
        </Link>
        <Link
          to="/posts?cat=success-stories"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Success Stories
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default MainCategories;
