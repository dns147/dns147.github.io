/* ----- View Home Page ---- */

class ViewHomePage {
  	constructor(container, modal) {
    	this.container = container;
      this.modalContainer = modal;

      this.container.classList.add("main");
      this.container.classList.remove("main_canvas");
      this.modalContainer.classList.remove("my__modal_canvas");
      this.modalContainer.classList.remove("my__modal_gameOver");
      
      this.modalContainer.classList.add("my__modal");
      this.modalContainer.style.margin = 0;
     
      this.audioClick = null;
      this.btnMusic = null;
      this.modalRecords = null;
      this.listDiv = null;
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
      btnStart.innerHTML = "Start Game";
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
      this.btnMusic.setAttribute("data-playing", "false");
      this.modalContainer.appendChild(this.btnMusic);

      this.modalRecords = document.createElement("div");
      this.modalRecords.classList.add("choiceItemDiv", "modalRecords");
      this.modalContainer.appendChild(this.modalRecords);

      let recordsH2 = document.createElement("h2");
      recordsH2.classList.add("nameChoicePerson", "recordsH2");
      recordsH2.innerHTML = "Records List";
      this.modalRecords.appendChild(recordsH2);

      this.listDiv = document.createElement("div");
      this.listDiv.classList.add("list");
      this.modalRecords.appendChild(this.listDiv);

      let btnClose = document.createElement("button");
      btnClose.innerHTML = "Close";
      btnClose.classList.add("btn_play", "btn_close");
      btnClose.setAttribute("id", "close");
      this.modalRecords.appendChild(btnClose);
   }   

   playClick() {
      this.audioClick.play();
   }

   playMusic(aud) {
      aud.play();
      this.btnMusic.dataset.playing = "true";
      this.btnMusic.classList.add("stop_audio");
   }

   pauseMusic(aud) {
      aud.pause();
      this.btnMusic.dataset.playing = "false";
      this.btnMusic.classList.remove("stop_audio");
   }

   printRecords(list) {
      this.modalRecords.style.display = "block";

      let ul = document.createElement("ol");
      this.listDiv.appendChild(ul); 

      let li = [];

      for (let i = 0; i < list.length; i++) {
          let lii = document.createElement("li");
          lii.append(i);
          lii.innerHTML = `${list[i].name}..............${list[i].score}`;
          li.push(lii);
      }
      ul.append(...li);
   }

   closeListRecords() {
      this.modalRecords.style.display = "none";
      this.listDiv.innerHTML = "";
   }
}