// Tugas: Gunakan callback untuk menangani data bertingkat.

function fetchUser(callback) {
	setTimeout(() => {
		callback({ id: 1, name: 'Alice' });
	}, 500);
}

function fetchPosts(userId, callback) {
	setTimeout(() => {
		callback([
			{ userId, post: 'post 1' },
			{ userId, post: 'post 2' },
		]);
	}, 500);
}

fetchUser((user) => {
	console.log('user fetched:', user);
	fetchPosts(user.id, (posts) => {
		console.log('posts fetched: ', posts);
	});
});
