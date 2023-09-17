export async function getCategories() {
  const APICategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(APICategories);
    if (!response) {
      throw new Error('Error fetching data!');
    }
    const categorie = await response.json();
    return categorie;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  const APISearch = `https://api.mercadolibre.com/sites/MLB/${query}?category=${categoryId}`;
  try {
    const response = await fetch(APISearch);
    if (!response) {
      throw new Error('Error fetching data!');
    }
    const search = await response.json();
    return search;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id: string) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
  try {
    const response = await fetch(URL);
    if (!response) {
      throw new Error('Error fetching!');
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductByQuery(query: string) {
  const APISearch = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(APISearch);
    if (!response) {
      throw new Error('Error fetching!');
    }
    const search = await response.json();
    return search;
  } catch (error) {
    console.log(error);
  }
}
