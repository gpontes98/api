import api from "./axios-config";

export const listProducts = async (): Promise<any> => {
  const req = await api.get("products?limit=0");

  return req.data.products;
};

export const getProduct = async (prodId: string): Promise<any> => {
  const req = await api.get(`products/${prodId}`);

  return req.data;
};
