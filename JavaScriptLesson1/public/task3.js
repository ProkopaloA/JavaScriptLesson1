/**
 * 
 */
let login;
let password;

login = "Admin";
password = "TheMaster";

switch (login) {
	case "Admin": {
		switch (password) {
			case "TheMaster": {
				console.log("Welcome");
				break;
			}
			case "Other": {
				console.log("Wrong password");
				break;
			}
			default: {
				console.log("Canceled");
				break;
			}
		}
		break;
	}
	case "Other": {
		console.log("I don't know you");
		break;
	}
	default: {
		console.log("Canceled");
		break;
	}
}