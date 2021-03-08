/* ----- View List Records ---- */

class ViewListRecords {
    constructor(container, modal) {
        this.container = container;
        this.modalContainer = modal;

        // this.container.classList.add("main");
        // this.container.classList.remove("main_canvas");
        // this.modalContainer.classList.add("my__modal");
        // this.modalContainer.classList.remove("my__modal_canvas");
    
        this.audioClick = null;
        this.modalRecords = null;
        this.listDiv = null;
        this.listRecordsUl = null;
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

        this.listRecordsUl = document.createElement("ol");
        this.listDiv.appendChild(this.listRecordsUl);         

        let btnClose = document.createElement("a");
        btnClose.innerHTML = "Close";
        btnClose.classList.add("btn_play", "btn_close");
        btnClose.setAttribute("href", "#main");
        btnClose.setAttribute("id", "close");
        this.modalRecords.appendChild(btnClose);

        this.printRecords();
    }   

    playClick() {
        this.audioClick.play();
    }

    printRecords() {
        let sortData = [];
		let listSort = myAppDB.ref().orderByChild("score");

		listSort.limitToLast(15).on("value", function(snapshot) {
			snapshot.forEach(function(order) {
				sortData.push(order.val());
			});
			sortData.reverse();
		});

        console.log(sortData);

        let li = [];

        for (let i = 0; i < sortData.length; i++) {
            let lii = document.createElement("li");
            lii.append(i);
            lii.innerHTML = `${sortData[i].name}..............${sortData[i].score}`;
            li.push(lii);
        }
        this.listRecordsUl.append(...li);
    }
}