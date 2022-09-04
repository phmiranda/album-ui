import {Album} from "./album";

export interface Photo {
  id: number,
  nome: string,
  descricao: string,
  endereco: string,
  albumId: Album,
}
