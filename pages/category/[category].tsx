import { getCategories, getCategoryPosts } from "../../util/axios";
import { ICategory, IPost } from "../..";
import Category from "../../components/Category";
import Posts from "../../components/Posts";

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

export const getStaticPaths = async () => {
  const { categories } = await getCategories();
  const paths = categories.map((category) => {
    return { params: { category: category?.type } };
  });

  paths.shift();

  return {
    paths,
    fallback: false,
  };
};

const category = ({ posts, category }) => {
  return (
    <div className="flex">
      <Posts posts={posts} />
      <Category category={category} />
    </div>
  );
};

export default category;
