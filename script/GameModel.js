/* ----- Model ---- */

class GameModel {
  	constructor(view) {
		this.view = view;
		this.playMusic = this.playMusic.bind(this);
		this.checkValue = this.checkValue.bind(this);

		this.choicePlayer = null;
		this.player = null;
		this.weapon = null;
 	}

 	updateState() {
      	const hashPageName = window.location.hash.slice(1).toLowerCase();
      	this.view.renderContent(hashPageName);
   	}	

 	playClick() {
 		this.view.playClick();
 	}

 	playMusic(data, btnMusic) {
 		let that = this;

		if (data === "false") {
         	that.view.playMusic(btnMusic);
      	} else if (data === "true") {
         	that.view.pauseMusic(btnMusic);
      	}
 	}

	playAgain() {
		this.view.playAgain();
	}

	checkValue(value) {
		let that = this;
		
		if (value) {
			that.view.showButton();
		} else {
			that.view.hideButton();
		}
	}

	submitValue(valueName, valueScore) {
		myAppDB.ref(valueName).set({
			score: valueScore,
			name: valueName
		})
		.then(function (valueName) {
			console.log("Пользователь добавлен в коллецию Records");
		})
		.catch(function (error) {
			console.error("Ошибка добавления пользователя: ", error);
		});

		valueName = "";
	}

	itemMan() {
		this.player = "man";
		this.view.choicePlayer(this.player, this.weapon);
	}

	itemGirl() {
		this.player = "girl";
		this.view.choicePlayer(this.player, this.weapon);
	}

	itemGan() {
		this.weapon = "gan";
		this.view.choicePlayer(this.player, this.weapon);
	}

	itemRiffle() {
		this.weapon = "riffle";
		this.view.choicePlayer(this.player, this.weapon);
	}

	itemFirethrower() {
		this.weapon = "firethrower";
		this.view.choicePlayer(this.player, this.weapon);
	}

	play() {
		this.view.play();
	}
}