/* ----- View Home Page ---- */

class ViewHomePage {
  	constructor(container, modal) {
    	this.container = container;
      this.modalContainer = modal;

      this.container.classList.add("main");
      this.container.classList.remove("main_canvas");
      this.modalContainer.classList.add("my__modal");
      this.modalContainer.classList.remove("my__modal_canvas");
     
      this.audioClickMenu = null;
      this.audioClick = null;
      this.btnMusic = null;

      this.menuSurvival = null;
      this.menuAdventure = null;
      this.menuRecords = null;
   }

   render() {
      let nameTxt = document.createElement("h2");
      nameTxt.classList.add("nameGame");
      nameTxt.innerHTML = "zombie hunter";
      this.modalContainer.appendChild(nameTxt);

      this.menuSurvival = document.createElement("p");
      this.menuSurvival.classList.add("menu", "menuSurvival");
      this.menuSurvival.setAttribute("style", "--m:1");
      this.modalContainer.appendChild(this.menuSurvival);

      let btnSurvival = document.createElement("a");
      btnSurvival.setAttribute("href", "#survival");
      btnSurvival.setAttribute("id", "survival");
      btnSurvival.classList.add("btn_survival", "btn_menu");
      btnSurvival.innerHTML = "Survival";
      this.menuSurvival.appendChild(btnSurvival);

      this.menuAdventure = document.createElement("p");
      this.menuAdventure.classList.add("menu", "menuAdventure");
      this.menuAdventure.setAttribute("style", "--m:2");
      this.modalContainer.appendChild(this.menuAdventure);

      let btnAdventure = document.createElement("a");
      btnAdventure.setAttribute("href", "#start");
      btnAdventure.setAttribute("id", "start");
      btnAdventure.classList.add("btn_start", "btn_menu");
      btnAdventure.innerHTML = "Adventure";
      this.menuAdventure.appendChild(btnAdventure);

      this.menuRecords = document.createElement("p");
      this.menuRecords.classList.add("menu", "menuRecords");
      this.menuRecords.setAttribute("style", "--m:3");
      this.modalContainer.appendChild(this.menuRecords);

      let btnRecords = document.createElement("a");
      btnRecords.setAttribute("href", "#records");
      btnRecords.setAttribute("id", "records");
      btnRecords.classList.add("btn_records", "btn_menu");
      btnRecords.innerHTML = "Records";
      this.menuRecords.appendChild(btnRecords);

      this.audioClickMenu = document.createElement("audio");
      this.audioClickMenu.setAttribute("src", "audio/mouseover.mp3");
      
      this.audioClick = document.createElement("audio");
      this.audioClick.setAttribute("src", "audio/click1.mp3");

      this.btnMusic = document.createElement("div");
      this.btnMusic.classList.add("start_audio");
      this.btnMusic.setAttribute("id", "audioTheme");
      this.modalContainer.appendChild(this.btnMusic);
   }

   playClickMenu() {
      this.audioClickMenu.play();
   }

   playClick() {
      this.audioClick.play();
   }

   showMenu() {
      this.menuSurvival.style.visibility = "visible";
      this.menuSurvival.classList.add("menu_move");
      
      this.menuAdventure.style.visibility = "visible";
      this.menuAdventure.classList.add("menu_move");

      this.menuRecords.style.visibility = "visible";
      this.menuRecords.classList.add("menu_move");
   }
}