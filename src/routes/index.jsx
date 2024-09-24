export const ROUTES = {
    HOME: "/",
    PRODUCTS: "/products",
    FAQ: "/FAQ",
    About: "/About",
    Blog: "/Blog",
    NotFoundPage: "/NotFoundPage",
    
    
    SINGLE_PRODUCTS: {
      STATIC: "/product/:productId",
      DYNAMIC: (productId) => `/product/${productId}`,
    },
  };