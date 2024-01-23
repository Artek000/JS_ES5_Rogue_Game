function Game() {
}

Game.prototype.init = function () {
    var map = new Map();
    map.generateRandomMap();
    map.render();
    map.start();
};

function Map() {
    this.controller = new Controller();
    this.map = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ];
    this.entityMap = [
        {class: 'tile', walk: true}, // 0 field
        {class: 'tileW', walk: false}, // 1 wall
        {class: 'tileE', walk: false}, // 2 enemy
        {class: 'tileHP', walk: true}, // 3 flask
        {class: 'tileSW', walk: true}, // 4 sword
        {class: 'tileP', walk: false}, // 5 my char
    ];

    this.objMap = [];
    this.enemyGroup = [];
    this.flaskGroup = [];
    this.swordGroup = [];
}

Map.prototype.getMap = function () {
    return this.map;
};

Map.prototype.setMap = function (map) {
    this.map = map;
};

Map.prototype.setObjToMap = function (obj, x, y) {
    this.objMap.push({obj: obj, x: x, y: y});
};

Map.prototype.getObjFromMapByXY = function (x, y) {
    for (var i = 0; i < this.objMap.length; i++) {
        if (this.objMap[i].x === x && this.objMap[i].y === y) {
            return this.objMap[i];
        }
    }
};

Map.prototype.deleteObjFromMapByObj = function (obj) {
    for (var i = 0; i < this.objMap.length; i++) {
        if (this.objMap[i].obj === obj) {
            this.objMap.splice(i, 1);
        }
    }
};

Map.prototype.updateObjFromMapByObj = function (obj, x, y) {
    for (var i = 0; i < this.objMap.length; i++) {
        if (this.objMap[i].obj === obj) {
            this.objMap[i].x = x;
            this.objMap[i].y = y;
        }
    }
};

Map.prototype.render = function () {
    var entityMap = this.entityMap;
    var map = this.map;
    map.forEach(function (arr, Y) {
        arr.forEach(function (item, X) {
            var d = document.createElement('div');
            $(d).addClass('tile').addClass(entityMap[item].class).attr({'data-x' : X, 'data-y' : Y}).css({'left' : 30 * X + 'px', 'top' : 30 * Y + 'px'}).appendTo('.field');
        });
    });
};

Map.prototype.setCluster = function (x, y, entityId) {
    this.map[y][x] = entityId;
    if (entityId === 5) {
        var d = document.createElement('div');
        $(d).addClass('health')
    }
    $('.tile[data-x=\"' + x + '\"][data-y=\"' + y + '\"]').removeClass().addClass('tile').addClass(this.entityMap[entityId].class);
};

Map.prototype.getCluster = function (x, y) {
    return this.map[y][x];
};

Map.prototype.getEmptyRandomPos = function () {
    var map = this.map;
    var posY;
    var posX;
    var currEntityId = null;
    while (currEntityId !== 0) {
        posY = Math.floor(Math.random() * map.length);
        posX = Math.floor(Math.random() * map[posY].length);
        currEntityId = map[posY][posX];
    }
    return {x: posX, y: posY};
};

Map.prototype.generateRandomMap = function () {
    this.generateRandomRooms();
    this.generateRandomRoads();

    this.flaskGroup = [
        new Flask(this),
        new Flask(this),
        new Flask(this),
        new Flask(this),
        new Flask(this),
        new Flask(this),
        new Flask(this),
        new Flask(this),
        new Flask(this),
        new Flask(this)
    ];
    this.flaskGroup.forEach(function (flask, i) {
        flask.spawn();
    });

    this.swordGroup = [
        new Sword(this),
        new Sword(this)
    ];
    this.swordGroup.forEach(function (sword, i) {
        sword.spawn();
    });

    this.hero = new Hero(this.controller, this);
    this.hero.spawn();

    this.enemyGroup = [
        new Enemy(this),
        new Enemy(this),
        new Enemy(this),
        new Enemy(this),
        new Enemy(this),
        new Enemy(this),
        new Enemy(this),
        new Enemy(this),
        new Enemy(this),
        new Enemy(this)
    ];
    this.enemyGroup.forEach(function (enemy, i) {
        enemy.spawn();
        enemy.startAI();
    });
};

Map.prototype.start = function () {
    var _this = this;
    this.controller.startUpdateFrames(function () {
        _this.hero.update();
        _this.enemyGroup.forEach(function (enemy) {
            enemy.update();
        });
    });
};

