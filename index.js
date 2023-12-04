let victores = 80;
let defeats = 15;
let level;

function rank() {

    let saldo = victores - defeats;
    return saldo;
}

rank(victores, defeats);

if (rank() <= 10) {
    level = "Ferro"
} else if (rank() >= 11 && rank() <= 20) {
    level = "Bronze"
} else if (rank() >= 21 && rank() <= 50) {
    level = "Prata"
} else if (rank() >= 51 && rank() <= 80) {
    level = "Ouro"
} else if (rank() >= 81 && rank() <= 90) {
    level = "Diamante"
} else if (rank() >= 91 && rank() <= 100) {
    level = "Lendário"
} else if (rank() >= 101) {
    level = "Imortal"
}

console.log("O Herói tem saldo de " + rank(), "vitórias e está no nível de " + level)

