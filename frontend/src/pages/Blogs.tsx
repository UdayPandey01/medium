import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={
                "Carta’s business license was revoked in Illinois for failing to pay franchise tax, a tax on national corporations doing business in the state, according to state records seen by TechCrunch. In 2024, Washington state terminated cap table software Pulley’s business license, according to state filings."
              }
              publishedDate={"8Sept 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
