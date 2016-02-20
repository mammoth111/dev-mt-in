angular.module('devMtIn')
.service('profileService', function() {
	this.serviceTest = function() {
		console.log('connected!');
}
	this.saveProfile = function(profile) {
  		localStorage.setItem('profile', JSON.stringify(profile));
  		console.log(localStorage.profile);
  	}
  	this.checkForProfile = function() {
 		if (localStorage.getItem('profile')) {
    		return JSON.parse(localStorage.getItem('profile'));
  }
  return {
    friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
}


}

});









// service is mainly used to seperate layers in your code (Html, controllers, js etc. )
//.service('friendService', [function(){
//	this.foo ='bar';
//}])
// 
//.factory('friendFacService', [function(){
//	return {foo: "bar"};
//}])
