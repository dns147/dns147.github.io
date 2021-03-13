/* ----- View Map1 ---- */

class ViewMap1 {
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
      this.audioTheme = null;
      this.audioGun = null;
      this.audioRiffle = null;

      this.audioZombDead = null;
      this.audioExplosion = null;
      this.audioZombWalk = null;

      this.timerIdMain = null;
      this.timerId1 = null;
      this.timerId2 = null;
      this.timerId3= null;
      this.timerId4 = null;
      this.timerId5 = null;
      this.timerId6 = null;
      this.timerId7 = null;
      this.timerId8 = null;
      this.timerId9 = null;
      this.timerId10 = null;

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

      this.barrel1 = {
         pos: [100, 100],
         sprite: new Sprite("images/barrel2.png", [0, 0], [56, 56])
      };

      this.person = null; //--- пол игрока ---
      this.player = null; //--- вид игрока, зависит от выбранного оружия ---
      this.ball = null; //--- вид пули ---
      this.ballX = null; //--- смещение по Х относительно оружия --- 
      this.ballY = null; //--- смещение по Y относительно оружия ---
      this.intervalBullet = null; //--- интервал между выстрелами ---
      this.numberKillZomby = null; //--- количество убитых врагов ---
      this.numberScore = null; //--- количество очков в зависимости от оружия ---

      this.bullets = [];
      this.zombies1 = [];
      this.zombies2 = [];
      this.zombies3 = [];
      this.zombies4 = [];

      this.zombies1Door2 = [];
      this.zombies1Door2Add = [];
      this.zombies1AfterDoor2 = [];
      this.zombies1Door3 = [];
      this.zombies1Door3Add = [];
      this.zombies1AfterDoor3 = [];
      this.zombies1AfterDoor3Add = [];
      this.zombies1Door4 = [];
      this.zombies1AfterDoor4 = [];
      this.zombies1Door5 = [];
      this.zombies1AfterDoor5 = [];
      this.zombies1AfterDoor5Add = [];
      this.zombies1Door6 = [];
      this.zombies1Door6Add = [];
      this.zombies1AfterDoor6 = [];

      this.explosions = [];
      this.barrels = [];
      this.walls = [];
      this.walls2 = [];
      this.walls3 = [];
      this.walls4 = [];
      this.walls5 = [];
      this.walls6 = [];
      this.walls7 = [];
      this.doors1 = [];
      this.doors2 = [];
      this.doors3 = [];
      this.doors4 = [];
      this.doors5 = [];
      this.doors6 = [];

      this.lastTime = null; //--- время последнего обновления игры ---
      this.lastFire = Date.now(); //--- время последнего выстрела ---
      this.gameTime = 0; //--- время игры ---
      this.isGameOver = null; //--- состояние игры ---

      this.alfaDoor = null;
      this.score = 0; //--- количество убитых зомби ---

      //--- Скорости в пикселях в секунду ---
      this.playerSpeed = 200;
      this.bulletSpeed = 500;
      this.zombySpeed = 150;  

      this.zombySpeed1 = [];
      this.zombySpeed2 = [];
      this.zombySpeed3 = [];
      this.zombySpeed4 = [];
      this.zombySpeed5 = [];
      this.zombySpeed5Add = [];
      this.zombySpeed6 = [];
      this.zombySpeed7 = [];
      this.zombySpeed8 = [];
      this.zombySpeed9 = [];
      this.zombySpeed10 = [];
      this.zombySpeed11 = [];
      this.zombySpeed12 = [];
      this.zombySpeed13 = [];
      this.zombySpeed14 = [];
      this.zombySpeed15 = [];
      this.zombySpeed16 = [];
      this.zombySpeed17 = [];
      this.zombySpeed18 = [];

