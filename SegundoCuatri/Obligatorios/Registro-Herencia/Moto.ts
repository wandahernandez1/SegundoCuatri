import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private cilindrada : number;

    constructor(patente: number, marca: string, modelo: string, color: string, cilindrada: number) {
        super(patente, marca, modelo, color)
        this.cilindrada = cilindrada;

    }
    //GETTERS AND SETTERS
    getCilindrada(): number {
        return this.cilindrada;
    }
    setCilindrada(cilindrada: number): void{
        this.cilindrada = cilindrada;
    }
      //Modificar Vehiculo

    modificarVehiculo(marca: string, modelo:string, color: string): void{
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setColor(color);
    }
}