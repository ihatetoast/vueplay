var app = new Vue({
  el: '#app',
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




