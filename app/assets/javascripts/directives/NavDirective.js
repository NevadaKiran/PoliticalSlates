angular
  .module('slatedriver')
  .directive('navBar', function NavBar(){
    return {
      templateUrl: 'views/nav.html',
      controller: 'NavCtrl'
    }
})
