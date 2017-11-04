var mongoose = require('./connect.js') //require mongoose database created in connect.js

angular.module('Art_Historian')
.component('cardList',{
  controller: function($http){
    $http({
      method: 'POST',
      url: '/',
      data: mongoose.findOne() //select stuff out of mongoose db
    }).then(function generateRandomCard(response){
      //
    })
  },
  template: <card-list></card-list>
})
