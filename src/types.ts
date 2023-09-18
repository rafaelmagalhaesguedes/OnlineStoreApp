export type ProductType = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
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
