// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 

angular.module('starter', ['ionic']).controller('MyCtrl', function($scope, $document) {
  


  $scope.toggleTopMenu = function () {
   
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');
    var topMenu = menu.style.top;
    var topMenuBar = menuBar.style.top;

    if(topMenu != ''){
        menu.style.top =  (topMenu !='0px')?'0px':'-100%';    
    }else{
        menu.style.top =  '0px';
    }

    if(topMenuBar != ''){
        menuBar.style.top = (topMenuBar !='0px')? '0px':'100%';
    }else{
        menuBar.style.top = '100%'
    }


    var totalHeight = menu.offsetHeight;

    toggleMenuItens(totalHeight);

  };

  $scope.clickItemMenu = function () {
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');
     menu.style.top = '-100%';
     menuBar.style.top = '0px';


     // ITERAR NOS MENUS E VOLTA-LOS PRO TOP E HEIGHT ORIGINAIS
     
     
  };
 
})
  .run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



function toggleMenuItens(totalHeight) {
    var children = document.getElementById('scrollPanel').children[0].children;
    var heightChild = totalHeight/children.length;
    var j = 0;
    var array = [""];

    console.log('Qtd Filhos: ' + children.length);

    for (var i = children.length; i > 0; i--) {
        j++;
        var tableChild = children[i-1];
        var qtdFilhos = children.length;
        var topAtual = heightChild*(i-1);   
       
        tableChild.style.height = totalHeight + 'px';

        console.log(totalHeight)

        var h = totalHeight-((j-1)*heightChild);

        var index = j*1000

        var item = {id:tableChild.id, topValue:topAtual, heightC:h, idx:index};


        array[j-1] = item;
        
    }

    sleepToogleMenuItem(array,200);
}

function sleepToogleMenuItem(arrayItens, intervalTime) {

   var i=0;
   var limit = arrayItens.length;

   console.log(limit);

   var processor = setInterval(function(){

        var tableChild = document.getElementById(arrayItens[i].id);
            
        var topAtual = arrayItens[i].topValue;

        var h = arrayItens[i].heightC;

        tableChild.style.top =  '0px'//topAtual+'px'; 

        tableChild.style.zIndex = arrayItens[i].idx;

        tableChild.style.height = h +'px';

       if(++i >= limit){ 
            clearInterval(processor); 
        } 
        
    }, intervalTime);
}


//Fazer a função que gera o bounce, que é a que mexe no TOP e no Height do Anterior

//FAZER O PRIMEIRO ITEM DESCER JUNTO COM A MENUBAR

//ESCOLHER A MELHOR FUNCAO E QUAL USAR




