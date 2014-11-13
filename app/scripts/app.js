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
    math11: 'MATH 11',
    math12: 'MATH 12',
    math13: 'MATH 13',
    math14: 'MATH 14',
    math53: 'MATH 53',
    amth106: 'AMTH 106',
    amth108: 'AMTH 108',
    coen10: 'COEN 10',
    coen11: 'COEN 11',
    coen12: 'COEN 12',
    coen19: 'COEN 19',
    coen20: 'COEN 20',
    coen21: 'COEN 21',
    candi1: 'C & I 1',
    candi2: 'C & I 2',
    chem11: 'CHEM 11',
    phys31: 'PHYS 31',
    phys32: 'PHYS 32',
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
  .controller('MainCtrl', function() {
  })
  .controller('AboutCtrl',function ($window,$timeout,$scope,variables) {
    var vars = variables;
    $scope.vars = variables;
    $scope.ap = [];
    $scope.aps = {};
    $scope.a = [
      {
        name:$scope.vars.calcA,
        store: 'calcA'
      },
      {
        name:$scope.vars.calcB,
        store: 'calcB'
      },
      {
        name:$scope.vars.csci,
        store: 'csci'
      },
      {
        name:$scope.vars.phys,
        store: 'phys'
      },
      {
        name:$scope.vars.chem,
        store: 'chem'
      },
      {
        name:$scope.vars.esci,
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

    var calcA;
    var calcB;
    var lowFlag;
    // var chem;
    // var phys;
    // var csci;
    // var esci;
    $scope.$watch(function(){
        if(calcA === true){
          $scope.fallMath = vars.math12;
          $scope.winterMath = vars.math13;
          $scope.springMath = vars.math14;
        }
        else{
          $scope.fallMath = vars.math11;
          $scope.winterMath = vars.math12;
          $scope.springMath = vars.math13;
        }
        if(calcB === true){
          $scope.fallMath = vars.math13;
          $scope.winterMath = vars.math14;
          $scope.springMath = vars.amth106;
        }
        else if(!calcA){
          $scope.fallMath = vars.math11;
          $scope.winterMath = vars.math12;
          $scope.springMath = vars.math13;
        }
        else{
          $scope.fallMath = vars.math12;
          $scope.winterMath = vars.math13;
          $scope.springMath = vars.math14;
        }
      });
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
    $scope.change = function(test, score){
      errorCheck();
      //User is inputting into Calclus AB box
      if(test === 'calcA'){

        //Sets Calc AB flag to true
        if(score >= 3 && score <= 5){
          calcA = true;
        }

        /* Sets Calc AB flag to false 
        if user does not have a 3 on Calc BC */
        else if(!lowFlag){
          calcA = false;
        }
      }

      /* User is inputting into Calculus BC box */
      if (test === 'calcB'){

        /* A score of 3 has the same results
        as passing Calc AB exam, Calc AB flag is set  */
        if(score === 3 && !calcA){
          calcA = true;
          lowFlag = true;
        }
        /* Sets Calc BC flag to true if score is 4 or 5*/
        if(score === 4 || score === 5){
          calcB = true;
          lowFlag = false;
        }
        /* Calc B removed, Calc AB is still passing */
        else if(calcA){
          calcB = false;
          lowFlag = false;
        }
        /* Reset to generic Math sequence */
        else{
          calcA = false;
          calcB = false;
          lowFlag = false;
        }
      }
      //Error Checker
      
      /* Performs class resets on every scope digest */
      
    };
  });