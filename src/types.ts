export interface CharacterType {
  id: string | number;
  name: string;
  species: string;
  status: 'Dead' | 'Alive' | 'unknown';
  image: string;
  location: {name: string}
  origin: {name: string}
}

export type CsvType = {
  id: string | number
  name: string,
  location: string,
  status: string,
  origin: string,
  image: string,
  species: string,
}

export type GetUsersType = {
  currentPage: number,
  name?: string,
  status?: string,
  species?: string,
  type?: string,
  gender?: string
}
