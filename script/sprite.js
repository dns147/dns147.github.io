//--- Вспомогательный класс, который содержит логику анимации ---
// url - путь к изображению
// pos - x и y координаты изображения на спрайт карте
// size - размеры (только одного кадра)
// speed - скорость анимации в фрейм/с
// frames - массив индексов фреймов в порядке анимации
// dir - в каком направлении двигаться по спрайт карте: horizontal (по-умолчанию) или vertical
// once:true, если необходимо отобразить только один цикл анимации, false — по-умолчанию
// rad - поворот спрайта ---

function Sprite(url, pos, size, speed, frames, dir, once, rad) {
    this.pos = pos;
    this.size = size;
    this.speed = typeof speed === "number" ? speed : 0;
    this.frames = frames;
    this.rad = rad;
    this._index = 0;
    this.url = url;
    this.dir = dir || "horizontal";
    this.once = once;
};

Sprite.prototype = {
    update: function(dt) {
        this._index += this.speed*dt;
    },

    render: function(ctx) {
        let frame;

        if (this.speed > 0) {
            let max = this.frames.length;
            let idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        }
        else {
            frame = 0;
        }

        let x = this.pos[0];
        let y = this.pos[1];

        if (this.dir == "vertical") {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }

        ctx.rotate(this.rad);

        ctx.drawImage(resources.get(this.url),
                        x, y,
                        this.size[0], this.size[1],
                        -this.size[0]/2, -this.size[1]/2,
                        this.size[0], this.size[1]);

        ctx.resetTransform();
    }
};

window.Sprite = Sprite;
