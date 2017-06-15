myApp.service('GifService', function($http){
  gs = this;

  gs.randomGif = function(){
    console.log('Here at randomGif');

    //http get call
    return $http({
      method: 'GET',
      //get random gif from api
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='
    }).then(function(response){
      console.log('returned response from giphy api', response);
      return response.data.data;
    });//end get method

  }; //end randomGif

  gs.searchGif = function(search){
  console.log(search);
  var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + search + "&api_key=dc6zaTOxFJmzC";

  return $http.get(searchURL).then(function(response){
  return response.data.data;
  }); //end get requets
}; // end searchGIf





}); // end myApp.service
