import React from "react";
import App from "../components/App";
import { getPosts } from "../util/axios";

export const getServerSideProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

const Index = ({ posts }) => {
  console.log(process.env.NEXT_PUBLIC_URL);
  console.log(process.env.TEST);
  return (
    <div>
      <App />
    </div>
  );
};

export default Index;
