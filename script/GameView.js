/* ----- View ---- */

class GameView {
   constructor(container, routes, modal) {
      this.container = container;
      this.routesObj = routes;      
      this.modalContainer = modal;

      this.routeName = null;
      this.letsGame = null;
      
      this.renderContent = this.renderContent.bind(this);
      
      this.audioTheme = document.createElement("audio");
      this.audioTheme.setAttribute("src", "audio/mainTheme1.mp3");
      this.audioTheme.setAttribute("loop", "loop");
   }

   renderContent(hashPageName) {
      let that = this;

      this.routeName = "default";

      if (hashPageName.length > 0) {
         that.routeName = hashPageName in routes ? hashPageName : "error";
      }

      window.document.title = this.routeName;

      this.modalContainer.innerHTML = "";
      
      this.letsGame = new this.routesObj[this.routeName](this.container, this.modalContainer);

      this.letsGame.render(this.audioTheme);
   }

   playClick() {
      this.letsGame.playClick();
   }

   playMusic() {
      this.letsGame.playMusic(this.audioTheme);
   }

   pauseMusic() {
      this.letsGame.pauseMusic(this.audioTheme);
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

   printList(list) {
      this.letsGame.printRecords(list);
   }

   closeListRecords() {
      this.letsGame.closeListRecords();
   }
}