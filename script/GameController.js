/* ----- Controller ---- */

class GameController {
   constructor(model, container, modal) {
      this.model = model;
      this.container = container;
      this.modalContainer = modal;
      this.valueName = null;
      this.valueScore = null;

      this.getEvents = this.getEvents.bind(this);
      this.updateState = this.updateState.bind(this);
      this.getValue = this.getValue.bind(this);

      //--- вешаем слушателей на событие hashchange и кликам по пунктам меню
      window.addEventListener("hashchange", this.updateState);

      this.updateState(); //--- первая отрисовка

      document.addEventListener("click", this.getEvents);
      document.addEventListener("input", this.getValue);

   }

   updateState() {
      let that = this;
      that.model.updateState();
   }

   getEvents(event) {
      let that = this;

      const elemStart = event.target.closest("#start");
      const elemSurvival = event.target.closest("#survival");
      const elemRecords = event.target.closest("#records");
      const elemClose = event.target.closest("#close");
      const elemMusic = event.target.closest("#audioTheme");
      const btnPlayAgain = event.target.closest("#play-again");
      const btnSubmit = event.target.closest("#submit");
      const itemMan = event.target.closest("#itemMan");  
      const itemGirl = event.target.closest("#itemGirl");
      const itemGan = event.target.closest("#itemGan");
      const itemRiffle = event.target.closest("#itemRiffle");
      const itemFirethrower = event.target.closest("#itemFirethrower");
      const play = event.target.closest("#play");
          
      if (elemStart || elemSurvival || elemRecords || elemClose) {
         that.model.playClick();
      }

      if (elemMusic) {
         that.model.playClick();

         let dataMusic = event.target.dataset.playing;
         that.model.playMusic(dataMusic);
      }

      if (elemRecords) {
         that.model.printListRecords();
      }

      if (elemClose) {
         that.model.closeListRecords();
      }

      if (btnPlayAgain) {
         that.model.playAgain();
      }

      if (btnSubmit) {
         that.valueScore = document.getElementById("score");
         that.model.submitValue(that.valueName.value, Number(that.valueScore.value));
         that.valueName.value = "";
         // that.model.playAgain();
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
   }

   getValue() {
      let that = this;

      this.valueName = document.getElementById("name-player");
      this.model.checkValue(that.valueName.value);
   }
}  