      this.playGame = this.playGame.bind(this);
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
      this.checkPlayerStone = this.checkPlayerStone.bind(this);
      this.makeZombiesDoor1 = this.makeZombiesDoor1.bind(this);
      this.makeZombiesDoor2 = this.makeZombiesDoor2.bind(this);
      this.makeZombiesAfterDoor2 = this.makeZombiesAfterDoor2.bind(this);
      this.makeZombiesDoor3 = this.makeZombiesDoor3.bind(this);
      this.makeZombiesAfterDoor3 = this.makeZombiesAfterDoor3.bind(this);
      this.makeZombiesDoor4 = this.makeZombiesDoor4.bind(this);
      this.makeZombiesAfterDoor4 = this.makeZombiesAfterDoor4.bind(this);
      this.makeZombiesDoor5 = this.makeZombiesDoor5.bind(this);
      this.makeZombiesAfterDoor5 = this.makeZombiesAfterDoor5.bind(this);
      this.makeZombiesDoor6 = this.makeZombiesDoor6.bind(this);
      this.makeZombiesAfterDoor6 = this.makeZombiesAfterDoor6.bind(this);
   }

   render(audio) {
      audio.pause();
      audio.currentTime = 0;

      this.player = null; //--- Очистка выбора игрока ---

      this.container.classList.remove("main");
      this.container.classList.add("main_canvas");
      this.modalContainer.classList.add("my__modal_canvas");

      this.scoreElem = document.createElement("input");
      this.scoreElem.classList.add("score");
      this.scoreElem.setAttribute("id", "score");
      this.modalContainer.appendChild(this.scoreElem);

      this.gameOverDiv = document.createElement("div");
      this.gameOverDiv.classList.add("gameOverDiv");
      this.gameOverDiv.setAttribute("id", "gameOverDiv");
      this.modalContainer.appendChild(this.gameOverDiv);

      this.gameOverTxt = document.createElement("h2");
      this.gameOverTxt.classList.add("gameOverTxt");
      this.gameOverTxt.innerHTML = "game over";
      this.gameOverDiv.appendChild(this.gameOverTxt);

      this.btnPlayAgain = document.createElement("button");
      this.btnPlayAgain.classList.add("btn_submit", "btn_playAgain");
      this.btnPlayAgain.innerHTML = "Play Again";
      this.btnPlayAgain.setAttribute("id", "play-again");
      this.gameOverDiv.appendChild(this.btnPlayAgain);

      this.btnExit = document.createElement("a");
      this.btnExit.classList.add("btn_submit", "btn_exit");
      this.btnExit.innerHTML = "Exit";
      this.btnExit.setAttribute("href", "index.html");
      this.btnExit.setAttribute("id", "btnExit");
      this.gameOverDiv.appendChild(this.btnExit);

      this.audioTheme = document.createElement("audio");
      this.audioTheme.setAttribute("src", "audio/map1Theme.mp3");
      this.audioTheme.setAttribute("loop", "loop");

      this.audioGun = document.createElement("audio");
      this.audioGun.setAttribute("src", "audio/gun1.mp3");

      this.audioZombDead = document.createElement("audio");
      this.audioZombDead.setAttribute("src", "audio/zombie_dead2.mp3");

      this.audioZombWalk = document.createElement("audio");
      this.audioZombWalk.setAttribute("src", "audio/zombie_walk.mp3");
      this.audioZombWalk.setAttribute("loop", "loop");

      this.audioExplosion = document.createElement("audio");
      this.audioExplosion.setAttribute("src", "audio/explosion2.mp3");

      this.audioExplosionDoor = document.createElement("audio");
      this.audioExplosionDoor.setAttribute("src", "audio/explosion_door1.mp3");

      this.audioFallWall = document.createElement("audio");
      this.audioFallWall.setAttribute("src", "audio/fallWall.mp3");

      this.canvas = document.createElement("canvas");
      this.canvas.setAttribute("width", 1920);
      this.canvas.setAttribute("height", 1080);
      this.canvas.classList.add("my__canvas");
      this.modalContainer.appendChild(this.canvas);
      this.ctx = this.canvas.getContext("2d");

      this.html.requestFullscreen(); //--- Включение полноэкранного режима ---

      this.playGame();
   }

   playGame() {
      let that = this;

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
         "images/zombie1_male_walk.png",
         "images/zombie2_male_walk.png",
         "images/zombie3_male_walk.png",
         "images/zombie4_male_walk.png",
         "images/explosion.png",
         "images/walls_stone.png",
         "images/walls_tree.png",
         "images/locker.png",
         "images/locker2.png",
         "images/plant_1.png",
         "images/plant_2.png",
         "images/chair.png",
         "images/sofa.png",
         "images/table.png",
         "images/bed.png",
         "images/table_mini.png",
         "images/tele.png",
         "images/boss1.png",
      ];

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
         resources.onReady(that.init);
      } else {
         that.init();
      }
   }
   
   //--- Главный цикл игры ---
   main() {
      let that = this;

      let now = Date.now();
      let dt = (now - that.lastTime) / 1000.0; //--- разница между текущим временем и временем последнего обновления ---
  
      that.update(dt);
      that.renderGame();
  
      that.lastTime = now;
      that.timerIdMain = requestAnimationFrame(that.main);
   }

   //--- Инициализация игры ---
   init() { 
      let that = this;

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
      that.checkCollisions(); //--- проверка на коллизии ---

      that.scoreElem.value = that.score;
   }

   //--- обновление анимации ---
   updateEntities(dt) {
      let that = this;

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
      //--- Зомби, идущие справа налево ---
      for (let i = 0; i < that.zombies1.length; i++) {
         that.zombies1[i].pos[0] -= that.zombySpeed1[i] * dt;
         
         that.zombies1[i].sprite.update(dt);

         if (that.zombies1[i].pos[0] < that.zombies1[i].sprite.size[0]/4) {
            that.zombies1[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            that.zombies1[i].pos[0] = that.zombies1[i].sprite.size[0]/4;
            that.zombySpeed1[i] = -that.zombySpeed1[i];
         }
         
         if (that.zombies1[i].pos[0] > that.canvas.width - that.zombies1[i].sprite.size[0]/4) {
            that.zombies1[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            that.zombies1[i].pos[0] = that.canvas.width - that.zombies1[i].sprite.size[0]/4;
            that.zombySpeed1[i] = -that.zombySpeed1[i];
         }        
      }

      //--- Зомби, идущие слева направо ---
      for (let i = 0; i < that.zombies2.length; i++) {
         that.zombies2[i].pos[0] += that.zombySpeed2[i] * dt;
         that.zombies2[i].sprite.update(dt);
         
         if (that.zombies2[i].pos[0] > that.canvas.width - that.zombies2[i].sprite.size[0]/4) {
            that.zombies2[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            that.zombies2[i].pos[0] = that.canvas.width - that.zombies2[i].sprite.size[0]/4;
            that.zombySpeed2[i] = -that.zombySpeed2[i];
         } 

         if (that.zombies2[i].pos[0] < that.zombies2[i].sprite.size[0]/4) {
            that.zombies2[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            that.zombies2[i].pos[0] = that.zombies2[i].sprite.size[0]/4;
            that.zombySpeed2[i] = -that.zombySpeed2[i];
         } 
      }

      //--- Зомби, идущие слева направо после попадания во 2-ую дверь ---
      for (let i = 0; i < that.zombies1Door2.length; i++) {
         that.zombies1Door2[i].pos[0] += that.zombySpeed5[i] * dt;
         that.zombies1Door2[i].sprite.update(dt);

         if (that.zombies1Door2[i].pos[0] > 790 - that.zombies1Door2[i].sprite.size[0]/4) {
            that.zombies1Door2[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            that.zombies1Door2[i].pos[0] = 790 - that.zombies1Door2[i].sprite.size[0]/4;
            that.zombySpeed5[i] = -that.zombySpeed5[i];
         }

         if (that.zombies1Door2[i].pos[0] < that.zombies1Door2[i].sprite.size[0]/4 + 70) {
            that.zombies1Door2[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            that.zombies1Door2[i].pos[0] = that.zombies1Door2[i].sprite.size[0]/4 + 70;
            that.zombySpeed5[i] = -that.zombySpeed5[i];
         } 
      }

      //--- Доп. зомби, идущие сверху вниз после попадания во 2-ую дверь ---
      for (let i = 0; i < that.zombies1Door2Add.length; i++) {
         that.zombies1Door2Add[i].pos[1] += that.zombySpeed5Add[i] * dt;
         that.zombies1Door2Add[i].sprite.update(dt);

         if (that.zombies1Door2Add[i].pos[1] > that.canvas.height - that.zombies1Door2Add[i].sprite.size[1]/4) {
            that.zombies1Door2Add[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI)
            that.zombies1Door2Add[i].pos[1] = that.canvas.height - that.zombies1Door2Add[i].sprite.size[1]/4;
            that.zombySpeed5Add[i] = -that.zombySpeed5Add[i];
         }

         if (that.zombies1Door2Add[i].pos[1] < that.zombies1Door2Add[i].sprite.size[1]/4 + 90) {
            that.zombies1Door2Add[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1Door2Add[i].pos[1] = that.zombies1Door2Add[i].sprite.size[1]/4 + 90;
            that.zombySpeed5Add[i] = -that.zombySpeed5Add[i];
         } 
      }

      //--- Зомби, идущие слева направо после прохода за 2-ую дверь ---
      for (let i = 0; i < that.zombies1AfterDoor2.length; i++) {
         that.zombies1AfterDoor2[i].pos[0] += that.zombySpeed6[i] * dt;
         that.zombies1AfterDoor2[i].sprite.update(dt);

         if (that.zombies1AfterDoor2[i].pos[0] > 620 - that.zombies1AfterDoor2[i].sprite.size[0]/4) {
            that.zombies1AfterDoor2[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            that.zombies1AfterDoor2[i].pos[0] = 620 - that.zombies1AfterDoor2[i].sprite.size[0]/4;
            that.zombySpeed6[i] = -that.zombySpeed6[i];
         }

         if (that.zombies1AfterDoor2[i].pos[0] < that.zombies1AfterDoor2[i].sprite.size[0]/4 + 70) {
            that.zombies1AfterDoor2[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            that.zombies1AfterDoor2[i].pos[0] = that.zombies1AfterDoor2[i].sprite.size[0]/4 + 70;
            that.zombySpeed6[i] = -that.zombySpeed6[i];
         } 

      }

      //--- Зомби, идущие снизу вверх после попадания в 3-ую дверь ---
      for (let i = 0; i < that.zombies1Door3.length; i++) {
         that.zombies1Door3[i].pos[1] -= that.zombySpeed7[i] * dt;
         that.zombies1Door3[i].sprite.update(dt);

         if (that.zombies1Door3[i].pos[1] > 790 - that.zombies1Door3[i].sprite.size[0]/4) {
            that.zombies1Door3[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI)
            that.zombies1Door3[i].pos[1] = 790 - that.zombies1Door3[i].sprite.size[0]/4;
            that.zombySpeed7[i] = -that.zombySpeed7[i];
         }

         if (that.zombies1Door3[i].pos[1] < that.zombies1Door3[i].sprite.size[0]/4 + 90) {
            that.zombies1Door3[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1Door3[i].pos[1] = that.zombies1Door3[i].sprite.size[0]/4 + 90;
            that.zombySpeed7[i] = -that.zombySpeed7[i];
         } 
      }

      //--- Зомби, идущие сверху вниз после попадания в 3-ую дверь ---
      for (let i = 0; i < that.zombies1Door3Add.length; i++) {
         that.zombies1Door3Add[i].pos[1] += that.zombySpeed8[i] * dt;
         that.zombies1Door3Add[i].sprite.update(dt);

         if (that.zombies1Door3Add[i].pos[1] > 790 - that.zombies1Door3Add[i].sprite.size[0]/4) {
            that.zombies1Door3Add[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI)
            that.zombies1Door3Add[i].pos[1] = 790 - that.zombies1Door3Add[i].sprite.size[0]/4;
            that.zombySpeed8[i] = -that.zombySpeed8[i];
         }

         if (that.zombies1Door3Add[i].pos[1] < that.zombies1Door3Add[i].sprite.size[0]/4 + 90) {
            that.zombies1Door3Add[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1Door3Add[i].pos[1] = that.zombies1Door3Add[i].sprite.size[0]/4 + 90;
            that.zombySpeed8[i] = -that.zombySpeed8[i];
         } 
      }

      //--- Зомби, идущие сверху вниз после прохода в 3-ую дверь ---
      for (let i = 0; i < that.zombies1AfterDoor3.length; i++) {
         that.zombies1AfterDoor3[i].pos[1] += that.zombySpeed9[i] * dt;
         that.zombies1AfterDoor3[i].sprite.update(dt);

         if (that.zombies1AfterDoor3[i].pos[1] > 450 - that.zombies1AfterDoor3[i].sprite.size[0]/4) {
            that.zombies1AfterDoor3[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI)
            that.zombies1AfterDoor3[i].pos[1] = 450 - that.zombies1AfterDoor3[i].sprite.size[0]/4;
            that.zombySpeed9[i] = -that.zombySpeed9[i];
         }

         if (that.zombies1AfterDoor3[i].pos[1] < that.zombies1AfterDoor3[i].sprite.size[0]/4 + 90) {
            that.zombies1AfterDoor3[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1AfterDoor3[i].pos[1] = that.zombies1AfterDoor3[i].sprite.size[0]/4 + 90;
            that.zombySpeed9[i] = -that.zombySpeed9[i];
         } 
      }

      //--- Зомби, идущие слева направо после прохода в 3-ую дверь ---
      for (let i = 0; i < that.zombies1AfterDoor3Add.length; i++) {
         that.zombies1AfterDoor3Add[i].pos[0] += that.zombySpeed10[i] * dt;
         that.zombies1AfterDoor3Add[i].sprite.update(dt);

         if (that.zombies1AfterDoor3Add[i].pos[0] > 610 - that.zombies1AfterDoor3Add[i].sprite.size[0]/4) {
            that.zombies1AfterDoor3Add[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            that.zombies1AfterDoor3Add[i].pos[0] = 610 - that.zombies1AfterDoor3Add[i].sprite.size[0]/4;
            that.zombySpeed10[i] = -that.zombySpeed10[i];
         }

         if (that.zombies1AfterDoor3Add[i].pos[0] < that.zombies1AfterDoor3Add[i].sprite.size[0]/4 + 90) {
            that.zombies1AfterDoor3Add[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            that.zombies1AfterDoor3Add[i].pos[0] = that.zombies1AfterDoor3Add[i].sprite.size[0]/4 + 90;
            that.zombySpeed10[i] = -that.zombySpeed10[i];
         } 
      }

      //--- Зомби, идущие слева направо после попадания в 4-ую дверь ---
      for (let i = 0; i < that.zombies1Door4.length; i++) {
         that.zombies1Door4[i].pos[0] += that.zombySpeed11[i] * dt;
         that.zombies1Door4[i].sprite.update(dt);

         if (that.zombies1Door4[i].pos[0] > 610 - that.zombies1Door4[i].sprite.size[0]/4) {
            that.zombies1Door4[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            that.zombies1Door4[i].pos[0] = 610 - that.zombies1Door4[i].sprite.size[0]/4;
            that.zombySpeed11[i] = -that.zombySpeed11[i];
         }

         if (that.zombies1Door4[i].pos[0] < that.zombies1Door4[i].sprite.size[0]/4 + 90) {
            that.zombies1Door4[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            that.zombies1Door4[i].pos[0] = that.zombies1Door4[i].sprite.size[0]/4 + 90;
            that.zombySpeed11[i] = -that.zombySpeed11[i];
         } 
      }

      //--- Зомби, идущие сверху вниз после прохода в 4-ую дверь ---
      for (let i = 0; i < that.zombies1AfterDoor4.length; i++) {
         that.zombies1AfterDoor4[i].pos[1] += that.zombySpeed12[i] * dt;
         that.zombies1AfterDoor4[i].sprite.update(dt); 

         if (that.zombies1AfterDoor4[i].pos[1] < that.zombies1AfterDoor4[i].sprite.size[1]/4 + 90) {
            that.zombies1AfterDoor4[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1AfterDoor4[i].pos[1] = that.zombies1AfterDoor4[i].sprite.size[1]/4 + 90;
            that.zombySpeed12[i] = -that.zombySpeed12[i];
         }
         
         if (that.zombies1AfterDoor4[i].pos[1] > that.canvas.height - 320) {
            that.zombies1AfterDoor4[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI)
            that.zombies1AfterDoor4[i].pos[1] = that.canvas.height - 320;
            that.zombySpeed12[i] = -that.zombySpeed12[i];
         }
      }

      //--- Зомби, идущие сверху вниз после попадания в 5-ую дверь ---
      for (let i = 0; i < that.zombies1Door5.length; i++) {
         that.zombies1Door5[i].pos[1] += that.zombySpeed13[i] * dt;
         that.zombies1Door5[i].sprite.update(dt); 

         if (that.zombies1Door5[i].pos[1] < that.zombies1Door5[i].sprite.size[1]/4 + 90) {
            that.zombies1Door5[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1Door5[i].pos[1] = that.zombies1Door5[i].sprite.size[1]/4 + 90;
            that.zombySpeed13[i] = -that.zombySpeed13[i];
         }
         
         if (that.zombies1Door5[i].pos[1] > that.canvas.height - 320) {
            that.zombies1Door5[i].sprite = new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI)
            that.zombies1Door5[i].pos[1] = that.canvas.height - 320;
            that.zombySpeed13[i] = -that.zombySpeed13[i];
         }
      }

      //--- Зомби, идущие сверху вниз после прохода в 5-ую дверь ---
      for (let i = 0; i < that.zombies1AfterDoor5.length; i++) {
         that.zombies1AfterDoor5[i].pos[1] += that.zombySpeed14[i] * dt;
         that.zombies1AfterDoor5[i].sprite.update(dt); 

         if (that.zombies1AfterDoor5[i].pos[1] < that.zombies1AfterDoor5[i].sprite.size[1]/4 + 90) {
            that.zombies1AfterDoor5[i].sprite = new Sprite("images/zombie3_male_walk.png", [0, 0], [133.5, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1AfterDoor5[i].pos[1] = that.zombies1AfterDoor5[i].sprite.size[1]/4 + 90;
            that.zombySpeed14[i] = -that.zombySpeed14[i];
         }
         
         if (that.zombies1AfterDoor5[i].pos[1] > that.canvas.height - 320) {
            that.zombies1AfterDoor5[i].sprite = new Sprite("images/zombie3_male_walk.png", [0, 0], [133.5, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI)
            that.zombies1AfterDoor5[i].pos[1] = that.canvas.height - 320;
            that.zombySpeed14[i] = -that.zombySpeed14[i];
         }
      }

      //--- Доп. зомби, идущие сверху вниз после прохода в 5-ую дверь ---
      for (let i = 0; i < that.zombies1AfterDoor5Add.length; i++) {
         that.zombies1AfterDoor5Add[i].pos[1] += that.zombySpeed15[i] * dt;
         that.zombies1AfterDoor5Add[i].sprite.update(dt); 

         if (that.zombies1AfterDoor5Add[i].pos[1] < that.zombies1AfterDoor5Add[i].sprite.size[1]/4 + 90) {
            that.zombies1AfterDoor5Add[i].sprite = new Sprite("images/zombie4_male_walk.png", [0, 0], [134, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1AfterDoor5Add[i].pos[1] = that.zombies1AfterDoor5Add[i].sprite.size[1]/4 + 90;
            that.zombySpeed15[i] = -that.zombySpeed15[i];
         }
         
         if (that.zombies1AfterDoor5Add[i].pos[1] > that.canvas.height - 320) {
            that.zombies1AfterDoor5Add[i].sprite = new Sprite("images/zombie4_male_walk.png", [0, 0], [134, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI)
            that.zombies1AfterDoor5Add[i].pos[1] = that.canvas.height - 320;
            that.zombySpeed15[i] = -that.zombySpeed15[i];
         }
      }

      //--- Зомби, идущие сверху вниз после попадания в 6-ую дверь ---
      for (let i = 0; i < that.zombies1Door6.length; i++) {
         that.zombies1Door6[i].pos[1] += that.zombySpeed16[i] * dt;
         that.zombies1Door6[i].sprite.update(dt); 

         if (that.zombies1Door6[i].pos[1] < that.zombies1Door6[i].sprite.size[1]/4 + 90) {
            that.zombies1Door6[i].sprite = new Sprite("images/zombie3_male_walk.png", [0, 0], [133.5, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies1Door6[i].pos[1] = that.zombies1Door6[i].sprite.size[1]/4 + 90;
            that.zombySpeed16[i] = -that.zombySpeed16[i];
         }
         
         if (that.zombies1Door6[i].pos[1] > that.canvas.height - 320) {
            that.zombies1Door6[i].sprite = new Sprite("images/zombie3_male_walk.png", [0, 0], [133.5, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI)
            that.zombies1Door6[i].pos[1] = that.canvas.height - 320;
            that.zombySpeed16[i] = -that.zombySpeed16[i];
         }
      }

      //--- Доп. зомби, идущие справа налево после попадания в 6-ую дверь ---
      for (let i = 0; i < that.zombies1Door6Add.length; i++) {
         that.zombies1Door6Add[i].pos[0] -= that.zombySpeed17[i] * dt;
         that.zombies1Door6Add[i].sprite.update(dt); 

         if (that.zombies1Door6Add[i].pos[0] < 900) {
            that.zombies1Door6Add[i].sprite = new Sprite("images/zombie4_male_walk.png", [0, 0], [134, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            that.zombies1Door6Add[i].pos[0] = 900;
            that.zombySpeed17[i] = -that.zombySpeed17[i];
         }
         
         if (that.zombies1Door6Add[i].pos[0] > that.canvas.width - 100) {
            that.zombies1Door6Add[i].sprite = new Sprite("images/zombie4_male_walk.png", [0, 0], [134, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            that.zombies1Door6Add[i].pos[0] = that.canvas.width - 100;
            that.zombySpeed17[i] = -that.zombySpeed17[i];
         }
      }

      //--- Зомби-босс после прохода в 6-ую дверь ---
      for (let i = 0; i < that.zombies1AfterDoor6.length; i++) {
         that.zombies1AfterDoor6[i].pos[0] -= that.zombySpeed18[i] * dt;
         that.zombies1AfterDoor6[i].sprite.update(dt); 

         if (that.zombies1AfterDoor6[i].pos[0] < 1350) {
            that.zombies1AfterDoor6[i].sprite = new Sprite("images/boss1.png", [0, 0], [576, 576], 4, [0, 1, 2, 3, 4, 7], null, false, -Math.PI/2)
            that.zombies1AfterDoor6[i].pos[0] = 1350;
            that.zombySpeed18[i] = -that.zombySpeed18[i];
         }
         
         if (that.zombies1AfterDoor6[i].pos[0] > that.canvas.width - 200) {
            that.zombies1AfterDoor6[i].sprite = new Sprite("images/boss1.png", [0, 0], [576, 576], 4, [0, 1, 2, 3, 4, 7], null, false, Math.PI/2)
            that.zombies1AfterDoor6[i].pos[0] = that.canvas.width - 200;
            that.zombySpeed18[i] = -that.zombySpeed18[i];
         }
      }

      //--- Зомби, идущие сверху вниз ---
      for (let i = 0; i < that.zombies3.length; i++) {
         that.zombies3[i].pos[1] += that.zombySpeed3[i] * dt;
         that.zombies3[i].sprite.update(dt); 

         if (that.zombies3[i].pos[1] < that.zombies3[i].sprite.size[1]/4 + 90) {
            that.zombies3[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            that.zombies3[i].pos[1] = that.zombies3[i].sprite.size[1]/4 + 90;
            that.zombySpeed3[i] = -that.zombySpeed3[i];
         }
         
         if (that.zombies3[i].pos[1] > that.canvas.height - that.zombies3[i].sprite.size[1]/4) {
            that.zombies3[i].sprite = new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI)
            that.zombies3[i].pos[1] = that.canvas.height - that.zombies3[i].sprite.size[1]/4;
            that.zombySpeed3[i] = -that.zombySpeed3[i];
         }
      }

      //--- Зомби, идущие снизу вверх ---
      for (let i = 0; i < that.zombies4.length; i++) {
         that.zombies4[i].pos[1] -= that.zombySpeed4[i] * dt;
         that.zombies4[i].sprite.update(dt);         
      }
  
      //--- обновление взрывов ---
      for (let i = 0; i < that.explosions.length; i++) {
         that.explosions[i].sprite.update(dt);
  
         //--- удалить, если анимация завершена ---
         if (that.explosions[i].sprite.done) {
            that.explosions.splice(i, 1);
            i--;
         }
      }

      //--- Остановка звука идущих зомби ---
      if (that.zombies1.length === 0 && 
            that.zombies2.length === 0 && 
            that.zombies3.length === 0 && 
            that.zombies4.length === 0 &&
            that.zombies1Door2.length === 0 && 
            that.zombies1Door2Add.length === 0 && 
            that.zombies1AfterDoor2.length === 0 &&
            that.zombies1Door3.length === 0 && 
            that.zombies1Door3Add.length === 0 && 
            that.zombies1AfterDoor3.length === 0 && 
            that.zombies1AfterDoor3Add.length === 0 && 
            that.zombies1Door4.length === 0 && 
            that.zombies1AfterDoor4.length === 0 && 
            that.zombies1Door5.length === 0 && 
            that.zombies1AfterDoor5.length === 0 && 
            that.zombies1AfterDoor5Add.length === 0 && 
            that.zombies1Door6.length === 0 && 
            that.zombies1Door6Add.length === 0 && 
            that.zombies1AfterDoor6.length === 0) {
         that.audioZombWalk.pause();
         that.audioZombWalk.currentTime = 0;
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
                     pos[0] + size[0], 
                     pos[1] + size[1],
                     pos2[0], pos2[1],
                     pos2[0] + size2[0], 
                     pos2[1] + size2[1]);
   }

   checkCollisions() {
      let that = this;

      that.checkPlayerBounds(0, 0, 0, 0); //--- Проверка выхода игрока за границы карты ---
      that.checkPlayerStone(); //--- Проверка обхода игроком стен ---
      
      //--- обнаружение столкновений для всех врагов и пуль ---
      checkCollisionsAll(that.zombies1);
      checkCollisionsAll(that.zombies2);
      checkCollisionsAll(that.zombies3);
      checkCollisionsAll(that.zombies4);
      checkCollisionsAll(that.zombies1Door2);
      checkCollisionsAll(that.zombies1Door2Add);
      checkCollisionsAll(that.zombies1AfterDoor2);
      checkCollisionsAll(that.zombies1Door3);
      checkCollisionsAll(that.zombies1Door3Add);
      checkCollisionsAll(that.zombies1AfterDoor3);
      checkCollisionsAll(that.zombies1AfterDoor3Add);
      checkCollisionsAll(that.zombies1Door4);
      checkCollisionsAll(that.zombies1AfterDoor4);
      checkCollisionsAll(that.zombies1Door5);
      checkCollisionsAll(that.zombies1AfterDoor5);
      checkCollisionsAll(that.zombies1AfterDoor5Add);
      checkCollisionsAll(that.zombies1Door6);
      checkCollisionsAll(that.zombies1Door6Add);
      checkCollisionsAll(that.zombies1AfterDoor6);

      if (that.doors1[0]) {
         checkCollisionsDoor(that.doors1);//--- Проверка выстрела в дверь №1----
      }

      if (!that.doors1[0] && that.doors2[0]) {
         checkCollisionsDoor(that.doors2);//--- Проверка выстрела в дверь №2----
      }

      if (!that.doors1[0] && !that.doors2[0] && that.doors3[0]) {
         checkCollisionsDoor(that.doors3);//--- Проверка выстрела в дверь №3----
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && that.doors4[0]) {
         checkCollisionsDoor(that.doors4);//--- Проверка выстрела в дверь №4----
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && that.doors5[0]) {
         checkCollisionsDoor(that.doors5);//--- Проверка выстрела в дверь №5----
      }
      
      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && !that.doors5[0] && that.doors6[0]) {
         checkCollisionsDoor(that.doors6);//--- Проверка выстрела в дверь №6----
      }

      //--- Обработка выстрелов в двери ---
      function checkCollisionsDoor(doors) {
         let pos1 = doors[0].pos;
         let size1 = doors[0].sprite.size;

         for (let j = 0; j < that.bullets.length; j++) {
            let posBall = that.bullets[j].pos;
            let sizeBall = that.bullets[j].sprite.size;

            if (that.boxCollides(pos1, size1, posBall, sizeBall)) {
               that.audioExplosionDoor.play();

               switch (doors) {
                  case that.doors1:
                     that.makeZombiesDoor1(); //--- Появление зомби после попадания в дверь №1 ---
                     break;

                  case that.doors2:
                     that.makeZombiesDoor2(); //--- Появление зомби после попадания в дверь №2 ---
                     break;

                  case that.doors3:
                     that.makeZombiesDoor3(); //--- Появление зомби после попадания в дверь №3 ---
                     break;

                  case that.doors4:
                     that.makeZombiesDoor4(); //--- Появление зомби после попадания в дверь №4 ---
                     break;

                  case that.doors5:
                     that.makeZombiesDoor5(); //--- Появление зомби после попадания в дверь №5 ---
                     break;

                  case that.doors6:
                     that.makeZombiesDoor6(); //--- Появление зомби после попадания в дверь №6 ---
                     break;
               }

               //--- Удаление двери при попадании ---
               doors.splice(0, 1);

               //--- Взрыв при попадании ---
               that.explosions.push({
                  pos: pos1,
                  sprite: new Sprite("images/explosion.png", [0, 0], [256, 256], 16, [0, 1, 2, 3, 4, 5], null, true, 0)
               });

               //--- Удаление пули ---
               that.bullets.splice(j, 1);

               break;
            }
         }
      }
           
      //--- Обработка выстрелов в зомби ---
      function checkCollisionsAll(zombs) {
         for (let i = 0; i < zombs.length; i++) {
            let pos = zombs[i].pos;
            let size = zombs[i].sprite.size;
   
            for (let j = 0; j < that.bullets.length; j++) {
               let posBall = that.bullets[j].pos;
               let sizeBall = that.bullets[j].sprite.size;
   
               if (that.boxCollides(pos, size, posBall, sizeBall)) {
                  that.audioZombDead.play();
                  that.audioExplosion.play();

                  //--- Удаление зомби из массива при его убийстве ---
                  zombs.splice(i, that.numberKillZomby);
                  i--;
   
                  //--- Добавление очков ---
                  that.score += 1;

                  if (that.score === 51) {
                     that.gameWin();
                  }
   
                  //--- Взрыв при попадании ---
                  if (that.ball === "gan" || that.ball === "riffle") {
                     that.explosions.push({
                        pos: pos,
                        sprite: new Sprite("images/explosion.png", [0, 0], [256, 256], 16, [0, 1, 2, 3, 4, 5], null, true, 0)
                     });
                  }
   
                  //--- Удаление пули ---
                  that.bullets.splice(j, 1);
                  break;
               }             
            }
   
            if (that.boxCollides(pos, size, that.player.pos, that.player.sprite.size)) {
               that.gameOver();
            }
         }
      }
   }

   //--- Проверка выхода игрока за пределы карты ---
   checkPlayerBounds(x1, x2, y1, y2) {
      let that = this;

      if (that.player.pos[0] < that.player.width + x1) {
         that.player.pos[0] = that.player.width + x1;
      } else if (that.player.pos[0] > that.canvas.width - that.player.width - x2) {
         that.player.pos[0] = that.canvas.width - that.player.width - x2;
      }
  
      if (that.player.pos[1] < that.player.width + y1) {
         that.player.pos[1] = that.player.width + y1;
      } else if (that.player.pos[1] > that.canvas.height - that.player.width - y2) {
         that.player.pos[1] = that.canvas.height - that.player.width - y2;
      }
   }

   //--- Проверка перемещения игрока по карте ---
   checkPlayerStone() {
      let that = this;

      let doorPosX = 100 + 128 * 5;
      let doorPosY = that.canvas.height - 200;

      let pos2 = that.player.pos;
      let size2 = that.player.sprite.size;

      if (that.doors1[0]) {
         if (that.player.pos[1] < doorPosY) {
            that.player.pos[1] = doorPosY;
         }
      }     

      if (!that.doors1[0] && that.doors2[0]) {
         if (that.boxCollides([0, doorPosY], [doorPosX - that.player.width/2, 0], pos2, size2) || 
               that.boxCollides([doorPosX + 128, doorPosY], [that.canvas.width, 0], pos2, size2)) {
            that.player.pos[1] = doorPosY;
         }

         if (that.player.pos[1] < doorPosY - 30) {
            that.checkPlayerBounds(30, that.canvas.width/2 + that.player.width*1.5, 30, 30);
         }

         if (that.boxCollides([doorPosX - that.player.width/2, 0], [0, doorPosY], pos2, size2)) {
            that.player.pos[0] = doorPosX - that.player.width/2;
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && that.doors3[0]) {
         if (that.boxCollides([0, doorPosY], [doorPosX - that.player.width/2, 0], pos2, size2) || 
               that.boxCollides([doorPosX + 128, doorPosY], [that.canvas.width, 0], pos2, size2)) {
            that.player.pos[1] = doorPosY;
         }
         
         if (that.player.pos[1] < doorPosY - 30) {
            that.checkPlayerBounds(30, that.canvas.width/2 + that.player.width*1.5, 30, 30);
         }

         if (that.boxCollides([doorPosX - that.player.width/2, 0], [0, doorPosY-300], pos2, size2) || 
               that.boxCollides([doorPosX - that.player.width/2, doorPosY-128], [0, 128], pos2, size2)) {
            that.player.pos[0] = doorPosX - that.player.width/2;
         }

         if (that.player.pos[0] < doorPosX - 100 && that.player.pos[1] < doorPosY - 30) {
            that.checkPlayerBounds(30, that.canvas.width/2 + that.player.width*3.8, 470, doorPosY - 620);

            if (!that.walls2[0]) {
               that.audioFallWall.play();
               that.walls2.push(
                  {
                     pos: [100 + 128 * that.alfaDoor - 40, that.canvas.height - 300 - 35 - 128],
                     sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
                  },
               );

               that.makeZombiesAfterDoor2(); //--- Появление зомби после прохода за 2-ую дверь ---
            }
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && that.doors4[0]) {
         that.checkPlayerBounds(30, that.canvas.width/2 + that.player.width*3.8, 30, doorPosY - 620);

         if (that.boxCollides([0, doorPosY], [doorPosX - that.player.width/2, 0], pos2, size2) || 
               that.boxCollides([doorPosX + 128, doorPosY], [that.canvas.width, 0], pos2, size2)) {
            that.player.pos[1] = doorPosY;
         }
         
         if (that.player.pos[1] < doorPosY - 30) {
            that.checkPlayerBounds(30, that.canvas.width/2 + that.player.width*1.5, 30, 30);
         }

         if (that.boxCollides([doorPosX - that.player.width/2, 0], [0, doorPosY-300], pos2, size2) || 
               that.boxCollides([doorPosX - that.player.width/2, doorPosY-128], [0, 128], pos2, size2)) {
            that.player.pos[0] = doorPosX - that.player.width/2;
         }

         if (that.boxCollides([30, 545], [287, 0], pos2, size2) || 
               that.boxCollides([460, 545], [that.canvas.width/2 + that.player.width*3.8, 0], pos2, size2)) {
            that.player.pos[1] = 545;
         } 
      }  

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && that.doors4[0] && 
            that.player.pos[1] < 450) {
         that.checkPlayerBounds(30, that.canvas.width/2 + that.player.width*3.8, 30, 600);

         if (!that.walls3[0]) {
            that.audioFallWall.play();
            that.walls3.push(
               {
                  pos: [100 + 128 * 2, that.canvas.height - 250 - 128*3],
                  sprite: new Sprite("images/walls_stone.png", [0, 125], [128, 128])
               },
            );

            that.makeZombiesAfterDoor3(); //--- Появление зомби после прохода за 3-ую дверь ---
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0]) {
         if (that.boxCollides([680, 30], [0, 300], pos2, size2) || 
               that.boxCollides([680, 475], [0, 500], pos2, size2)) {
            that.player.pos[0] = 680 - that.player.width;
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && 
            (that.player.pos[0] + that.player.width < 690)) {
         that.checkPlayerBounds(30, 1070, 30, 600);
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && that.doors5[0] && 
            (that.player.pos[0] + that.player.width > 760)) {
         that.checkPlayerBounds(710 - that.player.width, 1070, 30, 235);

         if (!that.walls4[0]) {
            that.audioFallWall.play();
            that.walls4.push(
               {
                  pos: [100 + 128 * 5 - 40, that.canvas.height - 300 - 35 - 128*3],
                  sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
               },
            );
         }

         if (!that.walls5[0]) {
            that.audioFallWall.play();
            that.walls5.push(
               {
                  pos: [100 + 128 * 5, that.canvas.height - 300],
                  sprite: new Sprite("images/walls_stone.png", [0, 128], [128, 128])
               },
            );

            that.makeZombiesAfterDoor4(); //--- Появление зомби после прохода за 4-ую дверь ---
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && !that.doors5[0] && that.doors6[0]) {
         that.checkPlayerBounds(710 - that.player.width, 690, 30, 235);

         if (that.boxCollides([850, 30], [0, that.canvas.height - 550], pos2, size2) || 
               that.boxCollides([850, that.canvas.height - 322], [0, that.canvas.height - 300], pos2, size2)) {
            that.player.pos[0] = 850 - that.player.width;
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && 
            !that.doors5[0] && that.doors6[0] && that.player.pos[0] + that.player.width > 920) {
         that.checkPlayerBounds(875 - that.player.width, 690, 30, 235);

         if (!that.walls6[0]) {
            that.audioFallWall.play();
            that.walls6.push(
               {
                  pos: [100 + 128 * 6, that.canvas.height - 300 - 35 - 128],
                  sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
               },
            );

            that.makeZombiesAfterDoor5(); //--- Появление зомби после прохода за 5-ую дверь ---
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && 
         !that.doors5[0] && !that.doors6[0]) {
            that.checkPlayerBounds(875 - that.player.width, 30, 30, 235);

         if (that.boxCollides([1230, 30], [0, that.canvas.height - 400], pos2, size2)) {
            that.player.pos[0] = 1230 - that.player.width;
         }
      }

      if (!that.doors1[0] && !that.doors2[0] && !that.doors3[0] && !that.doors4[0] && 
         !that.doors5[0] && !that.doors6[0] && that.player.pos[0] + that.player.width > 1310) {
            that.checkPlayerBounds(1260 - that.player.width, 30, 30, 235);

         if (!that.walls7[0]) {
            that.audioFallWall.play();
            that.walls7.push(
               {
                  pos: [100 + 128 * 9, that.canvas.height - 300 - 35],
                  sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
               },
            );

            that.makeZombiesAfterDoor6(); //--- Появление зомби после прохода за 6-ую дверь ---
         }
      }
   }

   //--- Появление зомби после выстрела в дверь №1 ---
   makeZombiesDoor1() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed1.push(that.zombySpeed); //--- Установка скрости зомби
         that.zombySpeed2.push(that.zombySpeed + 200); //--- Установка скрости зомби
         that.zombySpeed3.push(that.zombySpeed) + 50; //--- Установка скрости зомби

         that.zombies1.push(
            {
               pos: [that.canvas.width - 150, that.canvas.height - 130],
               sprite: new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            }
         );
   
         that.zombies2.push(
            {
               pos: [150, that.canvas.height - 130],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            }
         );
   
         that.zombies3.push(
            {
               pos: [750, 140],
               sprite: new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );
      }
      
      that.timerId1 = setInterval(() => {
         goZombies()
      }, 5000);

      setTimeout(stopZombies, 14000);

      function stopZombies() {
         clearInterval(that.timerId1);
      }
   }

   //--- Появление зомби после выстрела в дверь №2 ---
   makeZombiesDoor2() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed5.push(that.zombySpeed + 50); //--- Установка скрости зомби
         that.zombySpeed5Add.push(that.zombySpeed + 260); //--- Установка скрости зомби

         that.zombies1Door2.push(
            {
               pos: [150, that.canvas.height - 460],
               sprite: new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            }
         );

         that.zombies1Door2Add.push(
            {
               pos: [750, 140],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );
      }

      that.timerId2 = setInterval(() => {
         goZombies()
      }, 2500);

      setTimeout(stopZombies, 8000);

      function stopZombies() {
         clearInterval(that.timerId2);
      }
   }


   //--- Появление зомби после прохода за дверь №2 ---
   makeZombiesAfterDoor2() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed6.push(that.zombySpeed + 200); //--- Установка скрости зомби

         that.zombies1AfterDoor2.push(
            {
               pos: [150, that.canvas.height - 460],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            }
         );
      }

      that.timerId3 = setInterval(() => {
         goZombies()
      }, 3000);

      setTimeout(stopZombies, 8000);

      function stopZombies() {
         clearInterval(that.timerId3);
      }
   }

   //--- Появление зомби после выстрела в дверь №3 ---
   makeZombiesDoor3() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed7.push(that.zombySpeed + 150); //--- Установка скрости зомби
         that.zombySpeed8.push(that.zombySpeed + 200); //--- Установка скрости зомби

         that.zombies1Door3.push(
            {
               pos: [360, that.canvas.height - 250],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI)
            }
         );

         that.zombies1Door3Add.push(
            {
               pos: [360, 140],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );
      }

      that.timerId4 = setInterval(() => {
         goZombies()
      }, 3000);

      setTimeout(stopZombies, 5000);

      function stopZombies() {
         clearInterval(that.timerId4);
      }
   }

   //--- Появление зомби после прохода за дверь №3 ---
   makeZombiesAfterDoor3() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed9.push(that.zombySpeed + 60); //--- Установка скрости зомби
         that.zombySpeed10.push(that.zombySpeed + 100); //--- Установка скрости зомби

         that.zombies1AfterDoor3.push(
            {
               pos: [360, 140],
               sprite: new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );

         that.zombies1AfterDoor3Add.push(
            {
               pos: [90, 300],
               sprite: new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            }
         );
      }

      that.timerId5 = setInterval(() => {
         goZombies()
      }, 3000);

      setTimeout(stopZombies, 6000);

      function stopZombies() {
         clearInterval(that.timerId5);
      }
   }

   //--- Появление зомби после выстрела в дверь №4 ---
   makeZombiesDoor4() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed11.push(that.zombySpeed + 210); //--- Установка скрости зомби

         that.zombies1Door4.push(
            {
               pos: [90, 300],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, -Math.PI/2)
            }
         );
      }

      that.timerId6 = setInterval(() => {
         goZombies()
      }, 3500);

      setTimeout(stopZombies, 5000);

      function stopZombies() {
         clearInterval(that.timerId6);
      }
   }

   //--- Появление зомби после прохода за дверь №4 ---
   makeZombiesAfterDoor4() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed12.push(that.zombySpeed + 60); //--- Установка скрости зомби

         that.zombies1AfterDoor4.push(
            {
               pos: [750, 140],
               sprite: new Sprite("images/zombie1_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );
      }

      that.timerId7 = setInterval(() => {
         goZombies()
      }, 3000);

      setTimeout(stopZombies, 8000);

      function stopZombies() {
         clearInterval(that.timerId7);
      }
   }

   //--- Появление зомби после выстрела в дверь №5 ---
   makeZombiesDoor5() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed13.push(that.zombySpeed + 280); //--- Установка скрости зомби

         that.zombies1Door5.push(
            {
               pos: [750, 140],
               sprite: new Sprite("images/zombie2_male_walk.png", [0, 0], [115, 117], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );
      }

      that.timerId8 = setInterval(() => {
         goZombies()
      }, 3000);

      setTimeout(stopZombies, 8000);

      function stopZombies() {
         clearInterval(that.timerId8);
      }
   }

   //--- Появление зомби после прохода за дверь №5 ---
   makeZombiesAfterDoor5() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed14.push(that.zombySpeed + 280); //--- Установка скрости зомби
         that.zombySpeed15.push(that.zombySpeed + 280); //--- Установка скрости зомби

         that.zombies1AfterDoor5.push(
            {
               pos: [960, 140],
               sprite: new Sprite("images/zombie3_male_walk.png", [0, 0], [133.5, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );

         that.zombies1AfterDoor5Add.push(
            {
               pos: [1110, 140],
               sprite: new Sprite("images/zombie4_male_walk.png", [0, 0], [134, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );
      }

      that.timerId9 = setInterval(() => {
         goZombies()
      }, 4000);

      setTimeout(stopZombies, 8000);

      function stopZombies() {
         clearInterval(that.timerId9);
      }
   }

   //--- Появление зомби после выстрела в дверь №6 ---
   makeZombiesDoor6() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed16.push(that.zombySpeed + 330); //--- Установка скрости зомби
         that.zombySpeed17.push(that.zombySpeed + 330); //--- Установка скрости зомби

         that.zombies1Door6.push(
            {
               pos: [980, 140],
               sprite: new Sprite("images/zombie3_male_walk.png", [0, 0], [133.5, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, 0)
            }
         );

         that.zombies1Door6Add.push(
            {
               pos: [that.canvas.width - 100, that.canvas.height - 335],
               sprite: new Sprite("images/zombie4_male_walk.png", [0, 0], [134, 130], 4, [0, 1, 2, 3, 4, 5, 6, 7, 8], null, false, Math.PI/2)
            }
         );
      }

      that.timerId10 = setInterval(() => {
         goZombies()
      }, 4000);

      setTimeout(stopZombies, 8000);

      function stopZombies() {
         clearInterval(that.timerId10);
      }
   }

   //--- Появление зомби после прохода за дверь №6 ---   
   makeZombiesAfterDoor6() {
      let that = this;
      that.audioZombWalk.play();

      goZombies();

      function goZombies() {
         that.zombySpeed18.push(that.zombySpeed); //--- Установка скорости зомби

         that.zombies1AfterDoor6.push(
            {
               pos: [that.canvas.width - 200, that.canvas.height - 450],
               sprite: new Sprite("images/boss1.png", [0, 0], [576, 576], 4, [0, 1, 2, 3, 4, 7], null, false, Math.PI/2)
            },
         );
      }
   }

   //--- Отрисовка сущностей --- 
   //--- отображения сцены каждого фрейма ---
   renderGame() {
      let that = this;

      //--- отрисовка игрока и зомби ---
      if (!that.isGameOver) {
         that.renderPlayer(that.player);
         that.renderEntities(that.bullets);
         that.renderEntities(that.zombies1);
         that.renderEntities(that.zombies2);
         that.renderEntities(that.zombies3);
         that.renderEntities(that.zombies4);
         that.renderEntities(that.zombies1Door2);
         that.renderEntities(that.zombies1Door2Add);
         that.renderEntities(that.zombies1AfterDoor2);
         that.renderEntities(that.zombies1Door3);
         that.renderEntities(that.zombies1Door3Add);
         that.renderEntities(that.zombies1AfterDoor3);
         that.renderEntities(that.zombies1AfterDoor3Add);
         that.renderEntities(that.zombies1Door4);
         that.renderEntities(that.zombies1AfterDoor4);
         that.renderEntities(that.zombies1Door5);
         that.renderEntities(that.zombies1AfterDoor5);
         that.renderEntities(that.zombies1AfterDoor5Add);
         that.renderEntities(that.zombies1Door6);
         that.renderEntities(that.zombies1Door6Add);
         that.renderEntities(that.zombies1AfterDoor6);
      }

      that.renderEntities(that.explosions);

      that.renderEntities(that.walls);
      that.renderEntities(that.walls2);
      that.renderEntities(that.walls3);
      that.renderEntities(that.walls4);
      that.renderEntities(that.walls5);
      that.renderEntities(that.walls6);
      that.renderEntities(that.walls7);

      that.renderEntities(that.doors1);
      that.renderEntities(that.doors2);
      that.renderEntities(that.doors3);
      that.renderEntities(that.doors4);
      that.renderEntities(that.doors5);
      that.renderEntities(that.doors6);
   }

   renderPlayer(obj) {
      let that = this;

      that.ctx.translate(obj.pos[0], obj.pos[1]);
      obj.sprite.render(that.ctx);
   }

   renderEntities(list) {
      let that = this;

      for (let i = 0; i < list.length; i++) {
         that.renderEntity(list[i]);
      }    
   }

   renderEntity(entity) {
      let that = this;

      that.ctx.save();
      that.ctx.translate(entity.pos[0], entity.pos[1]);
      entity.sprite.render(that.ctx);
      that.ctx.restore();
   }

   //--- Game over ---
   gameOver() {
      this.gameTime = 0;

      this.audioTheme.pause();
      this.audioTheme.currentTime = 0;

      this.audioZombWalk.pause();
      this.audioZombWalk.currentTime = 0;

      this.gameOverDiv.style.display = "block";
      this.btnPlayAgain.style.display = "block";

      this.isGameOver = true;      
   }

   //--- Game win ---
   gameWin() {
      this.audioTheme.pause();
      this.audioTheme.currentTime = 0;

      this.gameOverDiv.style.display = "block";
      this.gameOverTxt.innerHTML = "completed";
      this.gameOverTxt.style.color = "#63d268";
      this.btnPlayAgain.style.display = "block";

      this.isGameOver = true;      
   }

   //--- Перезапуск игры ---
   reset() {
      let that = this;

      clearInterval(that.timerId1);
      clearInterval(that.timerId2);
      clearInterval(that.timerId3);
      clearInterval(that.timerId4);
      clearInterval(that.timerId5);
      clearInterval(that.timerId6);
      clearInterval(that.timerId7);
      clearInterval(that.timerId8);
      clearInterval(that.timerId9);
      clearInterval(that.timerId10);

      this.audioTheme.play();

      this.gameOverDiv.style.display = "none";
      this.btnPlayAgain.style.display = "none";
      
      this.isGameOver = false;
      this.gameTime = 0;
      this.score = 0;

      this.zombies1 = [];
      this.zombies2 = [];
      this.zombies3 = [];
      this.zombies4 = [];

      this.zombies1Door2 = [];
      this.zombies1Door2Add = [];
      this.zombies1AfterDoor2 = [];
      this.zombies1Door3 = [];
      this.zombies1Door3Add = [];
      this.zombies1AfterDoor3 = [];
      this.zombies1AfterDoor3Add = [];
      this.zombies1Door4 = [];
      this.zombies1AfterDoor4 = [];
      this.zombies1Door5 = [];
      this.zombies1AfterDoor5 = [];
      this.zombies1AfterDoor5Add = [];
      this.zombies1Door6 = [];
      this.zombies1Door6Add = [];
      this.zombies1AfterDoor6 = [];

      this.walls = [];
      this.walls2 = [];
      this.walls3 = [];
      this.walls4 = [];
      this.walls5 = [];
      this.walls6 = [];
      this.walls7 = [];

      this.doors1 = [];
      this.doors2 = [];
      this.doors3 = [];
      this.doors4 = [];
      this.doors5 = [];
      this.doors6 = [];

      this.bullets = [];

      //--- Начальные установки игры ---
      this.player = that.playerManGun;
      this.person = "man";
      this.ball = "gan";
      this.intervalBullet = 800;
      this.numberKillZomby = 1;
      this.numberScore = 100;
      let numDoor = null;

      //--- Первоначальное положение игрока ---
      this.player.pos = [this.canvas.width/2 - this.player.width/2, this.canvas.height - this.player.height/2];

      if (that.canvas.width < 1750) {
         that.alfaDoor = 4;
         numDoor = 2.5;
      } else {
         that.alfaDoor = 5;
         numDoor = 3;
      }

      if (that.canvas.width < 1335) {
         that.alfaDoor = 3;
         numDoor = 1;
      }

      //--- Добавление стен ---
      for (let i = 0; i <= 1; i++) {
         that.walls.push(
            {
               pos: [100 + 128 * i, that.canvas.height - 250 - 128*numDoor],
               sprite: new Sprite("images/walls_stone.png", [0, 125], [128, 128])
            }
         );
      }

      for (let i = 3; i <= 4; i++) {
         that.walls.push(
            {
               pos: [100 + 128 * i, that.canvas.height - 250 - 128*numDoor],
               sprite: new Sprite("images/walls_stone.png", [0, 125], [128, 128])
            }
         );
      }
      
      this.walls.push(
         {
            pos: [100, 100],
            sprite: new Sprite("images/walls_stone.png", [384, 128], [128, 128])
         },

         {
            pos: [that.canvas.width - 100, 100],
            sprite: new Sprite("images/walls_stone.png", [128, 0], [128, 128])
         },

         {
            pos: [that.canvas.width - 100, that.canvas.height - 300],
            sprite: new Sprite("images/walls_stone.png", [384, 0], [128, 128])
         },

         {
            pos: [100, that.canvas.height - 300],
            sprite: new Sprite("images/walls_stone.png", [128, 128], [128, 128])
         },

         //--------------------
         {
            pos: [100 + 128 * that.alfaDoor - 40, that.canvas.height - 300 - 35],
            sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
         },

         {
            pos: [100 + 128 * that.alfaDoor - 40, that.canvas.height - 300 - 35 - 128*2],
            sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
         },

         {
            pos: [100 + 128 * that.alfaDoor - 40, that.canvas.height - 300 - 35 - 128*4],
            sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
         },

         {
            pos: [100 + 128 * that.alfaDoor - 40, that.canvas.height - 300 - 35 - 128*that.alfaDoor],
            sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
         },

         //---------------------

         {
            pos: [268 + 128 * that.alfaDoor - 40, that.canvas.height - 300 - 35],
            sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
         },


         //----------мебель, кусты-----------
         {
            pos: [100 + 128 * that.alfaDoor, 130],
            sprite: new Sprite("images/locker.png", [0, 0], [179, 179])
         },

         {
            pos: [that.canvas.width - 125, that.canvas.height - 200 - 256],
            sprite: new Sprite("images/locker2.png", [0, 0], [512, 512], null, null, null, false, Math.PI/2)
         },

         {
            pos: [110, that.canvas.height - 450],
            sprite: new Sprite("images/chair.png", [0, 0], [128, 128], null, null, null, false, -Math.PI/2)
         },

         {
            pos: [200, that.canvas.height - 450],
            sprite: new Sprite("images/table_mini.png", [0, 0], [307, 307], null, null, null, false, -Math.PI/2)
         },

         {
            pos: [that.canvas.width - 250, 300],
            sprite: new Sprite("images/bed.png", [0, 0], [512, 512], null, null, null, false, Math.PI/2)
         },

         {
            pos: [that.canvas.width - 600, 310],
            sprite: new Sprite("images/table.png", [0, 0], [512, 512], null, null, null, false, Math.PI/2)
         },

         {
            pos: [260, 125],
            sprite: new Sprite("images/locker2.png", [0, 0], [512, 512], null, null, null, false, 2*Math.PI)
         },

         {
            pos: [1050, 125],
            sprite: new Sprite("images/sofa.png", [0, 0], [256, 256])
         },

         {
            pos: [1050, 370],
            sprite: new Sprite("images/tele.png", [0, 0], [128, 128], null, null, null, false, Math.PI)
         },
         
      );

      for (let i = 1; i < 6; i++) {
         this.walls.push(
            {
               pos: [50 * 2 * i, that.canvas.height - 50],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            },

            {
               pos: [50 * 2 * i, that.canvas.height - 150],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            },

            {
               pos: [that.canvas.width - 50 * 2 * i, that.canvas.height - 50],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            },

            {
               pos: [that.canvas.width - 50 * 2 * i, that.canvas.height - 150],
               sprite: new Sprite("images/plant_1.png", [0, 0], [190, 185])
            }
         );
      }

      for (let i = 0; i < 10; i++) {
         this.walls.push(
            {
               pos: [110 + 55 * i, that.canvas.height - 310],
               sprite: new Sprite("images/plant_2.png", [0, 0], [128, 128])
            },

            {
               pos: [110 + 55 * i, that.canvas.height - 640],
               sprite: new Sprite("images/plant_2.png", [0, 0], [128, 128])
            },
         );
      }

      for (let i = 1; i < 13; i++) {
         this.walls.push(
            {
               pos: [that.canvas.width - 60 - 50 * i, 110],
               sprite: new Sprite("images/plant_2.png", [0, 0], [128, 128])
            },
         );
      }

      for (let i = 0; i < 9; i++) {
         this.walls.push(
            {
               pos: [880, 110 + 50 * i],
               sprite: new Sprite("images/plant_2.png", [0, 0], [128, 128])
            },
         );
      }
      //-----------------------------

      let limitX = Math.round((that.canvas.width-128*2)/128);

      for (let i = 2; i <= that.alfaDoor; i++) {
         that.walls.push(
            {
               pos: [268 + 128 * that.alfaDoor - 40, that.canvas.height - 300 - 35 - 128*i],
               sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
            }
         );
      }

      for (let i = 1; i <= that.alfaDoor; i++) {
         that.walls.push(
            {
               pos: [268 + 128 * (that.alfaDoor + 3) - 40, that.canvas.height - 300 - 35 - 128*i],
               sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
            }
         );
      }

      for (let i = 1; i <= limitX; i++) {
         that.walls.push(
            {
               pos: [100 + 128 * i, 100],
               sprite: new Sprite("images/walls_stone.png", [0, 0], [128, 128])
            }
         );
      }

      for (let i = 1; i <= limitX/3; i++) {
         that.walls.push(
            {
               pos: [100 + 128 * i, that.canvas.height - 300],
               sprite: new Sprite("images/walls_stone.png", [0, 128], [128, 128])
            },
         );
      }     

      for (let i = 1 + Math.ceil(limitX/3); i <= limitX; i++) {
         that.walls.push(
            {
               pos: [100 + 128 * i, that.canvas.height - 300],
               sprite: new Sprite("images/walls_stone.png", [0, 128], [128, 128])
            }
         );
      }

      let limitY = (that.canvas.height-128*3)/128;

      for (let i = 1; i <= limitY; i++) {
         that.walls.push(
            {
               pos: [that.canvas.width - 100, 100 + 128 * i],
               sprite: new Sprite("images/walls_stone.png", [256, 0], [128, 128])
            },

            {
               pos: [100, 100 + 128 * i],
               sprite: new Sprite("images/walls_stone.png", [256, 128], [128, 128])
            }
         );
      }

      //--- Добавление дверей ---
      this.doors1.push(
         {
            pos: [100 + 128 * that.alfaDoor, that.canvas.height - 300 + 45], //--- дверь ---
            sprite: new Sprite("images/walls_tree.png", [0, 128], [128, 35])
         },
      );

      this.doors2.push(
         {
            pos: [100 + 128 * that.alfaDoor - 85, that.canvas.height - 300 - 35 - 128],
            sprite: new Sprite("images/walls_tree.png", [128, 0], [30, 128])
         },
      );

      this.doors3.push(
         {
            pos: [100 + 128 * 2, that.canvas.height - 587],
            sprite: new Sprite("images/walls_tree.png", [0, 128], [128, 35])
         },
      );

      this.doors4.push(
         {
            pos: [100 + 128 * that.alfaDoor - 85, that.canvas.height - 300 - 35 - 128*3],
            sprite: new Sprite("images/walls_tree.png", [128, 0], [30, 128])
         },
      );

      this.doors5.push(
         {
            pos: [268 + 128 * that.alfaDoor - 85, that.canvas.height - 300 - 35 - 128],
            sprite: new Sprite("images/walls_tree.png", [128, 0], [30, 128])
         },
      );

      this.doors6.push(
         {
            pos: [268 + 128 * (that.alfaDoor + 3) - 85, that.canvas.height - 300 - 35],
            sprite: new Sprite("images/walls_tree.png", [128, 0], [30, 128])
         },
      );      
   }

   btnExit() {
      this.html.exitFullscreen(); //--- Выключение полноэкранного режима ---
   }
}


