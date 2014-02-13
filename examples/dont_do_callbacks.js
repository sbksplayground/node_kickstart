var auth = new AuthService;

// don't do this
auth.login('user', 'password');
auth.on('login', function (user) {
	// do something with `user`
});

// instead do:
auth.login('user', 'password', function (err, user) {
	if (err) {
		// handle error
		return
	}
	// handle user
});
