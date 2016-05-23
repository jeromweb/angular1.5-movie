(function(angular) {
    "use strict";

    var module = angular.module("moviesearch", ["ngComponentRouter", "ngAnimate"]);
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
    {path: '/details/:data', name: 'Details', component: 'movieDetails' }
  ]
});
})(window.angular);
