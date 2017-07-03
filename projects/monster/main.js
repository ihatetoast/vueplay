new Vue({
    el: "#app",
    data: {
        gameOn: false,
        userLife: 100,
        monsterLife: 100,
        playerStrikes: [], 
        monsterStrikes: []
    },
    methods: {
        startGame: function(){
            this.gameOn = true;
            this.userLife = 100;
            this.monsterLife = 100;
        },
        hits:function(){
            var max = 10;
            var min = 3;
            var randoAtt = Math.max(Math.floor(Math.random() * max) + 1, min);
            var randoHit = Math.floor(Math.random() * this.userLife/10);
            this.userLife = this.userLife - randoHit;
            this.monsterLife = this.monsterLife - randoAtt;
        },
        attack: function(){
            // var max = 10;
            // var min = 3
            // var randoAtt = Math.max(Math.floor(Math.random() * max) + 1, min)
            // var randoHit = Math.floor(Math.random() * this.userLife/10);
            // this.userLife = this.userLife - randoHit;
            // this.monsterLife = this.monsterLife - randoAtt;
            this.playerStrikes.push(randoAtt);
            this.monsterStrikes.push(randoHit);
            if(this.monsterLife<=0){
                alert("Winner winner! Chicken dinner!");
                this.gameOn = false;
                return;
            }
            if(this.userLife<=0){
                alert("Oh noes. He ate your toes!");
                this.gameOn = false;
            }
            
        },
        specialAttack: function(){
            function getRando(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min + 1)) + min; 
            }
            var randoSpecAtt = getRando(this.monsterLife/10, this.monsterLife/5);
            var randoSpecHit = getRando(this.userLife/10, this.userLife/5);
            this.userLife = this.userLife - randoHit;
            this.monsterLife = this.monsterLife - randoSpecAtt;
            console.log(`randoHit is ${randoSpecHit} and randoSpecAtt is ${randoSpecAtt}`);
        },
        heal: function(){
            var randoHeal = Math.floor(Math.random() * this.monsterLife/10);
            var randoHit = Math.floor(Math.random() * this.userLife/10);
            this.userLife = this.userLife + randoHit;
            this.userLife = this.userLife + randoHit;;
            
        },
        giveup: function(){
            this.gameOn = false;
            this.userLife = 100;
            this.monsterLife = 100;
        }
    }
})
