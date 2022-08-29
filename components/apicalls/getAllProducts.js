export async function getAllProducts(url) {
  const response = await fetch(url + "products");
  return await response.json();
}
