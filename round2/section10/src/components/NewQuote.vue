<template>
	<div class="row">
		<form>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<label>Quotation</label>
				<textarea class="form-control" rows="3" v-model="quotation"></textarea>
			</div>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<button class="btn btn-primary" @click.prevent="createNew">Add Quotation</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data: function(){
			return {
				quotation: ''
			};
		},
		methods: {
			createNew() {
				this.$emit('quotationAdded', this.quotation);
				this.quotation = '';
			}
		}
	}
</script>

<style scoped>
</style>