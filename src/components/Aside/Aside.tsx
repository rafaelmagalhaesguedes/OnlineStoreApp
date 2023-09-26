import { CategoryType } from '../../types';
import { AsideCategory, CardCategory, Divider, Input, Label, Title } from './Styles';

type CategoryProps = {
  categories: CategoryType[],
  searchByCategory: (id: string) => void;
};

function Aside({ categories, searchByCategory } : CategoryProps) {
  return (
    <AsideCategory>
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
    </AsideCategory>
  );
}

export default Aside;
