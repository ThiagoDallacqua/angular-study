angular.module('minhasDiretivas', [])
  .directive('meuPainel', () => {
    let ddo = {};

    ddo.restrict = "AE";
    ddo.scope = {
      titulo: '@'
    };
    ddo.transclude = true;
    // ddo.template = `
    // <div class="panel panel-default">
    //   <div class="panel-heading">
    //     <h3 class="panel-title">{{titulo}}</h3>
    //   </div>
    //   <div class="panel-body" ng-transclude>
    //   </div>
    // </div>
    // `;
    ddo.templateUrl = 'js/directives/meuPainel.html'

    return ddo;
  });
