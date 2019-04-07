export interface INewsDto {
  id: string;
  category_id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  is_favorite: boolean;
  read: boolean;
  source: string;
}
