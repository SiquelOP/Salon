import type { Car } from "../types/car";

export type Props = {
  id: number;
  title: string;
  description: string;
  featuredCars: Car[];
  stats?: { luksus: number; moc: number; ekonomia: number };
  categoryImage?: string;
  path?: string;
  adj?: string;
  reverse?: boolean;
};