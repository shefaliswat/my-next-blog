import { getBlogData } from "../../../lib/postServer"
import { blogposts } from "../../../types";
import { PostCard } from "./PostCard";

export const Posts = () => {
    const posts = getBlogData();
    return (
        <section>
        {posts.map((post: blogposts) => {
            return <PostCard key={post.id} {...post} />
        })}
        </section>
    )
}