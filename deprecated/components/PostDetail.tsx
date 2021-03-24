import { useStore } from "../hooks/store";
import { useRouter } from "next/router";
const PostDetail = () => {
  const router = useRouter();
  const { posts } = useStore();
  const post = posts.filter((post: any) => post.slug === router.query.slug)[0];

  return (
    <div className="flex justify-center">
      <div className="">
        <div className="py-4 text-4xl font-semibold text-gray-700">
          {post.title}
        </div>
        <div
          className="py-4 text-gray-700 break-words"
          h-auto
          v-html="content"
        ></div>
      </div>
    </div>
  );
};

export default PostDetail;
