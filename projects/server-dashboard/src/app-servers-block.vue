<template>
	<div> 
		<app-server-stats v-for='server in 5'></app-server-stats>
	</div>
</template>
<script>
	import ServerStatus from './ServerStats.vue';
	export default{
		
		components: {
			'app-server-stats': ServerStats
		}
	}
</script>



<div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                            class="list-group-item"
                            v-for="index in 5">
                        Server #{{ index }}
                    </li>
                </ul>
            </div>