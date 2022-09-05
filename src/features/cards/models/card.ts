export interface ProtoCard {
  name: string;
  image: string;
  position: string;
  nacionallity: string;
  team: string;
  overall: number;
  physicall: number;
  pace: number;
  passing: number;
  defense: number;
  shooting: number;
  dribbling: number;
  height: number;
  age: number;
  foot: string;
}

export interface Card extends ProtoCard {
  id: string;
  owner: {
    _id: string;
    userName: string;
  };
}
