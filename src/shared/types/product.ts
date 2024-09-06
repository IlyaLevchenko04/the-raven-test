export type Item = {
  _id: string;
  price: number;
  title: string;
  description: string;
  mainPhoto: string;
  photos: string[];
  currency: string;
  categoryId: string;
  createDate: Date;
};
