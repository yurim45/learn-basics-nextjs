import axios from 'axios';

// http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
// http://makeup-api.herokuapp.com/api/v1/products.json?brand=dior

const API_URL: string = 'http://makeup-api.herokuapp.com/api/v1/';

export type ProductType = {
  id: number;
  brand: string;
  name: string;
  price: number;
  price_sign: number | null;
  currency: string | null;
  image_link: string;
  product_link: string;
  website_link: string;
  description: string;
  rating: number;
  category: string | null;
  product_type: string;
  tag_list: string[];
  created_at: any;
  updated_at: any;
  product_api_url: string;
  api_featured_image: string;
  product_colors: string[];
};

export const getProducts = async () => {
  const url: string = process.env.NEXT_PUBLIC_API_URL;
  const { data } = await axios.get<ProductType[]>(url);
  return data;
};

export const getProduct = async (id: number) => {
  const { data } = await axios.get<ProductType>(
    `${API_URL}products/${id}.json`
  );
  return data;
};
