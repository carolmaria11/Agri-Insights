import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
  // Safely handle missing post.user or post.user.username
  const username = post?.user?.username || "Unknown Author";
  const category = post?.category || "Uncategorized";
  const createdAt = post?.createdAt ? format(post.createdAt) : "Unknown Date";

  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* Image */}
      {post?.img && (
        <div className="md:hidden xl:block xl:w-1/3">
          <Image
            src={post.img}
            className="rounded-2xl object-cover"
            w="735"
            h="535"
          />
        </div>
      )}
      {/* Details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post?.slug}`} className="text-4xl font-semibold">
          {post?.title || "Untitled Post"}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link
            className="text-blue-800"
            to={post?.user ? `/posts?author=${username}` : "#"}
          >
            {username}
          </Link>
          <span>on</span>
          <Link className="text-blue-800">{category}</Link>
          <span>{createdAt}</span>
        </div>
        <p>{post?.desc || "No description available."}</p>
        <Link to={`/${post?.slug}`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
