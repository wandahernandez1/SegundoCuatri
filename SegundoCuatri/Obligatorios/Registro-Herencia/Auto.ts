import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
    private ruedas: number;

    constructor(patente: number, marca: string, modelo: string, color: string, ruedas: number) {
        super(patente, marca, modelo, color)
        this.ruedas = ruedas;

    }
    //GETTERS AND SETTERS
    getRuedas(): number {
        return this.ruedas;
    }
    setRuedas(ruedas: number): void{
        this.ruedas = ruedas;
    }
      //Modificar Vehiculo

    modificarVehiculo(marca: string, modelo:string, color: string): void{
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setColor(color);
    }
    

}