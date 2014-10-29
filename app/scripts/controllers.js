angular.module('classmasterApp')
  .controller('MainCtrl', function() {
    console.log('in main');
  })
  .controller('AboutCtrl', function ($scope) {
    console.log('in about');
    var Classes = {
        calcAB: 
        {
          name:'Calculus AB',
          score:'4',
        },
        calcBC:
        {
          name:'Calculus BC',
          score:'3'
        },
        compSciA:
        {
          name:'Computer Science A',
          score:'3'
        },
        physicsB:
        {
          name:'Physics B',
        },
        physicsCmech:
        {
          name:'Physics C: Mechanics',
          score:'4'
        },
        physicsCelec:
        {
          name:'Physics C: Electricity & Magnetism',
          score:'4'
        },
        chemistry:
        {
          name:'Chemistry',
          score:'3'
        },
        enviro:
        {
          name:'Environmental Science',
          score:'4'
        }
      };
  });