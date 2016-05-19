(function(angular) {
  "use strict";

  var module = angular.module("moviesearch");

  function infoMovie(){
    var info = this;
    info.name = "toto";
  };
  function homeSearch($http){
    var homesearch = this;
    homesearch.$onInit = function(){
      homesearch.msg = "";
      var type = homesearch.type;
      type = "type of search";
      homesearch.typeList = [
        {"id" : 1,"name": "Movie"},
        {"id" : 2,"name": "Serie"},
        {"id" : 3,"name": "Episode"}
      ];
      homesearch.lookingFor = function(){
        homesearch.type.name.trim();

        switch (homesearch.type.name) {
          case "Serie":
          homesearch.type.name="series"
          break;
          case "Movie":
          homesearch.type.name="movie"
          break;
          case "Episode":
          homesearch.type.name="episode"
          break;
          default:

        }
        var url = "http://www.omdbapi.com/?type="+homesearch.type.name+"&t="+homesearch.search+"&tomatoes=true&r=json";
        $http.get(url).then(function(success){
          homesearch.msg = success.data;
        });
      };
    }

    //;
  };
  module.component("homeMovie", {
    templateUrl:"movie-search/movie-home.component.html",
    controller: ['$http', homeSearch],
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
