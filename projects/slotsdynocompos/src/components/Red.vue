<template>
    <div>
        <slot name="introChoice"></slot>
        <h3>red cupcake</h3>
        <div class="holder cupcake">
        <img src="../assets/cupcake.svg" alt="a cupcake with red icing">
        <p>You got a cupcake! Awesome!! Unless you're avoiding sugar and gluten. Then bummer..</p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
	div {
	text-align: center;
	}
	h2 {
		color: rgb(224, 135, 176);
		margin: auto;
	}
    .cupcake {
        border: 2px solid rgb(246, 148, 193);
        background-color: rgb(224, 135, 176);
      
    }
    .holder {
    	margin: 20px auto;  
      width: 410px;
    }
</style>