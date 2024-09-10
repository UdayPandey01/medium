import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-4 md:px-10 w-full max-w-screen-xl pt-10">
          <div className="col-span-12 md:col-span-8">
            <div className="text-3xl md:text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-3">Posted on 8 Sept 2024</div>
            <div className="pt-5">{blog.content}</div>
          </div>
          <div className="col-span-12 md:col-span-4 mt-10 md:mt-0">
            <div className="text-slate-500 text-lg">
            Author
            </div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  I’m a designer who sometimes writes about social impact,
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
