import { CartItem } from './cart';

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type OrderStatus = 'confirmed' | 'processing' | 'shipped' | 'delivered';

export interface OrderTimelineEvent {
  status: OrderStatus;
  date: string;
  description: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  email: string;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  shippingMethod: ShippingMethod;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  status: OrderStatus;
  timeline: OrderTimelineEvent[];
  createdAt: string;
}
