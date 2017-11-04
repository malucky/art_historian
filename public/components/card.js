angular.module('ArtHistorian')
.controller('cardFlip', function(){
  this.cardFlip = false;
  this.toggleCardFlip = () => {
    this.cardFlip = !this.cardFlip;
  };
})
.component('card', {
  bindings:{
    //some one way binding from card list to get each individual card info
    card : '<'
  },
  controller: 'cardFlip',
  template:
          `<div ng-click="$ctrl.toggleCardFlip()">
              <img ng-src="{{$ctrl.card.image}}"/>
              <span ng-if="$ctrl.cardFlip">
              <br>
              <em>{{$ctrl.card.title}}</em><br>
              by {{$ctrl.card.artist}}<br>
              created{{$ctrl.card.date}}<br>
              {{$ctrl.card.material}}<br>
              {{$ctrl.card.period}}<br>
              </span>
          </div>
          <button>delete</button>
          `
})
