import { createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import { ROUTES } from "../routes";
import CommonLayout from "../layout/CommonLayout";
import Homepage from "../pages/HomePage";
import FAQ from './../pages/FAQ';
import About from './../pages/About';
import Blog from './../pages/Blog';

const router = createBrowserRouter([
  {
    path: `${ROUTES.HOME}`,
    element: <CommonLayout />,
    children: [
      {
        path: `${ROUTES.HOME}`,
        element: <Homepage />,
      },
      {
        path: `${ROUTES.FAQ}`,
        element: <FAQ/>,
      },
      {
        path: `${ROUTES.About}`,
        element: <About/>,
      },
      {
        path: `${ROUTES.Blog}`,
        element: <Blog/>,
      },

      
      {
        path: `${ROUTES.PRODUCTS}`,
        element: <ProductsPage />,
      },
      {
        path: `${ROUTES.SINGLE_PRODUCTS.STATIC}`,
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;