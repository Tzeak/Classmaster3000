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
    core: 'University Core'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('AboutCtrl',function ($window,$timeout,$scope,variables) {
    var vars = variables;
    $scope.vars = variables;
    $scope.ap = [];
    $scope.aps = {};
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
    $scope.fallMath = vars.math11;
    $scope.fallCoen = vars.coen10;
    $scope.fallSci = vars.chem11;
    $scope.fallEng = vars.engr1;

    $scope.winterMath = vars.math12;
    $scope.winterCoen = vars.coen11;
    $scope.winterSci = vars.phys31;

    $scope.springMath = vars.math13;
    $scope.springCoen = vars.coen12;
    $scope.springSci = vars.phys32;

    var lowFlag;
    $scope.calcA = false;
    $scope.calcB = false;
    $scope.chem = false;
    $scope.phys = false;
    $scope.esci = false;
    $scope.cSciHi = false;
    $scope.cSciLo = false;

    /* Performs class resets on every scope digest */
    function classChanger(){
      /* Math Sequence */
        if($scope.calcA){
          $scope.fallMath = vars.math12;
          $scope.winterMath = vars.math13;
          $scope.springMath = vars.math14;
        }
        else{
          $scope.fallMath = vars.math11;
          $scope.winterMath = vars.math12;
          $scope.springMath = vars.math13;
        }

        if($scope.calcB){
          $scope.fallMath = vars.math13;
          $scope.winterMath = vars.math14;
          $scope.springMath = vars.amth106;
        }
        else if(!$scope.calcA){
          $scope.fallMath = vars.math11;
          $scope.winterMath = vars.math12;
          $scope.springMath = vars.math13;
        }
        else{
          $scope.fallMath = vars.math12;
          $scope.winterMath = vars.math13;
          $scope.springMath = vars.math14;
        }
        if($scope.calcReady){
          $scope.fallMath = vars.math9;
          $scope.winterMath = vars.math11;
          $scope.springMath = vars.math12;
        }
        else{

        }
        if($scope.cSciLo){
          $scope.fallCoen = vars.core;
          $scope.winterCoen = vars.coen11;
          $scope.springCoen = vars.coen12;
        }
        
        if($scope.cSciLo && $scope.chem){
          $scope.fallSci = vars.core;
          $scope.fallCoen = vars.coen11;
          $scope.winterCoen = vars.coen12;
          $scope.springCoen = vars.coen20;
        }
        else if($scope.cSciLo){
          $scope.fallSci = vars.chem11;
        }

        if($scope.cSciHi && !$scope.phys){
          if(!$scope.chem){
            $scope.fallCoen = vars.candi1;
            $scope.winterCoen = vars.candi2;
            $scope.springCoen = vars.coen12;
          }
        }
        if($scope.cSciHi && $scope.phys && $scope.chem || $scope.esci){
          $scope.fallCoen = vars.coen12;
          $scope.winterCoen = vars.coen21;
          $scope.springCoen = vars.coen20;
        }
        else if($scope.cSciLo && !$scope.cSciHi && $scope.phys && $scope.chem || $scope.esci ){
          $scope.fallCoen = vars.coen11;
          $scope.winterCoen = vars.coen12;
          $scope.springCoen = vars.coen20;
        }
        if(!$scope.cSciLo && !$scope.cSciHi){
          $scope.fallCoen = vars.coen10;
          $scope.winterCoen = vars.coen11;
          $scope.springCoen = vars.coen12;
        }

        if($scope.chem){
          $scope.fallSci = vars.core;
        }
        else{
          $scope.fallSci = vars.chem11;
        }

        if($scope.phys){
          $scope.winterSci = vars.core;
        }
        else{
          $scope.winterSci = vars.phys31;
        }

        if($scope.esci && $scope.chem){
          $scope.springMath = vars.amth108;
        }
        
        if($scope.phys && $scope.chem){
          $scope.fallSci = vars.candi1;
          $scope.winterSci = vars.candi2;
        }
        else if($scope.cSciHi){
          $scope.fallCoen = vars.candi1;
          $scope.winterCoen = vars.candi2;
          $scope.springCoen = vars.coen12;
        }

        if($scope.esci && !$scope.chem && !$scope.phys){
          $scope.fallSci = vars.core;
        }
        if($scope.esci && !$scope.chem && $scope.phys){
          $scope.fallSci = vars.candi1;
          $scope.winterSci = vars.candi2;
        }  
        $scope.loading=false; 
      }

    function errorCheck(){
      for(var i = 0; i < $scope.ap.length; i++){
        if($scope.ap[i] > 5 || $scope.ap[i] < 1 && $scope.ap[i] !== null){
          $scope.errorMessage = 'Enter a number between 1 and 5';
          return false;
        }
        else{
          delete $scope.errorMessage;
        }
      }
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
      $scope.loading = true;
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
        else if($scope.ap[1] === 3){
          $scope.calcB = false;
          lowFlag = false;
        }
        /* Reset to generic Math sequence */
        else{
          $scope.calcA = false;
          $scope.calcB = false;
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