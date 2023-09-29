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

export type InitialStateType = {
  isLoading: boolean,
  data: ProductType | null,
};

export type GlobalStateType = {
  searchReducer: InitialStateType,
};

export type Dispatch = ThunkDispatch<GlobalStateType, unknown, AnyAction>;
