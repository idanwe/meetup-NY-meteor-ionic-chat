#### Step 0 - start

1. Run `meteor create chat`
2. Run `meteor add angular driftyco:ionic`
3. Add `index.html`
4. Add `app.js`

#### Step 1 - chat view

1. Run `meteor add fourseven:scss`
2. Add chat template and CtrlController

#### Step 2 - Save messages

1. Add 'angular-meteor' as angular module
2. Add `Messages = new Meteor.Collection('messages');` 
3. Assign angular meteor collection to $scope `$scope.messages = $scope.$meteorCollection(Messages);`
