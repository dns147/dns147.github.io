/* ----- View List Records ---- */

class ViewListRecords {
    constructor(container, modal) {
        this.container = container;
        this.modalContainer = modal;
    
        this.audioClick = null;
        this.modalRecords = null;
        this.listDiv = null;
        this.listTable = null;
        this.loader = null;

        this.printRecords = this.printRecords.bind(this);
    }

    render() {
        let nameTxt = document.createElement("h2");
        nameTxt.classList.add("nameGame");
        nameTxt.innerHTML = "zombie hunter";
        this.modalContainer.appendChild(nameTxt);

        this.audioClick = document.createElement("audio");
        this.audioClick.setAttribute("src", "audio/click1.mp3");

        this.modalRecords = document.createElement("div");
        this.modalRecords.classList.add("choiceItemDiv", "modalRecords");
        this.modalRecords.setAttribute("id", "modRecords");
        this.modalContainer.appendChild(this.modalRecords);

        let recordsH2 = document.createElement("h2");
        recordsH2.classList.add("nameChoicePerson", "recordsH2");
        recordsH2.innerHTML = "Records List";
        this.modalRecords.appendChild(recordsH2);

        this.listDiv = document.createElement("div");
        this.listDiv.classList.add("list");
        this.modalRecords.appendChild(this.listDiv);

        //--- Loader ...
        this.loader = document.createElement("div");
        this.loader.classList.add("loader");
        this.listDiv.appendChild(this.loader);

        let loaderTxt = ["L", "o", "a", "d", "i", "n", "g", ".", ".", "."]
        let spanLoader = [];
        for (let i = 0; i < loaderTxt.length; i++) {
            let spani = document.createElement("span");
            spani.append(i);
            spani.setAttribute("style", `--i:${i+1}`);
            spani.innerHTML = loaderTxt[i];
            spanLoader.push(spani);
        }
        this.loader.append(...spanLoader);     
        //... Loader ---

        this.listTable = document.createElement("table");
        this.listTable.classList.add("listTable");
        this.listDiv.appendChild(this.listTable);         

        let btnClose = document.createElement("a");
        btnClose.innerHTML = "Close";
        btnClose.classList.add("btn_play", "btn_close");
        btnClose.setAttribute("href", "#ZombieHunter");
        btnClose.setAttribute("id", "close");
        this.modalRecords.appendChild(btnClose);

        this.printRecords();
    }   

    playClick() {
        this.audioClick.play();
    }

    printRecords() {
        let that = this;

        let sortData = [];
        let arrDatas = [];

		let listSort = myAppDB.ref().orderByChild("score");

		listSort.limitToLast(15).on("value", function(snapshot) {
			snapshot.forEach(function(order) {
				sortData.push(order.val());
			});
			sortData.reverse();
		});
        
        setTimeout(getData, 3000);

        function getData() {
            that.loader.innerHTML = "";

            for (let i = 0; i < sortData.length; i++) {
                let arrData = [];

                arrData.push(i + 1);
                arrData.push(sortData[i].name);
                arrData.push(sortData[i].score);

                arrDatas.push(arrData);
            }
            
            for (let i = 0; i < sortData.length; i++) {
                makeCell(arrDatas[i]);
            }  
        }
        
        //---Построение ячеек таблицы---
        function makeCell(arg) {
            let tr = document.createElement("tr");
            that.listTable.append(tr); 
            let td = [];
            for (let i = 0; i < 3; i++) {
                let tdi = document.createElement("td");
                tdi.append(i);
                tdi.innerHTML = arg[i];
                td.push(tdi);
            }
            tr.append(...td); 
        }
    }
}