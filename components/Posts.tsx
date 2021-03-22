import { useStore } from "../hooks/store";
import PostCard from "./PostCard";

const Posts = () => {
  const { posts } = useStore();
  return (
    <div className="w-full gap-x-4 md:grid md:grid-cols-2 md:auto-rows-min ">
      {!!posts.length && posts.map((p, idx) => <PostCard key={idx} post={p} />)}
    </div>
  );
};

export default Posts;
