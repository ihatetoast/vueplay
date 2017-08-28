<template>
    <div>
    <slot name="introChoice"></slot>
    <h3>green ogre</h3>
    <div class="holder ogre">
      <img src="../assets/ogre.svg" alt="a green ogre">
      <p>You got Olaf the Ogre. He's not pretty, but he's kind. Just misunderstood.</p>
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
		color: rgb(192, 226, 206);
	}
    .ogre {
        border: 2px solid rgb(211, 248, 226);
        background-color: rgb(192, 226, 206);
    }

    .holder {
    	margin: 20px auto;  
      text-align: center;
      width: 410px;
    }

</style>