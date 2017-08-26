<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
            	<button @click="selectedComponent = 'appQuote'">Quotation</button>
            	<button @click="selectedComponent = 'appAuthor'">Author</button>
            	<button @click="selectedComponent = 'appNew'">New</button>
            	<p>{{ selectedComponent }}</p>
            	<hr>
            	<keep-alive>
	            	<component :is="selectedComponent">
	            		<p>Default content</p>
	            	</component>
            	</keep-alive>
               <!-- <app-quote>
               		<h2 slot="h2Title">{{ quoteTitle }}</h2>
               		<p>"Katy is the greatest!"</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
/* anything else affecting the elem above (outside of style) is taken care of here
stay here to control the vuejs syntax for what is above*/
	import Quote from './components/Quote.vue';
	import New from './components/New.vue';
	import Author from './components/Author.vue';

    export default {
    	data: function(){
    		return {
    			quoteTitle: "The Best Quotation ever:",
    			selectedComponent: "appQuote"
    		}
    	},
        components: {
        	appQuote: Quote,
        	appAuthor: Author, 
        	appNew: New
        }
    }
</script>

<style>
/*the style in here will not affect the html elem above. 
to style the h2 and hte p, go to the child. */
</style>
