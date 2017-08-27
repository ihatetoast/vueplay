<template>
    <div>
      <slot name="introQuestion"></slot>
    	<div class="holder question">
        <img src="../assets/question.svg" alt="big question mark">
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
  div {
  text-align: center;
  }

  .question {
  	background-color: rgb(240, 240, 240);
    border: 1px solid rgb(10, 10, 10);
  }
  .holder {
    margin: 20px auto;  
    text-align: center;
    width: 410px;
  }

</style>