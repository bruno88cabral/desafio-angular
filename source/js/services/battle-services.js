angular.module('battleServices', ['BatalhaController'])
	.factory('ataque', ataque = (life) => life -= 20)
	.factory('mensagem', mensagem = (life, mensagem, player) => {
		switch(life) {
			case 80:
				mensagem = `Player ${player} perdeu as PERNAS`;
				break;
			case 60:
				mensagem = `Player ${player} teve o BRAÇO DIREITO amputado`;
				break;
			case 40:
				mensagem = `Player ${player} agora é um COTOCO`;
				break
			case 20:
				mensagem = `FINISH HIM!! Player ${player} recebeu um golpe crítico no PEITO`;
				break;
			}
		return mensagem;	
	})
	.factory('fimDoJogo', fimDoJogo = (life, mensagem, player) =>{
		if(life == 0)
			mensagem = `Player ${player} conquistou a VITÓRIA!`;

		return mensagem;
	})
	.factory('efeitoColor', efeitoColor = (body, classe) => {
		body.classList.add(classe);
		setTimeout(function(){
			body.classList.remove(classe);
		}, 500);
		return body;
	});