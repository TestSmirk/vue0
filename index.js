
var app = new Vue({
   el:"#app",
   data:{
       message:"hello vue"
   }
});

var app2 = new Vue({
   el:"#app-2",
   data:{
       message:"加载于"+new Date().toLocaleString()
   }
});

var app3 = new Vue({
   el:"#app-3",
   data:{
       seen:true
   }

});

var app4= new Vue({
   el:"#app-4",
   data: {
       todos:[
           {text:"学习javascript"},
           {text:"学习vue"},
           {text:"洗脑..."}
       ]
   }
});
