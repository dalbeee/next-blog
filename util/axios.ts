import axios from "axios";
import { ICategory } from "..";
const URL = process.env.NEXT_PUBLIC_URL;

export const getPost = async (slug: string) => {
  try {
    const { data } = await axios.get(`${URL}/posts?slug=${encodeURI(slug)}`);
    return data[0];
  } catch (error) {
    console.log(error);
    throw new Error("host error");
  }
};

export const getPosts = async () => {
  try {
    const { data } = await axios.get(`${URL}/posts?_sort=createdAt:desc`);

    return data;
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

export const testCall = async () => {
  let error = false;
  let isLoading = false;
  const categories: ICategory[] = [];
  const ax1 = () => axios.get(`${URL}/posts`);
  const ax2 = () => axios.get(`${URL}/categories`);
  const result = await axios.all([ax1(), ax2()]);
  console.log(result);
};

export const getCategories = async () => {
  let error = false;
  let isLoading = false;
  const categories: ICategory[] = [];

  try {
    isLoading = true;

    const { data: allPosts } = await axios.get(`${URL}/posts`);
    categories.push({
      type: "",
      posts: allPosts.length,
      name: "all",
    });

    const { data } = await axios.get(`${URL}/categories`);
    data.map((category: any) =>
      categories.push({
        type: category.type,
        posts: category.posts.length,
        name: category.type,
      })
    );

    isLoading = false;
    return { categories, error, isLoading };
  } catch (error) {
    return { error, isLoading };
  }
};

export const getCategoryPosts = async (categoryName: string) => {
  let error = false;
  let isLoading = false;

  const categoryString =
    categoryName !== "all" ? `categories.type=${categoryName}` : ``;

  try {
    isLoading = true;
    const { data: posts } = await axios.get(
      `${URL}/posts?_sort=createdAt:desc&${categoryString}`
    );

    return { posts, isLoading, error };
  } catch (error) {
    return { error, isLoading };
  }
};
