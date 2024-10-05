"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }
    Profesor.prototype.añadirAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Profesor.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    Profesor.prototype.getNombre = function () {
        return this.nombre;
    };
    return Profesor;
}());
exports.Profesor = Profesor;
