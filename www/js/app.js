// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 

angular.module('starter', ['ionic']).controller('MyCtrl', function($scope, $document) {



  $scope.toggleTest = function() {

    var menu = document.getElementById('conteudoMenu');
    var menuBar = document.getElementById('cabecalhoMenu');
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
    menu.style.height = menu.offsetHeight+'px';

    var children = document.getElementById('conteudoMenu').children;
    var heightChild = totalHeight/children.length;
    var j = 0;
    var array = [""];

    for (var i = children.length; i > 0; i--) {
        j++;
        var tableChild = children[i-1];
        var qtdFilhos = children.length;
        var topAtual = heightChild*(i-1);   
        var bottomAtual = heightChild*(j-1);  

       
        tableChild.style.bottom =bottomAtual+'px';
        tableChild.style.height =heightChild+'px';


        var h = totalHeight-((j-1)*heightChild);

        var index = j*1000

        var item = {id:tableChild.id, topValue:topAtual, bottomValue:bottomAtual, heightC:heightChild, idx:index};

        if(i==children.length){
           
         }

        array[j-1] = item;
        
    }

    sleepToogleMenuItemTest(array,900);

  };
  
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
    menu.style.height = menu.offsetHeight+'px';


    toggleMenuItens(totalHeight);

  };

  $scope.testDiv = function () {

    console.log('entrei')

     var dt = document.getElementById( 'divTest1' );

     console.log(dt);

      dt.style.height = '50px';
  }

  $scope.clickItemMenu = function () {
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');
     menu.style.top = '-100%';
     console.log( menuBar.style.top)
     menuBar.style.top = '0px';

     var children = document.getElementById('menuTop').children[0].children;

     var processor = setInterval(function(){

        for (var i = 0; i < children.length; i++) {
           var tableChild = document.getElementById(children[i].id);
           tableChild.classList.remove('transitionsMenuItemBounce');
           tableChild.classList.remove('transitionsMenuItem');    
           tableChild.style.top = '-2000px';
        };

        clearInterval(processor); 
        
    }, 750);
    
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
    var children = document.getElementById('menuTop').children[0].children;
    var heightChild = totalHeight/children.length;
    var j = 0;
    var array = [""];

    for (var i = children.length; i > 0; i--) {
        j++;
        var tableChild = children[i-1];
        var qtdFilhos = children.length;
        var topAtual = heightChild*(i-1);   
        var bottomAtual = totalHeight-heightChild*(j-1);   

       
        //tableChild.style.height = totalHeight + 'px';

        var h = totalHeight-((j-1)*heightChild);

        var index = j*1000

        var item = {id:tableChild.id, topValue:topAtual, bottomValue:bottomAtual, heightC:h, idx:index};

        if(i==children.length){

          console.log(bottomAtual)

          //tableChild.style.top =  '0px';
          tableChild.style.bottom = 0+'px';
          /*tableChild.style.zIndex = index;
          tableChild.style.height = 300 +'px';*/

          console.log(tableChild.style.bottom)
          console.log(tableChild.style.height)

          /*tableChild.classList.remove('transitionsMenuItem');
          tableChild.classList.add('transitionsMenuItemBounce');
          tableChild.style.top = topAtual + 'px';*/

         }

        array[j-1] = item;
        
    }

    //sleepToogleMenuItem(array,900);
    //sleepToogleMenuItemBounce(array,900,heightChild);
}

function sleepToogleMenuItemTest(arrayItens, intervalTime) {

   var i=0;
   var limit = arrayItens.length;

   var processor = setInterval(function(){

        var tableChild = document.getElementById(arrayItens[i].id);

        tableChild.classList.remove('transitionsMenuItemBounce');
        tableChild.classList.add('transitionsMenuItem');
            
        var topAtual = arrayItens[i].topValue;
        var bottomAtual = arrayItens[i].bottomValue;


        var h = arrayItens[i].heightC;

        //tableChild.style.top =  '0px'//topAtual+'px'; 

        //tableChild.style.bottom = bottomAtual+'px';


        //tableChild.style.zIndex = arrayItens[i].idx;


        tableChild.style.height = h/2 +'px';


       if(++i >= limit){ 
            clearInterval(processor); 
        } 
        
    }, intervalTime);
}


function sleepToogleMenuItem(arrayItens, intervalTime) {

   var i=1;
   var limit = arrayItens.length;

   var processor = setInterval(function(){

        var tableChild = document.getElementById(arrayItens[i].id);

        tableChild.classList.remove('transitionsMenuItemBounce');
        tableChild.classList.add('transitionsMenuItem');
            
        var topAtual = arrayItens[i].topValue;
        var bottomAtual = arrayItens[i].bottomValue;


        var h = arrayItens[i].heightC;

        //tableChild.style.top =  '0px'//topAtual+'px'; 

        tableChild.style.bottom = bottomAtual+'px';


        tableChild.style.zIndex = arrayItens[i].idx;

        tableChild.style.height = h +'px';

       if(++i >= limit){ 
            clearInterval(processor); 
        } 
        
    }, intervalTime);
}

function sleepToogleMenuItemBounce(arrayItens, intervalTime, heightChild) {

   var i=0;
   var limit = arrayItens.length;

   var processor = setInterval(function(){

      if(i<limit){

        var tableChild = document.getElementById(arrayItens[i].id);

        tableChild.classList.remove('transitionsMenuItem');
        tableChild.classList.add('transitionsMenuItemBounce');

              
        var topAtual = arrayItens[i].topValue;

        tableChild.style.top = topAtual+'px'; 
        
        if(i>0){
          var tableChildAnterior = document.getElementById(arrayItens[i-1].id);
          tableChildAnterior.style.height = heightChild +'px';
        } 

      }else{
          var tableChildAnterior = document.getElementById(arrayItens[i-1].id);
          tableChildAnterior.style.height = heightChild +'px';
      }

      if(++i > limit){ 
        clearInterval(processor); 
      } 
        
    }, intervalTime);
}






//FAZER O PRIMEIRO ITEM DESCER JUNTO COM A MENUBAR

//TESTAR PARA DIV COM HEIGH JÀ NORMAL USAR PROPRIEDADE BOTTON E HEIGHT TRANSITION INVERTIDO

//ESCOLHER A MELHOR FUNCAO E QUAL USAR




//TESTE NOVO MENU DO INDEX2
