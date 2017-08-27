<template>
  <div>
    <slot name="introChoice"></slot>
    <h3>blue daisy</h3>
    <div class="holder flower">
      <img src="../assets/flower.svg" alt="simple blue flower">
      <p>You picked a flower. Aw. That's nice. Boring but nice.</p>
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
		color: rgb(154, 202, 227);
	}
    .flower {
    	background-color: rgb(169, 222, 249);
      border: 2px solid rgb(154, 202, 227);
    }
    .holder {
    	margin: 20px auto;  
      text-align: center;
      width: 410px;
    }

</style>