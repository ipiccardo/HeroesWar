
$(document).ready(function() {

  /////TRAIGO LA INFORMACIÓN DE LA API DE SUPERHEROES
  $.get(baseUrl + urlParam, function(response,status,xhr){
        superHeroeData = response;


        //// CAJA DE HEROES////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      $('.get-stats').click(function(){
        //// OCULTO EL HTML Y CSS SI EL DIV TIENE LA CLASE ACTIVE
        if ($(this).hasClass('active')) {
          $(this).parents('.character').find('.datos div div').html('').css('width','0');
          $(this).removeClass('active');
        }else{
          //// SI NO TIENE LA CLASE ACTIVE EJECTUTO LA FUNCIÓN
          var characterId = $(this).parents('.character').data('character-id');
          //// BUSCO EN LA API AL PERSONAJE QUE TENGA EL MISMO ID (PARSEADO) QUE TIENE LOS PERSONAJES EN EL HTML
          let character = superHeroeData.find(elemento => elemento.id === parseInt(characterId));
          //// UNA VEZ ENCONTRADO EL PJ EN LA API, RECORRO CADA UNO DE LOS POWERSTATS Y LE PONGO UN DIV CON BACKGROUND CON EL MISMO NÚMERO DE WIDHT QUE TENGA EL VALOR DEL STAT. Y ESTO LO PONGO DENTRO DE OTRO DIV PARA GENERAR UN EFECTO EN LA BARRA Llenandose.
          $(this).parents('.character').find('.inteligencia')
            .html(character.powerstats.intelligence)
            .css('width',character.powerstats.intelligence)

          $(this).parents('.character').find('.fuerza')
            .html(character.powerstats.strength)
            .css('width',character.powerstats.strength)

          $(this).parents('.character').find('.velocidad')
            .html(character.powerstats.speed)
            .css('width',character.powerstats.speed)

          $(this).parents('.character').find('.durabilidad')
            .html(character.powerstats.durability)
            .css('width',character.powerstats.durability)

          $(this).parents('.character').find('.poder')
            .html(character.powerstats.power)
            .css('width',character.powerstats.power)

          $(this).parents('.character').find('.combate')
            .html(character.powerstats.combat)
            .css('width',character.powerstats.combat)
          //// LE PONGO LA CLASE ACTIVE PARA PODER CERRARLO CUANDO ENTRE EN EL IF    
          $(this).addClass('active')
        }
      })
    ;  

    ////PAGINA DETALLE DE CADA PERSONAJE////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //// CREO UN BOTON QUE ME PERMITA ENTRAR EN UNA PÁGINA ADICIONAL CON LA INFORMACIÓN DE CADA PERSONAJE
    $('.leer').click(function(){
      var characterId = $(this).parents('.character').data('character-id');// 
      //// PONGO LA INFORMACIÖN DE PERSONAJE EN EL LOCALSTORAGE PARA PODER ACCEDER A EL DESDE LA OTRA PÁGINA
      localStorage.setItem('selectedCharacterId',characterId);
      //// LINKEO A LA NUEVA PÁGINA CREADA
      window.location.href = 'character.html'
    })
    ;


    ////// SECCION QUE ORDENA LOS SUPERHEROES POR STAT//////////////////////////////////////////////////////////////////////////////////////

    //MAS INTELIGENTES
    ////ORDENO LOS HEROES DE MAS INTELIGENTES A MENOS INTELIGENTES



    superHeroeData.sort((a,b) => b.powerstats.intelligence - a.powerstats.intelligence).map( function (el) {
      ////SI TIENE 100(NUMERO MÁXIMO DEL STAT) EN EL STAT LE PIDO QUE PONGA EL NOMBRE EN UN NUEVO ARRAY
      if(el.powerstats.intelligence == 100) {
       masInteligentes.push(el.name)
      }
    })
    
    
    $('#botonInteligentes').click(respuestaClickInt)
    function respuestaClickInt() {
       if ($('#masInteligentes li').hasClass('active')) {
        $('#masInteligentes li').empty()
        $('#masInteligentes').empty()
        $('#masInteligentes li').removeClass('active')
      }else {
      //// AL HACER CLICK EN EL BOTON, LE PIDO QUE ME MAPEE EL ARRAY MAS INTELIGENTES, QUE LOS ORDENE Y LOS MUESTRE EN EL HTML 
      $('#masInteligentes').html(`<li>${masInteligentes.map((el) => " " + el).sort((a,b) => b - a)}</li>`)
      ////LE PONGO ANIMACIÓN Y ESTILOS A LOS SUPERERHORES QUE MUESTRO EN EL HTML
      $('#masInteligentes li').css(estilos).addClass('active')
      }
    }
    ////REPITO LA MISMA SECUENCIA POR CADA POWERSTAT

    //MAS FUERTES
    superHeroeData.sort((a,b) => b.powerstats.strength - a.powerstats.strength).map(function (el) {
      if(el.powerstats.strength == 100) {
      masFuertes.push(el.name)
      }
    })
    
    $('#botonFuertes').click(respuestaClickFue)
    function respuestaClickFue() {
      if ($('#masFuertes li').hasClass('active')) {
        $('#masFuertes li').empty()
        $('#masFuertes').empty()
        $('#masFuertes li').removeClass('active')
      }else {
      $('#masFuertes').append(`<li> ${masFuertes.map((el) => " " + el).sort((a,b) => b - a)}</li>`)
      $('#masFuertes li').css(estilos).addClass('active')
    }
  }
    //MAS VELOCES
    superHeroeData.sort((a,b) => b.powerstats.speed - a.powerstats.speed).map( function (el) {
      if(el.powerstats.speed == 100) {
      masVeloces.push(el.name)
      }
    })
    
    $('#botonVeloces').click(respuestaClickVel)
    function respuestaClickVel() {
      if ($('#masVeloces li').hasClass('active')) {
        $('#masVeloces li').empty()
        $('#masVeloces').empty()
        $('#masVeloces li').removeClass('active')
      }else {
    $('#masVeloces').html(`<li> ${masVeloces.map((el) => " " + el).sort((a,b) => b - a)}</li>`)
     $('#masVeloces li').css(estilos).addClass('active')
      }
    }
    //MAS DURABLES
    superHeroeData.sort((a,b) => b.powerstats.durability - a.powerstats.durability).map( function (el) {
      if(el.powerstats.durability == 100) {
      masDurables.push(el.name)
      }
    })
    
    $('#botonDurables').click(respuestaClickDur)
    function respuestaClickDur() {
        if ($('#masDurables li').hasClass('active')) {
        $('#masDurables li').empty()
        $('#masDurables').empty()
        $('#masDurables li').removeClass('active')
      }else {
      $('#masDurables').html(`<li> ${masDurables.map((el) => " " + el).sort((a,b) => b - a)}</li>`)
     $('#masDurables li').css(estilos).addClass('active')
      }
    }

    //MAS PODEROSOS
    superHeroeData.sort((a,b) => b.powerstats.power - a.powerstats.power).map( function (el) {
      if(el.powerstats.power == 100) {
      masPoderosos.push(el.name)
      }
    })
    
    $('#botonPoderosos').click(respuestaClickPod)
    function respuestaClickPod() {
      if ($('#masPoderosos li').hasClass('active')) {
        $('#masPoderosos li').empty()
        $('#masPoderosos').empty()
        $('#masPoderosos li').removeClass('active')
      }else {
      $('#masPoderosos').html(`<li> ${masPoderosos.map((el) => " " + el).sort((a,b) => b - a)}</li>`)
     $('#masPoderosos li').css(estilos).addClass('active')
      }
    }
    //MEJORES COMBATIENDO
    superHeroeData.sort((a,b) => b.powerstats.combat - a.powerstats.combat).map( function (el) {
     if(el.powerstats.combat == 100) {
      mejoresCombatientes.push(el.name)
     }
    })
    
    $('#botonCombatientes').click(respuestaClickcom)
    function respuestaClickcom() {
      if ($('#masCombatientes li').hasClass('active')) {
        $('#masCombatientes li').empty()
        $('#masCombatientes').empty()
        $('#masCombatientes li').removeClass('active')
      }else {
      $('#masCombatientes').html(`<li> ${mejoresCombatientes.map((el) => " " + el).sort((a,b) => b - a)}</li>`)
     $('#masCombatientes li').css(estilos).addClass('active')
      }
    }


  ///SECCIÓN DE HEROES ALEATORIOS ///////////////////////////////////////////////////////////////////////////////////////////////////////


      ///PRIMER SUPER HEROE ALEATORIO
      $('#ajax').prop('disabled', false)
      $('#ajax').click(function() { 
      ////AL HACER CLICK EN EL BOTON ME TRAIGO UN PERSONAJE ALEATORIO DE LA API      
        const randomNumber = Math.floor(Math.random() * (569))
        ////GUARDO EL PERSONAJE ALEATORIO EN UNA VARIABLE
        const data = superHeroeData[randomNumber]
        ////GUARDO EL NOMBRE DEL PJ EN OTRA VARIABLE
        let heroeAleatoreo = data.name
        ////GUARDO LA IMAGEN DEL PJ EN OTRA VARIABLE
        let img = data.images.sm
        ////CREO UNA CONDICIÓN PARA CERRAR LA INFORMACIÖN QUE TRAE EL BOTON AL CLICKEARLO
        if ($('#heroeAleatoreo').hasClass('active')) {
          $('#heroeAleatoreo').empty();
          $('#heroeAleatoreo').removeClass('active');
         if($('#heroeAleatoreo').hasClass('active') || $('#heroeAleatoreob').hasClass('active')) {
          $('#startFight').prop('disabled', true)
          $('#winner p').empty()
          $('#startFight').text('Start Fight')
          $('.borrarImagen').remove()
          };
        
        }
        else{
          ////LE APENDEO LOS ELEMENTOS Y CLASES QUE QUIERO QUE TENGA EL DIV QUE MOSTRARÁ LA INFORMACIÓN EN EL DOM
          $('#heroeAleatoreo').append(`<div id="${data.id}" class="contenedorHeroeAleatorio"><h3>${heroeAleatoreo}</h3>
                                          <div><img src=${img}></div>
                                          <h4>PowerStats:</h4>
                                          <ul>
                                            <li>Intelligence: ${data.powerstats.intelligence}</li>
                                            <li>Durability: ${data.powerstats.durability}</li>
                                            <li>Speed: ${data.powerstats.speed}</li>
                                            <li>Strength: ${data.powerstats.strength}</li>
                                            <li>Power: ${data.powerstats.power}</li>
                                            <li>Combat: ${data.powerstats.combat}</li>
                                          </ul>
                                      </div>`)
                              ////LE AGREGO LA CLASE ACTIVE QUE UTILIZARÉ PARA CERRAR EL BOTON POSTERIORMENTE
                              .addClass('active')
                              $('#startFight').prop('disabled', false)
                              ////GUARDO EL VALOR TOTAL DE LA SUMA DE LOS POWERSTATS DEL SUPERHEROE EN UNA VARIABLE
                              let totalPower = data.powerstats.intelligence + data.powerstats.strength + data.powerstats.speed + data.powerstats.power + data.powerstats.combat + data.powerstats.durability                                     
                              ////GUARDO LA VARIABLE EN EL LOCALSTORAGE PARA REUTILIZAR LA INFORMACIÓN EN OTROS EVENTOS
                              localStorage.setItem(`randomCharacter1`, totalPower + data.name)

                              ///APENDEO EL BOTON  DE LEER MAS QUE LLEVA A LA SINGLE PAGE DE CADA PERSONAJE///
                              $('<button>')
                              .html('Read More')
                              .addClass('leerMas')
                              .appendTo(`#${data.id}`)
                              .click(function(){
                                  ////GUARDO EL ID DEL PERSONAJE EN UNA VARIABLE
                                  let characterId = $(this).parent().attr('id');
                                  ////GUARDO EN UNA VARIABLE EL PJ QUE TENGA EL MISMO ID PARSEADO QUE LA VARIABLE ANTERIOR
                                  let character = superHeroeData.find(elemento => elemento.id === parseInt(characterId));
                                  ////GUARDO EL PJ EN EL LOCAL STORAGE PARA LLAMARLO DESDE LA OTRA PÁGINA
                                  localStorage.setItem('selectedCharacterId',characterId);
                                  ////LINKEO A LA PÁGINA ADICIONAL CREADA
                                  window.location.href = 'character.html' 
                              });
        }
      })

      ////REPITO EL CÓDIGO GENERADO EN EL PRIMER PERSONAJE ALEATORIO EN UN SEGUNDO PERSONAJE, PARA PODER REALIZAR UN VERSUS EN OTRO EVENTO
     
      //SEGUNDO PERSONAJE ALEATORIO
      $('#ajaxb').prop('disabled', false)
      $('#ajaxb').click(function() {       
        const randomNumber = Math.floor(Math.random() * (569))
        const data = superHeroeData[randomNumber]
        let heroeAleatoreob = data.name
        let img = data.images.sm
        if ($('#heroeAleatoreob').hasClass('active')) {
            $('#heroeAleatoreob').empty();
             $('#heroeAleatoreob').removeClass('active');
             if($('#heroeAleatoreo').hasClass('active') || $('#heroeAleatoreob').hasClass('active')) {
              $('#startFight').prop('disabled', true)
              $('#winner p').empty()
              $('#startFight').text('Start Fight')
              $('.borrarImagen').remove()
            };
          }
        else{
          $('#heroeAleatoreob').append(`<div id="${data.id}" class="contenedorHeroeAleatoriob"><h3>${heroeAleatoreob}</h3>
                                            <div><img src=${img}></div>
                                            <h4>PowerStats:</h4>
                                            <ul>
                                              <li>Intelligence: ${data.powerstats.intelligence}</li>
                                              <li>Durability: ${data.powerstats.durability}</li>
                                              <li>Speed: ${data.powerstats.speed}</li>
                                              <li>Strength: ${data.powerstats.strength}</li>
                                              <li>Power: ${data.powerstats.power}</li>
                                              <li>Combat: ${data.powerstats.combat}</li>
                                            </ul>
                                        </div>`).addClass('active')
                                        $('#startFight').prop('disabled', false)
                              let TotalPower = data.powerstats.intelligence + data.powerstats.strength + data.powerstats.speed + data.powerstats.power + data.powerstats.combat + data.powerstats.durability
                              localStorage.setItem(`randomCharacter2`,TotalPower + data.name)

                              ///APENDEO EL BOTON PARA IR A LA PÁGINA DE LEER MAS QUE LLEVA A LA SINGLE PAGE DE CADA PERSONAJE///
                              $('<button>')
                              .html('Read More')
                              .addClass('leerMas')
                              .appendTo(`#${data.id}`)
                              .click(function(){
                                let characterId = $(this).parent().attr('id');
                                let character = superHeroeData.find(elemento => elemento.id === parseInt(characterId));
                                localStorage.setItem('selectedCharacterId',characterId);
                                window.location.href = 'character.html'        
                              });   
        } 
      })

     ////BOTON VS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     
    $('#startFight').click(function(){
     ////TRAIGO LA INFORMACIÖN DE RANDOMCHARACTER 1 y 2 DEL STORAGE 
     let randomCharacter1 = parseInt(localStorage.getItem(`randomCharacter1`))
     let randomCharacter2 = parseInt(localStorage.getItem(`randomCharacter2`))
     ////DE LA INFORMACIÖN TRAIDA DEL STORAGE, TRAIGO LOS DATOS QUE ESTÁN A PARTIR DEl TERCER CARACTER (LOS PRIMEROS 3 CARACTÉRES SON LA SUMA TOTAL DE LOS 6 POWERSTATS)
     let randomCharacter1Name = localStorage.getItem(`randomCharacter1`).slice(3)
     let randomCharacter2Name =localStorage.getItem(`randomCharacter2`).slice(3)
     ////CREO CONDCIONALES PARA CERRAR EL BOTON EN CASO QUE YA SE HAYA PRESIONADO Y MODIFICAR EL NOMBRE DEL MISMO
     if($('#winner').hasClass('active') && $('#winner p').hasClass('mostrar') && $('#startFight').text() === "Close") {
        $('#winner').empty()
        $('#winner p').empty()
        $('#winner p').removeClass('mostrar')
        $('#winner').removeClass('active')
        $('#startFight').text('Start Fight')
        $('.borrarImagen').remove()
      } 
      //// SI EL BOTON ESTA CERRADO, ENTRO EL SEGUNDO CONDICIONAL, SI EL PJ2 TIENE MAS POWERSTATS(TOTAL) QUE EL PJ1 ENTONCES:
     else if(randomCharacter2 > randomCharacter1){
      //// APENDEO EL NOMBRE; LE AGRGO LA CLASE ACTIVE Y EL PONGO ESTILOS PARAMETRIZADOS EN LA HOJA DATA.JS
         $('#winner').append(`<p> The winner is ${randomCharacter2Name} </p>`).addClass('active').css(estilosWinner)
         //// AGREGO IMAGENES A LA TARJETA TANTO SI GANÓ COMO SI PERDIÓ
         $('.contenedorHeroeAleatorio div').append(`<div class="borrarImagen"> <img src=recursos/loser.jpg> </div>`)
         $('.contenedorHeroeAleatoriob div').append(`<div class="borrarImagen"> <img src=recursos/winner.jpg> </div>`)
         $('#winner p').addClass('mostrar')
         $('#winner p').addClass('active')
         ////CIERRO EL BOTON
         $('#startFight').text('Close')
          }  
     else if (randomCharacter2 == randomCharacter1){
      $('#winner').append(`<p> Draw </p>`).addClass('active').css(estilosWinner)
         $('#winner p').addClass('mostrar')
         $('#winner p').addClass('active')
         $('#startFight').text('Close')
     }
     else {
      //// REPITLO LO MISMO QUE ARRIBA EN CASO DE QUE EL GANADOR HAYA SIDO EL CHARACTER 1
        $('#winner').append(`<p> The winner is ${randomCharacter1Name} </p>`).addClass('active').css(estilosWinner)
        $('.contenedorHeroeAleatoriob div').append(`<div class="borrarImagen"> <img src=recursos/loser.jpg> </div>`)
        $('.contenedorHeroeAleatorio div').append(`<div class="borrarImagen"> <img src=recursos/winner.jpg> </div>`)
        $('#winner p').addClass('mostrar')
        $('#winner p').addClass('active')
        $('#startFight').text('Close')
     }
   })

    //////TRAIGO AL PJ MAS PODEROSO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //// CREO UNA FUNCIÓN PARA ORDENAR LOS POWER STATS
   function sortByMostPowerfull( a, b ) {
    var statsTotalA = a.powerstats.intelligence + a.powerstats.strength + a.powerstats.speed + a.powerstats.durability + a.powerstats.combat + a.powerstats.power;
    var statsTotalB = b.powerstats.intelligence + b.powerstats.strength + b.powerstats.speed + b.powerstats.durability + b.powerstats.combat + b.powerstats.power;
    ////EN CASO DE QUE EL PJ "A" SEA MAS PODEROSO QUE EL PJ "B" PONERLO EN LA POSICIÓN ANTERIOR
    if ( statsTotalA > statsTotalB ){
      return -1;
    }
    ////EN CASO DE QUE EL PJ "A" SEA MENOS PODEROSO, PONERLO EN UNA POSICIÓN POSTERIOR
    if ( statsTotalA < statsTotalB ){
      return 1;
   }
    return 0;
  } 

  superHeroeData.sort(sortByMostPowerfull).forEach(function(hero){
  });
  // TRAIGO AL PJ MAS PODEROSO Y LO MUESTRO EN EL DOM AL ACTIVAR EL EVENTO
  //// TRAIGO AL PJ QUE ESTÁ EN LA PRIMERA POSICIÓN DEL ARRAY
  superHeroeData.sort(sortByMostPowerfull)[0]
  //// LO AGREGO A UN NUEVO ARRAY
  mostPowerfullHero.push((superHeroeData.sort(sortByMostPowerfull)[0])) 
  $('.mostPowerfull').prop('disabled', false)
  //// INGRESO AL EVENTO
  $('.mostPowerfull').click(function() {
      //// CONDICIONALES PARA CERRAR EL BOTON
      if($('#theMostPowerfull').hasClass('active')) {
        $('#theMostPowerfull').empty();
        $('#theMostPowerfull').removeClass('active');
        $('.mostPowerfull').text("The Most Powerfull")
      }
        else{
              //// EN CASO DE QUE EL EVENTO ESTE CERRADO, AL PRESIONARLO LE APENDEO LA INFORMACIÓN CON EL FORMATO DE LAS TARJETAS ANTERIORES Y LO MUESTRO EN EL DOM
              $('#theMostPowerfull').append(`<div id="${mostPowerfullHero[0].id}" class = "contenedorHeroeAleatorioc"><h3>${mostPowerfullHero[0].name}</h3>
                                                  <div><img src=${mostPowerfullHero[0].images.sm}></div>
                                                  <h4>PowerStats:</h4>
                                                  <ul>
                                                      <li>Intelligence: ${mostPowerfullHero[0].powerstats.intelligence}</li>
                                                      <li>Durability: ${mostPowerfullHero[0].powerstats.durability}</li>
                                                      <li>Speed: ${mostPowerfullHero[0].powerstats.speed}</li>
                                                      <li>Strength: ${mostPowerfullHero[0].powerstats.strength}</li>
                                                      <li>Power: ${mostPowerfullHero[0].powerstats.power}</li>
                                                      <li>Combat: ${mostPowerfullHero[0].powerstats.combat}</li>
                                                  </ul>
                                              </div>`)
                                              ////LE AGREGO LA CLASE ACTIVE PARA CERRARLO AL VOLVER A PRESIONAR EL EVENTO
                                              .addClass('active')
                                              ////LE MODIFICO EL TEXTO AL BOTON
                                              $('.mostPowerfull').text("Close")

                                    ///APENDEO EL BOTON PARA IR A LA PÁGINA DE LEER MAS QUE LLEVA A LA SINGLE PAGE DE CADA PERSONAJE///
                                    $('<button>')
                                    .html('Read More')
                                    .addClass('leerMas')
                                    .appendTo(`#${mostPowerfullHero[0].id}`)
                                    .click(function(){
                                      let characterId = $(this).parent().attr('id');
                                      let character = heroes.find(elemento => elemento.id === parseInt(characterId));
                                      localStorage.setItem('selectedCharacterId',characterId);
                                      window.location.href = 'character.html' 
                                      $('.leerMas').click(function(){
                                        let characterId = mostPowerfullHero[0].id;
                                        let character = superHeroeData.find(elemento => elemento.id === parseInt(characterId));
                                        ////GUARDO EL PJ EN EL LOCAL STORAGE PARA LLAMARLO DESDE LA OTRA PÁGINA
                                        localStorage.setItem('selectedCharacterId',characterId);
                                        ////LINKEO A LA PÁGINA ADICIONAL CREADA
                                        window.location.href = 'character.html'
                                      })
                                    })
      }
  })


    ////TRAIGO AL PERSONAJE ELEGIDO POR EL USUARIO////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      $("#boton-traerHeroe").prop('disabled', false)
      $("#boton-traerHeroe").click(traerHeroe);

      function traerHeroe() {
           ////CONDICIONALES PARA CERRAR EL BOTON
          if ($('#selectedHero').hasClass('active')) {
            $('#selectedHero').empty();
            $('#selectedHero').removeClass('active');
            $("#boton-traerHeroe").text("Find Character").css({"margin-left": "65px"})

          }
        else{
          ////EN CASO DE QUE EL BOTON ESTE CERRADO, AL PRESIONARLO SE INGRESA EN EL SIGUIENTE CONDICIONAL PARA TRAER AL PJ SOLICITADO
          let data = superHeroeData
          ////TRAIGO LA INFORMACIÓN QUE EL USUARIO HAYA ESCRITO EN EL INPUT
          let hero = $(".user-input").first().val();
          ////COMPARO EL PERSONAJE QUE ESCRIBA EL USUARIO CON LOS OBJETOS DE LA API (QUITANDOLE A AMBOS LOS ESPACIOS Y PONIENDOLOS EN MINUSCULA)
          let selectedCharacter = data.find(elemento => elemento.name.split(" ").join("").toLowerCase() === hero.split(" ").join("").toLowerCase())
          if (data.find(elemento => elemento.name.split(" ").join("").toLowerCase() === hero.split(" ").join("").toLowerCase()))
          ////SI EL PJ ESCRITO POR EL USUARIO COINCIDE CON ALGUNO DE LOS PERSONAJES QUE ESTAN EN LA API LE APENDEO LA INFORMACIÖN DEL PJ MANTENIENDO EL FORMATO DE LAS TARJETAS ANTERIORES
          {
            $('#selectedHero').append(`<div id="${selectedCharacter.id}" class="contenedorHeroeAleatoriod">
                                          <h3>${selectedCharacter.name}</h3>
                                          <div><img src= ${selectedCharacter.images.sm}></div>
                                          <h4>PowerStats:</h4>
                                          <ul>
                                              <li>Intelligence: ${selectedCharacter.powerstats.intelligence}</li>
                                              <li>Durability: ${selectedCharacter.powerstats.durability}</li>
                                              <li>Speed: ${selectedCharacter.powerstats.speed}</li>
                                              <li>Strength: ${selectedCharacter.powerstats.strength}</li>
                                              <li>Power: ${selectedCharacter.powerstats.power}</li>
                                              <li>Combat: ${selectedCharacter.powerstats.combat}</li>
                                          </ul>
                                      </div>`).addClass('active')
                                      $("#boton-traerHeroe").text("Close").css({"margin-left": "90px"})
                              let TotalPower = selectedCharacter.powerstats.intelligence + selectedCharacter.powerstats.strength + selectedCharacter.powerstats.speed + selectedCharacter.powerstats.power + selectedCharacter.powerstats.combat + selectedCharacter.powerstats.durability
                              ////GUARDO LA INFORMACIÖN DEL PJ PARA UTILIZARLO MAS ADELANTE EN UNA POSIBLE EVOLUCIÓN DE LA PÁGINA
                              localStorage.setItem(`selectedCharacter`,TotalPower + selectedCharacter.name)

                              ///APENDEO EL BOTON PARA IR A LA PÁGINA DE LEER MAS QUE LLEVA A LA SINGLE PAGE DE CADA PERSONAJE///
                               $('<button>')
                              .html('Read More')
                              .addClass('leerMas')
                              .appendTo(`#${selectedCharacter.id}`)
                              .click(function(){    
                                let characterId = $(this).parent().attr('id');
                                let character = superHeroeData.find(elemento => elemento.id === parseInt(characterId));
                                localStorage.setItem('selectedCharacterId',characterId);
                                window.location.href = 'character.html'  
                              })
      }
      ////EN CASO DE QUE EL USUARIO HAGA CLICK EN EL BOTON FIND CHARACTER SIN HABER ESCRITO NADA EN EL INPUT, LE INDICO POR ALERTE QUE POR FAVOR ESCRIBA EL NOMBRE DE UN PJ.
          else if (hero.split(" ").join("").toLowerCase() === ""){alert("Please write the name of the character to search for.")}
          else {
            ////EN CASO DE QUE EL TEXTO QUE PONGA EL USUARIO EN EL INPUT NO COINCIDA CON NINGUNO DE LOS PJS DE LA API, LE INDICO AL USUARIO POR ALERTE QUE PRUEBE CON OTRO PJ.
              (data.find(elemento => elemento.name.split(" ").join("").toLowerCase() !== hero.split(" ").join("").toLowerCase())) 
                      {alert("We can't find that character, please try another name.")}
        }
        }
      }

    ///TRAIGO LISTA DE HEROES UTILIZANDO UN CICLO Y LA INYECTO EN EL DOM //////////////////////////////////////////////////////////////////////////////////////////////////////
      $('#heroListButton').prop('disabled', false)
      $('#heroListButton').click(function(){
        if ($('#heroList').hasClass('active')) {
            $('#heroList').empty();
            $('#heroList').removeClass('active')
            $('#heroListButton').text("Character's List")
        } 
        else {
        for(const hero of superHeroeData) {
        let nameOfHero = hero.name
        $('#heroList').append(`<li>${nameOfHero}</li>`).addClass('active')
        $('#heroListButton').text("Close List")
      }
      }
      })


  ////========================================================================================================================================================================
  ////BOTON PARA IR ARRIBA DE TODO CON ANIMATE////////////////////////////////////////////////////////////////////////////////////////////////////////////

      $('#irArriba').click( function(e) { 
       e.preventDefault();
        $("html, body").animate({
            scrollTop:0,  
        }, 2000) 
      } ).css({
              "background-color": "#FF6A00FF",
              "padding": "20px",
        });
 })
})
