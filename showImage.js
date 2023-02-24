// create a class how load an image and display in the page

const routeImage = 'showImage.png';

class Imagen {
    _ruta;

    constructor(ruta){
        this._ruta = ruta;
    }
    cargar(){
        const img = document.createElement('img');
        img.src = this._ruta;
        document.body.appendChild(img);
    }
}
const imagen = new Imagen(routeImage)
imagen.cargar();