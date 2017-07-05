var vm1 = new Vue ({
        el: "#app1",
        data: {
          title: "The VueJS Instance",
          showParagraph: false
        }, 
        methods: {
          show: function(){
            this.showParagraph = true;
            this.updateTitle ("The new and imporoved VueJS Instance (updated)");
          },
          updateTitle: function(title){
            this.title = title;
          }
        },
        computed: {
          lowercaseTitle: function(){
            return this.title.toLowerCase();
          }
        },
        watch: {
          title: function(value){
            alert('Warning: Title changed. New title is '+ value);
          }
        }
})
//normal js
setTimeout(function(){
  vm1.title = "Changed by the timer";
},5000)

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  },
  methods: {
    changeTitle: function(){
      vm1.title = "I have changed!";
    }
  }
})