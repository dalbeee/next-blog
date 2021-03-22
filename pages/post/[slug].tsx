import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPost } from "../../util/axios";

export const getServerSideProps = async (context) => {
  const post = await getPost(context.params.slug);
  return { props: { post } };
};

const PostDetail = ({ post }) => {
  return (
    <div className="flex justify-center">
      <div className="" style={{ width: "860px" }}>
        {/* <div className="py-4 text-4xl font-semibold text-gray-700">
          {post.title}
        </div> */}
        <ReactMarkdown
          className="py-4 text-gray-700 break-words markdown"
          transformImageUri={(uri) =>
            uri.startsWith("http")
              ? uri
              : `${process.env.NEXT_PUBLIC_URL}${uri}`
          }
          renderers={{
            link: ({ children, href }) => (
              <Link href={href}>
                <a target="_blank">{children}</a>
              </Link>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PostDetail;
