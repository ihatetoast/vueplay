<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if='!server'>Please select a server</p>
        <p v-else>Server #{{ server.id }} selected; server status is {{ server.status }}</p>
        <hr/>
        <button @click="resetStatus">Change to &apos;norm&apos;</button>
    </div>

</template>

<script>
import { serverBus } from '../../main';

export default {
	data: function() {
		return {
			server: null
		}
	},
	methods: {
		resetStatus(){
			this.server.status = 'norm';
		}
	},
	created() {
		serverBus.$on('serverSelected',  (server) =>{
			this.server = server;
		});
	}
}
</script>

<style>

</style>
