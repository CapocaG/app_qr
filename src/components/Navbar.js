"use client"

import React,{useState} from "react";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-white shadow">
            <div className="container flex items-center justify-between py-4">
                <div className="font-bold text-lg"></div>
                {/* Botón hamburguesa */}
                <button
                    className="lg:hidden flex flex-col gap-1"
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menú"
                >
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                    <span className="w-6 h-0.5 bg-black"></span>
                </button>
                {/* Menú en desktop */}
                <div className="hidden lg:flex gap-10 font-medium text-blackish">
                    <Link href="/" className="navbar__link relative cursor-pointer">INICIO</Link>
                    <Link href="/Listas" className="navbar__link relative cursor-pointer">CLIENTES</Link>
                    <Link href="/Formulario" className="navbar__link relative cursor-pointer">FOMULARIO</Link>
                </div>
            </div>
            {/* Menú en móvil */}
            {open && (
                <div className="flex flex-col gap-4 px-6 pb-4 lg:hidden font-medium text-blackish">
                    <Link href="/" onClick={() => setOpen(false)} className="navbar__link">INICIO</Link>
                    <Link href="/Listas" onClick={() => setOpen(false)} className="navbar__link">CLIENTES</Link>
                    <Link href="/Formulario" onClick={() => setOpen(false)} className="navbar__link">FOMULARIO</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
