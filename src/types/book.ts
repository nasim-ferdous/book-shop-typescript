import { ObjectId } from 'mongodb';

export interface Book {
  _id?: ObjectId; // The ? means it's optional (DB generates it)
  title: string;
  author: string;
  price: number;
  stock: number;
}