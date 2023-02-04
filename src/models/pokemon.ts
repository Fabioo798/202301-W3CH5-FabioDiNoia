type HasId = {
  id: number;
}

export type ProtoPokeStructure = {
  name: string;
  favorite: boolean;
};

export type PokeStructure = HasId & ProtoPokeStructure;

export class Pokemon implements PokeStructure {
  constructor(
    public id: number,
    public name: string,
    public favorite: boolean
  ) {
    this.id = id;
    this.name = name;
    this.favorite = false;
  }
}
