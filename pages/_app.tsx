import { DragDropContext } from "react-beautiful-dnd";
import Header from "../components/Header";
import { StoreProvider } from "../hooks/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DragDropContext>
      <StoreProvider>
        <div className="flex justify-center h-auto min-h-screen bg-gray-100">
          <div className="w-11/12 2xl:w-3/5">
            <Header />
            <Component {...pageProps} />
          </div>
        </div>
      </StoreProvider>
    </DragDropContext>
  );
}

export default MyApp;
