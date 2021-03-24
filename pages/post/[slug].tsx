import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { IPost } from "../..";
import { getPost, getPosts } from "../../util/axios";

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPost(context.params.slug as string);
  return { props: { post }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: IPost[] = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: true };
};

const renderers = {
  link: ({ children, href }) => (
    <Link href={href}>
      <a target="_blank">{children}</a>
    </Link>
  ),
};

const PostDetail = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) return <div>loading...</div>;

  return (
    <div className="flex justify-center">
      <div className="w-full" style={{ maxWidth: "860px" }}>
        <div className="py-4 text-4xl font-semibold text-gray-700">
          {post.title}
        </div>
        <ReactMarkdown
          className="py-4 text-gray-700 break-words markdown"
          transformImageUri={(uri) =>
            uri.startsWith("http")
              ? uri
              : `${process.env.NEXT_PUBLIC_URL}${uri}`
          }
          // plugins={[codesandbox, { mode: "button" }]}
          renderers={renderers}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PostDetail;
