!function(){"use strict";angular.module("Semio",["ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","d3"]).run(),angular.module("Semio").constant("ServerUrl","http://localhost:3000"),angular.module("d3",[]).factory("d3Service",["$document","$q","$rootScope",function(a,b,c){function d(){c.$apply(function(){e.resolve(window.d3)})}var e=b.defer(),f=a[0].createElement("script");f.type="text/javascript",f.async=!0,f.src="https://d3js.org/d3.v3.min.js",f.onreadystatechange=function(){"complete"===this.readyState&&d()},f.onload=d;var g=a[0].getElementsByTagName("body")[0];return g.appendChild(f),{d3:function(){return e.promise}}}])}(),angular.module("Semio").config(["$routeProvider",function(a){a.when("/",{controller:"ContentCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),function(){"use strict";angular.module("Semio").controller("ContentCtrl",["$scope","$http",function(a){}])}(),angular.module("Semio").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("Semio").controller("ContactCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),function(){"use strict";angular.module("Semio").directive("wordTree",["d3Service",function(a){return{restrict:"EA",scope:{data:"="},template:'<div class="word-tree"></div>',link:function(b,c,d){a.d3().then(function(a){window.onresize=function(){b.$apply()},b.$watch("data",function(a){b.render(a)},!0),b.render=function(){var b=900,c=500,d=a.scale.category20(),e=a.layout.force().charge(-120).linkDistance(30).size([b,c]),f=a.select("body").append("svg").attr("width",b).attr("height",c);a.json("../../myData.json",function(a,b){e.nodes(b.nodes).links(b.links).start();var c=f.selectAll(".link").data(b.links).enter().append("line").attr("class","link").style("stroke-width",function(a){return Math.sqrt(a.value)}),g=f.selectAll(".node").data(b.nodes).enter().append("circle").attr("class","node").attr("r",5).style("fill",function(a){return d(a.group)}).call(e.drag);g.append("title").text(function(a){return a.name}),e.on("tick",function(){c.attr("x1",function(a){return a.source.x}).attr("y1",function(a){return a.source.y}).attr("x2",function(a){return a.target.x}).attr("y2",function(a){return a.target.y}),g.attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y})})})}})}}}])}();