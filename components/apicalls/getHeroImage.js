export async function getHeroImage(baseUrl) {
  const response = await fetch(baseUrl + "home");
  const data = await response.json();
  return data;
}
