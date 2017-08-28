<template>
	<div class="row">
		<app-quote v-for="(quote, index) in quotes" @click.native="deleteQuotation(index)">{{ quote }}</app-quote>
	</div>
</template>

<script>
import Quotation from './Quotation.vue';
	export default {
		props: ['quotes'],
		components: {
			appQuote: Quotation
		},
		methods: {
			deleteQuotation(index){
				this.$emit('quotationDeleted', index);
			}
		}
	}
</script>

<style scoped>
</style>