<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User age: {{ userAge }}</p>
        <button @click="editAge">Edit User's Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main'

	export default {
		props: ['userAge'],
		methods: {
			editAge: function(){
				this.userAge = 49;
				// this.$emit('ageWasEdited', this.userAge);
				eventBus.$emit('ageWasEdited', this.userAge);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
