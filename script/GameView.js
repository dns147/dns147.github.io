/* ----- View ---- */

class GameView {
   constructor(container, routes, modal) {
      this.container = container;
      this.routesObj = routes;      
      this.modalContainer = modal;

      this.routeName = null;
      this.letsGame = null;
      
      this.renderContent = this.renderContent.bind(this);

      this.container.setAttribute("data-playing", "false");
      
      this.audioTheme = document.createElement("audio");
      this.audioTheme.setAttribute("src", "audio/intro2.mp3");
      this.audioTheme.setAttribute("loop", "loop");
   }

   renderContent(hashPageName) {
      let that = this;

      this.routeName = "ZombieHunter";

      if (hashPageName.length > 0) {
         that.routeName = hashPageName in routes ? hashPageName : "error";
      }

      window.document.title = this.routeName;

      this.modalContainer.innerHTML = "";
      
      this.letsGame = new this.routesObj[this.routeName](this.container, this.modalContainer);

      this.letsGame.render(this.audioTheme);
   }

   playClickMenu() {
      this.letsGame.playClickMenu();
   }

   playClick() {
      this.letsGame.playClick();
   }

   showMenu() {
      this.letsGame.showMenu();
   }

   playMusic(btnMusic) {
      this.audioTheme.play();
      this.container.dataset.playing = "true";
      btnMusic.classList.add("stop_audio");
   }

   pauseMusic(btnMusic) {
      this.audioTheme.pause();
      this.container.dataset.playing = "false";
      btnMusic.classList.remove("stop_audio");
   }

   playAgain() {
      this.letsGame.reset();
   }

   showButton() {
      this.letsGame.showBtnSubmit();
   }

   hideButton() {
      this.letsGame.hideBtnSubmit();
   }

   choicePlayer(player, weapon) {
      this.letsGame.choicedPlayer(player, weapon);
   }

   play() {
      this.letsGame.play();
   }

   btnExit() {
      this.letsGame.btnExit();
   }
}