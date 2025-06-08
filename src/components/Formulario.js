"use client";
import React, {useState} from "react";

const Formulario = () => {
    const [condicionMedica, setCondicionMedica] = useState(false);
    const [medicamentos, setMedicamentos] = useState(false);
    const [dificultadOrientacion, setDificultadOrientacion] = useState(false);

  return (
      <form className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
          <h2 className="text-xl font-bold">Formulario del Portador</h2>

          <fieldset>
              <legend className="text-lg font-semibold">Datos Personales del Portador</legend>
              <div className="space-y-2">
                  <label className="block">
                      Nombre completo:
                      <input type="text" className="w-full border rounded p-2" required />
                  </label>
                  <label className="block">
                      Fecha de nacimiento o edad:
                      <input type="date" className="w-full border rounded p-2" />
                  </label>
                  <label className="block">
                      Foto (opcional):
                      <input type="file" className="w-full border rounded p-2" />
                  </label>
                  <label className="block">
                      Nombre del contacto de emergencia:
                      <input type="text" className="w-full border rounded p-2" required />
                  </label>
                  <label className="block">
                      Parentesco:
                      <input type="text" className="w-full border rounded p-2" required />
                  </label>
                  <label className="block">
                      Número(s) de teléfono:
                      <input type="tel" className="w-full border rounded p-2" required />
                  </label>
                  <label className="block">
                      Correo electrónico (opcional):
                      <input type="email" className="w-full border rounded p-2" />
                  </label>
              </div>
          </fieldset>

          <fieldset>
              <legend className="text-lg font-semibold">Información Médica Relevante</legend>
              <div className="space-y-2">
                  <label className="block">
                      ¿Tiene alguna condición médica?
                      <select
                          className="w-full border rounded p-2"
                          onChange={(e) => setCondicionMedica(e.target.value === "Sí")}
                      >
                          <option value="No">No</option>
                          <option value="Sí">Sí</option>
                      </select>
                  </label>
                  {condicionMedica && (
                      <label className="block">
                          Especificar condición médica:
                          <input type="text" className="w-full border rounded p-2" />
                      </label>
                  )}
                  <label className="block">
                      ¿Toma medicamentos importantes o diarios?
                      <select
                          className="w-full border rounded p-2"
                          onChange={(e) => setMedicamentos(e.target.value === "Sí")}
                      >
                          <option value="No">No</option>
                          <option value="Sí">Sí</option>
                      </select>
                  </label>
                  {medicamentos && (
                      <label className="block">
                          Especificar nombre del medicamento y horario:
                          <textarea className="w-full border rounded p-2"></textarea>
                      </label>
                  )}
                  <label className="block">
                      Alergias médicas importantes:
                      <input type="text" className="w-full border rounded p-2" />
                  </label>
                  <label className="block">
                      Grupo sanguíneo (opcional):
                      <input type="text" className="w-full border rounded p-2" />
                  </label>
                  <label className="block">
                      ¿Tiene algún dispositivo médico?
                      <input type="text" className="w-full border rounded p-2" />
                  </label>
              </div>
          </fieldset>

          <fieldset>
              <legend className="text-lg font-semibold">Datos para Ubicación o Retorno</legend>
              <div className="space-y-2">
                  <label className="block">
                      Dirección de residencia:
                      <input type="text" className="w-full border rounded p-2" />
                  </label>
                  <label className="block">
                      ¿La persona puede comunicarse verbalmente?
                      <select className="w-full border rounded p-2">
                          <option value="No">No</option>
                          <option value="Sí">Sí</option>
                      </select>
                  </label>
                  <label className="block">
                      ¿Tiene alguna dificultad para orientarse o comunicarse?
                      <select
                          className="w-full border rounded p-2"
                          onChange={(e) => setDificultadOrientacion(e.target.value === "Sí")}
                      >
                          <option value="No">No</option>
                          <option value="Sí">Sí</option>
                      </select>
                  </label>
                  {dificultadOrientacion && (
                      <label className="block">
                          Especificar detalles:
                          <textarea className="w-full border rounded p-2"></textarea>
                      </label>
                  )}
              </div>
          </fieldset>

          <fieldset>
              <legend className="text-lg font-semibold">Instrucciones Especiales</legend>
              <div className="space-y-2">
                  <label className="block">
                      ¿Qué debe hacer una persona si encuentra a este individuo en una situación de emergencia?
                      <textarea className="w-full border rounded p-2"></textarea>
                  </label>
                  <label className="block">
                      Idioma preferido del portador:
                      <input type="text" className="w-full border rounded p-2" />
                  </label>
              </div>
          </fieldset>

          <fieldset>
              <legend className="text-lg font-semibold">Preferencias del Accesorio</legend>
              <div className="space-y-2">
                  <label className="block">
                      ¿Desea llavero, pulsera o ambos?
                      <select className="w-full border rounded p-2">
                          <option value="Llavero">Llavero</option>
                          <option value="Pulsera">Pulsera</option>
                          <option value="Ambos">Ambos</option>
                      </select>
                  </label>
                  <label className="block">
                      Color o diseño preferido:
                      <input type="text" className="w-full border rounded p-2" />
                  </label>
                  <label className="block">
                      ¿Nombre visible en el accesorio o solo código QR?
                      <select className="w-full border rounded p-2">
                          <option value="Nombre visible">Nombre visible</option>
                          <option value="Código QR">Código QR</option>
                      </select>
                  </label>
              </div>
          </fieldset>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Enviar
          </button>
      </form>

    );

}

export default Formulario;