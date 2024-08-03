/* eslint-disable no-unused-vars */
import { products } from "../mock/mockData";
import Product from "../model/Product";

export const getProducts = (category?: string): Promise<Product[]> => {
  let filteredItems: Product[];

  if (category !== undefined) {
    filteredItems = products.filter((product) =>
      product.category?.toLowerCase() === category.toLowerCase()
    );
  } else {
    filteredItems = products;
  }

  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(filteredItems);
      }, 1000);
    } else {
      reject("No products found");
    }
  });
};

export const getProductById = (id: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject("Product not found");
      }
    }, 500);
  });
};