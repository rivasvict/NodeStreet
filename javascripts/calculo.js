function calculoJS($scope){
        $scope.testing = function(){
                if($scope.option=="Base"){
                        $scope.ch = (parseFloat($scope.value)*0.12)*0.25 + parseFloat($scope.value);
                }else if($scope.option=="Total"){
			$scope.base = parseFloat($scope.value)/1.12;
                        $scope.ch = ($scope.base*0.12)*0.25 + $scope.base;
                }else{
                        alert('You have not used a parameter on the select field above, please, select one and try again!!')
                        $scope.ch = '';
                }
                if($scope.value==null){
                        alert('You have not used an amount, please, set one and try again!!')
                        $scope.ch = '';
                }
        };
}
