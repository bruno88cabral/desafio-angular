angular.module('desafio')
	.controller('BatalhaController', function($scope){

	$scope.body = document.querySelector('body');
	$scope.life = [100, 100];
	$scope.mensagem = '';
	
	$scope.ataque1 = () => {
		$scope.life[1] = ataque($scope.life[1]);
		$scope.mensagem = mensagem($scope.life[1], $scope.mensagem, 2);
		$scope.mensagem = fimDoJogo($scope.life[1], $scope.mensagem, 1);
		$scope.body = efeitoColor($scope.body, 'ataque');
	}
	$scope.ataque2 = () => {	
		$scope.life[0] = ataque($scope.life[0]);
		$scope.mensagem = mensagem($scope.life[0], $scope.mensagem, 1);
		$scope.mensagem = fimDoJogo($scope.life[0], $scope.mensagem, 2);
		$scope.body = efeitoColor($scope.body, 'ataque');
	}
	$scope.reiniciar = () => {
		$scope.life = [100, 100];
		$scope.mensagem = '';
		$scope.body = efeitoColor($scope.body, 'reiniciar');
	}
});