//19. Level Naik dalam Permainan
//Buat fungsi levelUp(score) yang mengembalikan level permainan berdasarkan score dengan aturan: setiap 1000 poin akan meningkatkan level.

function levelUp(score) {
  return Math.floor(score / 1000);
}

console.log(levelUp(2000));