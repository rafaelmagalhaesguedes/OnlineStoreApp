export async function getCategories() {
  const APICategories = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const response = await fetch(APICategories);
    if (!response) {
      throw new Error('Error fectching data!');
    }
    const categorie = await response.json();
    // console.log(data);
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
      throw new Error('Error fectching data!');
    }
    const search = await response.json();
    console.log(search);
    return search;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
