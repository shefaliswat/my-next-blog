"use client";
import Link from "next/link";
import { blogposts } from "../../../types";
import { usePathname } from "next/navigation";

export const PostCard = (props: any) => {
  const { title, name, id, content } = props;
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const BlogPostSection = () => {
    return (
      <div className={isHomePage && "my-auto" || ""}>
        <h3 className="text-xl">{title}</h3>
        <p className="my-2">{name}</p>
        {!isHomePage && <div>{content}</div>}
      </div>
    );
  };

   if (!isHomePage) return <div className="border-transparent m-4 p-4 mx-auto"><BlogPostSection /></div>;
  return (
    <Link
      href={`/posts/${id}`}
      className="border-transparent p-2 my-6 bg-slate-300 text-blue rounded-md hover:rounded-xl hover:border-black block md:w-100 m-auto"
    >
      <BlogPostSection />
    </Link>
  );
};
