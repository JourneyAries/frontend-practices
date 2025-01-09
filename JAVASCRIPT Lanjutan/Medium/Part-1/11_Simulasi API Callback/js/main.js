// Tugas: Simulasikan pemanggilan API dengan callback untuk sukses dan error.

function apiCall(successCallBack, errorCallBack) {
	setTimeout(() => {
		const success = Math.random() > 0.5;
		if (success) {
			successCallBack({ data: 'success!!' });
		} else {
			errorCallBack('Failed to Fetch Data');
		}
	}, 1000);
}

apiCall(console.log, console.log);
