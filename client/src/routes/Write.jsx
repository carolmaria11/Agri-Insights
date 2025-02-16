import React from "react";
import { useUser, useAuth } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";
import { useEffect } from "react";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("");
  const [img, setImg] = useState("");
  const [video, setVideo] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (img) {
      const imageUrl = img.url;
      const imageHtml = `<p><img src="${imageUrl}" class="custom-image" /></p>`;
      setValue((prev) => prev + imageHtml);
    }
  }, [img]);

  // Add video to the content area with custom styles
  useEffect(() => {
    if (video) {
      const videoUrl = video.url;
      const videoHtml = `<p><iframe class="ql-video custom-video" src="${videoUrl}"></iframe></p>`;
      setValue((prev) => prev + videoHtml);
    }
  }, [video]);

  const navigate = useNavigate();
  const { getToken } = useAuth();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      toast.error("Content cannot be empty!");
      return;
    }

    const formData = new FormData(e.target);

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);
    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        </Upload>

        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Share Your Farming Experience"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="crop-management">Crop Management</option>
            <option value="soil-health">Soil Health</option>
            <option value="plant-diseases">Plant Diseases</option>
            <option value="sustainable-farming">Sustainable Farming</option>
            <option value="agri-technology">Agri-Technology</option>
            <option value="market-trends">Market Trends</option>
            <option value="success-stories">Success Stories</option>
            <option value="community-experiences">Community Experiences</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <div className=" flex-1 flex flex-col">
          <div className="flex flex-col gap-2 mr-2"></div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md h-[400px] overflow-auto" // Adjusted to prevent overflow
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progress:" + progress}
        {/* {mutation.isError && <span>{mutation.error.message}</span>} */}
      </form>
    </div>
  );
};

export default Write;
