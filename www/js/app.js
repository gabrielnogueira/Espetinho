// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 

angular.module('starter', ['ionic']).controller('MyCtrl', function($scope, $document) {
  
  $scope.toggleTopMenu = function () {
   


    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');

/*    menu.style.top = menuBar.style.top = (menu.style.top==0)?'100%':'0px';
*/
    var topMenu = menu.style.top;
    var topMenuBar = menuBar.style.top;

    menu.style.top =  (topMenu !='0px')?'0px':'-100%';
    menuBar.style.top = (topMenuBar !='0px')? '100%':'0px';

    console.log(menu.offsetHeight);

    var totalHeight = menu.offsetHeight;

    var children = document.getElementById('scrollPanel').children[0].children;
      var heightChild = totalHeight/children.length;
      for (var i = 0; i < children.length; i++) {
        var tableChild = children[i];
        // Do stuff
        console.log(heightChild + 'px');
        tableChild.style.height = heightChild + 'px';
      }

  };

  $scope.clickItemMenu = function () {
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');
     menu.style.top = '-100%';
     menuBar.style.top = '0px';
  };
  
})
  .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