Map.prototype.garbageRemove = function (obj) {
    var _this = this;
    if (Enemy.prototype.isPrototypeOf(obj)) {
        _this.enemyGroup.forEach(function (enemy, i) {
            if (enemy === obj) {
                _this.enemyGroup[i] = null;
                _this.enemyGroup.splice(i, 1);
            }
        });
    } else if (Flask.prototype.isPrototypeOf(obj)) {
        _this.flaskGroup.forEach(function (flask, i) {
            if (flask === obj) {
                _this.flaskGroup[i] = null;
                _this.flaskGroup.splice(i, 1);
            }
        });
    } else if (Sword.prototype.isPrototypeOf(obj)) {
        _this.swordGroup.forEach(function (sword, i) {
            if (sword === obj) {
                _this.swordGroup[i] = null;
                _this.swordGroup.splice(i, 1);
            }
        });
    } else {
        obj = null;
    }
};

Map.prototype.generateRandomRooms = function () {
    var minLength = 3;
    var maxLength = 8;
    var minCount = 5;
    var maxCount = 10;
    var countRooms = Math.floor(Math.random() * (maxCount - minCount) + minCount);
    var _map = this.map.slice(0);

    for (var i = 1; i <= countRooms;) {
        var map1 = _map.slice(0);
        var lengthY = Math.floor(Math.random() * (maxLength - minLength) + minLength);
        var lengthX = Math.floor(Math.random() * (maxLength - minLength) + minLength);
        var posY = Math.floor(Math.random() * (this.map.length - lengthY));
        var posX = Math.floor(Math.random() * (this.map[posY].length - lengthX));
        var generation = true;

        // console.log('generate #', i, countRooms, posX, posY, lengthX, lengthY);
        if (map1[posY+lengthY][posX+lengthX] === 1 && map1[posY][posX] === 1) {
            for (var y = posY; y < (posY+lengthY); y++) {
                for (var x = posX; x < (posX+lengthX); x++) {
                    if(map1[y][x] !== 1) {
                        generation = false;
                        break;
                    } else {
                        // console.log('setCluster ', x, y);
                        map1[y][x] = 0;
                    }
                }
                if(!generation) {
                    break;
                }
            }
        } else {
            generation = false;
        }

        if(!generation) {
            // console.log('generation failed ', i);
            // console.log(_map,);
        } else {
            // console.log('generation success ', i);
            _map = map1;
            i++;
        }
    }
    this.setMap(_map);
};

Map.prototype.generateRandomRoads = function () {
    var minCount = 3;
    var maxCount = 5;
    var countRoadsX = Math.floor(Math.random() * (maxCount - minCount) + minCount);
    var countRoadsY = Math.floor(Math.random() * (maxCount - minCount) + minCount);
    var _map = this.map.slice(0);
    var i;

    for (i = 1; i <= countRoadsX; i++) {
        var posX = Math.floor(Math.random() * (this.map[0].length - 1));
        for (var y = 0; y < _map.length; y++) {
            _map[y][posX] = 0;
        }
    }

    for (i = 1; i <= countRoadsY; i++) {
        var posY = Math.floor(Math.random() * (this.map.length - 1));
        for (var x = 0; x < _map[0].length; x++) {
            _map[posY][x] = 0;
        }
    }
    this.map = _map;
};

function Controller() {
    this.codes  = { 65: 'left', 68: 'right', 87: 'up', 83: 'down', 32: 'attack' };
    this.states = { 'left': false, 'right': false, 'up': false, 'down': false, 'attack' : false };
    this.frame = this.frame.bind(this);
    this.callback = function() {};
    this.lastTime = 0;
    document.addEventListener('keydown', this.keyBind.bind(this, true), false);
    document.addEventListener('keyup', this.keyBind.bind(this, false), false);
}

Controller.prototype.keyBind = function (val, e) {
    var state = this.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
};

Controller.prototype.frame = function(time) {
    if((time - this.lastTime) > 60) {
        this.lastTime = time;
        this.callback(time);
    }
    requestAnimationFrame(this.frame);
};

Controller.prototype.startUpdateFrames = function (callback) {
    this.callback = callback;
    requestAnimationFrame(this.frame);
};

