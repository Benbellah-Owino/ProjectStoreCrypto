export interface Item {
  [key: string]: string | number;
  id: number;
  item_name: string;
  category: string;
  price: number;
  color: string;
  size: string | number;
  number_in_stock: number | string;
}

export interface CartItemType extends Omit<Item, "number_in_stock"> {
  quantity: number;
  total_price: number;
}
