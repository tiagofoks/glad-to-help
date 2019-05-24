angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page1', {
    url: '/page1',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu', {
    url: '/page3',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('hOSTING', {
    url: '/page4',
    templateUrl: 'templates/hOSTING.html',
    controller: 'hOSTINGCtrl'
  })

  .state('pERSONALPROFILE', {
    url: '/page5',
    templateUrl: 'templates/pERSONALPROFILE.html',
    controller: 'pERSONALPROFILECtrl'
  })

  .state('vOLUNTARYREGISTER', {
    url: '/page6',
    templateUrl: 'templates/vOLUNTARYREGISTER.html',
    controller: 'vOLUNTARYREGISTERCtrl'
  })

  .state('dISASTERLIST', {
    url: '/page7',
    templateUrl: 'templates/dISASTERLIST.html',
    controller: 'dISASTERLISTCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});