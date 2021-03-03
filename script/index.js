//--- маршруты ---//
const routes = {
   main: ViewHomePage,
   start: ViewMap1,
   survival: ViewSurvivalMode,
   records: ViewHomePage,
   default: ViewHomePage,
   error: ViewHomePage,
   // exit: ViewHomePage
};

const mySPA = {
   init: function({container, modal, routes}) {
      const myContainer = document.getElementById(container);
      const myModalContainer = document.getElementById(modal);

      //--- связываем части
      const view = new GameView(myContainer, routes, myModalContainer);
      const model = new GameModel(view);
      const controller = new GameController(model, myContainer, myModalContainer);
   }
};

//--- spa init ---//
document.addEventListener("DOMContentLoaded", mySPA.init({
   container: "spa",
   modal: "modal",
   routes: routes
}));