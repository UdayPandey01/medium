import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="border-b border-slate-200 pb-4 p-5 w-screen max-w-screen-lg cursor-pointer">
        <div className="flex">
          <div>
            <div className="h-6 bg-gray-200 rounded-full  w-48 mb-4"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
          <div className="flex justify-center flex-col pl-2">
            <Circle />
          </div>
          <div className="pl-2 text-sm flex justify-center flex-col">
            <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-400 font-thin text-sm pt-6 ">
          <div className="h-3 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
