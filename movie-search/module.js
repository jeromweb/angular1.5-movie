(function(angular) {
    "use strict";

    var module = angular.module("moviesearch", ["ngComponentRouter", "ngRoute", "ngAnimate"]);
    module.value("$routerRootComponent", "movieapp")

    .component('movieapp', {
  templateUrl: 'movie-search/movie-app.component.html',
    controller: function(){
      var model = this;
      model.$routerOnActivate = function(next, previous){
        console.log(next);
      }
    },
  $routeConfig: [
    {path: '/', name: 'Home', component: 'homeMovie', useAsDefault: true},
    {path: '/:id', name: 'Details', component: 'movieDetails' }
  ]
});
})(window.angular);
