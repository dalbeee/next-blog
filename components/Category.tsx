import { useRouter } from "next/router";
// import { useStore } from "../hooks/store";

const Category = ({ category }) => {
  // const { category } = useStore();
  const router = useRouter();

  const handleChangeCategory = (c) => {
    if (c.type === null) {
      router.push("/");
    } else router.push(`/category/${c.type}`);
  };

  return (
    <div className="hidden pt-20 ml-4 w-80 sm:block">
      <div className="px-2">
        <div className="mb-4 text-xl font-semibold text-gray-400">카테고리</div>

        {!!category.length &&
          category.map((c) => {
            return (
              <div className="" key={c.name}>
                <button
                  className={`flex items-center justify-start px-4 py-2 transform border-gray-500 hover:scale-110 rounded-xl focus:outline-none ${
                    router.query?.category == c.type ? "bg-gray-300" : ""

                    // activeCategory === c.name ? "bg-gray-300" : ""
                  } `}
                  onClick={() => handleChangeCategory(c)}
                  // onClick={() => changeCategory(c.name)}
                >
                  <span className="mr-4 text-sm font-semibold text-gray-700">
                    {c.name}
                  </span>
                  <i>{c.posts}</i>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
