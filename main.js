getRedirectResult(auth)
	.then((result) => {
		if (result == null) {
			signInWithRedirect(auth, provider);	
		} else {
			const user = result.user;
			console.log(user.email);
			getUserID(user.email).then( user_id => {

				activateUser(user_id).then( response => {

					var h3 = document.getElementById("kissflow-response");
					h3.innerHTML = JSON.stringify(response);
					window.location.replace("https://pucp.kissflow.com/view/home")

				});
			});			
		}
	})