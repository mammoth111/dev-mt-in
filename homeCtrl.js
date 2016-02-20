angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService) { //dont put spaces between name and colons
	$scope.myProfile = profileService.checkForProfile();

	$scope.sortOptions = [{
    	display: 'A-Z',
  	 	value: false
  		},
  		{
    	display: 'Z-A',
  		value: true
  		}
	];$scope.editing = false;
		
	$scope.saveProfile = function(profile) {
		profileService.saveProfile(profile);
	}
	$scope.deleteProfile = function(profile){
		localStorage.removeItem('profile');
		$scope.myprofile = profileService.checkForProfile();
	}
});



