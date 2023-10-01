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

export type InitialStateSearch = {
  dataSearch: ProductType[] | null,
  loadingSearch: boolean,
  errorMessage: boolean,
};

export type InitialStateCategory = {
  dataCategory: CategoryType[] | null,
  loadingCategory: boolean,
};

export type InitialStateSearchCategory = {
  dataCategoryById: ProductType[] | null,
  loadingCategoryId: boolean,
  errorCategory: boolean,
};

export type GlobalStateType = {
  searchReducer: InitialStateSearch;
  searchCategory: InitialStateCategory;
  searchCategoryById: InitialStateSearchCategory;
};

export type Dispatch = ThunkDispatch<GlobalStateType, null, AnyAction>;
