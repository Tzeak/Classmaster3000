'use strict';

angular.module('classmasterApp', ['ngAnimate','ngRoute'])

  .constant('variables', {
    calcA: 'Calculus AB',
    calcB: 'Calculus BC',
    csci: 'Computer Science A',
    phys: 'Physics C: Mechanics',
    chem: 'Chemistry',
    esci: 'Environmental Science',
    ctw1: 'CTW 1',
    ctw2: 'CTW 2',
    math9: 'MATH 9',
    math11: 'MATH 11',
    math12: 'MATH 12',
    math13: 'MATH 13',
    math14: 'MATH 14',
    math53: 'MATH 53',
    amth106: 'AMTH 106',
    amth108: 'AMTH 108',
    coen10: 'COEN 10+L',
    coen11: 'COEN 11+L',
    coen12: 'COEN 12+L',
    coen19: 'COEN 19',
    coen20: 'COEN 20+L',
    coen21: 'COEN 21+L',
    candi1: 'C & I 1',
    candi2: 'C & I 2',
    chem11: 'CHEM 11+L',
    phys31: 'PHYS 31+L',
    phys32: 'PHYS 32+L',
    engr1: 'ENGR 1',
    rel1: 'Religion 1',
    natSci: 'Natural Science',
    core: 'University Core',
    free: 'Free Elective',
    coen60: 'COEN 60'
  })

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .controller('ScheduleCtrl',function ($window,$timeout,$scope,$route, variables) {
    var vars = variables;
    $scope.vars = variables;
    $scope.ap = [];
    $scope.aps = {};
    
    //aptests
    $scope.a = [
      {
        name:vars.calcA,
        store: 'calcA'
      },
      {
        name:vars.calcB,
        store: 'calcB'
      },
      {
        name:vars.csci,
        store: 'csci'
      },
      {
        name:vars.phys,
        store: 'phys'
      },
      {
        name:vars.chem,
        store: 'chem'
      },
      {
        name:vars.esci,
        store: 'esci'
      }
    ];

    //generic
    $scope.spring19 = vars.coen19;
    $scope.compFallMath = vars.math11;
    $scope.compFallCoen = vars.coen10;
    $scope.compFallSci = vars.chem11;

    $scope.compWinterMath = vars.math12;
    $scope.compWinterCoen = vars.coen11;
    $scope.compWinterSci = vars.phys31;

    $scope.compSpringMath = vars.math13;
    $scope.compSpringCoen = vars.coen12;
    $scope.compSpringSci = vars.phys32;
    $scope.fallEng = vars.engr1;

    //WDE
    $scope.natSci = vars.natSci;
    $scope.fallMath = vars.math11;
    $scope.fallCoen = vars.coen10;

    $scope.winterMath = vars.math12;
    $scope.winterCoen = vars.coen11;

    $scope.springMath = vars.math13;
    $scope.springCoen = vars.coen12;
    $scope.fallEng = vars.engr1;
    
    //resets
    var lowFlag;
    $scope.calcA = false;
    $scope.calcB = false;
    $scope.chem = false;
    $scope.phys = false;
    $scope.esci = false;
    $scope.cSciHi = false;
    $scope.cSciLo = false;
    $scope.engrQtr = 'fall';

    /* Performs class resets on every scope digest */
    function classChanger(){
      if($scope.priorProg){
        $scope.cSciHi = true;
      }
      else if($scope.ap[2] < 3 && $scope.ap[2] > 5 || $scope.ap[2] === undefined){
        $scope.cSciHi = false;
      }
      /* Math Sequence */
        if($scope.calcA){
          //CSE
          $scope.compFallMath = vars.math12;
          $('#compFallMath').removeClass().addClass('math');
          $scope.compWinterMath = vars.math13;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.math14;
          $('#compSpringMath').removeClass().addClass('math');

          //WDE
          $scope.fallMath = vars.math12;
          $('#fallMath').removeClass().addClass('math');
          $scope.winterMath = vars.math13;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.math14;
          $('#springMath').removeClass().addClass('math');
        }
        else{
          //CSE
          $scope.compFallMath = vars.math11;
          $('#compFallMath').removeClass().addClass('math');
          $scope.compWinterMath = vars.math12;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.math13;
          $('#compSpringMath').removeClass().addClass('math');

          //WDE
          $scope.fallMath = vars.math11;
          $('#fallMath').removeClass().addClass('math');
          $scope.winterMath = vars.math12;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.math13;
          $('#springMath').removeClass().addClass('math');
        }

        if($scope.calcB){
          //CSE
          $scope.compFallMath = vars.math13;
          $('#compFallMath').removeClass().addClass('math');
          $scope.compWinterMath = vars.math14;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.amth106;
          $('#compSpringMath').removeClass().addClass('math');

          //WDE
          $scope.fallMath = vars.math13;
          $('#fallMath').removeClass().addClass('math');
          $scope.winterMath = vars.math14;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.amth106;
          $('#springMath').removeClass().addClass('math');
        }
        else if(!$scope.calcA){
          $scope.compFallMath = vars.math11;
          $('#compFallMath').removeClass().addClass('math');
          $scope.compWinterMath = vars.math12;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.math13;
          $('#compSpringMath').removeClass().addClass('math');

          //WDE
          $scope.fallMath = vars.math11;
          $('#fallMath').removeClass().addClass('math');
          $scope.winterMath = vars.math12;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.math13;  
          $('#springMath').removeClass().addClass('math');      
        }
        else{
          $scope.compFallMath = vars.math12;
          $('#compFallCoen').removeClass().addClass('math');
          $scope.compWinterMath = vars.math13;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.math14;
          $('#compSpringMath').removeClass().addClass('math');
          //WDE
          $scope.fallMath = vars.math12;
          $('#fallMath').removeClass().addClass('math');
          $scope.winterMath = vars.math13;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.math14;
          $('#springMath').removeClass().addClass('math');
        }

        if($scope.cSciLo){
          $scope.compFallCoen = vars.core;
          $('#compFallCoen').removeClass().addClass('core');
          $scope.compWinterCoen = vars.coen11;
          $('#compWinterCoen').removeClass().addClass('coen');
          $scope.compSpringCoen = vars.coen12;
          $('#compSpringCoen').removeClass().addClass('coen');

          //WDE
          $scope.fallCoen = vars.coen11;
          $('#fallCoen').removeClass().addClass('coen');
          $scope.winterCoen = vars.coen12;
          $('#winterCoen').removeClass().addClass('coen');
          $scope.springCoen = vars.coen60;
          $('#springCoen').removeClass().addClass('coen');
        }
        
        if($scope.cSciLo && $scope.chem){
          $scope.compFallSci = vars.core;
          $('#compFallSci').removeClass().addClass('core');
          $scope.compFallCoen = vars.coen11;
          $('#compFallCoen').removeClass().addClass('coen');
          $scope.compWinterCoen = vars.coen12;
          $('#compWinterCoen').removeClass().addClass('coen');
          $scope.compSpringCoen = vars.coen20;
          $('#compSpringCoen').removeClass().addClass('coen');

          //WDE
          $scope.natSci = vars.core;
          $('#natSci').removeClass().addClass('core');
          $scope.fallCoen = vars.coen11;
          $('#fallCoen').removeClass().addClass('coen');
          $scope.winterCoen = vars.coen12;
          $('#winterCoen').removeClass().addClass('coen');
          $scope.springCoen = vars.coen60;
          $('#springCoen').removeClass().addClass('coen');
        }
        else if($scope.cSciLo){
          $scope.compFallSci = vars.chem11;
          $('#compFallSci').removeClass().addClass('math');
          $scope.natSci = vars.natSci;
          $('#natSci').removeClass().addClass('math');
        }

        if($scope.cSciHi && !$scope.phys){
          if(!$scope.chem){
            $scope.compFallCoen = vars.candi1;
            $('#compFallCoen').removeClass().addClass('core');
            $scope.compWinterCoen = vars.candi2;
            $('#compWinterCoen').removeClass().addClass('core');
            $scope.compSpringCoen = vars.coen12;
            $('#compSpringCoen').removeClass().addClass('coen');

            //WDE
            $scope.fallCoen = vars.coen12;
            $('#fallCoen').removeClass().addClass('coen');
            $scope.winterCoen = vars.coen60;
            $('#winterCoen').removeClass().addClass('coen');
            $scope.springCoen = vars.free;
            $('#springCoen').removeClass().addClass('core');
          }
        }
        if($scope.cSciHi && $scope.phys && $scope.chem || $scope.esci){
          $scope.compFallCoen = vars.coen12;
          $('#compFallCoen').removeClass().addClass('coen');
          $scope.compWinterCoen = vars.coen21;
          $('#compWinterCoen').removeClass().addClass('coen');
          $scope.compSpringCoen = vars.coen20;
          $('#compSpringCoen').removeClass().addClass('coen');

          //WDE
          $scope.fallCoen = vars.coen12;
          $('#fallCoen').removeClass().addClass('coen');
          $scope.winterCoen = vars.coen60;
          $('#winterCoen').removeClass().addClass('coen');
          $scope.springCoen = vars.free;
          $('#springCoen').removeClass().addClass('core');
        }
        else if($scope.cSciLo && !$scope.cSciHi && $scope.phys && $scope.chem || $scope.esci ){
          $scope.compFallCoen = vars.coen11;
          $('#compFallCoen').removeClass().addClass('coen');
          $scope.compWinterCoen = vars.coen12;
          $('#compWinterCoen').removeClass().addClass('coen');
          $scope.compSpringCoen = vars.coen20;
          $('#compSpringCoen').removeClass().addClass('coen');

          //WDE
          $scope.fallCoen = vars.coen11;
          $('#fallCoen').removeClass().addClass('coen');
          $scope.winterCoen = vars.coen12;
          $('#winterCoen').removeClass().addClass('coen');
          $scope.springCoen = vars.coen20;
          $('#springCoen').removeClass().addClass('coen');
        }
        if(!$scope.cSciLo && !$scope.cSciHi){
          $scope.compFallCoen = vars.coen10;
          $('#compFallCoen').removeClass().addClass('coen');
          $scope.compWinterCoen = vars.coen11;
          $('#compWinterCoen').removeClass().addClass('coen');
          $scope.compSpringCoen = vars.coen12;
          $('#compSpringCoen').removeClass().addClass('coen');

          //WDE
          $scope.fallCoen = vars.coen10;
          $('#fallCoen').removeClass().addClass('coen');
          $scope.winterCoen = vars.coen11;
          $('#winterCoen').removeClass().addClass('coen');
          $scope.springCoen = vars.coen12;
          $('#winterCoen').removeClass().addClass('coen');
        }

        if($scope.chem){
          $scope.compFallSci = vars.core;
          $('#compFallSci').removeClass().addClass('core');

          $scope.natSci = vars.core;
          $('#fallSci').removeClass().addClass('core');
        }
        else{
          $scope.compFallSci = vars.chem11;
          $('#compFallSci').removeClass().addClass('math');

          $scope.natSci = vars.natSci;
          $('#fallSci').removeClass().addClass('math');
        }

        if($scope.phys){
          $scope.compWinterSci = vars.core;
          $('#compWinterSci').removeClass().addClass('core');
        }
        else{
          $scope.compWinterSci = vars.phys31;
          $('#compWinterSci').removeClass().addClass('math');
        }

        if($scope.math13){
          $scope.compFallMath = vars.math14;
          $('#compFallMath').removeClass().addClass('math');
          $scope.compWinterMath = vars.amth106;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.amth108;
          $('#compSpringMath').removeClass().addClass('math');

          $scope.fallMath = vars.math14;
          $('#fallMath').removeClass().addClass('math');
          $scope.winterMath = vars.amth106;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.amth108;
          $('#springMath').removeClass().addClass('math');
        }

        if($scope.math14){
          $scope.compFallMath = vars.math53;
          $('#compFallMath').removeClass().addClass('math');
          $scope.compWinterMath = vars.amth106;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.amth108;
          $('#compSpringMath').removeClass().addClass('math');

          $scope.fallMath = vars.core;
          $('#fallMath').removeClass().addClass('core');
          $scope.winterMath = vars.amth106;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.amth108;
          $('#springMath').removeClass().addClass('math');
        }

        if($scope.esci && $scope.chem && $scope.calcB){
          $scope.compSpringMath = vars.amth108;
          $scope.springMath = vars.amth108;
          $('#compSpringMath').removeClass().addClass('math');
          $('#SpringMath').removeClass().addClass('math');

        }

        if(!$scope.math13 && !$scope.math14 && !$scope.calcA && !$scope.calcB){
          $scope.compFallMath = vars.math11;
          $('#compFallMath').removeClass().addClass('math');
          $scope.compWinterMath = vars.math12;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.math13;
          $('#compSpringMath').removeClass().addClass('math');

          //WDE
          $scope.fallMath = vars.math11;
          $('#fallMath').removeClass().addClass('math');
          $scope.winterMath = vars.math12;
          $('#fallMath').removeClass().addClass('math');
          $scope.springMath = vars.math13;
          $('#fallMath').removeClass().addClass('math');
        }
        
        if($scope.phys && $scope.chem){
          $scope.compFallSci = vars.candi1;
          $('#compFallSci').removeClass().addClass('core');
          $scope.compWinterSci = vars.candi2;
          $('#compWinterSci').removeClass().addClass('core');

          //WDE
          $scope.natSci = vars.core;
          $('#fallSci').removeClass().addClass('core');
        }
        else if($scope.cSciHi){
          $scope.compFallCoen = vars.candi1;
          $('#compFallCoen').removeClass().addClass('core');
          $scope.compWinterCoen = vars.candi2;
          $('#compWinterCoen').removeClass().addClass('core');
          $scope.compSpringCoen = vars.coen12;
          $('#compSpringCoen').removeClass().addClass('coen');

          //WDE
          $scope.fallCoen = vars.coen12;
          $('#fallCoen').removeClass().addClass('coen');
          $scope.winterCoen = vars.coen60;
          $('#winterCoen').removeClass().addClass('coen');
          $scope.springCoen = vars.free;
          $('#springCoen').removeClass().addClass('core');
        }

        if($scope.esci && !$scope.chem && !$scope.phys){
          $scope.compFallSci = vars.core;
          $('#compFallSci').removeClass().addClass('core');

          //WDE
          $scope.natSci = vars.core;
          $('#fallSci').removeClass().addClass('core');
        }

        if($scope.esci && !$scope.chem && $scope.phys){
          $scope.compFallSci = vars.candi1;
          $('#compFallSci').removeClass().addClass('core');
          $scope.compWinterSci = vars.candi2;
          $('#compFallSci').removeClass().addClass('core');

          //WDE
          $scope.natSci = vars.core;
          $('#fallSci').removeClass().addClass('core');
        } 

        if($scope.esci && $scope.chem && $scope.math14){
          $scope.compWinterMath = vars.amth108;
          $('#compWinterMath').removeClass().addClass('math');
          $scope.compSpringMath = vars.core;
          $('#compSpringMath').removeClass().addClass('core');

          //WDE
          $scope.winterMath = vars.amth108;
          $('#winterMath').removeClass().addClass('math');
          $scope.springMath = vars.core;
          $('#springMath').removeClass().addClass('core');

        }

        if($scope.coen19){
          $('#spring19').removeClass().addClass('core');
          $scope.spring19 = vars.core;
        }
        else{
          $('#spring19').removeClass().addClass('math');
          $scope.spring19 = vars.coen19;
        }

        if($scope.cSciHi && $scope.chem && $scope.phys && $scope.coen20){
          $scope.compSpringCoen = vars.core;
          $('#compSpringCoen').removeClass().addClass('core');
        }
        if($scope.phys32){
          $scope.compSpringSci = vars.core;
          $('#compSpringSci').removeClass().addClass('core');
        }
        else{
          $scope.compSpringSci = vars.phys32;
          $('#compSpringSci').removeClass().addClass('math');
        }
        if($scope.calcReady){
          $scope.compFallMath = vars.math9;
          $scope.compWinterMath = vars.math11;
          $scope.compSpringMath = vars.math12;

          //WDE
          $scope.fallMath = vars.math9;
          $scope.winterMath = vars.math11;
          $scope.springMath = vars.math12;
        }
        if($scope.engrQtr === 'fall'){
          $scope.fallEng = vars.engr1;
          $scope.winterEng = '';
          $('#fallEng').addClass('coen');
          $('#winterEng').removeClass();
        }
        else if($scope.engrQtr === 'winter'){
          $scope.fallEng = '';
          $scope.winterEng = vars.engr1;
          $('#winterEng').addClass('coen');
          $('#fallEng').removeClass();
        }

      }

    function errorCheck(){
      for(var i = 0; i < $scope.ap.length; i++){
        if($scope.ap[i] > 5 || $scope.ap[i] < 1 && $scope.ap[i] !== null){
          $scope.ap[i] = '';
          return false;
        }
        else{
          delete $scope.errorMessage;
        }
      }
    }

    $scope.reset = function(){
      $route.reload();      
    }

    $scope.selectAll = function(){
        var checkbox = event.target;
        if(checkbox.checked){
          $(checkbox)
            .parent()
            .prevAll('td')
            .find('input')
            .prop('checked',true)
            .prop('disabled',true);
        }
        else{
          $(checkbox)
            .parent()
            .prevAll('td')
            .find('input')
            .prop('checked',false)
            .prop('disabled',false);
        }
    };

    $scope.change = function(test, score){
      errorCheck();
      //User is inputting into Calclus AB box
      if(test === 'calcA'){

        //Sets Calc AB flag to true
        if(score >= 3 && score <= 5){
          $scope.calcA = true;
        }

        /* Sets Calc AB flag to false 
        if user does not have a 3 on Calc BC */
        else if(!lowFlag){
          $scope.calcA = false;
        }
      }

      /* User is inputting into Calculus BC box */
      if (test === 'calcB'){
        /* A score of 3 has the same results
        as passing Calc AB exam, Calc AB flag is set  */
        if(score === 3 && !$scope.calcA){
          $scope.calcA = true;
          lowFlag = true;
        }
        /* Sets Calc BC flag to true if score is 4 or 5*/
        else if(score === 4 || score === 5){
          $scope.calcB = true;
          lowFlag = false;
        }
        /* Calc B removed, Calc AB is still passing */
        /* Reset to generic Math sequence */
        else if($scope.ap[0] >= 3 && $scope.ap[0] <= 5){
          $scope.calcB = false;
          lowFlag = false;
        }
        else{
          $scope.calcB = false;
          $scope.calcA = false;
          lowFlag = false;
        }
      }   

      /* User is inputting into Comp Sci box */  
      if (test === 'csci'){
        if(score === 3){
          $scope.cSciLo = true;
          $scope.cSciHi = false;
        }
        else if(score === 4 || score === 5){
          $scope.cSciHi = true;
          $scope.cSciLo = false;
        }
        else{
          $scope.cSciHi = false;
          $scope.cSciLo = false;
        }
      }

      /* User is inputting into Enviro Sci box */
      if(test === 'esci'){
        if(score >= 4 && score <= 5){
          $scope.esci = true;
        }
        else{
          $scope.esci = false;
        }
      }
    
      /* User is inputting into Physics box */
      if(test === 'phys'){
        if(score >= 4 && score <= 5){
          $scope.phys = true;
        }
        else{
          $scope.phys = false;
        }
      }

      /* User is inputting into Chemistry box */
      if(test === 'chem'){
        if(score >= 3 && score <= 5){
          $scope.chem = true;
        }
        else{
          $scope.chem = false;
        }
      }

      $timeout(function(){
        classChanger();
      },500);
    }; //end change function

    $scope.print = function(){
      $window.print();
    };

  }); //end about controller
