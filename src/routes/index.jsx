export const ROUTES = {
    HOME: "/",
    PRODUCTS: "/products",
    FAQ: "/FAQ",
    About: "/About",
    Blog: "/Blog",
    
    SINGLE_PRODUCTS: {
      STATIC: "/product/:productId",
      DYNAMIC: (productId) => `/product/${productId}`,
    },
  };