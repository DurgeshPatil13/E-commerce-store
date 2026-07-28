import axios from 'axios';

const api = axios.create({
  baseURL: "https://dummyjson.com",
});
 export const getProducts = async () => {
const response = await api.get('/products');
return response.data.products;

}
export const getProductBycategory = async (categorytype) => {

const response = await api.get(`/products/category/${categorytype}`);
return response.data.products;
}
export const searchproducts = async (query) => {
  const response=await api.get(`/products/${query}`)
  return response.data;
}