import Vue from "vue";
import App from "./App.vue";
//create eventbus before loading all of the compoenents
export const eventBus = new Vue();

//where components are, so AFTEr evt bus
new Vue({
	el: "#app",
	render: h => h(App)
});

/*Could store centrally:
export const eventBus = new Vue()
	methods(){
		changeAge(age){
			this.$emit('ageWasEdited', age);
		}
	};


^^ As long as I import this bus, I can access the methods anywhere. Leave for sm to med
projects. also evt bus for when there are many nested child comps. 
vuex for monster state mgmt

centralize tasks
submit data transport data
outsource pieces of code into ctrl place
*/
