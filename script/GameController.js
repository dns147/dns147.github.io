/* ----- Controller ---- */

class GameController {
   constructor(model, container, modal) {
      this.model = model;
      this.container = container;
      this.modalContainer = modal;
      this.valueName = null;
      this.valueScore = null;

      this.getEventsMenu = this.getEventsMenu.bind(this);
      this.getEvents = this.getEvents.bind(this);
      this.updateState = this.updateState.bind(this);
      this.getValue = this.getValue.bind(this);

      window.addEventListener("hashchange", this.updateState);

      this.updateState(); //--- первая отрисовка ---
      
      document.addEventListener("mouseover", this.getEventsMenu);
      document.addEventListener("click", this.getEvents);
      document.addEventListener("input", this.getValue);
   }

   updateState() {
      let that = this;
      that.model.updateState();
   }

   getEventsMenu(event) {
      let that = this;

      const elemStartAdventure = event.target.closest("#start");
      const elemSurvival = event.target.closest("#survival");
      const elemRecords = event.target.closest("#records");

      if (elemStartAdventure || elemSurvival || elemRecords) {
         that.model.playClickMenu();
      }
   }

   getEvents(event) {
      let that = this;

      const mainContainer = event.target.closest("#spa");
      const elemStartAdventure = event.target.closest("#start");
      const elemSurvival = event.target.closest("#survival");
      const elemRecords = event.target.closest("#records");
      const elemClose = event.target.closest("#close");
      const elemMusic = event.target.closest("#audioTheme");
      const btnPlayAgain = event.target.closest("#play-again");
      const btnSubmit = event.target.closest("#submit");
      const btnExit = event.target.closest("#btnExit");
      const itemMan = event.target.closest("#itemMan");  
      const itemGirl = event.target.closest("#itemGirl");
      const itemGan = event.target.closest("#itemGan");
      const itemRiffle = event.target.closest("#itemRiffle");
      const itemFirethrower = event.target.closest("#itemFirethrower");
      const play = event.target.closest("#play");

      const btnMusic = document.getElementById("audioTheme");
      const modalRecords = document.getElementById("modRecords");
      const inpForm = document.getElementById("input-form");
      const gameOverDiv = document.getElementById("gameOverDiv");
          
      if (elemStartAdventure || elemSurvival || elemRecords || elemClose) {
         that.model.playClick();
      }

      if (elemMusic) {
         that.model.playClick();
         that.model.showMenu();
      }

      if (mainContainer && !elemRecords && !modalRecords && !inpForm && !gameOverDiv) {
         let dataMusic = that.container.dataset.playing;
         that.model.playMusic(dataMusic, btnMusic);
      }

      if (btnPlayAgain) {
         that.model.playAgain();
      }

      if (btnSubmit) {
         that.valueScore = document.getElementById("score");
         that.model.submitValue(that.valueName.value, Number(that.valueScore.value));
         that.valueName.value = "";
      }

      if (itemMan) {
         that.model.itemMan();
      }

      if (itemGirl) {
         that.model.itemGirl();
      }

      if (itemGan) {
         that.model.itemGan();
      }

      if (itemRiffle) {
         that.model.itemRiffle();
      }

      if (itemFirethrower) {
         that.model.itemFirethrower();
      }

      if (play) {
         that.model.play();
      }

      if (btnExit) {
         that.model.btnExit();
      }
   }

   getValue() {
      let that = this;

      this.valueName = document.getElementById("name-player");
      this.model.checkValue(that.valueName.value);
   }
}  