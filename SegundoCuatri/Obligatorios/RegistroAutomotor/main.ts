import {Vehiculo} from './Vehiculo';
import {RegistroAutomotor} from './RegistroAutomotor';

const registro = new RegistroAutomotor();

// Añadir vehículos
const auto1 = new Vehiculo(1235,"Toyota", "Corolla", "Azul");
const auto2 = new Vehiculo(5678, "Honda", "Civic", "Rojo");

const moto1 = new Vehiculo (8910,"Honda","CB500F","Negro");
const moto2 = new Vehiculo (1112,"Yamaha","MT-07","Blanco");

const camion1 = new Vehiculo(1314,"Mercedes", "Actros", "Blanco");
const camion2 = new Vehiculo(1516,"Volvo", "FH16", "Blanco");

registro.infoAuto(auto1);
registro.infoAuto(auto2);

registro.infoMotos(moto1);
registro.infoMotos(moto2);

registro.infoCamiones(camion1);
registro.infoCamiones(camion2);

//Muestro la info
console.log("Información de Autos:", registro.mostrarAutos());
console.log("Información de Motos:", registro.mostrarMotos());
console.log("Información de Camiones:", registro.mostrarCamiones());


//Modificacion de un auto
console.log("SIN MODIFICACIONES PRIMER AUTO:");
console.log("Autos antes de modificar:", registro.mostrarAutos());
registro.modificarAuto(5678,"Ford ", "Mustang", "Turquesa");
console.log("Autos después de modificar:", registro.mostrarAutos());

// DAR DE BAJA UN CAMIÓN
console.log("Camiones antes de dar de baja:");
console.log(registro.mostrarCamiones());
registro.darDeBajaCamion(1516);
console.log("Camiones después de dar de baja:");
console.log(registro.mostrarCamiones());