angular.module('ArtHistorian', [])
.component('cardForm',{
  controller: function($http){
    //this needs to retrieve data from db and assign it to a variable to pass down into template
    this.newCard = {};
    this.handleSubmit = function(){
      $http({
        method: 'POST',
        url : '/cards',
        data: this.newCard
      }).then(function(response){})
      console.log('newCard',this.newCard)
    }
  },
  template: `<div>
              artist: <input type="text" ng-model="$ctrl.newCard.artist"><br>
              date: <input type="text" ng-model="$ctrl.newCard.date"><br>
              image : <input type="text" ng-model="$ctrl.newCard.image"><br>
              material: <input type="text" ng-model="$ctrl.newCard.material"><br>
              title : <input type="text" ng-model="$ctrl.newCard.title"><br>
              period: <input type="text" ng-model="$ctrl.newCard.period"><br>
              <button ng-click="$ctrl.handleSubmit()">submit</button>
            </div>
            `
})
