export class CharacterDto {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public age: number) {
  }
}

export interface ICharacterEntity {
  id?: string;
  firstName?: string;
  lastName?: string;
  birthDate?: string;
}
