// Tugas: Gunakan closure untuk menambahkan elemen ke array

function createArrayManager() {
	const items = [];

	function addItem(item) {
		items.push(item);
		console.log(`Added: ${item}`);
	}

	function getItems() {
		items;
	}

	return { addItem, getItems };
}

const manager = createArrayManager();
manager.addItem('apple');
manager.getItems();