function Character(mapObj, entityId) {
    this.minHp = 0;
    this.currHp = 80;
    this.maxHp = 100;
    this.damage = 7;
    this.range = 1;
    this.entityId = entityId;
    this.isAlive = true;
    this.state = 'handle';
    this.mapObj = mapObj;
    this.x = null;
    this.y = null;
    this.speed = 1;
}

Character.prototype.spawn = function () {
    var emptyPos = this.mapObj.getEmptyRandomPos();
    this.mapObj.map[emptyPos.y][emptyPos.x] = this.entityId;
    this.x = emptyPos.x;
    this.y = emptyPos.y;
    this.mapObj.setObjToMap(this, this.x, this.y);
};

Character.prototype.getHP = function () {
    return this.currHp;
};

Character.prototype.updateHP = function (x, y) {
    var sel = $('.' + this.mapObj.entityMap[this.entityId].class + '[data-x=\"' + this.x + '\"][data-y=\"' + this.y + '\"]');
    if (this.currHp <= this.minHp) {
        $('.tile[data-x=\"' + this.x + '\"][data-y=\"' + this.y + '\"] > .healthBar').remove();
    }
    if ((typeof (x) !== 'undefined') && (typeof (y) !== 'undefined')) {
        $('.tile[data-x=\"' + x + '\"][data-y=\"' + y + '\"] > .healthBar').remove();
    }
    if($(sel).children('div.healthBar').length > 0) {
        $(sel).children('div.healthBar').children('div.health').css('width', this.currHp + '%');
    } else {
        $(sel).
        append($(document.createElement('div')).addClass('healthBar')
            .append($(document.createElement('div')).addClass('health').css('width', this.currHp + '%'))
            .append($(document.createElement('div')).addClass('healthBG'))
        );
    }
};

Character.prototype.getDamage = function (damage) {
    if (this.currHp - damage < this.minHp) {
        this.currHp = 0;
        this.die();
    } else {
        this.currHp -= damage;
    }
};

Character.prototype.die = function () {
    this.mapObj.setCluster(this.x, this.y, 0);
    this.mapObj.deleteObjFromMapByObj(this);
    this.isAlive = false;
    this.mapObj.garbageRemove(this);
    this.updateHP();
};

Character.prototype.attack = function (targetEntityId) {
    var yStart;
    var yEnd;
    var xStart;
    var xEnd;
    var nextEntityId;
    if (this.y - this.range >= 0) {
        yStart = this.y - this.range;
    } else {
        yStart = this.y;
    }

    if (this.y + this.range <= this.mapObj.map.length - 1) {
        yEnd = this.y + this.range;
    } else {
        yEnd = this.y;
    }

    if (this.x - this.range >= 0) {
        xStart = this.x - this.range;
    } else {
        xStart = this.x;
    }
    if (this.x + this.range <= this.mapObj.map[0].length - 1) {
        xEnd = this.x + this.range;
    } else {
        xEnd = this.x;
    }

    for (var y = yStart; y <= yEnd; y++) {
        for (var x = xStart; x <= xEnd; x++) {
            nextEntityId = this.mapObj.getCluster(x, y);
            if(nextEntityId === targetEntityId) {
                var obj = this.mapObj.getObjFromMapByXY(x, y);
                if(Character.prototype.isPrototypeOf(obj.obj)) {
                    obj.obj.getDamage(this.damage);
                }
            }
        }
    }
};

function Hero(controller, mapObj) {
    Character.call(this, mapObj, 5);
    this.controller = controller;
    this.inventory = new Inventory();
    this.currHp = 50;
}
Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.setState = function (state) {
    if (this.state !== state) {
        this.state = state;
    }
};

Hero.prototype.heal = function (hp) {
    if (this.currHp + hp > this.maxHp) {
        this.currHp = this.maxHp;
    } else {
        this.currHp += hp;
    }
};

Hero.prototype.checkNextStep = function (xNext, yNext) {
    var nextEntityId = this.mapObj.getCluster(xNext, yNext);
    if(nextEntityId === 3 || nextEntityId === 4) {
        var obj = this.mapObj.getObjFromMapByXY(xNext, yNext);
        if(Item.prototype.isPrototypeOf(obj.obj)) {
            obj.obj.getBuff(this);
            this.inventory.addItem(obj.obj);
        }
    }
};

