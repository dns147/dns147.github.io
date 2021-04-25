//--- Получение спрайта игрока в зависимости от выбора персонажа и оружия ---

(function() {

    function getWalk(plr, rot) {
        let newSprite = null;
  
        if (plr === "man") {
           newSprite = new Sprite("images/man_walk_gun.png", [0, 0], [73, 90], 10, [0, 1, 2, 3, 4, 5], null, false, rot);
        }
  
        if (plr === "manRiffle") {
           newSprite = new Sprite("images/walk_riffle_man.png", [0, 0], [88, 125], 10, [0, 1, 2, 3, 4, 5], null, false, rot);
        }
  
        if (plr === "manFire") {
           newSprite = new Sprite("images/walk_firethrower_man.png", [0, 0], [89, 112], 10, [0, 1, 2, 3, 4, 5], null, false, rot);
        }
  
        if (plr === "girl") {
           newSprite = new Sprite("images/girl_walk_gun.png", [0, 0], [66, 77], 10, [0, 1, 2, 3, 4, 5], null, false, rot);
        }
  
        if (plr === "girlRiffle") {
           newSprite = new Sprite("images/girl_walk_riffle.png", [0, 0], [70, 109], 10, [0, 1, 2, 3, 4, 5], null, false, rot);
        }
  
        if (plr === "girlFire") {
           newSprite = new Sprite("images/girl_walk_firethower.png", [0, 0], [70, 91], 10, [0, 1, 2, 3, 4, 5], null, false, rot);
        }
  
        return newSprite;
    }
  
    function getIdle(plr, rot) {
        let newSprite = null;
  
        if (plr === "man") {
           newSprite = new Sprite("images/man_idle_gun.png", [0, 0], [74.5, 89], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, rot);
        }
  
        if (plr === "manRiffle") {
           newSprite = new Sprite("images/idle_riffle_man.png", [0, 0], [87.5, 127], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, rot);
        }
  
        if (plr === "manFire") {
           newSprite = new Sprite("images/idle_firethrower_man.png", [0, 0], [87.4, 115], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, rot);
        }
  
        if (plr === "girl") {
           newSprite = new Sprite("images/girl_idle_gun.png", [0, 0], [67.5, 77], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, rot);
        }
  
        if (plr === "girlRiffle") {
           newSprite = new Sprite("images/girl_idle_riffle.png", [0, 0], [71, 106], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, rot);
        }
  
        if (plr === "girlFire") {
           newSprite = new Sprite("images/girl_idle_firethower.png", [0, 0], [70.7, 90], 10, [0, 1, 2, 3, 4, 5, 6, 7], null, false, rot);
        }
  
        return newSprite;
    }

    window.getPlayerSprite = {
        getIdle: getIdle,
        getWalk: getWalk
    };
})(); 