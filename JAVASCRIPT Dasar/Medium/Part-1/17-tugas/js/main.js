// 17. Simulasi Antrian
// Buat fungsi queueSimulation(queue, action) untuk simulasi antrian sederhana.

// Hint:
// Jika action adalah "masuk", tambahkan elemen ke akhir antrian.
// Jika action adalah "keluar", hapus elemen pertama antrian.
// Return antrian baru.

// console.log(queueSimulation(["A", "B"], { type: "masuk", value: "C" }));
// Output: ["A", "B", "C"]

// console.log(queueSimulation(["A", "B"], { type: "keluar" }));
// Output: ["B"]

//cara pertama
function queueSimulation1(queue, action) {
  if (action.type === 'masuk') {
    queue.push(action.value);
  } else if (action.type === 'keluar') {
    queue.shift();
  }
  return queue;
}

console.log(queueSimulation1(["A", "B"], { type: "masuk", value: "C" }));
console.log(queueSimulation1(["A", "B"], { type: "keluar" }));

//cara kedua
function queueSimulation2(queue, action) {
  if (!Array.isArray(queue)) {
    throw new Error('Queue harus berupa array');
  }
  if (action.type === 'masuk') {
    if (!action.value) {
      throw new Error('Value harus disertakan untuk action "masuk" ');
    }
    queue.push(action.value);
  } else if (action.type === 'keluar') {
    if (queue.length === 0) {
      throw new Error('Antrian kosong, tidak bisa menghapus element');
    }
    queue.shift();
  } else {
    throw new Error('Action tidak valid');
  }
  return queue;
}

console.log(queueSimulation2(["A", "B"], { type: "masuk", value: "C" })); 
console.log(queueSimulation2(["A", "B"], { type: "keluar" })); 


//cara ketiga
function queueSimulation3(queue, action) {
  if (action.type === 'masuk') {
    return [...queue, action.value];
  } else if (action.type === 'keluar') {
    return queue.slice(1);
  }
  throw new Error('Action tidak valid')
}

console.log(queueSimulation3(["A", "B"], { type: "masuk", value: "C" })); 
console.log(queueSimulation3(["A", "B"], { type: "keluar" })); 