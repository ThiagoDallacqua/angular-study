angular.module('alurapic').controller('FotosController', function($scope, $http) {
  $scope.fotos = [];

  $http.get('v1/fotos')
    .success(fotos => $scope.fotos = fotos)
    .error(err => console.log(err));

  // let promise = $http.get('v1/fotos');
  //
  // promise.then(retorno => $scope.fotos = retorno.data)
  //   .catch(err => console.log(err));

  // [
  //   {
  //     titulo: 'Casa',
  //     url: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1953&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
  //   },
  //   {
  //     titulo: 'Casa 2',
  //     url: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
  //   },
  //   {
  //     titulo: 'Casa 3',
  //     url: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&w=1350&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
  //   }
  // ]
});
