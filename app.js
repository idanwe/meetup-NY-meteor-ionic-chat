// Meteor Starter App

Messages = new Meteor.Collection('messages');

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });

  angular
    .module('chat', ['ionic', 'angular-meteor'])
    .controller('ChatCtrl', ChatCtrl);

  function ChatCtrl ($rootScope, $scope, $ionicScrollDelegate) {
    var alternate;

    $scope.data = {};
    $scope.messages = $scope.$meteorCollection(Messages);

    $scope.sendMessage = sendMessage;

    ////////////

    function sendMessage () {
      if (!$scope.data.message || !$scope.data.message.length) return;

      alternate = !alternate;
      $scope.messages.push({
        userId: $rootScope.currentUser._id,
        photo: alternate ?
          'https://scontent-cdg2-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/s720x720/11393068_920096478013144_1201901050919221507_n.jpg?oh=b67348e306c32edf97c6f0f82492d07d&oe=56729CF5' :
          'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/45011_147000805322719_4607640_n.jpg?oh=d6fb3a947911c210ee0ffe962111da22&oe=569E8FDF&__gda__=1453796800_84a78e328d1e7e17102a4079f94bf4ec',
        text: $scope.data.message
      });

      delete $scope.data.message;
      $ionicScrollDelegate.scrollBottom(true);
    }
  }
}
