<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
               		<h2 slot="h2Title">{{ quoteTitle }}</h2>
               		<p slot="pContent">"Katy is the greatest!"</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
/* anything else affecting the elem above (outside of style) is taken care of here
stay here to control the vuejs syntax for what is above*/
	import Quote from './components/Quote.vue'
    export default {
    	data: function(){
    		return {
    			quoteTitle: "The Best Quotation ever:"
    		}
    	},
        components: {
        	appQuote: Quote
        }
    }
</script>

<style>
/*the style in here will not affect the html elem above. 
to style the h2 and hte p, go to the child. */
</style>
