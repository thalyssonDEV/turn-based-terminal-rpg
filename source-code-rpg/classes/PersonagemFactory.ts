import { Personagem } from './Personagem';
import { Mago } from '../sub_classes/Mago';
import { Guerreiro } from '../sub_classes/Guerreiro';
import { Arqueiro } from '../sub_classes/Arqueiro';
import { print } from '../utils/utils';

// Classe responsável por instanciar apenas as classes escolhidaas pelos jogadores, essa instância é feita na 'main()' com o método estático 'CriarPersonagem'
export class PersonagemFactory {
    static mostrarClasses(): void {
      print(`\nEscolha Uma Classe De Personagem`);
      print("1. Mago");
      print("2. Guerreiro");
      print("3. Arqueiro");
    }
    
    static criarPersonagem(classe: number, nome: string): Personagem {
      switch (classe) {
        case 1:
          return new Mago(nome);
        case 2:
          return new Guerreiro(nome);
        case 3:
          return new Arqueiro(nome);
        default:
          print('Classe Inválida! Usando Guerreiro Como Padrão.');
          return new Guerreiro(nome);
      }
    }
}