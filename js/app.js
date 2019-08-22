const bootState = {
	preload:()=>{
		//Agregamos las imagenes
		juego.load.image('cargando', 'imagenes/cargando.png');
        juego.load.image('borde', 'imagenes/cargandoBorde.png');           
    },
    create:()=>{
    	//configuramos la escalabilidad del juego
    	juego.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        juego.scale.minWidth = 240;//Ancho minimo
        juego.scale.minHeight = 170;//Altura minimo
        juego.scale.maxWidth = 2880;//Ancho maximo
        juego.scale.maxHeight = 1920;//Altura maxima
        //Alinear el juego horizontalmente
        juego.scale.pageAlignHorizontally = true;
        //Se escala de manera automatica
        juego.scale.setScreenSize=true;
        //Se inicializa el estado de carga de archivos
   
      //Agregar texto al juego
        this.etiquetaCargando = juego.add.text(juego.world.centerX + 0.5, //Posicion en X
                         					juego.world.centerY - 15 + 0.5, //Posicion en Y
                                     'cargando...', //Texto
                                     { font: '30px Arial', fill: '#fff' }); //Estilo del texto
        etiquetaCargando.anchor.setTo(0.5, 0.5);
 
        cargandoBorde = juego.add.sprite(juego.world.centerX, juego.world.centerY + 15, 'borde');

         cargandoBorde.x -= this.etiquetaCargando.width / 2;
        cargandoimagen = juego.add.sprite(juego.world.centerX -7, juego.world.centerY + 19, 'cargando');
        cargandoimagen.x -= cargandoimagen.width / 2;
        cargandoimagen.width = 0;
            },
    update:()=>{
    	if(cargandoimagen.width < 132){cargandoimagen.width+= 1;}else if(cargandoimagen.width==132){
    		// juego.state.start('menu');
            
    	}
    }
};

let juego = new Phaser.Game(1024, 572, Phaser.CANVAS, '');

juego.state.add('play', bootState);
juego.state.start('play');

