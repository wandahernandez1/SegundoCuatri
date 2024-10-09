import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";


export class RegistroAutomotor {
    //Atributos
    private autos:Auto[] = [];
    private motos: Moto[] = [];
    private camiones: Camion[] = [];

    //Metodos 

    //Obtengo el objeto que voy a crear
    obtenerAuto(autos: Auto): void {
        this.autos.push(autos);
    }
    obtenerMotos(motos: Moto): void {
        this.motos.push(motos);
    }
    obtenerCamiones(camiones: Camion): void {
        this.camiones.push(camiones);
    }

    //Modificar Autos con Patentes 
    modificarAuto(patente: number, marca: string, modelo: string, color: string): void {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i].getPatente() === patente) {
                this.autos[i].modificarVehiculo(marca, modelo, color);
                console.log(`Auto con patente ${patente} modificado: (new ${marca}) (new ${modelo})  (new ${color})`);
                return;
            }
        }
        console.log("Auto no encontrado");
    } 
    mostrarAutos(): Auto[] {
        if (this.autos.length == 0) {
            console.log("No hay auto disponible");
        }
        return this.autos;
    }

    //Modificacion de Moto
    modificarMoto(patente: number, marca: string, modelo: string, color: string): void {
        for (let i = 0; i < this.motos.length; i++) {
            if (this.motos[i].getPatente() === patente) {
                this.motos[i].modificarVehiculo(marca, modelo, color);
                console.log(`Moto con patente ${patente} modificado:(new ${marca}) (new ${modelo})  (new ${color})`);
                return;
            }
        }
        console.log("Patente de moto ingresada no se encuentro");
    }
    mostrarMotos(): Moto[] {
        if (this.motos.length == 0) {
            console.log("No hay Moto disponible");
        }
        return this.motos;
    }
   

     //Modificacion de Camion
    modificarCamion(patente: number, marca: string, modelo: string, color: string): void {
        for (let i = 0; i < this.camiones.length; i++) {
            if (this.camiones[i].getPatente() === patente) {
                this.camiones[i].modificarVehiculo(marca, modelo, color);
                console.log(`Camion con patente ${patente} modificado: (new ${marca}) (new ${modelo})  (new ${color})`);
                return;
            }
        }
        console.log("Camion no encontrado");
    }
    mostrarCamiones(): Camion[] {
        if (this.camiones.length == 0) {
            console.log("No hay camiones disponible");
        }
        return this.camiones;
    }

    //Eliminar Vehiculos con la Patente
    darDeBajaAuto(patenteAuto: number): void {
        this.autos = this.autos.filter(auto => auto.getPatente() !== patenteAuto);
        console.log(`Auto con patente ${patenteAuto} eliminado.`);

    }
    darDeBajaMoto(patenteMoto: number): void {
        this.motos = this.motos.filter(moto => moto.getPatente() !== patenteMoto);
        console.log(`Moto con patente ${patenteMoto} eliminado.`);

    }
    darDeBajaCamion(patenteCamion: number): void {
        this.camiones = this.camiones.filter(camion => camion.getPatente() !== patenteCamion);
        console.log(`Camión con patente ${patenteCamion} eliminado.`);

    }

}
