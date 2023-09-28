import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type ProductType = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  available_quantity: number,
  quantity: number,
  attributes: AttributeType[];
};

export type AttributeType = {
  name: string;
  value_name: string;
};

export type CategoryType = {
  id: string,
  name: string,
};

export type RootState = {
  // Defina o formato do estado global aqui
  app: {
    searchQuery: string;
    // Outros campos do estado app, se houver
  };
  // Outros estados globais, se houver
};

export interface AppState {
  searchQuery: string;
  searchResults: ProductType[];
}

//
//
//
/*
  Tipando apenas os campos que são usados
*/

export type SearchState = {
  isLoading: boolean;
  search: ProductType | null;
  error: string | null;
};

export type Dispatch = ThunkDispatch<SearchState, null, AnyAction>;
