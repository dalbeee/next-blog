const PostDetail = ({ post }) => {
  return (
    <ReactMarkdown
      className="py-4 text-gray-700 break-words markdown"
      transformImageUri={(uri) =>
        uri.startsWith("http") ? uri : `${process.env.NEXT_PUBLIC_URL}${uri}`
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
  );
};

export default PostDetail;