Hero.prototype.moveUp = function (cb) {
    this.setState('up');
    if (this.y - this.speed >= 0) {
        if(this.mapObj.entityMap[this.mapObj.getCluster(this.x, this.y - this.speed)].walk) {
            this.checkNextStep(this.x, this.y - this.speed);
            this.mapObj.setCluster(this.x, this.y, 0);
            this.y = this.y - this.speed;
            this.mapObj.setCluster(this.x, this.y, this.entityId);
        }
    }
    (typeof (cb) !== 'undefined') && cb();
};

Hero.prototype.moveDown = function (cb) {
    this.setState('down');
    if (this.y + this.speed <= this.mapObj.map.length - 1) {
        if(this.mapObj.entityMap[this.mapObj.getCluster(this.x, this.y + this.speed)].walk) {
            this.checkNextStep(this.x, this.y + this.speed);
            this.mapObj.setCluster(this.x, this.y, 0);
            this.y = this.y + this.speed;
            this.mapObj.setCluster(this.x, this.y, this.entityId);
        }
    }
    (typeof (cb) !== 'undefined') && cb();
};

Hero.prototype.moveLeft = function (cb) {
    this.setState('left');
    if (this.x - this.speed >= 0) {
        if(this.mapObj.entityMap[this.mapObj.getCluster(this.x - this.speed, this.y)].walk) {
            this.checkNextStep(this.x - this.speed, this.y);
            this.mapObj.setCluster(this.x, this.y, 0);
            this.x = this.x - this.speed;
            this.mapObj.setCluster(this.x, this.y, this.entityId);
        }
    }
    (typeof (cb) !== 'undefined') && cb();
};

Hero.prototype.moveRight = function (cb) {
    this.setState('right');
    if (this.x + this.speed <= this.mapObj.map[0].length - 1) {
        if(this.mapObj.entityMap[this.mapObj.getCluster(this.x + this.speed, this.y)].walk) {
            this.checkNextStep(this.x + this.speed, this.y);
            this.mapObj.setCluster(this.x, this.y, 0);
            this.x = this.x + this.speed;
            this.mapObj.setCluster(this.x, this.y, this.entityId);
        }
    }
    (typeof (cb) !== 'undefined') && cb();
};

Hero.prototype.update = function () {
    var _this = this;

    if(this.controller.states['attack']) {
        this.attack(2);
        return true;
    }

    if(this.controller.states['left']) {
        this.moveLeft(function () {
            _this.updateHP(_this.x + _this.speed, _this.y);
            _this.mapObj.updateObjFromMapByObj(_this,_this.x, _this.y);
        });
        return true;
    }
    if(this.controller.states['right']) {
        this.moveRight(function () {
            _this.updateHP(_this.x - _this.speed, _this.y);
            _this.mapObj.updateObjFromMapByObj(_this, _this.x, _this.y);
        });
        return true;
    }
    if(this.controller.states['up']) {
        this.moveUp(function () {
            _this.updateHP(_this.x, _this.y + _this.speed);
            _this.mapObj.updateObjFromMapByObj(_this, _this.x, _this.y);
        });
        return true;
    }
    if(this.controller.states['down']) {
        this.moveDown(function () {
            _this.updateHP(_this.x, _this.y - _this.speed);
            _this.mapObj.updateObjFromMapByObj(_this, _this.x, _this.y);
        });
        return true;
    }
    this.setState('handle');
    this.updateHP();
};

function Enemy(mapObj) {
    Character.call(this, mapObj, 2);
    this.loop = null;
    this.damage = 15;
}
Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function () {
    this.updateHP();
};

Enemy.prototype.die = function () {
    this.mapObj.setCluster(this.x, this.y, 0);
    this.mapObj.deleteObjFromMapByObj(this);
    this.stopAI();
    this.isAlive = false;
    this.mapObj.garbageRemove(this);
    this.updateHP();
};

Enemy.prototype.startAI = function () {
    var _this = this;
    this.loop = setInterval(function (){
        _this.attack(5);
        _this.randomMove();
    }, 1000);
};

Enemy.prototype.stopAI = function () {
    clearInterval(this.loop);
};

