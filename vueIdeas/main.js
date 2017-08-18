var app1 = new Vue({
  el: "#dataAndMethods",
  data: {
    message: "It's a mound-o-poo! ",
    clicks: 0
  },
  methods: {
    topBoop: function() {
      this.message = "You booped the top poop!";
      this.clicks++;
    },
    midBoop: function() {
      this.message = "You booped the middle poop!";
      this.clicks += 2;
    },
    botBoop: function() {
      this.message = "You booped the botty-bot poop!";
      this.clicks += 3;
    }
  }
});

var app2 = new Vue({
  el: "#styleBind",
  data: {
    message: "Purtiness factor: ",
    clicks: 0,
    unicornColours: [
      "#E59CC5",
      "#CB63DD",
      "#6ECCD1",
      "#f0386b",
      "#e56399",
      "#dbbbf5",
      "#ddf0ff",
      "#ff9900",
      "#62d300",
      "#f461a8",
      "#2ab7ca",
      "#16e0bd",
      "#f76fdb",
      "#ffbde1",
      "#ff628b",
      "#ff88ef",
      "#bf99bd",
      "#2cb1f4",
      "#7cc6fe",
      "#ccd5ff",
      "#e7bbe3",
      "#c884a6",
      "#2cb1f4",
      "#7cc6fe",
      "#ccd5ff",
      "#e7bbe3",
      "#c884a6",
      "#7af45f",
      "#f7f75d",
      "#3ed8aa",
      "#5cf64a",
      "#04e762",
      "#38a700",
      "#31d843",
      "#643a71",
      "#8b5fbf",
      "#d183c9",
      "#55146d",
      "#f77eba",
      "#643a71",
      "#8b5fbf",
      "#d183c9",
      "#55146d",
      "#f77eba",
      "#ffffa9",
      "#ffff86",
      "#ffff64",
      "#ffff42",
      "#ffffa9",
      "#ffff86",
      "#ffff64",
      "#ffff42",
      "#e16db2",
      "#e48a9f",
      "#ed6fa3",
      "#f09abf",
      "#d777a9"
    ],
    styleTop: {
      background: "#513D2E"
    },
    styleMid: {
      background: "#583E2A"
    },
    styleBot: {
      background: "#493327"
    }
  },
  methods: {
    randoColour: function() {
      return Math.floor(Math.random() * this.unicornColours.length);
    },
    uniPoopTop: function() {
      this.styleTop.background = this.unicornColours[this.randoColour()];
      this.clicks += 0.5;
    },
    uniPoopMid: function() {
      this.styleMid.background = this.unicornColours[this.randoColour()];
      this.clicks += 0.75;
    },
    uniPoopBot: function() {
      this.styleBot.background = this.unicornColours[this.randoColour()];
      this.clicks += 1;
    }
  }
});

//change to fib for form input binding in IDE version
var app3 = new Vue({
  el: "#fib",
  data: {
    message: "",
    inputTxt: "",
    checkbox: "",
    noms: ["chocolate", "cream", "pudding", "icing"],
    nasties: [
      "dung",
      "poo",
      "poop",
      "dookie",
      "turd",
      "feces",
      "faeces",
      "bannon",
      "trump",
      "donald",
      "ivanka",
      "mitch",
      "mcconnell",
      "pence"
    ],
    swerz: ["shit", "shitting", "shitty", "crap", "crappy", "crapping"]
  },
  methods: {
    compArrs: function(keyArr, inputArr) {
      return inputArr.some(function(item) {
        return keyArr.indexOf(item) >= 0;
      });
    },
    guess: function() {
      var inputArr = this.inputTxt.toLowerCase().split(" ");
      var nomsArr = this.noms;
      var nastiesArr = this.nasties;
      var swerzArr = this.swerz;
      // console.log(compArrs(keyArr, inputArr));
      if (this.inputTxt === "") {
        this.message = "";
      } else {
        if (this.compArrs(nomsArr, inputArr)) {
          this.message = "Are you nuts?";
        } else if (this.compArrs(nastiesArr, inputArr) && !this.checkbox) {
          this.message = "I know, right!?";
        } else if (this.compArrs(swerzArr, inputArr) && !this.checkbox) {
          this.message = "Couldn't have said it better myself.";
        } else if (this.compArrs(swerzArr, inputArr) && this.checkbox) {
          this.message = "LIAR! YOU SAID YOU DID NOT SWEAR!";
        } else {
          this.message = "Hm ...";
        }
      }
    }
  }
});
