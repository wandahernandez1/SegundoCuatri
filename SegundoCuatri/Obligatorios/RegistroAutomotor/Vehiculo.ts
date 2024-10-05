//Vehiculos
export class Vehiculo {
    //Atributos
    private patente: number;
    private marca: string;
    private modelo: string;
    private color: string;

    constructor (patente:number, marca:string, modelo:string, color:string){
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }


    //METODOS
    //Getters
    getPatente(): number{
        return this.patente;
    }
    getMarca(): string {
        return this.marca;
    }
    getModelo(): string {
        return this.modelo;
    }
    getColor(): string {
        return this.color;
    }

    //Setters
    setPatente(patente: number): void{
        this.patente = patente;
    }
    setMarca(marca: string): void{
        this.marca = marca;
    }
    setModelo(modelo: string): void{
        this.modelo = modelo;
    }
    setColor(color: string): void{
        this.color = color;
    }

    //Modificar Vehiculo

    modificarVehiculo(marca: string, modelo:string, color: string): void{
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setColor(color);
    }
      // Métodos para resetear todas las propiedades
      eliminarPropiedades(): void {
        this.marca = '';   // Restablecer la marca
        this.modelo = '';  // Restablecer el modelo
        this.color = '';   // Restablecer el color
        console.log("Propiedades del vehículo eliminadas.");
    }
}