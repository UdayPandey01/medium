import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = useBlogs()

    if(loading){
        return <div>
            loading...
        </div>
    }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="max-w-xl">
          <BlogCard
            authorName={"Uday"}
            title={
              "Startups are getting fined, or sometimes banned, by individual states"
            }
            content={
              "Carta’s business license was revoked in Illinois for failing to pay franchise tax, a tax on national corporations doing business in the state, according to state records seen by TechCrunch. In 2024, Washington state terminated cap table software Pulley’s business license, according to state filings."
            }
            publishedDate={"8Sept 2024"}
          />
          <BlogCard
            authorName={"Uday"}
            title={
              "Startups are getting fined, or sometimes banned, by individual states"
            }
            content={
              "Carta’s business license was revoked in Illinois for failing to pay franchise tax, a tax on national corporations doing business in the state, according to state records seen by TechCrunch. In 2024, Washington state terminated cap table software Pulley’s business license, according to state filings."
            }
            publishedDate={"8Sept 2024"}
          />
          <BlogCard
            authorName={"Uday"}
            title={
              "Startups are getting fined, or sometimes banned, by individual states"
            }
            content={
              "Carta’s business license was revoked in Illinois for failing to pay franchise tax, a tax on national corporations doing business in the state, according to state records seen by TechCrunch. In 2024, Washington state terminated cap table software Pulley’s business license, according to state filings."
            }
            publishedDate={"8Sept 2024"}
          />
          <BlogCard
            authorName={"Uday"}
            title={
              "Startups are getting fined, or sometimes banned, by individual states"
            }
            content={
              "Carta’s business license was revoked in Illinois for failing to pay franchise tax, a tax on national corporations doing business in the state, according to state records seen by TechCrunch. In 2024, Washington state terminated cap table software Pulley’s business license, according to state filings."
            }
            publishedDate={"8Sept 2024"}
          />
        </div>
      </div>
    </div>
  );
};
