$(document).ready(function () {

	// scripts para la pagina de detalle del personaje
	    $.get(baseUrl + urlParam, function(response,status,xhr){
     	 superHeroeData = response;
		if ($('body').hasClass('character-page')) {

		// obtener id del personaje seleccionado
		var characterId = localStorage.getItem('selectedCharacterId');
		// obtener el objeto del personaje
		let character = superHeroeData.find(elemento => elemento.id === parseInt(characterId));

		// renderizar info del personaje
		$('h1').html(character.name)
		$('.work').html(`<h2>Ocupation:</h2> 
							<ul>
								<li>${character.work.occupation}</li>
							</ul>`)
		$('.appearence').html(`<h2>Appearance:</h2>
									<ul>
										<li>Gender: ${character.appearance.gender}</li>
										<li>Race: ${character.appearance.race}</li>
										<li>Height: ${character.appearance.height[1]}</li>
										<li>Weight: ${character.appearance.weight[1]}</li>
										<li>Eye color: ${character.appearance.eyeColor}</li>
										<li>Hair Color: ${character.appearance.hairColor}</li>
									</ul>`)
		$('.biography').html(`<h2>Biography:</h2>
								<ul>
									<li>Full Name: ${character.biography.fullName} </li>
									<li>Alter Egos: ${character.biography.alterEgos}</li>
									<li>Aliases:  ${character.biography.aliases[0]}</li>
									<li>Place of Birth: ${character.biography.placeOfBirth}</li>
									<li>Firts Appearance: ${character.biography.firstAppearance}</li>
									<li>Publisher: ${character.biography.publisher}</li>
									<li>Alignment:  ${character.biography.alignment}</li>
								</ul>`)
		$('.powerStats').html(`<h2>Power Stats</h2>
								<ul>
								<li>Intelligence: ${character.powerstats.intelligence} </li>
								<li>Strength: ${character.powerstats.strength} </li>
								<li>Speed: ${character.powerstats.speed} </li>
								<li>Durability: ${character.powerstats.durability} </li>
								<li>Power: ${character.powerstats.power} </li>
								<li>Combat: ${character.powerstats.combat} </li>`)
		$('.connections').html(`<h2>Connections:</h2>
								<ul>
									<li> ${character.connections.groupAffiliation}</li>
									<li> ${character.connections.relatives}</li>
								</ul>`)
		$('img').attr('src',character.images.md)
		}
	})
});


