import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
            <Link href="/" className="navbar__link relative cursor-pointer">INICIO</Link>
            <Link href="/Listas" className="navbar__link relative cursor-pointer">CLIENTES</Link>
            <Link href="/Formulario" className="navbar__link relative cursor-pointer">FOMULARIO</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
