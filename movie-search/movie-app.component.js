(function(angular) {
    "use strict";

    var module = angular.module("moviesearch");

    function infoMovie(){
      var info = this;
      info.name = "toto";
    };
    function homeSearch($http){
      var homesearch= this;
      homesearch.msg = "homie";
      var url = "http://www.omdbapi.com/?type=movie&t=constantine&y=2005&plot=short&tomatoes=true&r=json";
      //$http.get();
    };
    module.component("homeMovie", {
      templateUrl:"movie-search/movie-home.component.html",
      controller: ['$http',homeSearch],
      controllerAs: 'homesearch'
    });
    module.component("movieDetails", {
       templateUrl: "movie-search/movie-details.component.html",
      controller: [infoMovie],
      controllerAs: 'info'
    });

}(window.angular));

//url example
//http://www.omdbapi.com/?type=movie&t=constantine&y=2005&plot=short&tomatoes=true&r=json
