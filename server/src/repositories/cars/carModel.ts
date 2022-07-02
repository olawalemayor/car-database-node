export interface Engine {
  [key: string]: { [key: string]: string };
}

export interface Car {
  _id?: string;
  brand: string;
  model: string;
  url: string;
  engines: Engine[];
  description: string;
  images_links: string[];
  brochures: string[];
}

export default Car;
