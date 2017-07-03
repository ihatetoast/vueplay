new Vue({
    el: "#app",
    data: {
        gameOn: false,
        userLife: 100,
        monsterLife: 100,
    
        turns: []
    },
    methods: {
        startGame: function(){
            this.gameOn = true;
            this.userLife = 100;
            this.monsterLife = 100;
            this.turns = [];
        },
        hits: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){
            if(this.monsterLife<=0){
                if(confirm("Winner winner! Chicken dinner! Play again?")){
                    this.startGame();
                } else {
                    this.gameOn = false;
                }
                // Note: returnig boolean because it'll be used to determine if gameOn is true or false
                return true;
            } else if (this.userLife<=0) {
                if(confirm("Bugger! You lost! Play again?")){
                    this.startGame();
                } else {
                    this.gameOn = false;
                }
                return true;
            } else {
                return false;
            }
            if(this.userLife<=0){
                alert("Oh noes. He ate your toes!");
                this.gameOn = false;
            }
        },
        monsterAttacks: function(){
            var damage = this.hits(2,12)
            this.userLife -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Werewolfgang smacks Dirty Gerty for " + damage + " points."
            });
            if(this.checkWin()){
                return;
            }
        },
        playerAttack: function(min, max){
            var damage = this.hits(min, max);
            this.monsterLife -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Dirty Gerty hit Werewolfgang for " + damage + " points."
            });
            if(this.checkWin()){
                return;
            }
        },
        attack: function(){
            this.monsterAttacks();
            this.playerAttack(3,10);
        },
        specialAttack: function(){
            var damage = this.hits(10,20);
            this.monsterAttacks();
            this.monsterLife -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Dirty Gerty smashed Werewolfgang for " + damage + " points."
            });
        },
        heal: function(){
            if(this.userLife<=90){
                this.userLife += 10;
            }else{
                this.userLife = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Dirty Gerty healed for 10 points."
            });
            this.monsterAttacks();
            
        },
        giveup: function(){
            this.gameOn = false;
            this.turns.unshift({
                isPlayer: true,
                text: "Werewolfgang ate Dirty Gerty because she gave up."
            });
        }
    }
})
