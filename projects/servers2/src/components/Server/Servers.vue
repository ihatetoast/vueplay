<!-- v for loops through. and now binds a new id
in all created list items with the server. id from below -->
<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <appServer 
            v-for="server in servers"
            :server='server'></appServer>
        </ul>
    </div>
</template>



<script>
	import Server from './Server.vue';
	export default{
		data: function(){
			return {
				servers: [
					{id: 1, status: 'norm'},
					{id: 2, status: 'crit'},
					{id: 3, status: 'u/k'},
					{id: 4, status: 'norm'}
				]
			};
		},
		components: {
			appServer: Server
		}
	}
</script>

<style>

</style>
