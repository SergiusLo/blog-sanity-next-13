import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspance from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
*[_type=='post'] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 30;

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspance
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[F7AB0A]">
              Loading Preview Data...{" "}
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspance>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}

export default HomePage;
