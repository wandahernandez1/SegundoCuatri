import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private puertas: number;

    constructor(patente: number, marca: string, modelo: string, color: string, puertas: number) {
        super(patente, marca, modelo, color)
        this.puertas = puertas;

    }
    //GETTERS AND SETTERS
    getPuertas(): number {
        return this.puertas;
    }
    setPuertas(puertas: number): void{
        this.puertas = puertas;
    }
      //Modificar Vehiculo

      modificarVehiculo(marca: string, modelo:string, color: string): void{
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setColor(color);
    }
}