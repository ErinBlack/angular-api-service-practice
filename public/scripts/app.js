console.log('js');

//create my application
var myApp = angular.module('myApp', []);

//create my controller
myApp.controller('GifController', function(GifService){
  console.log('GifController Entered');
  var vm = this;


  vm.randomGif = function(){
    console.log('entered vm.randomGif');
    GifService.randomGif().then(function(returnGif){
      console.log('Came back from promise', returnGif);
      vm.image = returnGif;
    }); //end GifService
  };//end randomGif

  vm.searchGif = function(searchTerm){
    console.log('searchTerm ', searchTerm);
    GifService.searchGif(searchTerm).then(function(returnGifs){
      console.log('Came back from promise', searchTerm);
      vm.gifs = returnGifs;
      console.log('return gifs', vm.gifs);
    });//end get function
  }; //end searchGif




}); //end controller
