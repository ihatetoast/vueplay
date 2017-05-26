var app = new Vue({
  el: '#app-1',
  data: {
    message: 'Hello Vue!'

  }
})
	// The v-bind attribute you are seeing is called a directive. 
	var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})

	// conditionals and loops
	//IF
var app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
})
//the above with a toggle option
new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
	//FOR
var app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'Learn ES6' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
})

// handling user input
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Release the Kracken!'
  },
	methods: {
		reverseMessage: function () {
		  this.message = this.message.split('').reverse().join('')
		}
	}
})
// Vue also provides the v-model directive that makes two-way binding between form input and app state a breeze:
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Vue do!'
  }
})


// COMPONENTS! THE SHIZZLE

// Define a new component called todo-item
Vue.component('todo-item', {
  // The todo-item component now accepts a "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Cookies' }
    ]
  }
})


new Vue({
  el: '#hw',
  data: {
    title: 'Hello World!'
  }
});


//computed watch
  //below is ok for small stuff, ...
new Vue({
    el: '#app1',
    data: {
      counter: 0,
      result: ''
    }, 
    methods:{
      increase: function(){
        this.counter++;
        this.result=this.counter > 5 ? "greater than 5" : "less than 5";
      },
        decrease: function(){
        this.counter--;
        this.result=this.counter > 5 ? "greater than 5" : "less than 5";
      }
    }
});
  //but better would be ...
new Vue({
  el: '#app2',
  data: {
    counter: 0,
    secondCounter: 0
  },
  watch:{
    counter: function(value){
      var vm = this;
      setTimeout(function(){
        vm.counter = 0;
      },2000)
    }
  },
  computed:{
    output: function(){
      console.log("computed");
      return this.counter > 5 ? "greater than 5" : "less than 5";
    }
  },
  methods: {
    result: function(){
      console.log("method");
      return this.counter > 5 ? "greater than 5" : "less than 5";
    }
  }
})

//CSS STYLING
//basics
new Vue({
  el: "#css1",
  data: {
    attachRed: false
  }
});
//objects
/*clicking on 1 toggles 1 btwn red and not red but also affects 2 and it now toggles blue red.
This is ok for a couple of classes, but it could get unwieldy, so objects come into play.*/
new Vue({
  el: "#css2",
  data: {
    attachRed: false
  }
});
// Same results as above but takes the object out of inline and lets Vue take over
new Vue({
  el: "#css2b",
  data: {
    attachRed: false
  },
  computed: {
    divColors: function(){
      return{
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
});
//using names
new Vue({
  el: "#css3",
  data: {
    attachRed: false,
    color: 'red'
  },
  computed: {
    divColors: function(){
      return{
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
});

new Vue({
  el: "#css3b",
  data: {
    attachRed: false,
    color: 'aqua'
  },
  computed: {
    divColors: function(){
      return{
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
});

//setting styles dynamically withOUT classes
new Vue({
  el: "#css4",
  data: {
    color: 'yellow',
    width: 100
  },
  computed: {
    myStyle: function(){
      return{
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})

//EXERCISES
new Vue({
        el: '#exercise-3',
        data: {
            value: 0,
            duration: 5000
        },
        // 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) 
        watch:{
          value: function(e){
            var that = this;
            setTimeout(function(){
              that.value = 0;
            }, that.duration);
          }
        },
        computed:{
          result: function(){
            return this.value > 50 ? "Yes!" : "Nope!"
          }
        },
        methods:{
          userTime: function(e){
            var choice = e.target.value;
            if(choice > 10 || choice < 1){
              alert("Enter a number from 1 to 10 only.");
            }else {
              this.duration = choice * 1000;
              console.log(this.duration);
            }   
          }
        }});

new Vue({
  el: '#exercise-4',
  data: {
    effects: {
      highlight: false,
      shrink: true
    },
    ktStyle:{
      color: '#DDD92A',
      width: '100px',
      height: '50px'

    },
    fancy: 'deco',
    playful: 'scribble',
    shape: '',
    userChoice: '',
    isSmudged: 'smudge'
  },
  methods: {
    startEffect: function() {
      console.log("start effect fired.")
      var ths = this;
      setInterval(function(){
        ths.effects.highlight = ! ths.effects.highlight;
        ths.effects.shrink = ! ths.effects.shrink;
      }, 5000)
    },
    startProgress: function(){
        var ths = this;
        var width=0;
        setInterval(function(){
          width = width + 1;
          ths.progressBar.width = width + 'px';
          
        },100);
        
     }
  
  }
});

