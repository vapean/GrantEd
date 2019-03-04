export class Beca{
    id: number
    titulo: string
    paisOrigen: string
    paisDestino: string
    provinciaOrigen: string
    provinciaDestino: string
    objetivo: string
    tipologia: string
    nivelEstudios: string
    areaEstudio: string
    fecha: number

    imagen: string
   
    constructor(pId, pTitulo, pPaisOrigen, pPaisDestino, pProvinciaOrigen, pProvinciaDestino, pObjetivo, pTipologia, pNivel , pArea , pFecha ,pImagen) { 
        this.id = pId
        this.titulo = pTitulo
        this.paisOrigen = pPaisOrigen
        this.paisDestino = pPaisDestino
        this.provinciaOrigen= pProvinciaOrigen
        this.provinciaDestino= pProvinciaDestino
        this.objetivo = pObjetivo
        this.tipologia = pTipologia
        this.nivelEstudios = pNivel
        this.areaEstudio= pArea
        this.fecha = pFecha
        this.imagen = pImagen
    }
}