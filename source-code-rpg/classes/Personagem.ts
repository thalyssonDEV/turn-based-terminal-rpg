import { print, randomInt } from '../utils/utils';
import { cores } from '../colors/cores';

export class Personagem {
    // Atributos
    protected _nome: string;
    protected _vida: number;
    protected _ataque: number;
    protected _defesa: number;
  
    // Construtor
    constructor(nome: string, vida: number, ataque: number, defesa: number) {
      this._nome = nome;
      this._vida = vida;
      this._ataque = ataque;
      this._defesa = defesa;
    }
  
    // Método que simula um dado d100 de rpg e retorna a força do ataque com base no resultado da variável 'potência' 
    protected calcularPorcentagemDano(potencia: number, dano: number): number{
      if (potencia <= 20) {
        return dano * 0.7;
      } else if (potencia <= 80) {
        return dano;
      } else {
        return dano * 1.7;
      }
    }

    // Método chamado dentro do método 'atacar', responsável por decrementar a vida do alvo atacado
    public receberDano(dano: number): void {
        this._vida -= dano;
    }
  
    // Similar ao método 'calcularPorcentagemDano', porém retorna uma mensagem com base na potência do ataque
    public retornarPotenciaAtaque(potencia: number): string {
      if (potencia <= 20) {
        return `${cores.vermelhoNegrito}FRACO${cores.reset}`;
      } else if (potencia <= 80) {
        return `${cores.azulNegrito}NORMAL${cores.reset}`;
      } else {
        return `${cores.amareloNegrito}CRÍTICO${cores.reset}`;
      }
    }

    // Método responsável por executar a lógica e cálculo do dano do ataque básico de todas as classes
    public atacar(alvo: Personagem): void {
      let dano = this.ataque
      let potencia = randomInt(1,100);
      
      let danoReal = this.calcularPorcentagemDano(potencia, dano);
      let danoComDefesa = danoReal - (danoReal * (alvo.defesa / 100));
      print(`${this.nome} Usou um Ataque De Dano ${this.retornarPotenciaAtaque(potencia)} à ${alvo.nome} e Causou ${danoComDefesa.toFixed(2)} de Dano.`);
  
      alvo.receberDano(danoComDefesa);
    }

    // Método alternativo para chamar o método 'atacar' fora da classe
    public ataqueBasico(alvo: Personagem): void {
      this.atacar(alvo);
    }
  
    // Método que verifica se o jogador está vivo
    public estaVivo(): boolean {
      return this.vida > 0;
    }
  
    // Getters e setters
    get nome(): string {
      return this._nome;
    }
  
    get vida(): number {
      return this._vida;
    }
  
    get ataque(): number {
      return this._ataque;    
    }
  
    get defesa(): number {
      return this._defesa;
    }
  
    get classeNome(): string {
      return "ClasseNome";
    }
}