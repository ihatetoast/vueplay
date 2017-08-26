<template>
	<div>
		<h3>Author McWriterton</h3>
		<button @click="dollars++">give cash</button>
		<p>I will give the author <span> {{ dollars }}</span> dollars.</p> 
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				dollars: 0
			};
		}
	}
</script>


<style>
	
</style>
