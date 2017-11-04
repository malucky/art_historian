var Card = require('./models.js')

angular.module('ArtHistorian')

.component('cardList',{
  controller:
  this.handleSubmit = function($http){
    $http({
      method: 'GET',
      url: '/',
      data: mongoose.findOne() //select everything
    }).then(function(response){})
    console.log('run')
  },
  template: `<card-list ng-repeat="">
            </card-list>
            <button ng-click="$ctrl.handleSubmit()">all cards</button>`
  bindings: 'handler' : '<'
})
