"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.estaAprobado = function () {
        if (this.nota >= 7) {
            return true;
        }
        else {
            return false;
        }
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
