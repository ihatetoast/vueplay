<template>
	<div>
		<p>Server status: {{ status }}</p>
		<hr/>
		<button @click="changeStatus">Change</button>
	</div>
</template>
<script>
	export default{
		data: function(){
			return {
				status: 'Critical we are all doing to die!!'
			}
		}, 
		methods: {
			//can make it ES6y
			changeStatus(){
				this.status = "All good. We can assume there will be a tomorrow.";
			}
		}
	}
</script>