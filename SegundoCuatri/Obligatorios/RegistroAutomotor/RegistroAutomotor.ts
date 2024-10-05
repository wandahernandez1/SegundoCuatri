import { Vehiculo } from "./Vehiculo";

export class RegistroAutomotor {
    //Atributos
    private autos: Vehiculo[];
    private motos: Vehiculo[];
    private camiones: Vehiculo[];

    constructor() {
        this.autos = [];
        this.motos = [];
        this.camiones = [];

    }

    //Metodos 

    //(cargar informacion auto/moto/camiones)
    infoAuto(autos: Vehiculo): void {
        this.autos.push(autos);
    }
    infoMotos(motos: Vehiculo): void {
        this.motos.push(motos);
    }
    infoCamiones(camiones: Vehiculo): void {
        this.camiones.push(camiones);
    }

    //Modificar Autos con Patentes 
    modificarAuto(patente: number, marca: string, modelo: string, color: string): void {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].getPatente() === patente) {
                this.autos[i].modificarVehiculo(marca, modelo, color);
                console.log(`Auto con patente ${patente} modificado: ${marca} ${modelo} (${color})`);
                return;
            }
        }
        console.log("Auto no encontrado");
    }
    //Eliminar un Camion con la Patente
    darDeBajaCamion(patenteCamion: number): void {
        this.camiones = this.camiones.filter(camion => camion.getPatente() !== patenteCamion);
        console.log(`Camión con patente ${patenteCamion} eliminado.`);

    }

    //Metodos para poder mostrar el array de cada uno 
    mostrarAutos(): Vehiculo[] {
        return this.autos;
    }
    mostrarMotos(): Vehiculo[] {
        return this.motos;
    }
    mostrarCamiones(): Vehiculo[] {
        return this.camiones;
    }
}

