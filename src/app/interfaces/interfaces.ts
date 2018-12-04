export interface Item {
  id: string;
  imageFileName: string;
  name: string;
  price: number;
  description: string;
  isBestSeller: boolean;
}

export interface Modal {
  isOpened: boolean;
  type: string;
  data: Object;
  callback: Function;
}
