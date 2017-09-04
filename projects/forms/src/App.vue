<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Give me all your details, suckers!</h1>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            class="form-control"
                            v-model = "suckerData.firstName">
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            class="form-control"
                            v-model = "suckerData.lastName">
                    </div>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="email">email</label>
                        <input
                            type="text"
                            id="email"
                            class="form-control"
                            v-model = "suckerData.email">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model = "suckerData.password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <label for="yes">
                        <input
                            type="radio"
                            id="yes"
                            value="Yes"
                            v-model="storeData">Yes
                    </label>
                    <label for="no">
                        <input
                            type="radio"
                            id="no"
                            value="No"
                            v-model = "storeData">No
                    </label>
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
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ suckerData.firstName }} {{ suckerData.lastName }}</p>
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
    export default {
        data () {
            return{
                suckerData: {
                    firstName: '',
                    lastName: '',
                    email: '', 
                    password: '', 
                },
                storeData: 'No'
            }
        }
    }
</script>

<style>
</style>
