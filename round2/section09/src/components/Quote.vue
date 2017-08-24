<template>
	<div>
		<div>
			<slot name="h2Title"></slot>
		</div>
		<hr>
		<div>
			<slot name="pContent"></slot>
		</div>
	</div>
</template>

<script>

</script>

<!-- the style in this child will be passed to the elements passed in from above. 
what is below affects what goes in the slot -->
<style scoped>
	div {
		border: 1px solid #ccc;
		box-shadow: 1px 1px 2px #010101;
		padding: 30px;
		margin: 30px auto;
		text-align: center;
	}
</style>

<!-- slots go in child components -->