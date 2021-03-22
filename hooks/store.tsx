import { createContext, useContext, useEffect, useState } from "react";
import { ICategory, IPost } from "..";
import { getCategories, getCategoryPosts, getPosts } from "../util/axios";

const reducer = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const changeCategory = (type: string) => {
    setActiveCategory(type);
  };

  useEffect(() => {
    getCategoryPosts(activeCategory || "all").then((res) =>
      setPosts(res.posts)
    );
    getCategories().then((res) => setCategory(res.categories));
  }, [activeCategory]);

  return { posts, category, setPosts, activeCategory, changeCategory };
};

type Reducer = ReturnType<typeof reducer>;

const StoreContext = createContext<Reducer | null>(null);

export const StoreProvider = ({ children }) => {
  const useHooks = reducer();
  return (
    <StoreContext.Provider value={useHooks}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
