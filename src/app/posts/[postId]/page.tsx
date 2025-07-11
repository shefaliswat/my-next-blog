import { PostCard } from "@/app/components/PostCard";
import { getBlogData } from "../../../../lib/postServer";
import { notFound } from "next/navigation";

// type Params= {
//     params: {
//         postId: string;
//     }
// }

export function generateMetadata({ params }: any) {
  const posts = getBlogData();
  const { postId } = params;

  const currentPost = posts.find((p) => p.id == postId);

  if (!currentPost)
    return {
      title: "Post not found",
    };

  return {
    title: currentPost.title,
  };
}

export default async function Post({ params }: any) {
  const posts = getBlogData();
  const { postId } = await params;

  const currentPost = posts.find((p) => p.id == postId);

  if (!currentPost) return notFound(); //will return not-found.tsx

  return (
    <div>
      <PostCard {...currentPost} />
    </div>
  );
}
