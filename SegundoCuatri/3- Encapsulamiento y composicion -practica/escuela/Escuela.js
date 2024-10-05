"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre, listaDeAlumnos, listaDeProfesores) {
        this.nombre = nombre;
        if (listaDeAlumnos != undefined) {
            this.alumnos = listaDeAlumnos;
        }
        else {
            this.alumnos = [];
        }
        if (listaDeProfesores != undefined) {
            this.profesores = listaDeProfesores;
        }
        else {
            this.profesores = [];
        }
    }
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.expulsarAlumno = function (nombre) {
        this.alumnos = this.alumnos.filter(function (alumno) { return alumno.getNombre() !== nombre; });
    };
    // ["Juan","Mario","Pepe"] =  ["Juan", "Mario"]
    Escuela.prototype.despedirProfesor = function (nombre) {
        this.profesores = this.profesores.filter(function (profesor) { return profesor.getNombre() !== nombre; });
    };
    Escuela.prototype.obtenerAlumnos = function () {
        return this.alumnos;
    };
    Escuela.prototype.obtenerProfesores = function () {
        return this.profesores;
    };
    return Escuela;
}());
exports.Escuela = Escuela;
