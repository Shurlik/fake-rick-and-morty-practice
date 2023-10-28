export interface CharacterType {
  id: string | number;
  name: string;
  species: string;
  status: 'Dead' | 'Alive' | 'unknown';
  image: string;
  location: {name: string}
  origin: {name: string}
}
