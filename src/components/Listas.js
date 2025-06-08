"use client";

import Link from "next/link";
import {usuarios} from "@/components/data/usuarios";

const Listas = () => (
    <div className="max-w-3xl mx-auto mt-8">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
            <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 text-left">Nombre</th>
                <th className="py-2 px-4 text-left">Edad</th>
                <th className="py-2 px-4 text-left">Tel. Emergencia</th>
                <th className="py-2 px-4 text-left">Grupo Sanguíneo</th>
                <th className="py-2 px-4"></th>
            </tr>
            </thead>
            <tbody>
            {usuarios.map((usuario, idx) => (
                <tr key={idx} className="border-b hover:bg-blue-50">
                    <td className="py-2 px-4">{usuario.nombre}</td>
                    <td className="py-2 px-4">{usuario.edad}</td>
                    <td className="py-2 px-4">{usuario.contactoEmergencia?.telefono}</td>
                    <td className="py-2 px-4">{usuario.grupoSanguineo}</td>
                    <td className="py-2 px-4">
                        <Link href={`/usuarios/${idx}`}>
                            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Ver Detalles</button>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

export default Listas;