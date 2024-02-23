import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import InvalidRoute from "../pages/InvalidRoute";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <InvalidRoute />,
  },
  {
    path: "/product-details/:id",
    element: <ProductDetails />,
    errorElement: <InvalidRoute />,
  },
  {
    path: "/add-new-product",
    element: <AddProduct />,
    errorElement: <InvalidRoute />,
  },
]);

export default AppRoutes;
