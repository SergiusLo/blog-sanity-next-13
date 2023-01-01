"use client";

import { UsePreview } from "next-sanity/preview";
import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

type Props = {
  query: string;
};

function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);

  console.log("Loading post ...", posts);
  return <BlogList posts={posts} />;
}

export default PreviewBlogList;
