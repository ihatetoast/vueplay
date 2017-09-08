<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Give me all your details, suckers!</h1>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model = "suckerData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model = "suckerData.lastName">
                    </div> -->
<!-- CUSTOM COMP -->
                    <app-fullname v-model="suckerData.fullName"></app-fullname>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">email</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model = "suckerData.email">
                    </div>
<!-- END CUSTOM COMP -->
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            class="form-control"
                            v-model = "suckerData.password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                        <p>Would you like to store your data for future use?</p>
                        <label for="yes">
                        <input
                            type="radio"
                            value="Yes"
                            v-model="storeData">Yes
                        </label>
                        <label for="no">
                        <input
                            type="radio"
                            value="No"
                            v-model = "storeData">No
                        </label>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button 
                        class="btn btn-primary"
                        type="submit"
                        @click.prevent="submitData">Submit
                    </button>
                </div>
            </div>
        </form>
        <hr>
         <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <!-- <p>Full Name: {{ suckerData.firstName }} {{ suckerData.lastName }}</p> -->
                       <!--  from custom comp -->
                        <p>Full Name: {{ suckerData.fullName }}</p>
                        <p>Mail: {{ suckerData.email }}</p>
                        <p>Password: {{ suckerData.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Fullname from './Fullname.vue';
    export default {
        data () {
            return{
                suckerData: {
                    
                    fullName:'First Last',
                    email: '', 
                    password: ''
                },
                storeData: 'No',
                submitted: false
            }
        },
        methods: {
            submitData(){
                this.submitted = true;
            }
        },
        components: {
            appFullname: Fullname
        }
    }
</script>

<style>
</style>
