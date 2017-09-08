<template>
	<div>
		<div class="form-group">
	    <label for="firstName">First Name</label>
	    <input
	        type="text"
	        class="form-control"
	        @input="nameChanged(true, $event)"
	        :value="firstName">
		</div>
		<div class="form-group">
	    <label for="lastName">Last Name</label>
	    <input
	        type="text"
	        class="form-control"
	        @input="nameChanged(false, $event)"
	        :value="lastName">
		</div>
	</div>

</template>

<script>
	export default {
		props: ['value'],
		methods: {
			nameChanged(isFirst,e){
				let name = '';
				if(isFirst){
					name = e.target.value + " " + this.lastName;
				}
				else{
					name = this.firstName+ " " +e.target.value;
				}
				this.value = name;
				this.$emit('input', this.value)
			}
		},
		computed: {
			firstName(){
				return this.value.split(' ')[0];
			},
			lastName(){
				return this.value.split(' ')[1];
			}
		}
	}
</script>

<style scoped>
</style>

 <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->