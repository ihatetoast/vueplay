<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeDeets">Change my deets, sweets!</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
            <!-- where pass them with v-bind: or shortcut : -->
                <app-user-detail 
                    :name="name" 
                    @nameWasReset="name=$event"
                    :resetFcn="resetName"
                    :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge = "age"
                    @ageWasEdited="age=$event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: "Mary Kathryn Cassidy",
                age: 39
            };
        },
        methods: {
            changeDeets() {
                this.name = "Katy the Greaty";
            },
            resetName(){
                this.name = "Mary Kathryn Cassidy";
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
