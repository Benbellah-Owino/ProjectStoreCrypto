export interface Item {
  id: number;
  item_name: string;
  category: string;
  price: number;
  color: string;
  size: string | number;
  number_in_stock: number | string;
}
