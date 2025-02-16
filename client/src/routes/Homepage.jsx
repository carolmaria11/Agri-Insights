import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-2 text-gray-600">
        <Link to="/" className="hover:text-blue-800 font-semibold">
          Home
        </Link>
        <span>•</span>
        <span className="text-[#6b2828] font-semibold">Farming Insights</span>
      </div>

      {/* INTRODUCTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Empowering Farmers with Knowledge & Innovation
          </h1>
          <p className="mt-4 text-md md:text-xl text-gray-600">
            Discover expert tips, innovative techniques, and real-world farming
            experiences to enhance your agricultural journey.
          </p>
        </div>

        {/* Animated Button */}
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                • Share Your Story •
              </textPath>
              <textPath href="#circlePath" startOffset="45%">
                Inspire Fellow Farmers
              </textPath>
            </text>
          </svg>
          <button className="absolute inset-0 m-auto w-20 h-20 bg-[#6b2828] rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>

      {/* CATEGORIES */}
      <MainCategories />

      {/* FEATURED POSTS */}
      <FeaturedPosts />

      {/* POST LIST */}
      <div>
        <h1 className="my-8 text-2xl text-gray-600">Latest Farming Articles</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
