<template>
    <div class="container">
    	<app-header></app-header>
			<app-new-quote @quotationAdded="newQuote"></app-new-quote>
    	<app-quote-grid :quotes="quoteArray" @quotationDeleted="deleteQuotation"></app-quote-grid>
    	<div class="row">
    		<div class="col-sm-12 text-center">
    			<div class="alert alert-info">
    				Info: Click on a quotation to delete it.
    			</div>
    		</div>
    	</div>
    </div>

</template>

<script>
	import Grid from './components/Grid.vue';
	import NewQuote from './components/NewQuote.vue';
	import Header from './components/Header.vue';
    export default {
        data: function(){
        	return {
	        	quoteArray: [
	        		"I'm a little teapot short and stout."
	        	],
	        	maxQuotes: 10
	        }
        },
        methods: {
        	newQuote(quote){
        		this.quoteArray.push(quote);
        	},
        	deleteQuotation(index){
        		this.quoteArray.splice(index, 1);
        	}
        },
        components: {
        	appQuoteGrid: Grid,
        	appNewQuote: NewQuote,
        	appHeader: Header
        }
    }
</script>

<style>
</style>
