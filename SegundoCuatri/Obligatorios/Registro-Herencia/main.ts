import { Auto } from "./Auto";
import { Camion } from "./Camion";
import { Moto } from "./Moto";
import { RegistroAutomotor } from "./RegistroAutomotor";

//Creo mis vehiculos
const auto1 = new Auto (1234,"Toyota", "Corolla", "Azul", 4);
const auto2 = new Auto (5678, "Honda", "Civic", "Rojo", 4);

const moto1 = new Moto (8910,"Honda","CB500F","Negro", 300);
const moto2 = new Moto (1112,"Yamaha","MT-07","Blanco", 1000);

const camion1 = new Camion (1314,"Mercedes", "Actros", "Blanco", 2);
const camion2 = new Camion (1516,"Volvo", "FH16", "Gris", 2);

const newRegistro = new RegistroAutomotor();

newRegistro.obtenerAuto(auto1);
newRegistro.obtenerAuto(auto2);

newRegistro.obtenerMotos(moto1);
newRegistro.obtenerMotos(moto2);

newRegistro.obtenerCamiones(camion1);
newRegistro.obtenerCamiones(camion2);

//MODIFICAR PROPIEDADES DE LOS VEHICULOS
console.log("Información de Autos:", newRegistro.mostrarAutos());
newRegistro.modificarAuto(1234, "Gol","Trend", "Negro",);
console.log("AUTOS CON MODIFICACIONES: ", newRegistro.mostrarAutos());


console.log("Información de Moto:", newRegistro.mostrarMotos());
newRegistro.modificarMoto(8911, "Kawasaki ","Ninja", "Roja",); //Paso una Patente Inexistente
newRegistro.modificarMoto(8910, "Kawasaki ","Ninja", "Roja",); //Modifico con la Patente Existente
console.log("MOTOS CON MODIFICACIONES: ", newRegistro.mostrarMotos());

console.log("Información de Camiones:", newRegistro.mostrarCamiones());
newRegistro.modificarCamion(1516, "Iveco ","Stralis", "Verde",);
console.log("CAMIONES CON MODIFICACIONES: ", newRegistro.mostrarCamiones());



//ELIMINAR VEHICULO
console.log(`AUTOS SIN DAR DE BAJA: `, newRegistro.mostrarAutos().map(auto => auto.getPatente()) );
newRegistro.darDeBajaAuto(1234);
console.log(newRegistro.mostrarAutos());

console.log(`MOTOS SIN DAR DE BAJA: `, newRegistro.mostrarMotos().map(moto => moto.getPatente()) );
newRegistro.darDeBajaMoto(1112);
console.log(newRegistro.mostrarMotos());

console.log(`CAMIONES SIN DAR DE BAJA: `, newRegistro.mostrarCamiones().map(camion => camion.getPatente()) );
newRegistro.darDeBajaCamion(1314);
console.log(newRegistro.mostrarCamiones());
