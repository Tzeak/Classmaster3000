'use strict';

angular.module('classmasterApp', ['ngAnimate','ngRoute'])
  .constant('vars', {
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
    core: 'University Core',
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('MainCtrl', function() {
  })
  .controller('AboutCtrl', function ($window,$timeout,$scope,$rootScope,vars) {
    $scope.apselects = {};
    $scope.apclasses = [
        {
          name:'Calculus AB',
          score:4
        },
        {
          name:'Calculus BC',
          score:3
        },
        {
          name:'Computer Science A',
          score:3
        },
        {
          name:'Physics C: Mechanics',
          score:4
        },
        // {
        //   name:'Physics C: Electricity & Magnetism',
        //   score:4
        // },
        {
          name:'Chemistry',
          score:3
        },
        {
          name:'Environmental Science',
          score:4
        }
      ];
      $scope.fallmath = vars.math11;
      $scope.wintermath = vars.math12;
      $scope.springmath = vars.math13;
      $scope.fallcoen = vars.coen10;
      $scope.wintercoen = vars.coen11;
      $scope.springcoen = vars.coen12;
      $scope.fallscience = vars.chem11;
      $scope.winterscience = vars.phys31;
      $scope.springscience = vars.phys32;
      $scope.fallengr = vars.engr1;
      $scope.isError = false;
      $scope.errorCount = 0;

      $scope.$watch('errorCount', function(){
        $timeout(function(){
          if($scope.errorCount === 0){
          delete $scope.errorMessage;
        }
      },200);
      });

      function errorCheck(score){
        if(score > 5 || score < 1){
          $scope.errorCount++;
          $scope.isError = true;
          $scope.errorMessage = 'Enter a number between 1 and 5';
        }
      }

      $scope.change = function(){
        $timeout(function() {
          angular.forEach($scope.apselects, function(score,apTest){
            if(score !== null){
              errorCheck(score);
            }
            //if AB is checked
            if(apTest === 'Calculus AB'){
              if(score === 3){
                $scope.calcAB3 = true;
                $scope.calcAB45 = false;
              }
              else if(score > 3 && score <= 5){
                $scope.calcAB45 = true;
                $scope.calcAB3 = false;
              }
              else{
                $scope.calcAB45 = false;
                $scope.calcAB3 = false;
              }
            }

            //if BC is checked
            if(apTest === 'Calculus BC'){
            }

            if(apTest === 'Computer Science A'){

            }
            else if(apTest === 'Computer Science A'){
            
            }

            if(apTest === 'Chemistry'){
            }

            if(apTest === 'Physics C: Mechanics'){
            }
          }); //end for each
        }, 10); //end timeout
        $scope.errorCount = 0;
      }; //end click

      $scope.print = function(){
        $window.print();
      };
    })

.controller('ScheduleCtrl', function() {
  });
