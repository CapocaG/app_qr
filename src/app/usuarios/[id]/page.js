import { usuarios } from "@/components/data/usuarios";
import Link from "next/link";


export default function Page({ params }) {
    const usuario = usuarios[params.id];
    if (!usuario) return <div>No encontrado</div>;

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">

            <h2 className="text-2xl font-bold mb-4 text-blue-700">Detalle de {usuario.nombre}</h2>
            <div className="mb-4 flex items-center gap-4">
                {usuario.foto ? (
                    <img src={usuario.foto} alt={usuario.nombre} className="w-24 h-24 rounded-full object-cover border" />
                ) : (
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">Sin foto</div>
                )}
                <div>
                    <div className="text-lg font-semibold">{usuario.nombre}</div>
                    <div className="text-gray-600">Edad: {usuario.edad}</div>
                </div>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold text-blue-600">Contacto de Emergencia</h3>
                <div>Nombre: {usuario.contactoEmergencia.nombre}</div>
                <div>Parentesco: {usuario.contactoEmergencia.parentesco}</div>
                <div>Teléfono: {usuario.contactoEmergencia.telefono}</div>
                <div>Email: {usuario.contactoEmergencia.email}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div><b>Condición Médica:</b> {usuario.condicionMedica ? "Sí" : "No"}</div>
                <div><b>Detalle Condición:</b> {usuario.detalleCondicion}</div>
                <div><b>Medicamentos:</b> {usuario.medicamentos ? "Sí" : "No"}</div>
                <div><b>Detalle Medicamentos:</b> {usuario.detalleMedicamentos}</div>
                <div><b>Alergias:</b> {usuario.alergias}</div>
                <div><b>Grupo Sanguíneo:</b> {usuario.grupoSanguineo}</div>
                <div><b>Dispositivo Médico:</b> {usuario.dispositivoMedico}</div>
                <div><b>Dirección:</b> {usuario.direccion}</div>
                <div><b>Comunicación Verbal:</b> {usuario.comunicacionVerbal ? "Sí" : "No"}</div>
                <div><b>Dificultad de Orientación:</b> {usuario.dificultadOrientacion ? "Sí" : "No"}</div>
                <div><b>Detalle Dificultad:</b> {usuario.detalleDificultad}</div>
                <div><b>Instrucciones Especiales:</b> {usuario.instrucciones}</div>
                <div><b>Idioma Preferido:</b> {usuario.idioma}</div>
                <div><b>Accesorio:</b> {usuario.accesorio}</div>
                <div><b>Color/Diseño:</b> {usuario.color}</div>
                <div><b>Nombre Visible:</b> {usuario.nombreVisible ? "Sí" : "No"}</div>
                <div><b>Consentimiento:</b> {usuario.consentimiento ? "Sí" : "No"}</div>
            </div>
            <div className="mt-6">
                <Link href="/Listas">
                    <button className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        ← Volver a la lista
                    </button>
                </Link>
            </div>
        </div>
    );

}