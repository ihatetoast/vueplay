<template>
	<div>
		<h3>New and fancy quotation</h3>
		<button @click="likes++">Rate the quotation</button>
		<p>This quotation has <span> {{ likes }}</span> likes. </p> 
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				likes: 0
			};
		},
		destroyed(){
			// if there's no keep-alive
			console.log("destroyed");
		},
		deactivated(){
				// with keep-alive, when navigating OFF the component
			console.log("deactivated");
		},
		activated(){
			// with keep-alive, when navigating TO the component
			console.log("activated");
		}
	}
</script>


<style>
	
</style>
