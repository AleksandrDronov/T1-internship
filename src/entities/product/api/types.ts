export interface Recipe {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  cookTimeMinutes: number;
  rating: number;
}

export interface Products {
  recipes: Recipe[];
}
