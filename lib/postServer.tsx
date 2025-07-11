import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { blogposts } from "../types";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getBlogData() {
  const filenames = fs.readdirSync(postsDirectory); //read files from blogposts
  const postsData = filenames.map((file) => {
    const id = file.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, file);
    const fileContent = fs.readFileSync(fullPath);

    const updatedFileContent = matter(fileContent) as any;
    const blog: blogposts = {
      id,
      title: updatedFileContent.data.title,
      name: updatedFileContent.data.name,
      content: updatedFileContent.data.content
    };
    return blog;
  });

  return postsData;
}
