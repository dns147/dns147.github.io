/* ----- View Survival Mode ---- */

class ViewSurvivalMode {
   constructor(container, modal) {
      this.container = container;
      this.modalContainer = modal;

      this.html = document.documentElement;
   
      this.choiceItemDiv = null;
      this.nameChoicePerson = null;
      this.itemMan = null;
      this.itemGirl = null;
      this.itemPerson = null;
      this.nameChoiceWeapon = null;
      this.itemWeapon = null;
      this.itemGan = null;
      this.itemRiffle = null;
      this.itemFirethrower = null;
      
      this.canvas = null;
      this.ctx = null;
      this.scoreElem = null;
      this.btnPlayAgain = null;
      this.gameOverDiv = null;
      this.gameOverTxt = null;
      this.gameOverInput = null;
      this.btnSubmit = null;
      this.btnExit = null;
      this.audioTheme1 = null;
      this.audioTheme2 = null;
      this.audioGun = null;
      this.audioRiffle = null;
      this.audioZombDead = null;
      this.audioExplosion = null;
   
      this.playerManGun = {
         rotate: -Math.PI/2,
         pos: [0, 0],
         sprite: new Sprite("images/man_idle_gun.png", [0, 0], [74.5, 89], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, -Math.PI/2),
         width: 74.5,
         height: 89
      };

      this.playerManRiffle = {
         rotate: -Math.PI/2,
         pos: [0, 0],
         sprite: new Sprite("images/idle_riffle_man.png", [0, 0], [87.5, 127], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, -Math.PI/2),
         width: 87.5,
         height: 127
      };
   
      this.playerManFire = {
         rotate: -Math.PI/2,
         pos: [0, 0],
         sprite: new Sprite("images/idle_firethrower_man.png", [0, 0], [87.4, 115], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, -Math.PI/2),
         width: 87.4,
         height: 115
      };
   
      this.playerGirlGun = {
         rotate: -Math.PI/2,
         pos: [0, 0],
         sprite: new Sprite("images/girl_idle_gun.png", [0, 0], [67.5, 77], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, -Math.PI/2),
         width: 67.5,
         height: 77
      };
   
      this.playerGirlRiffle = {
         rotate: -Math.PI/2,
         pos: [0, 0],
         sprite: new Sprite("images/girl_idle_riffle.png", [0, 0], [71, 106], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, -Math.PI/2),
         width: 71,
         height: 106
      };
   
      this.playerGirlFire = {
         rotate: -Math.PI/2,
         pos: [0, 0],
         sprite: new Sprite("images/girl_idle_firethower.png", [0, 0], [70.7, 90], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, -Math.PI/2),
         width: 70.7,
         height: 90
      };

      this.plant1 = {
         pos: [0, 0],
         sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185]),
      };

      this.person = null; //--- пол игрока ---
      this.player = null; //--- вид игрока, зависит от выбранного оружия ---
      this.ball = null; //--- вид пули ---
      this.ballX = null; //--- смещение по Х относительно оружия --- 
      this.ballY = null; //--- смещение по Y относительно оружия ---
      this.intervalBullet = null; //--- интервал между выстрелами ---
      this.intervalMines = 800; //--- интервал между установкой мин ---
      this.numberKillZomby = null; //--- количество убитых врагов ---
      this.numberScore = null; //--- количество очков в зависимости от оружия ---
   
      this.bullets = [];
      this.mines = [];
      this.zombies1 = [];
      this.zombies2 = [];
      this.zombies3 = [];
      this.zombies4 = [];
      this.explosions = [];
      this.plants = [];

      this.lastTime = null; //--- время последнего обновления игры ---
      this.timerIdMain = null; //--- ID таймера ---
   
      this.lastFire = Date.now(); //--- время последнего выстрела ---
      this.lastMine = Date.now(); //--- время последней установленной мины ---
      this.gameTime = 0; //--- время игры ---
      this.isGameOver = null; //--- состояние игры ---
   
      this.score = 0; //--- количество очков ---
   
      //--- Скорость в пикселях в секунду ---
      this.playerSpeed = 300;
      this.bulletSpeed = null;
      this.zombySpeed = 50;
   
      this.main = this.main.bind(this);
      this.init = this.init.bind(this);
      this.update = this.update.bind(this);
      this.updateEntities = this.updateEntities.bind(this);
      this.checkCollisions = this.checkCollisions.bind(this);
      this.checkPlayerBounds = this.checkPlayerBounds.bind(this);
      this.renderGame = this.renderGame.bind(this);
      this.renderEntities = this.renderEntities.bind(this);
      this.renderEntity = this.renderEntity.bind(this);
      this.reset = this.reset.bind(this);
      this.choicedPlayer = this.choicedPlayer.bind(this);
   }
 
   render(audio) {
      audio.pause();
      audio.currentTime = 0;

      this.player = null; //--- Очистка выбора игрока ---

      this.container.classList.remove("main");
      this.container.classList.add("main_canvas");
      this.modalContainer.classList.add("my__modal_canvas");

      this.choiceItemDiv = document.createElement("div");
      this.choiceItemDiv.classList.add("choiceItemDiv");
      this.modalContainer.appendChild(this.choiceItemDiv);

      this.nameChoicePerson = document.createElement("h4");
      this.nameChoicePerson.classList.add("nameChoicePerson");
      this.nameChoicePerson.innerHTML = "Select a player";
      this.choiceItemDiv.appendChild(this.nameChoicePerson);

      this.itemPerson = document.createElement("div");
      this.itemPerson.classList.add("itemPerson");
      this.choiceItemDiv.appendChild(this.itemPerson);

      this.itemMan = document.createElement("div");
      this.itemMan.setAttribute("id", "itemMan");
      this.itemMan.classList.add("itemMan");
      this.itemPerson.appendChild(this.itemMan);

      this.itemGirl = document.createElement("div");
      this.itemGirl.setAttribute("id", "itemGirl");
      this.itemGirl.classList.add("itemGirl");
      this.itemPerson.appendChild(this.itemGirl);

      this.nameChoiceWeapon = document.createElement("h4");
      this.nameChoiceWeapon.classList.add("nameChoicePerson", "nameChoiceWeapon");
      this.nameChoiceWeapon.innerHTML = "Select a weapon";
      this.choiceItemDiv.appendChild(this.nameChoiceWeapon);

      this.itemWeapon = document.createElement("div");
      this.itemWeapon.classList.add("itemPerson");
      this.choiceItemDiv.appendChild(this.itemWeapon);

      this.itemGan = document.createElement("div");
      this.itemGan.setAttribute("id", "itemGan");
      this.itemGan.classList.add("itemGan");
      this.itemWeapon.appendChild(this.itemGan);

      this.itemRiffle = document.createElement("div");
      this.itemRiffle.setAttribute("id", "itemRiffle");
      this.itemRiffle.classList.add("itemRiffle");
      this.itemWeapon.appendChild(this.itemRiffle);

      this.itemFirethrower = document.createElement("div");
      this.itemFirethrower.setAttribute("id", "itemFirethrower");
      this.itemFirethrower.classList.add("itemFirethrower");
      this.itemWeapon.appendChild(this.itemFirethrower);

      this.btnPlay = document.createElement("button");
      this.btnPlay.innerHTML = "Play";
      this.btnPlay.classList.add("btn_play");
      this.btnPlay.setAttribute("id", "play");
      this.btnPlay.setAttribute("disabled", "1");
      this.choiceItemDiv.appendChild(this.btnPlay);

      this.scoreElem = document.createElement("input");
      this.scoreElem.classList.add("score");
      this.scoreElem.setAttribute("id", "score");
      this.modalContainer.appendChild(this.scoreElem);

      this.gameOverDiv = document.createElement("div");
      this.gameOverDiv.classList.add("gameOverDiv");
      this.modalContainer.appendChild(this.gameOverDiv);

      this.gameOverTxt = document.createElement("h2");
      this.gameOverTxt.classList.add("gameOverTxt");
      this.gameOverTxt.innerHTML = "game over";
      this.gameOverDiv.appendChild(this.gameOverTxt);

      this.form = document.createElement("div");
      this.form.setAttribute("id", "input-form");
      this.form.classList.add("form");
      this.gameOverDiv.appendChild(this.form);

      this.gameOverInput = document.createElement("input");
      this.gameOverInput.setAttribute("type", "text");
      this.gameOverInput.setAttribute("id", "name-player");
      this.gameOverInput.setAttribute("placeholder", "Enter your name");
      this.gameOverInput.classList.add("gameOverInput");
      this.form.appendChild(this.gameOverInput);

      this.btnSubmit = document.createElement("button");
      this.btnSubmit.innerHTML = "Submit";
      this.btnSubmit.classList.add("btn_submit");
      this.btnSubmit.setAttribute("id", "submit");
      this.form.appendChild(this.btnSubmit);

      this.btnPlayAgain = document.createElement("button");
      this.btnPlayAgain.classList.add("btn_submit", "btn_playAgain", "btn_playAgain_survave");
      this.btnPlayAgain.innerHTML = "Play Again";
      this.btnPlayAgain.setAttribute("id", "play-again");
      this.gameOverDiv.appendChild(this.btnPlayAgain);

      this.btnExit = document.createElement("a");
      this.btnExit.classList.add("btn_submit", "btn_exit", "btn_exit_survive");
      this.btnExit.innerHTML = "Exit";
      this.btnExit.setAttribute("href", "index.html");
      this.gameOverDiv.appendChild(this.btnExit);

      this.audioTheme1 = document.createElement("audio");
      this.audioTheme1.setAttribute("src", "audio/survival1.mp3");

      this.audioTheme2 = document.createElement("audio");
      this.audioTheme2.setAttribute("src", "audio/survival2.mp3");
      this.audioTheme2.setAttribute("loop", "loop");

      this.audioGun = document.createElement("audio");
      this.audioGun.setAttribute("src", "audio/gun1.mp3");

      this.audioRiffle = document.createElement("audio");
      this.audioRiffle.setAttribute("src", "audio/riffle1.mp3");

      this.audioFire = document.createElement("audio");
      this.audioFire.setAttribute("src", "audio/fire1.mp3");

      this.audioZombDead = document.createElement("audio");
      this.audioZombDead.setAttribute("src", "audio/zombie_dead2.mp3");

      this.audioExplosion = document.createElement("audio");
      this.audioExplosion.setAttribute("src", "audio/explosion2.mp3");

      this.clickChoice = document.createElement("audio");
      this.clickChoice.setAttribute("src", "audio/click_choice.mp3");

      this.clickMine = document.createElement("audio");
      this.clickMine.setAttribute("src", "audio/mine1.mp3");

      this.canvas = document.createElement("canvas");
      this.canvas.setAttribute("width", 1920);
      this.canvas.setAttribute("height", 1080);
      this.canvas.classList.add("my__canvas");
      this.modalContainer.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");

      this.html.requestFullscreen(); //--- Включение полноэкранного режима ---
   }

   //--- Главный цикл игры ---
   main() {
      let that = this;

      let now = Date.now();
      let dt = (now - that.lastTime) / 1000.0; //--- разница между текущим временем и временем последнего обновления ---

      this.update(dt);
      this.renderGame();

      that.lastTime = now;
      that.timerIdMain = requestAnimationFrame(that.main);
   }

   //--- Инициализация игры ---
   init() {
      let that = this;

      this.audioTheme1.addEventListener("ended", () => {
         that.audioTheme2.play();
      });
   
      that.reset();
      that.lastTime = Date.now();
      that.main();
   }

   //--- Обновление объектов игры ---
   update(dt) {
      let that = this;

      that.gameTime += dt;

      that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
   
      control.handleKeys(dt, that); //--- вызов обработчика клавиш из внешнего модуля ---
      that.updateEntities(dt); //--- вызов обновления анимации ---

      //--- Добавление зомби на карту ---
      if (Math.random() < 1 - Math.pow(0.9999, that.gameTime)) {
         that.zombies1.push(
            {
               pos: [that.canvas.width, Math.random() * (that.canvas.height - 100)],
               sprite: new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            }
         );

         that.zombies2.push(
            {
               pos: [0, Math.random() * (that.canvas.height - 100)],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            }
         );

         that.zombies3.push(
            {
               pos: [Math.random() * (that.canvas.width - 100), 0],
               sprite: new Sprite("images/zombie3_male_walk.png", [0, 0], [133.5, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );

         that.zombies4.push(
            {
               pos: [Math.random() * (that.canvas.width - 100), that.canvas.height],
               sprite: new Sprite("images/zombie4_male_walk.png", [0, 0], [134, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI)
            }
         );
      }

      that.checkCollisions(); //--- проверка на коллизии ---

      that.scoreElem.value = that.score;
   }

   //--- обновление анимации ---
   updateEntities(dt) {
      let that = this;

      //--- обновление анимации мин ---
      for (let i = 0; i < that.mines.length; i++) {
         that.mines[i].sprite.update(dt);
      }

      //--- обновление анимации игрока ---
      that.player.sprite.update(dt);

      //--- обновление анимации пули ---
      for (let i = 0; i < that.bullets.length; i++) {
         let bullet = that.bullets[i];

         switch (bullet.dir) {
            case "right": 
               bullet.pos[0] += that.bulletSpeed * dt; 
               break;
            case "left": 
               bullet.pos[0] -= that.bulletSpeed * dt; 
               break; 
            case "up": 
               bullet.pos[1] -= that.bulletSpeed * dt; 
               break;
            case "down": 
               bullet.pos[1] += that.bulletSpeed * dt; 
               break;
         }

         //--- удаление пули после вылета за экран ---
         if (bullet.pos[1] < 0 || bullet.pos[1] > that.canvas.height || bullet.pos[0] < 0 || bullet.pos[0] > that.canvas.width) {
            that.bullets.splice(i, 1);
            i--;
         }
      }

      //--- Обновление движения зомби по карте ---
      for (let i = 0; i < that.zombies1.length; i++) {
         let x0 = that.zombies1[i].pos[0];
         let y0 = that.zombies1[i].pos[1];

         let x1 = that.player.pos[0];
         let y1 = that.player.pos[1];

         let s = that.zombySpeed * dt;
         let d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));

         that.zombies1[i].pos[0] += (x1 - x0) * s / d;
         that.zombies1[i].pos[1] += (y1 - y0) * s / d;

         that.zombies1[i].sprite.update(dt);
   
         if (that.zombies1[i].pos[0] < -50) { 
            that.zombies1.splice(i, 1);
            i--;
         }
      }

      for (let i = 0; i < that.zombies2.length; i++) {
         let x0 = that.zombies2[i].pos[0];
         let y0 = that.zombies2[i].pos[1];

         let x1 = that.player.pos[0];
         let y1 = that.player.pos[1];

         let s = that.zombySpeed * dt;
         let d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));

         that.zombies2[i].pos[0] += (x1 - x0) * s / d;
         that.zombies2[i].pos[1] += (y1 - y0) * s / d;         

         that.zombies2[i].sprite.update(dt);         

         if (that.zombies2[i].pos[0] > that.canvas.width) { 
            that.zombies2.splice(i, 1);
            i--;
         }
      }

      for (let i = 0; i < that.zombies3.length; i++) {
         let x0 = that.zombies3[i].pos[0];
         let y0 = that.zombies3[i].pos[1];

         let x1 = that.player.pos[0];
         let y1 = that.player.pos[1];

         let s = that.zombySpeed * dt;
         let d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));

         that.zombies3[i].pos[0] += (x1 - x0) * s / d;
         that.zombies3[i].pos[1] += (y1 - y0) * s / d;   

         that.zombies3[i].sprite.update(dt);         

         if (that.zombies3[i].pos[1] > that.canvas.height) { 
            that.zombies3.splice(i, 1);
            i--;
         }
      }

      for (let i = 0; i < that.zombies4.length; i++) {
         let x0 = that.zombies4[i].pos[0];
         let y0 = that.zombies4[i].pos[1];

         let x1 = that.player.pos[0];
         let y1 = that.player.pos[1];

         let s = that.zombySpeed * dt;
         let d = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));

         that.zombies4[i].pos[0] += (x1 - x0) * s / d;
         that.zombies4[i].pos[1] += (y1 - y0) * s / d;   

         that.zombies4[i].sprite.update(dt);         

         if (that.zombies4[i].pos[1] < 0) { 
            that.zombies4.splice(i, 1);
            i--;
         }
      }
      //------------------------------------------------

      //--- обновление взрывов ---
      for (let i = 0; i < that.explosions.length; i++) {
         that.explosions[i].sprite.update(dt);

         //--- удаление взрывов, если анимация завершена ---
         if (that.explosions[i].sprite.done) {
            that.explosions.splice(i, 1);
            i--;
         }
      }
   }

   //--- Обработка коллизий ---
   // collides принимает координаты верхнего/левого и нижнего/правого 
   // углов обоих объектов и проверяет, есть ли какие-то пересечения ---
   collides(x, y, r, b, x2, y2, r2, b2) {
      return !(r <= x2 || x > r2 || b <= y2 || y > b2);
   }

   //--- boxCollides — это обертка для collides, принимающая массивы 
   // с положением и размером каждого элемента ---
   boxCollides(pos, size, pos2, size2) {
      return this.collides(pos[0], pos[1],
                           pos[0] + size[0], pos[1] + size[1],
                           pos2[0], pos2[1],
                           pos2[0] + size2[0], pos2[1] + size2[1]);
   }

   //--- Обработка выстрелов в зомби ---
   checkCollisions() {
      let that = this;

      that.checkPlayerBounds(); //--- Проверка выхода игрока за границы карты ---
      
      //--- обнаружение столкновений зомби и пуль, зомби и мин ---
      checkCollisionsAll(that.zombies1);
      checkCollisionsAll(that.zombies2);
      checkCollisionsAll(that.zombies3);
      checkCollisionsAll(that.zombies4);

      function checkCollisionsAll(zombs) {
         for (let i = 0; i < zombs.length; i++) {
            let pos = zombs[i].pos;
            let size = zombs[i].sprite.size;

            //--- обнаружение столкновений зомби и пуль ---
            for (let j = 0; j < that.bullets.length; j++) {
               let pos2 = that.bullets[j].pos;
               let size2 = that.bullets[j].sprite.size;
   
               if (that.boxCollides(pos, size, pos2, size2)) {
                  that.audioZombDead.play();
                  that.audioExplosion.play();

                  //--- Удаление зомби из массива при его убийстве ---
                  zombs.splice(i, that.numberKillZomby);
                  i--;
   
                  //--- Добавление очков ---
                  that.score += that.numberScore;
   
                  //--- Взрыв при попадании ---
                  if (that.ball === "gan" || that.ball === "riffle") {
                     that.explosions.push({
                        pos: pos,
                        sprite: new Sprite("images/explosion.png", [0, 0], [256, 256], 16, [0, 1, 2, 3, 4, 5], null, true, 0)
                     });
                  }

                  if (that.ball === "firethrower") {
                     that.explosions.push({
                        pos: pos,
                        sprite: new Sprite("images/explosion_big2.png", [0, 0], [256, 256], 10, [0, 1, 2, 3, 4, 5], null, true, 0)
                     });
                  }
   
                  //--- Удаление пули ---
                  that.bullets.splice(j, 1);
                  break; //--- остановка внутреннего цикла перебора пуль ---
               }
            }

            //--- обнаружение столкновений зомби и мин ---
            for (let k = 0; k < that.mines.length; k++) {
               let pos2 = that.mines[k].pos;
               let size2 = that.mines[k].sprite.size;
   
               if (that.boxCollides(pos, size, pos2, size2)) {
                  that.audioZombDead.play();
                  that.audioExplosion.play();

                  //--- Удаление зомби из массива при его убийстве ---
                  zombs.splice(i, that.numberKillZomby);
                  i--;
   
                  //--- Добавление очков ---
                  that.score += that.numberScore;
   
                  //--- Взрыв при попадании ---
                  that.explosions.push({
                     pos: pos,
                     sprite: new Sprite("images/explosion.png", [0, 0], [256, 256], 16, [0, 1, 2, 3, 4, 5], null, true, 0)
                  });
   
                  //--- Удаление мины ---
                  that.mines.splice(k, 1);

                  break; //--- остановка внутреннего цикла перебора мин ---
               }
            }
   
            if (that.boxCollides(pos, size, that.player.pos, that.player.sprite.size)) {
               that.gameOver();
            }
         }
      }
   }

   //--- Проверка выхода игрока за пределы карты ---
   checkPlayerBounds() {
      let that = this;

      if (that.player.pos[0] < that.player.width) {
         that.player.pos[0] = that.player.width;
      }
      else if (that.player.pos[0] > that.canvas.width - that.player.width) {
         that.player.pos[0] = that.canvas.width - that.player.width;
      }

      if (that.player.pos[1] < that.player.width) {
         that.player.pos[1] = that.player.width;
      }
      else if (that.player.pos[1] > that.canvas.height - that.player.width) {
         that.player.pos[1] = that.canvas.height - that.player.width;
      }
   }

   //--- Отрисовка сущностей --- 
   //--- отображения сцены каждого фрейма ---
   renderGame() {
      let that = this;

      that.renderEntities(that.mines); //--- отрисовка мин ---

      if (!that.isGameOver) {
         that.renderPlayer(that.player); //--- отрисовка игрока ---
         that.renderEntities(that.zombies1); //--- отрисовка зомби ---
         that.renderEntities(that.zombies2); //--- отрисовка зомби ---
         that.renderEntities(that.zombies3); //--- отрисовка зомби ---
         that.renderEntities(that.zombies4); //--- отрисовка зомби ---         
      }

      that.renderEntities(that.bullets); //--- отрисовка пуль ---
      that.renderEntities(that.explosions); //--- отрисовка взрывов ---
      that.renderEntities(that.plants); //--- отрисовка кустов ---

   }

   renderEntities(list) {
      let that = this;

      for (let i = 0; i < list.length; i++) {
         that.renderEntity(list[i]);
      }    
   }
   
   renderPlayer(obj) {
      let that = this;

      that.ctx.translate(obj.pos[0], obj.pos[1]);
      obj.sprite.render(that.ctx);
   }

   renderEntity(entity) {
      let that = this;

      that.ctx.save();
      that.ctx.translate(entity.pos[0], entity.pos[1]);
      entity.sprite.render(that.ctx);
      that.ctx.restore();
   }

   // Game over
   gameOver() {
      this.gameTime = 0;

      this.bullets = [];
      this.mines = [];

      this.audioTheme1.pause();
      this.audioTheme1.currentTime = 0;

      this.audioTheme2.pause();
      this.audioTheme2.currentTime = 0;

      this.gameOverDiv.style.display = "block";
      this.btnPlayAgain.style.display = "block";

      this.isGameOver = true;      
   }

   //--- Перезапуск игры ---
   reset() {
      let that = this;
      this.audioTheme1.play();

      this.gameOverDiv.style.display = "none";
      this.btnSubmit.style.display = "none";
      this.btnPlayAgain.style.display = "none";
      
      this.isGameOver = false;
      this.gameTime = 0;
      this.score = 0;

      this.zombies1 = [];
      this.zombies2 = [];
      this.zombies3 = [];
      this.zombies4 = [];
      this.bullets = [];
      this.mines = [];

      //--- Первоначальное положение игрока ---
      this.player.pos = [this.canvas.width/2 - this.player.width/2, this.canvas.height/2 - this.player.height/2];

      //--- Добавление растений ---
      for (let i = 0; i <= 10; i++) {
         that.plants.push(
            {
               pos: [that.plant1.sprite.size[0]*i, 0],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            },

            {
               pos: [that.plant1.sprite.size[0]*i, that.canvas.height],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            }
         );
      }

      for (let i = 0; i <= 5; i++) {
         that.plants.push(
            {
               pos: [0, that.plant1.sprite.size[0]*i],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            },

            {
               pos: [that.canvas.width, that.plant1.sprite.size[0]*i],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            }
         );
      }    
   }

   showBtnSubmit() {
      this.btnSubmit.style.display = "block";
   }

   hideBtnSubmit() {
      this.btnSubmit.style.display = "none";
   }

   //--- Установки игры в зависимости от выбора ---
   choicedPlayer(plr, weapon) {
      let that = this;

      if (plr && weapon) {
         that.btnPlay.removeAttribute("disabled", "0"); 
         that.btnPlay.style.backgroundColor = "#009688"; 
      }

      if (plr === "man" && weapon === "gan") {
         that.person = plr;
         that.player = that.playerManGun;
         that.ball = weapon;
      }

      if (plr === "man" && weapon === "riffle") {
         that.person = "manRiffle";
         that.player = that.playerManRiffle;
         that.ball = weapon;
      }

      if (plr === "man" && weapon === "firethrower") {
         that.person = "manFire";
         that.player = that.playerManFire;
         that.ball = weapon;
      }

      if (plr === "girl" && weapon === "gan") {
         that.person = plr;
         that.player = that.playerGirlGun;
         that.ball = weapon;
      }

      if (plr === "girl" && weapon === "riffle") {
         that.person = "girlRiffle";
         that.player = that.playerGirlRiffle;
         that.ball = weapon;
      }

      if (plr === "girl" && weapon === "firethrower") {
         that.person = "girlFire";
         that.player = that.playerGirlFire;
         that.ball = weapon;
      }

      if (plr === "man") {
         that.clickChoice.play();
         that.itemMan.classList.add("itemChoiced");
         that.itemGirl.classList.remove("itemChoiced");
      }

      if (plr === "girl") {
         that.clickChoice.play();
         that.itemGirl.classList.add("itemChoiced");
         that.itemMan.classList.remove("itemChoiced");
      }

      if (weapon === "gan") {
         that.intervalBullet = 800;
         that.bulletSpeed = 500;
         that.numberKillZomby = 1;
         that.numberScore = 100;
         that.clickChoice.play();
         that.itemGan.classList.add("itemChoiced");
         that.itemRiffle.classList.remove("itemChoiced");
         that.itemFirethrower.classList.remove("itemChoiced");
      }

      if (weapon === "riffle") {
         that.intervalBullet = 2100;
         that.bulletSpeed = 1000;
         that.numberKillZomby = 2;
         that.numberScore = 120;
         that.clickChoice.play();
         that.itemRiffle.classList.add("itemChoiced");
         that.itemGan.classList.remove("itemChoiced");
         that.itemFirethrower.classList.remove("itemChoiced");
      }

      if (weapon === "firethrower") {
         that.intervalBullet = 2500;
         that.bulletSpeed = 1600;
         that.numberKillZomby = 3;
         that.numberScore = 150;
         that.clickChoice.play();
         that.itemFirethrower.classList.add("itemChoiced");
         that.itemGan.classList.remove("itemChoiced");
         that.itemRiffle.classList.remove("itemChoiced");
      }
   }
   
   //--- Запуск игры по нажатию кнопки Play ---
   play() {
      let imgs = [
         "images/man_idle_gun.png",
         "images/man_walk_gun.png",
         "images/idle_riffle_man.png",
         "images/walk_riffle_man.png",
         "images/idle_firethrower_man.png",
         "images/walk_firethrower_man.png",
         "images/girl_idle_gun.png",
         "images/girl_walk_gun.png",
         "images/girl_idle_riffle.png",
         "images/girl_walk_riffle.png",
         "images/girl_idle_firethower.png",
         "images/girl_walk_firethower.png",
         "images/bullet_gun.png",
         "images/bullet_riffle.png",
         "images/electro_ball.png",
         "images/zombie1_male_walk.png",
         "images/zombie2_male_walk.png",
         "images/zombie3_male_walk.png",
         "images/zombie4_male_walk.png",
         "images/explosion.png",
         "images/explosion_big2.png",
         "images/plant_1.png",
         "images/mine1.png"
      ];

      this.choiceItemDiv.style.display = "none";
      this.clickChoice.play();

      //--- Загрузка изображений через внешний скрипт resources.js
      // и проверка их загрузки---
      resources.load(imgs); 

      let imgCache = [];
      let sum = null;

      imgs.forEach(function(img) {
         imgCache.push(resources.get(img));
      });

      for (let i =0; i < imgCache.length; i++) {
         sum += !!imgCache[i];
      }

      //--- Проверка загрузки изображений ---
      if (!sum) {
         resources.onReady(this.init);
      } else {
         this.init();
      }
   }

   btnExit() {
      this.html.exitFullscreen(); //--- Выключение полноэкранного режима ---
   }
}
 
 
 