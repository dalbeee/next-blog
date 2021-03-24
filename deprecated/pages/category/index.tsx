import { getCategories, getCategoryPosts, getPosts } from "../../util/axios";
import { ICategory, IPost } from "../..";
import PostCard from "../../components/PostCard";
import { useRouter } from "next/router";
import Category from "../../components/Category";

export const getStaticProps = async (context) => {
  const { posts = [] }: { posts?: IPost[] } = await getCategoryPosts(
    context.params?.category
  );
  const {
    categories: category,
  }: { categories?: ICategory[] } = await getCategories();
  return {
    props: { posts, category },
  };
};

const category = ({ posts, category }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex">
        {/* posts */}
        <div className="w-full gap-x-4 md:grid md:grid-cols-2 md:auto-rows-min ">
          {!!posts.length ? (
            posts.map((p, idx) => <PostCard key={idx} post={p} />)
          ) : (
            <div></div>
          )}
        </div>
        {/* category */}
        <Category />
      </div>
    </div>
  );
};

export default category;
