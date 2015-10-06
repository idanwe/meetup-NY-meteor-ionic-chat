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

#### Step 3 - Users

1. Run `meteor add accounts-password accounts-ui urigo:angular-blaze-template`
2. Add to `index.html` - `<blaze-template name="loginButtons"></blaze-template>`
3. Add to message wrapper div (`.message-list`) `ng-if="$root.currentUser`
4. Add `currentUser._id` to message

#### Step 4 - methods and publish

1. Run `meteor remove insecure autopublish`
2. Add `sendMessage` method
3. Add pubish and subscribe
