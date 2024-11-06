import { Personagem } from "../classes/Personagem";

export class Arqueiro extends Personagem {
    constructor(nome: string) {
      super(nome, 1500, 250, 10)
    }
  
    get classeNome(): string {
      return "Arqueiro";
    }
} 