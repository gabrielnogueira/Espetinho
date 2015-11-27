// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
 

angular.module('starter', ['ionic']).controller('MyCtrl', function($scope, $document) {
  


$scope.testeTreme = function () {
    var div = document.getElementById('tremer');
    div.classList.add('shake-constant');
}

  $scope.toggleTopMenu = function () {
   
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');

    /*menu.classList.remove('transitionsMenuOut');
    menuBar.classList.remove('transitionsMenuOut');
    menu.classList.add('transitionsMenu');
    menuBar.classList.add('transitionsMenu');*/

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

    var transitionEnd = transitionEndEventName();

    function funcionTremer(){
        fazTremer('teste6'); 

        toggleMenuItensTest(totalHeight, 1, document.getElementById('scrollPanel').children[0].children.length-1);

        document.getElementById('menuBar').removeEventListener(transitionEnd, funcionTremer, false);
    }

    document.getElementById('menuBar').addEventListener(transitionEnd, funcionTremer, false);

    toggleMenuItensTest(totalHeight, 0, document.getElementById('scrollPanel').children[0].children.length);


/*    toggleMenuItensTest(totalHeight, 0, document.getElementById('scrollPanel').children[0].children.length);
*/
    //toggleMenuItens(totalHeight);
    

  };

  $scope.clickItemMenu = function () {
    var menu = document.getElementById('menuTop');
    var menuBar = document.getElementById('menuBar');

    /*menu.classList.remove('transitionsMenu');
    menuBar.classList.remove('transitionsMenu');
    menu.classList.add('transitionsMenuOut');
    menuBar.classList.add('transitionsMenuOut');*/

    var transitionEnd = transitionEndEventName();
    document.getElementById('menuBar').addEventListener(transitionEnd, resetaMenu, false);

     menu.style.top = '-100%';
     menuBar.style.top = '0px';


     var children = document.getElementById('scrollPanel').children[0].children;

     function resetaMenu(){
        for (var i = 0; i < children.length; i++) {
           var tableChild = document.getElementById(children[i].id);
           tableChild.classList.remove('transitionsMenuItem');    
           tableChild.children[0].children[0].classList.remove('shake-stop');
           tableChild.children[0].children[0].classList.remove('shake-constant');
           tableChild.style.top = '-2000px';
        };

        document.getElementById('menuBar').removeEventListener(transitionEnd, resetaMenu, false);
     }

     /*var processor = setInterval(function(){
 
     // ITERAR NOS MENUS E VOLTA-LOS PRO TOP E HEIGHT ORIGINAIS
     
        for (var i = 0; i < children.length; i++) {
           var tableChild = document.getElementById(children[i].id);
           tableChild.classList.remove('transitionsMenuItem');    
           tableChild.children[0].children[0].classList.remove('shake-stop');
           tableChild.children[0].children[0].classList.remove('shake-constant');
           tableChild.style.top = '-2000px';
        };

        clearInterval(processor); 
        
    }, 100);*/
     
     
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


function fazTremer(id){
 var div = document.getElementById(id).children[0].children[0];
 div.classList.add('shake-stop');
 div.classList.add('shake-constant');

}

function chamaProximo(totalHeight, valueJ, valueI){

    if(valueI > 0){
        toggleMenuItensTest(totalHeight, valueJ, valueI);
    }
}


function toggleMenuItensTest(totalHeight, valueJ, valueI) {


    var children = document.getElementById('scrollPanel').children[0].children;

    var menu = document.getElementById('menuTop');
    
    var heightChild = totalHeight/children.length;
    var widthChild = menu.offsetWidth + 200;
    var j = valueJ;
    var i = valueI;

    j++;

    var tableChild = children[i-1];
    var qtdFilhos = children.length;
    var topAtual = heightChild*(j-1)*-1;   

    tableChild.style.height = totalHeight + 'px';


    

    var index = j*1000

    tableChild.children[0].children[0].style.width = widthChild+ 'px';
    tableChild.children[0].children[0].style.left = '-100px';
    
    if(i==children.length){
         tableChild.classList.remove('transitionsMenuItem');
         tableChild.style.top = '0px';
         tableChild.children[0].children[0].style.height = heightChild+ 'px';
         

         //chamaProximo(totalHeight, j, i-1);
    }else{

        tableChild.classList.add('transitionsMenuItem');
            
        tableChild.style.top =  topAtual+'px'; 

        tableChild.style.zIndex = index;

        tableChild.children[0].children[0].style.height = heightChild + 'px';

        var transitionEnd = transitionEndEventName();
        tableChild.addEventListener(transitionEnd, chamarEventos, false);

    }

    function chamarEventos(){
        fazTremer(tableChild.id);
        chamaProximo(totalHeight, j, i-1);
    }

}

function toggleMenuItens(totalHeight) {
    var children = document.getElementById('scrollPanel').children[0].children;
    var heightChild = totalHeight/children.length;
    var j = 0;
    var array = [""];


    for (var i = children.length; i > 0; i--) {
        j++;
        var tableChild = children[i-1];
        var qtdFilhos = children.length;
        var topAtual = heightChild*(j-1)*-1;   

        //console.log(topAtual)
        //
        
        //
        tableChild.style.height = totalHeight + 'px';

        var index = j*1000
        
        if(i==children.length){
             tableChild.classList.remove('transitionsMenuItem');
             tableChild.style.top = '0px';
             tableChild.children[0].children[0].style.height = heightChild+ 'px';
        }else{

            tableChild.classList.add('transitionsMenuItem');

            var transitionEnd = transitionEndEventName();
            tableChild.addEventListener(transitionEnd, function(){fazTremer(tableChild.id);}, false);
                
            tableChild.style.top =  topAtual+'px'; 

            tableChild.style.zIndex = index;

            tableChild.children[0].children[0].style.height = heightChild + 'px';


        }


      /*  var h = totalHeight-((j-1)*heightChild);

        

        var item = {id:tableChild.id, topValue:topAtual, heightC:heightChild, idx:index};


        array[j-1] = item;*/
        
    }


   // var i = 1;

    



   //sleepToogleMenuItem(array,250,2);
}

function sleepToogleMenuItem(arrayItens, intervalTime, init){

   var i=init;
   var limit = arrayItens.length;

   var processor = setInterval(function(){


        var tableChild = document.getElementById(arrayItens[i].id);


        tableChild.classList.add('transitionsMenuItem');

        var transitionEnd = transitionEndEventName();
        tableChild.addEventListener(transitionEnd, function(){fazTremer(tableChild.id);}, false);
            
        var topAtual = arrayItens[i].topValue;

        var h = arrayItens[i].heightC;

        tableChild.style.top =  topAtual+'px'; 

        tableChild.style.zIndex = arrayItens[i].idx;

        tableChild.children[0].children[0].style.height = arrayItens[i].heightC + 'px';

       if(++i >= limit){ 
            clearInterval(processor); 
        } 

        if(intervalTime == .1){
            clearInterval(processor); 
            sleepToogleMenuItem(arrayItens,200,i++);
        }
        
    }, intervalTime);
}

function alertTransitionFinish(){
    alert( "Finished transition!" );
}


function transitionEndEventName () {
    var i,
        undefined,
        el = document.createElement('div'),
        transitions = {
            'transition':'transitionend',
            'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'
        };

    for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
            return transitions[i];
        }
    }

    //TODO: throw 'TransitionEnd event is not supported in this browser'; 
}


//CRIAR SHAKE IGUAL DO EXEMPLO
//FAZER SHAKE DIFERENCIADO PARA PRIMEIRO ITEM QUE VAI JUNTO COM MENU IGUAL NO EXEMPLo
//FAZER DIVS BONITAS PARA MELHOR VISUALIZAÇÃO DO LAYOUT
//ACERTAR TEMPO DOS EFEITOS





