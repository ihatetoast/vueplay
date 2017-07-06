new Vue ({
	el: '#app',
	data: {
		title: "VueJS Lifecycles in Action"
	},
	beforeCreate: function(){
		console.log("beforeCreate() ran at " + Date.now());
	},
	created: function(){
		console.log("created() ran at " + Date.now());
	},
	beforeMount: function(){
		console.log("beforeMount() ran at " + Date.now());
	},
	mounted: function(){
		console.log("mounted() ran at " + Date.now());
	},
	beforeUpdate: function(){
		console.log("beforeUpdate() ran at " + Date.now());
	},
	updated: function(){
		console.log("updated() ran at " + Date.now());
	},
	beforeDestroy: function(){
		console.log("beforeDestroy() ran at " + Date.now());
	},
	destroyed: function(){
		console.log("destroyed() ran at " + Date.now());
	},
	methods: {
		destroy: function(){
			this.$destroy();
			console.log("I destroyed the instance at " + Date.now());
		}
	}
	
 })