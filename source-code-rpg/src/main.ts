import { Mago } from '../sub_classes/Mago'
import { cores } from '../colors/cores'
import { PersonagemFactory } from '../classes/PersonagemFactory';
import { print, clear, input, awaitInput, awaitInputMessage, printSlow} from '../utils/utils';

// Função temporária que visa mostrar as informações dos atributos dos jogadores
function mostrarEstatisticas(jogador1, jogador2) {
    print(`${cores.vermelhoBrilhanteNegrito}================ FIGHT ================${cores.reset}\n`);

    print(` ||${cores.amareloBrilhanteNegrito}${jogador1.nome}: ${cores.verdeBrilhanteNegrito}${jogador1.classeNome}${cores.reset}\n ||`);
    print(` ||${cores.vermelhoBrilhanteNegrito}ATAQUE:${cores.reset} ${jogador1.ataque}`);
    print(` ||${cores.verdeBrilhanteNegrito}VIDA:${cores.reset} ${jogador1.vida.toFixed(1)}`);
    print(` ||${cores.cianoBrilhanteNegrito}DEFESA:${cores.reset} ${jogador1.defesa}\n\n`);

    print(` ||${cores.amareloBrilhanteNegrito}${jogador2.nome}: ${cores.verdeBrilhanteNegrito}${jogador2.classeNome}${cores.reset}\n ||`);
    print(` ||${cores.vermelhoBrilhanteNegrito}ATAQUE:${cores.reset} ${jogador2.ataque}`);
    print(` ||${cores.verdeBrilhanteNegrito}VIDA:${cores.reset} ${jogador2.vida.toFixed(1)}`);
    print(` ||${cores.cianoBrilhanteNegrito}DEFESA:${cores.reset} ${jogador2.defesa}`);
    print("\n");
}

function main() {
  clear();

  const nomeJogador1 = input("Nickname Jogador 1: ");
  PersonagemFactory.mostrarClasses();

  const classeJogador1 = Number(input(`Escolha a Classe Para ${nomeJogador1}: `));
  const jogador1 = PersonagemFactory.criarPersonagem(classeJogador1, nomeJogador1);

  clear();
  
  const nomeJogador2 = input("Nickname Jogador 2: ");
  PersonagemFactory.mostrarClasses();

  const classeJogador2 = Number(input(`Escolha a Classe Para ${nomeJogador2}: `));
  const jogador2 = PersonagemFactory.criarPersonagem(classeJogador2, nomeJogador2);

  clear();

  print(`${cores.azulBrilhante}============== RPG-GAME ===============${cores.reset}\n`);

  print(`Jogador 1: ${cores.amareloBrilhanteNegrito}${jogador1.nome}${cores.reset} 
    Escolheu a Classe ${cores.verdeBrilhanteNegrito}${jogador1.classeNome}${cores.reset}`);

  print(`Jogador 2: ${cores.amareloBrilhanteNegrito}${jogador2.nome}${cores.reset} 
    Escolheu a Classe ${cores.verdeBrilhanteNegrito}${jogador2.classeNome}${cores.reset}`);

  awaitInput();

  while (jogador1.estaVivo() && jogador2.estaVivo()) {
    mostrarEstatisticas(jogador1, jogador2);
    if (jogador1 instanceof Mago) {
      jogador1.fireball(jogador2);
    }
    awaitInputMessage("Pressione ENTER para Finalizar o Turno...");
    clear();

    if (jogador2.estaVivo()) {
      mostrarEstatisticas(jogador1, jogador2);
      jogador2.atacar(jogador1);
      awaitInputMessage("Pressione ENTER para Finalizar o Turno...");
      clear();
    }
  }
}

main();