export interface iContainer {
  id: number;
  title: string;
  description: string;
  access: string[] | string;
  assets: string[] | string;
  html: string;
  javascript: string;
  is_private: number;
  typescript: number;
  parent: number;
  slug: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  forkedFrom: string;
}
