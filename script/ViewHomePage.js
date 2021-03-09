/* ----- View Home Page ---- */

class ViewHomePage {
  	constructor(container, modal) {
    	this.container = container;
      this.modalContainer = modal;

      this.container.classList.add("main");
      this.container.classList.remove("main_canvas");
      this.modalContainer.classList.add("my__modal");
      this.modalContainer.classList.remove("my__modal_canvas");
     
      this.audioClick = null;
      this.btnMusic = null;
   }

   render() {
      let nameTxt = document.createElement("h2");
      nameTxt.classList.add("nameGame");
      nameTxt.innerHTML = "zombie hunter";
      this.modalContainer.appendChild(nameTxt);

      let menuStart = document.createElement("p");
      menuStart.classList.add("menu");
      this.modalContainer.appendChild(menuStart);

      let btnStart = document.createElement("a");
      btnStart.setAttribute("href", "#start");
      btnStart.setAttribute("id", "start");
      btnStart.classList.add("btn_start", "btn_menu");
      btnStart.innerHTML = "Adventure Mode";
      menuStart.appendChild(btnStart);

      let menuSurvival = document.createElement("p");
      menuSurvival.classList.add("menu");
      this.modalContainer.appendChild(menuSurvival);

      let btnSurvival = document.createElement("a");
      btnSurvival.setAttribute("href", "#survival");
      btnSurvival.setAttribute("id", "survival");
      btnSurvival.classList.add("btn_survival", "btn_menu");
      btnSurvival.innerHTML = "Survival Mode";
      menuSurvival.appendChild(btnSurvival);

      let menuRecords = document.createElement("p");
      menuRecords.classList.add("menu");
      this.modalContainer.appendChild(menuRecords);

      let btnRecords = document.createElement("a");
      btnRecords.setAttribute("href", "#records");
      btnRecords.setAttribute("id", "records");
      btnRecords.classList.add("btn_records", "btn_menu");
      btnRecords.innerHTML = "Records";
      menuRecords.appendChild(btnRecords);

      this.audioClick = document.createElement("audio");
      this.audioClick.setAttribute("src", "audio/click1.mp3");

      this.btnMusic = document.createElement("div");
      this.btnMusic.classList.add("start_audio");
      this.btnMusic.setAttribute("id", "audioTheme");
      this.modalContainer.appendChild(this.btnMusic);
   }   

   playClick() {
      this.audioClick.play();
   }
}