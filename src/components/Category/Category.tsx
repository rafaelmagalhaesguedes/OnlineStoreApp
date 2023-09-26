import { CategoryType } from '../../types';

type CategoryProps = {
  categories: CategoryType[],
  searchByCategory: (id: string) => void;
};

function Category({ categories, searchByCategory } : CategoryProps) {
  return (
    <aside className="search-categories">
      <h2>Categorias</h2>
      {categories.map(({ id, name }) => (
        <div key={ id }>
          <label data-testid="category" htmlFor={ id }>
            <input
              type="radio"
              id={ id }
              name={ name }
              onChange={ (e) => {
                e.preventDefault();
                searchByCategory(id);
              } }
            />
            { name }
          </label>
        </div>
      ))}
    </aside>
  );
}

export default Category;
