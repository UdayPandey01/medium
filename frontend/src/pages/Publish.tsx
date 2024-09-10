import axios from "axios";
import { AppBar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <AppBar />
      <div className="flex justify-center pt-4">
        <div className="max-w-screen-lg w-full">
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
          />
          <TextEditor
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={async () => {
              const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content,
              },{
                headers:{
                  Authorization : localStorage.getItem("token")
                }
              });
              navigate(`/blog/${response.data.id}`);
            }}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800 mt-3"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (
    <div>
      <div className="pt-3 bg-white rounded-b-lg ">
        <label className="sr-only">Publish post</label>
        <textarea
          id="editor"
          onChange={onChange}
          rows={8}
          className="block w-full px-0 text-sm text-black bg-white focus:ring-0 placeholder-gray-400 rounded-lg border border-gray-300 pt-2"
          placeholder="Write an article..."
          required
        ></textarea>
      </div>
    </div>
  );
}
