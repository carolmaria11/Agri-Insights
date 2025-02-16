import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (e) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("sort", e.target.value);
      return newParams;
    });
  };

  const handleCategoryChange = (category) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("cat", category);
      return newParams;
    });
  };

  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="newest"
            checked={searchParams.get("sort") === "newest"}
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Newest
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            onChange={handleFilterChange}
            value="oldest"
            checked={searchParams.get("sort") === "oldest"}
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "general" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("general")}
        >
          All
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "crop-management" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("crop-management")}
        >
          Crop Management
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "soil-health" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("soil-health")}
        >
          Soil Health
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "plant-diseases" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("plant-diseases")}
        >
          Plant Diseases
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "sustainable-farming" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("sustainable-farming")}
        >
          Sustainable Farming
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "agri-technology" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("agri-technology")}
        >
          Agri-Technology
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "market-trends" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("market-trends")}
        >
          Market Trends
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "success-stories" ? "font-bold" : ""
          }`}
          onClick={() => handleCategoryChange("success-stories")}
        >
          Success Stories
        </span>
        <span
          className={`underline cursor-pointer ${
            searchParams.get("cat") === "community-experiences"
              ? "font-bold"
              : ""
          }`}
          onClick={() => handleCategoryChange("community-experiences")}
        >
          Community Experiences
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
