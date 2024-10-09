export class Vehiculo {
    //Atributos
    protected patente: number;
    protected marca: string;
    protected modelo: string;
    protected color: string;
    

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

   

}