myApp.service('GifService', function($http){
  gs = this;

  gs.randomGif = function(){
    console.log('Here at randomGif');

    //get function

    return $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='
    }).then(function(response){
      console.log('returned response from giphy api', response);
      return response.data.data;
    });

    //end get method
  }; //end randomGif



}); // end myApp.service
