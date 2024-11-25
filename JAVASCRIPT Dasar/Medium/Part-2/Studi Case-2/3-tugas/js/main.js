// Studi Kasus 3: Data Tim Sepak Bola (Level 3 - Medium)
// Deskripsi: Buat objek yang merepresentasikan tim sepak bola, termasuk daftar pemain.

// Detail Objek:

// Properti:
// teamName: nama tim (string).
// coach: nama pelatih (string).
// players: array objek pemain (nested array of objects):
// Setiap pemain memiliki properti:
//   name: nama pemain (string).
//   position: posisi (string).
// Tugas:

// Buat objek tim sepak bola dengan setidaknya 3 pemain.
// Buat fungsi untuk menambahkan pemain baru ke dalam daftar.
// Buat fungsi untuk mencari pemain berdasarkan posisi.
// Function Name:

// addPlayer(team, player)
// findPlayersByPosition(team, position)

function createTeam(teamName, coach) {
  return {
    teamName: teamName,
    coach: coach,
    players: [],
  };
}

function createPlayer(name, position) {
  return {
    name: name,
    position: position,
  };
}

function addPlayer(team, player) {
  team.players.push(player);
}

function findPlayersByPosition(team, position) {
  return team.players.filter(player => player.position === position);
}

// Membuat tim sepak bola
const persija = createTeam('Persija', 'Sintayong');

// Membuat pemain
const player1 = createPlayer('Bambang', 'Striker');
const player2 = createPlayer('Pamungkas', 'Striker');
const player3 = createPlayer('Taufik', 'Forward');

// Menambahkan pemain ke dalam tim
addPlayer(persija, player1);
addPlayer(persija, player2);
addPlayer(persija, player3);

// Menampilkan tim sepak bola
console.log('Tim Sepak Bola:', persija);

// Mencari pemain berdasarkan posisi
const strikers = findPlayersByPosition(persija, 'Striker');
console.log('Pemain dengan posisi Striker:', strikers);