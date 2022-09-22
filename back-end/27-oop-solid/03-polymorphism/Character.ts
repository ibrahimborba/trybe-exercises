export default abstract class Character implements ICharacter {
  constructor(public name: string) { }
  abstract talk(): void;
  abstract specialMove(): void; 
}

export interface ICharacter {
  name: string;
  specialMove(): void;
}

export interface IDbCharacter extends Character {
  id: number;
}

export interface IModel {
  getAll(): void;
  getById(id: number): void;
  create(): void;
  update(): void;
  remove(): void;
}

export const db: IDbCharacter[] = [];