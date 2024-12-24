export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
  tags: string[];
  description: string;
  reviews: Review[];
  features: Feature[];
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Feature {
  name: string;
  description: string;
  icon: string;
}