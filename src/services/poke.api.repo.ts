import { PokeStructure, ProtoPokeStructure } from '../models/pokemon';

export interface PokemonApiRepoStructure {
  loadPokemon(): Promise<PokeStructure[]>;
  getPokemon(id: PokeStructure['id']): Promise<PokeStructure>;
  createPokemon(task: ProtoPokeStructure): Promise<PokeStructure>;
  update(task: Partial<ProtoPokeStructure>): Promise<PokeStructure>;
  delete(id: PokeStructure['id']): Promise<void>;
}

export class PokemonApiRepo {
  url: string;
  constructor(public storeName: string = 'Pokemon') {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  }

  async loadPokemon(): Promise<PokeStructure[]> {
    const resp = await fetch(this.url);
    const data = await resp.json();
    console.log(data);
    const pokemonArray = Object.values(data);
    console.log(pokemonArray);
    const filteredArray: any[] = pokemonArray.slice(3);
    console.log(filteredArray);
    const promises = filteredArray[0].map(async (pokemon: any) => {
      let url = pokemon.url;
      const response = await fetch(url);
      return response.json();
    });
    const pokeData = await Promise.all(promises);
    console.log(pokeData);
    const pokeStructures: any[] = pokeData.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        // ... any other properties you want to extract from the API response
      };
    });
    console.log(pokeStructures);
    return pokeStructures;
  }

  async getPokemon(id: PokeStructure['id']): Promise<PokeStructure> {
    const url = this.url + '/' + id;
    const resp = await fetch(this.url);
    const data = (await resp.json()) as PokeStructure;
    return data;
  }

  async createPokemon(pokemon: ProtoPokeStructure): Promise<PokeStructure> {
    const resp = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as PokeStructure;
    return data;
  }

  async update(pokemon: Partial<PokeStructure>): Promise<PokeStructure> {
    const url = this.url + '/' + pokemon.id;
    const resp = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = (await resp.json()) as PokeStructure;
    return data;
  }

  async delete(id: PokeStructure['id']): Promise<void> {
    const url = this.url + '/' + id;
    const resp = await fetch(url, {
      method: 'DELETE',
    });
  }
}
