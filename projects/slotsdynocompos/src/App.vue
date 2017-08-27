<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="choice ='appBlue'" class="btn blue">Load Something Blue</button>
                <button @click="choice ='appGreen'"  class="btn green">Load Something Green</button>
                <button @click="choice ='appRed'"  class="btn red">Load Something Red</button>
                <hr>
                <component :is="choice">
                    <h2 slot="introChoice">{{ introChoice }}</h2>
                    <h2 slot="introQuestion">{{ introQuestion }}</h2>
                    <p>default content</p>
                </component>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';
    import Question from './components/Question.vue';

    export default {
        data: function(){
            return {
                choice: "appQuestion",
                introQuestion: "What will you get?",
                introChoice: "You have chosen a ...",
                titleFlower: "Aw, a flower"

            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red,
            appQuestion: Question
        }
    }
</script>

<style>
.red {
    border: 2px solid rgb(246, 148, 193);
    background-color: rgb(224, 135, 176);
}
.blue {
    background-color: rgb(169, 222, 249);
    border: 2px solid rgb(154, 202, 227);
}
.green {
    border: 2px solid rgb(211, 248, 226);
    background-color: rgb(192, 226, 206);
}
</style>
