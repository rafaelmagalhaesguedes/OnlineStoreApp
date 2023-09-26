import { CategoryType } from '../../types';
import { Aside, CardCategory, Divider, Input, Label, Title } from './Styles';

type CategoryProps = {
  categories: CategoryType[],
  searchByCategory: (id: string) => void;
};

function Category({ categories, searchByCategory } : CategoryProps) {
  return (
    <Aside>
      <Title>Categorias</Title>
      <Divider />
      {categories.map(({ id, name }) => (
        <CardCategory key={ id }>
          <Label data-testid="category" htmlFor={ id }>
            <Input
              type="radio"
              id={ id }
              name={ name }
              onChange={ (e) => {
                e.preventDefault();
                searchByCategory(id);
              } }
            />
            {' '}
            { name }
          </Label>
        </CardCategory>
      ))}
    </Aside>
  );
}

export default Category;
