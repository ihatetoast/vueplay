<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details such as</p>
        <p>User name: {{ name }}</p>
        <p>User age: {{ userAge }}</p>
        <p>User name in reverse: {{ switchName() }}</p>
        <button @click="resetName">Reset Name via emit</button>
        <button @click="resetFcn()">Reset Name via props</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
//props gives access but doesn't pass. see user.vue
	export default {
		props: {
			name: {
				type: String
			},
			resetFcn: Function,
			userAge: Number
		},
		methods: {
			switchName(){
				return this.name.split("").reverse().join("");
			},
			resetName(){
				this.name="Mary Kathryn Cassidy";
				this.$emit("nameWasReset", this.name);
			}
		},
		//EVENT BUS
		//should listen once component is created
	
		created(){
			eventBus.$on('ageWasEdited', (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
