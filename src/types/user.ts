import { ShippingAddress } from './order';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  addresses: ShippingAddress[];
  defaultAddressId?: string;
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
