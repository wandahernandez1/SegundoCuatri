"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = require("./Alumno");
var Profesor_1 = require("./Profesor");
var Escuela_1 = require("./Escuela");
// Crear alumnos
var alumno1 = new Alumno_1.Alumno("Marcelo", 8);
var alumno2 = new Alumno_1.Alumno("Diana", 6);
var alumno3 = new Alumno_1.Alumno("Juan", 9);
// Crear profesor
var profesor1 = new Profesor_1.Profesor("Profe Karen");
var profesor2 = new Profesor_1.Profesor("Profe Mauri");
// Alumnos que pertenecen a un profe
profesor1.añadirAlumno(alumno1);
profesor1.añadirAlumno(alumno2);
profesor2.añadirAlumno(alumno3);
// Crear escuela
var escuela = new Escuela_1.Escuela("Escuela Primaria");
// Matricular alumnos (a la escuela)
escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);
// Contratar profe
escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);
// Verificar si un alumno está aprobado
console.log("".concat(alumno1.getNombre(), " est\u00E1 aprobado: ").concat(alumno1.estaAprobado(), ", su nota es ").concat(alumno1.getNota()));
console.log("".concat(alumno2.getNombre(), " est\u00E1 aprobado: ").concat(alumno2.estaAprobado()));
//Ver lista de alumnos de la escuela
console.log("Alumnos en la escuela:", escuela.obtenerAlumnos().map(function (alumno) { return alumno.getNombre(); }));
// Desvincular un alumnos de la escuela 
escuela.expulsarAlumno("Juan");
console.log("Alumnos después de expulsar a Juan:", escuela.obtenerAlumnos().map(function (alumno) { return alumno.getNombre(); }));
// Despedir a un profesor
escuela.despedirProfesor("Profe Karen");
console.log("Profes después de despedir a Karen:", escuela.obtenerProfesores().map(function (profesor) { return profesor.getNombre(); }));