Enemy.prototype.randomMove = function () {
    var isSuccess = false;
    var _this = this;
    var tryCount = 8;
    while (!isSuccess && tryCount > 0) {
        var direction = Math.floor(Math.random() * 4);
        switch (direction) {
            case 0: //up
                if (this.y - this.speed >= 0) {
                    if(this.mapObj.getCluster(this.x, this.y - this.speed) === 0) {
                        this.mapObj.setCluster(this.x, this.y, 0);
                        this.y = this.y - this.speed;
                        this.mapObj.setCluster(this.x, this.y, this.entityId);
                        this.updateHP(this.x, this.y + this.speed);
                        isSuccess = true;
                    } else {
                        tryCount--;
                    }
                } else {
                    tryCount--;
                }
                break;
            case 1: //down
                if (this.y + this.speed <= this.mapObj.map.length - 1) {
                    if(this.mapObj.getCluster(this.x, this.y + this.speed) === 0) {
                        this.mapObj.setCluster(this.x, this.y, 0);
                        this.y = this.y + this.speed;
                        this.mapObj.setCluster(this.x, this.y, this.entityId);
                        this.updateHP(this.x, this.y - this.speed);
                        isSuccess = true;
                    } else {
                        tryCount--;
                    }
                } else {
                    tryCount--;
                }
                break;
            case 2: //left
                if (this.x - this.speed >= 0) {
                    if(this.mapObj.getCluster(this.x - this.speed, this.y) === 0) {
                        this.mapObj.setCluster(this.x, this.y, 0);
                        this.x = this.x - this.speed;
                        this.mapObj.setCluster(this.x, this.y, this.entityId);
                        this.updateHP(this.x + this.speed, this.y);
                        isSuccess = true;
                    } else {
                        tryCount--;
                    }
                } else {
                    tryCount--;
                }
                break;
            case 3: //right
                if (this.x + this.speed <= this.mapObj.map[0].length - 1) {
                    if(this.mapObj.getCluster(this.x + this.speed, this.y) === 0) {
                        this.mapObj.setCluster(this.x, this.y, 0);
                        this.x = this.x + this.speed;
                        this.mapObj.setCluster(this.x, this.y, this.entityId);
                        this.updateHP(this.x - this.speed, this.y);
                        isSuccess = true;
                    } else {
                        tryCount--;
                    }
                } else {
                    tryCount--;
                }
                break;
        }
    }
    if (isSuccess) {
        this.mapObj.updateObjFromMapByObj(this, this.x, this.y);
    }
};

function Inventory() {
    this.itemArr = [];
}

Inventory.prototype.addItem = function (obj) {
    this.itemArr.push(obj);
    this.updateHUD();
};

Inventory.prototype.addHUDItem = function (_class) {
    $('.inventory').append($(document.createElement('div')).addClass('tile').addClass(_class));
};

Inventory.prototype.updateHUD = function () {
    var _this = this;
    $('.inventory > .tile').remove();
    this.itemArr.forEach(function (item, index) {
        if (Sword.prototype.isPrototypeOf(item)) {
            _this.addHUDItem(item.mapObj.entityMap[item.entityId].class);
        }
    });
};

function Item(mapObj, entityId) {
    this.entityId = entityId;
    this.mapObj = mapObj;
    this.x = null;
    this.y = null;
}

Item.prototype.spawn = function () {
    var emptyPos = this.mapObj.getEmptyRandomPos();
    this.mapObj.map[emptyPos.y][emptyPos.x] = this.entityId;
    this.x = emptyPos.x;
    this.y = emptyPos.y;
    this.mapObj.setObjToMap(this, this.x, this.y);
};

Item.prototype.getBuff = function (obj) {};

function Flask(mapObj) {
    Item.call(this, mapObj, 3);
    this.hpBuff = 30;
}
Flask.prototype = Object.create(Item.prototype);
Flask.prototype.constructor = Flask;

Flask.prototype.getBuff = function (obj) {
    if (Hero.prototype.isPrototypeOf(obj)) {
        obj.heal(this.hpBuff);
        this.mapObj.deleteObjFromMapByObj(this);
        this.mapObj.garbageRemove(this);
    }
};

function Sword(mapObj) {
    Item.call(this, mapObj, 4);
    this.dmgBuff = 5;
}
Sword.prototype = Object.create(Item.prototype);
Sword.prototype.constructor = Sword;

Sword.prototype.getBuff = function (obj) {
    if (Hero.prototype.isPrototypeOf(obj)) {
        obj.damage += this.dmgBuff;
        this.mapObj.deleteObjFromMapByObj(this);
        this.mapObj.garbageRemove(this);
    }
};
