import Category from "./Category";
import Posts from "./Posts";

const App = () => {
  return (
    <div className="flex">
      <Posts />
      <Category />
    </div>
  );
};

export default App;
