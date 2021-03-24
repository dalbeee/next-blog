import { getCategories, getCategoryPosts } from "../../util/axios";
import { ICategory, IPost } from "../..";
import Category from "../../components/Category";
import Posts from "../../components/Posts";
import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  const { posts = [] }: { posts?: IPost[] } = await getCategoryPosts(
    context.params?.category as string
  );

  const {
    categories: category,
  }: { categories?: ICategory[] } = await getCategories();
  return {
    props: { posts, category },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { categories } = await getCategories();
  const paths = categories.map((category) => {
    return { params: { category: category?.type } };
  });

  paths.shift(); // paths[0] just all category, but category.type = '' 👉🏻 remove this

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
