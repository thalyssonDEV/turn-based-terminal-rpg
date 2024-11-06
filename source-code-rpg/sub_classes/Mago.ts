import { randomInt } from '../utils/utils'
import { Personagem } from '../classes/Personagem';

export class Mago extends Personagem {
  // Atributos
  private danoFireball: number;

  // Inicializa o constrtutor da super classe 'Personagem' e posteriomente inicializa os atributos da própria classe
  constructor(nome: string) {
    super(nome, 1000, 350, 5)
    this.danoFireball = 500;
  }

  // Métodos - Habilidades

  // Fireball
  public fireball(alvo: Personagem): void {
    let potencia = randomInt(1,100);
    let danoRealFireball = this.calcularPorcentagemDano(potencia, this.danoFireball);
    let danoFireballComDefesa = danoRealFireball - (danoRealFireball * (alvo.defesa / 100));

    alvo.receberDano(danoFireballComDefesa);
    console.log(`${this.nome} lançou Fireball em ${alvo.nome} causando ${danoFireballComDefesa} de dano.`);
  }

  // Getters e Setters
  get classeNome(): string {
    return "Mago";
  }
}