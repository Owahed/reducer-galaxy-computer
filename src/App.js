import { RouterProvider } from "react-router-dom";
import ProductsContext from "./context/ProductsContext";
import routes from "./router/router";

function App() {
  return (
    <>
      <ProductsContext>
        <RouterProvider router={routes} />
      </ProductsContext>
    </>
  );
}

export default App;
