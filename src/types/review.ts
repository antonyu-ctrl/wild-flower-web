export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  verified: boolean;
}
