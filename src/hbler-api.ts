import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
export { listProducts, getProduct } from "./functions";
export {
  addProduct,
  calculateTotal,
  cartState,
  removeProduct,
} from "./cart-state";
