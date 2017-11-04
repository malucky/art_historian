angular.module('ArtHistorian')
.component('cardList',{
  controller: function($http){
    this.content = [];
    this.viewCards = function(){
      $http({
        method: 'GET',
        url: '/cards',
      }).then((response) => {
        this.content = response.data;
        console.log('run')
        console.log(response)
      })
    }
    this.viewCards()
  },
  template: `
            <div>
            <button ng-click="$ctrl.viewCards()">see all</button>
                <card ng-repeat="card in $ctrl.content" card="card"/>
            </div>
            `
})
