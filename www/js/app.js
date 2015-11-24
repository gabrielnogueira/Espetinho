// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 

angular.module('starter', ['ionic']).controller('MyCtrl', function($scope, $document) {
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];
  
  $scope.toggleTopMenu = function () {
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');
    menu.style.height = menuBar.style.top = (menu.offsetHeight==0)?'100%':'0px';
  };

  $scope.clickItemMenu = function () {
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');
    menu.style.height = menuBar.style.top = '0px';

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

