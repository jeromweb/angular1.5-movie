(function(angular) {
  "use strict";

  var module = angular.module("moviesearch");

  function infoMovie($http, $location, $window){
    var info = this;

   info.$routerOnActivate = function(next, previous) {
     // Get the hero identified by the route parameter
     var imdbid = next.params.id;
     return info.id = imdbid;
   };
   info.$postLink = function(){
     var completeUrl = 'http://www.omdbapi.com/?i='+info.id+'&r=json';

     console.log(completeUrl);
       $http.get(completeUrl).then(function(retrieveData){
         info.description = retrieveData.data;
       });
  }

  };

  function homeSearch($http, $window){
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
        console.log(success);
        for(var i = 0; i< success.data.Search.length; i++){
          if(success.data.Search[i].Poster === "N/A"){
            success.data.Search[i].Poster = "./movie-search/images/no-image.png";
          }
        }
        homesearch.msg = success.data;
        sessionStorage.select = success.data.imdbID;
      });
    };

    //;
  };
  module.component("homeMovie", {
    templateUrl:"movie-search/movie-home.component.html",
    controller: ['$http' , '$window',homeSearch],
    controllerAs: 'homesearch',
    bindings:{
      data: '='
    }
  });
  module.component("movieDetails", {
    templateUrl: "movie-search/movie-details.component.html",
    controller: ['$http', '$location', '$window', infoMovie],
    controllerAs: 'info',
    bindings:{
      data: '='
    },
    transclude : true,
  });

}(window.angular));

//url example
//http://www.omdbapi.com/?type=movie&t=constantine&y=2005&plot=short&tomatoes=true&r=json
