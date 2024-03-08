import { createStore } from "zustand";
import { IProduct } from "./interfaces/IProduct";

interface CartState {
  products: IProduct[];
  total: number;
}

const compareStrings = (a: string, b: string): number => {
  const aString = a.toUpperCase();
  const bString = b.toUpperCase();

  if (aString < bString) return -1;
  if (aString > bString) return 1;
  return 0;
};

const getIndex = (id: string, arr: IProduct[]): number => {
  return arr.findIndex((p) => (p.id = +id));
};

export const cartState = createStore<CartState>()((set) => ({
  products: [],
  total: 0,
}));

export const addProduct = (p: IProduct): void => {
  const currentList = cartState.getState().products;
  cartState.setState({
    products: [...currentList, p].sort((a, b) =>
      compareStrings(a.title, b.title)
    ),
  });
};

export const removeProduct = (id: string): void => {
  const currentList = cartState.getState().products;
  cartState.setState({
    products: [...currentList.splice(getIndex(id, currentList), 1)],
  });
};

export const calculateTotal = (): void => {
  const currentList = cartState.getState().products;
  cartState.setState({
    total: currentList.reduce((acc, p) => acc + p.price, 0),
  });
};
