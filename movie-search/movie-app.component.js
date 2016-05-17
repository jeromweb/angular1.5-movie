(function() {
    "use strict";

    var module = angular.module("moviesearch", []);

    module.component("movieApp", {
        templateUrl: "movie-search/movie-app.component.html",
        $routeConfig: [
            { path: "/", component:"homeMovie", name: "Home" },
            { path: "/search", component:"movieSearch", name: "Search" },
            { path: "/about", component: "aboutMovie", name: "About" },
            { path: "/**", redirectTo: ["search", ""] }
        ]
    });
    function searchModule(){
      var search = this;
      search.name = "";
    };
    function home(){
      var home = this;
      home.msg = "homie";
    };
    module.component("homeMovie", {
      template:"<p>hello {{home.msg}}</p>",
      controller: [home]
    });
    module.component("movieSearch", {
       templateUrl: "movie-search/movie-search.component.html",
      controller: [searchModule],
      controllerAs: 'search'
    });
    module.component("aboutMovie", {
        template: "about message..."
    });

}());

//url example
//http://www.omdbapi.com/?type=movie&t=constantine&y=2005&plot=short&tomatoes=true&r=json
