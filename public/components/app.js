angular.module('ArtHistorian', [])
.component('app',{
  controller: function($http){
    //this needs to retrieve data from db and assign it to a variable to pass down into template
    this.newCard = {};
    console.log(this.newCard)
    this.handleSubmit = function(){
      $http({
        method: 'POST',
        url : '/cards',
        data: this.newCard
      }).then(function(response){console.log(response.data)})

      console.log('newCard',this.newCard)
    }
  },
  template: `<div>
              name : <input type="text" ng-model="$ctrl.newCard.name"><br>
              artist: <input type="text" ng-model="$ctrl.newCard.artist"><br>
              period: <input type="text" ng-model="$ctrl.newCard.period"><br>
              date: <input type="text" ng-model="$ctrl.newCard.date"><br>
              material: <input type="text" ng-model="$ctrl.newCard.material"><br>
              image : <input type="text" ng-model="$ctrl.newCard.image"><br>
              <button ng-click="$ctrl.handleSubmit()">submit</button>

              <pre>{{$ctrl.newCard}}</pre>
            </div>`
})


// $http.get('/cats').then(response){
//   console.log(response.body) /// all of your cats [{cat: 1}, {cat: 2}]
// }
// var postCat = function(){
//   $http.post('/cats', {kitten: {name: $scope.cat.name, type: $scope.cat.type }}).then(response){
//     console.log(response.body) // here is the cat you created
//   }
// }


//make input form
//
