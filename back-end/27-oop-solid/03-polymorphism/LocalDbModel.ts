import { IModel, IDbCharacter } from './Character';

export default class LocalDbModel implements IModel {
  constructor(private db: IDbCharacter[]) {}
  getAll(): void {
    this.db.forEach((data) => console.log(data));
  }

  getById(id: number): void {
    const dataById = this.db.find((data) => data.id === id);
    console.log(dataById);
  }

  create(): void {
    console.log('create');
  }

  update(): void {
    console.log('update');
  }

  remove(): void {
    console.log('remove');
  }
}