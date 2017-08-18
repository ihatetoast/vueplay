var app = new Vue({
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

var app = new Vue({
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
      "#ddf0ff"
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
      this.clicks++;
    },
    uniPoopMid: function() {
      this.styleMid.background = this.unicornColours[this.randoColour()];
      this.clicks += 2;
    },
    uniPoopBot: function() {
      this.styleBot.background = this.unicornColours[this.randoColour()];
      this.clicks += 3;
    }
  }
});
