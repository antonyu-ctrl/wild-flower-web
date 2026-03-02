import { Size } from './product';

export interface CartItem {
  productId: string;
  variantId: string;
  colorSlug: string;
  size: Size;
  quantity: number;
  priceAtAdd: number;
}

export interface CartState {
  items: CartItem[];
  isDrawerOpen: boolean;
}
