(function(angular) {
  "use strict";

  var module = angular.module("moviesearch");

  function infoMovie($scope){
    var info = this;
    info.name = "toto";
    console.log(info);
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

    }
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
      var url = "http://www.omdbapi.com/?type="+homesearch.type.name+"&s="+homesearch.search+"&tomatoes=true&r=json";
      $http.get(url).then(function(success){
        for(var i = 0; i< success.data.Search.length; i++){
          if(success.data.Search[i].Poster === "N/A"){
            success.data.Search[i].Poster = "./movie-search/images/no-image.png";
          }
        }
        homesearch.msg = success.data;
      });
      homeSearch.checkDetails = function(data){
        console.log(data);
      }
    };

    //;
  };
  module.component("homeMovie", {
    templateUrl:"movie-search/movie-home.component.html",
    controller: ['$http', homeSearch],
    controllerAs: 'homesearch',
    bindings:{
      data: '='
    }
  });
  module.component("movieDetails", {
    templateUrl: "movie-search/movie-details.component.html",
    controller: ['$scope', infoMovie],
    controllerAs: 'info',
    bindings:{
      data: '='
    },
    transclude : true,
  });

}(window.angular));

//url example
//http://www.omdbapi.com/?type=movie&t=constantine&y=2005&plot=short&tomatoes=true&r=json
