import { question } from 'readline-sync';
import { cores } from '../colors/cores';

export function print(...args: any[]): void {
    console.log(...args);
}

export function clear(): void {
    console.clear();
}

export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function awaitInput(): void {
    question(`\n${cores.cianoBrilhanteNegrito}Pressione ENTER para Continuar...${cores.reset}\n`);
    console.clear();
}

export function awaitInputMessage(message: string): void {
    question(`\n${cores.cianoBrilhanteNegrito}${message}${cores.reset}\n`);
    console.clear();
}

export function input(prompt: string): string {
    return question(prompt);
}

export function printSlow(text: any) {
    const delay = 15;
    let index = 0;

    function printChar() {
        if (index < text.lenght) {
            process.stdout.write(text[index]);
            index++;
            setTimeout(printChar, delay);
        } else {
            console.log();
        }
    }
    printChar();
}