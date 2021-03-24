import { GetStaticProps } from "next";
import React from "react";
import { ICategory, IPost } from "..";
import Category from "../components/Category";
import Posts from "../components/Posts";
import { getCategories, getCategoryPosts } from "../util/axios";

export const getStaticProps: GetStaticProps = async (context) => {
  const { posts = [] }: { posts?: IPost[] } = await getCategoryPosts(
    context.params?.category as string
  );

  const {
    categories: category,
  }: { categories?: ICategory[] } = await getCategories();
  return {
    props: { posts, category },
    revalidate: 60,
  };
};

const Index = ({ posts, category }) => {
  return (
    <div className="flex">
      <Posts posts={posts} />
      <Category category={category} />
    </div>
  );
};

export default Index;
