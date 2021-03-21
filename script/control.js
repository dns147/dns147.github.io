//--- Обработчик нажатия клавиш ---

(function() {
    let _controlKeys = {};

    document.addEventListener("keydown", _setKeyDown);
    document.addEventListener("keyup", _setKeyUp);

    function _setKeyDown(event) {
        _controlKeys[event.code] = true;
    }
    
    function _setKeyUp(event) {
        _controlKeys[event.code] = false;
    }

    //--- Обработка нажатия клавиш ---
    function handleKeys(dt, that) {

        //--- Движение вверх ---
        if (_controlKeys["ArrowUp"] && 
                (that.player.rotate === 0 || 
                that.player.rotate === Math.PI/2 || 
                that.player.rotate === -Math.PI/2)) {
        
            that.player.rotate = -Math.PI;
            that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);
        }       

        if (_controlKeys["ArrowUp"]) {
            that.player.pos[1] -= that.playerSpeed * dt;
        } 
        
        if (!_controlKeys["ArrowUp"] && that.player.rotate === -Math.PI) {
        that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);    
        }
        
        //--- Стрельба вверх ---
        if (!_controlKeys["ArrowUp"] && 
                that.player.rotate === -Math.PI && 
                _controlKeys["Space"] && 
                !that.isGameOver && 
                Date.now() - that.lastFire > that.intervalBullet) {

            _bullet("up", that.person, that.player.rotate, that);
        }

        //--- Движение вниз ---
        if (_controlKeys["ArrowDown"] && 
                (that.player.rotate === -Math.PI || 
                that.player.rotate === Math.PI/2 || 
                that.player.rotate === -Math.PI/2)) {

            that.player.rotate = 0;
            that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);
        }
        
        if (_controlKeys["ArrowDown"]) {
            that.player.pos[1] += that.playerSpeed * dt;
        }

        if (!_controlKeys["ArrowDown"] && that.player.rotate === 0) {
            that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);
        }

        //--- Стрельба вниз ---
        if (!_controlKeys["ArrowDown"] && 
                that.player.rotate === 0 && 
                _controlKeys["Space"] && 
                !that.isGameOver && 
                Date.now() - that.lastFire > that.intervalBullet) {

            _bullet("down", that.person, that.player.rotate, that);
        }

        //--- Движение влево ---
        if (_controlKeys["ArrowLeft"] &&
                (that.player.rotate === -Math.PI || 
                that.player.rotate === 0 || 
                that.player.rotate === -Math.PI/2)) {

            that.player.rotate = Math.PI/2;
            that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);
        }
        
        if (_controlKeys["ArrowLeft"]) {
            that.player.pos[0] -= that.playerSpeed * dt;
        }

        if (!_controlKeys["ArrowLeft"] && that.player.rotate === Math.PI/2) {
            that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);
        }
        
        //--- Стрельба влево ---
        if (!_controlKeys["ArrowLeft"] && 
                that.player.rotate === Math.PI/2 && 
                _controlKeys["Space"] && 
                !that.isGameOver && 
                Date.now() - that.lastFire > that.intervalBullet) {

            _bullet("left", that.person, that.player.rotate, that);
        }

        //--- Движение вправо ---
        if (_controlKeys["ArrowRight"] &&
                (that.player.rotate === -Math.PI || 
                that.player.rotate === 0 || 
                that.player.rotate === Math.PI/2)) {

            that.player.rotate = -Math.PI/2;
            that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);
        }
        
        if (_controlKeys["ArrowRight"]) {
            that.player.pos[0] += that.playerSpeed * dt;
        }

        if (!_controlKeys["ArrowRight"] && that.player.rotate === -Math.PI/2) {
            that.player.sprite = getPlayerSprite.getWalk(that.person, that.player.rotate);
        }
        
        //--- Стрельба вправо ---
        if (!_controlKeys["ArrowRight"] && 
                that.player.rotate === -Math.PI/2 && 
                _controlKeys["Space"] && 
                !that.isGameOver && 
                Date.now() - that.lastFire > that.intervalBullet) {

            _bullet("right", that.person, that.player.rotate, that);
        }

        //--- Установка мины ---
        if ((_controlKeys["ControlLeft"] || _controlKeys["ControlRight"]) && 
                !that.isGameOver && 
                Date.now() - that.lastMine > that.intervalMines) {

            let x = that.player.pos[0];
            let y = that.player.pos[1];

            that.mines.push({ 
                pos: [x, y],
                sprite: new Sprite("images/mine2.png", [0, 0], [41, 41])
            });
            
            that.clickMine.play();
            that.lastMine = Date.now();
        }
    }

    //--- Координаты, спрайт и звук выстрела пули ---
    function _bullet(direction, plr, rot, that) {

        _getBulletXY(that.ball, plr, direction, that);

        let x = that.player.pos[0] + that.ballX;
        let y = that.player.pos[1] + that.ballY;

        that.bullets.push({ 
            pos: [x, y],
            dir: direction,
            sprite: _makeSpriteBullet(that.ball, rot) 
        });

        that.lastFire = Date.now();
    }

    //--- Координаты распложения пули относительно оружия и звука выстрела ---
    function _getBulletXY(bul, plr, dir, that) {

        if (plr === "man" || plr === "manRiffle" || plr === "manFire") {
            //---"gan"---
            if (bul === "gan" && dir === "up") {
                that.ballX = 17;
                that.ballY = -40;
                that.audioGun.play();
            }

            if (bul === "gan" && dir === "down") {
                that.ballX = -17;
                that.ballY = 40;
                that.audioGun.play();
            }

            if (bul === "gan" && dir === "left") {
                that.ballX = -40;
                that.ballY = -17;
                that.audioGun.play();
            }

            if (bul === "gan" && dir === "right") {
                that.ballX = 40;
                that.ballY = 17;
                that.audioGun.play();
            }

            //---"riffle"---
            if (bul === "riffle" && dir === "up") {
                that.ballX = 20;
                that.ballY = -50;
                that.audioRiffle.play();
            }

            if (bul === "riffle" && dir === "down") {
                that.ballX = -20;
                that.ballY = 55;
                that.audioRiffle.play();
            }

            if (bul === "riffle" && dir === "left") {
                that.ballX = -55;
                that.ballY = -20;
                that.audioRiffle.play();
            }

            if (bul === "riffle" && dir === "right") {
                that.ballX = 55;
                that.ballY = 20;
                that.audioRiffle.play();
            }

            //---"firethrower"---
            if (bul === "firethrower" && dir === "up") {
                that.ballX = 19;
                that.ballY = -45;
                that.audioFire.play();
            }

            if (bul === "firethrower" && dir === "down") {
                that.ballX = -21;
                that.ballY = 50;
                that.audioFire.play();
            }

            if (bul === "firethrower" && dir === "left") {
                that.ballX = -50;
                that.ballY = -18;
                that.audioFire.play();
            }

            if (bul === "firethrower" && dir === "right") {
                that.ballX = 45;
                that.ballY = 18;
                that.audioFire.play();
            }
        }

        if (plr === "girl" || plr === "girlRiffle" || plr === "girlFire") {
            //---"gan"---
            if (bul === "gan" && dir === "up") {
                that.ballX = 19;
                that.ballY = -35;
                that.audioGun.play();
            }

            if (bul === "gan" && dir === "down") {
                that.ballX = -19;
                that.ballY = 35;
                that.audioGun.play();
            }

            if (bul === "gan" && dir === "left") {
                that.ballX = -35;
                that.ballY = -18.5;
                that.audioGun.play();
            }

            if (bul === "gan" && dir === "right") {
                that.ballX = 35;
                that.ballY = 19;
                that.audioGun.play();
            }

            //---"riffle"---
            if (bul === "riffle" && dir === "up") {
                that.ballX = 19;
                that.ballY = -40;
                that.audioRiffle.play();
            }

            if (bul === "riffle" && dir === "down") {
                that.ballX = -19;
                that.ballY = 40;
                that.audioRiffle.play();
            }

            if (bul === "riffle" && dir === "left") {
                that.ballX = -40;
                that.ballY = -18;
                that.audioRiffle.play();
            }

            if (bul === "riffle" && dir === "right") {
                that.ballX = 40;
                that.ballY = 18;
                that.audioRiffle.play();
            }

            //---"firethrower"---
            if (bul === "firethrower" && dir === "up") {
                that.ballX = 15;
                that.ballY = -35;
                that.audioFire.play();
            }

            if (bul === "firethrower" && dir === "down") {
                that.ballX = -15;
                that.ballY = 35;
                that.audioFire.play();
            }

            if (bul === "firethrower" && dir === "left") {
                that.ballX = -35;
                that.ballY = -15;
                that.audioFire.play();
            }

            if (bul === "firethrower" && dir === "right") {
                that.ballX = 35;
                that.ballY = 15;
                that.audioFire.play();
            }
        }
    }
    
    //--- Выбор спрайта пули в зависимости от оружия ---
    function _makeSpriteBullet(bul, rot) {
        let newSprite = null;

        if (bul === "gan") {
        newSprite = new Sprite("images/bullet_gun.png", [0, 0], [10, 5], null, null, null, false, rot + Math.PI/2);
        }

        if (bul === "riffle") {
        newSprite = new Sprite("images/bullet_riffle.png", [0, 0], [25, 15], null, null, null, false, rot + Math.PI/2);
        }

        if (bul === "firethrower") {
        newSprite = new Sprite("images/electro_ball.png", [0, 0], [64, 64], null, null, null, false, rot + Math.PI/2);
        }

        return newSprite;
    }

    window.control = {
        handleKeys: handleKeys
    };

})(); 