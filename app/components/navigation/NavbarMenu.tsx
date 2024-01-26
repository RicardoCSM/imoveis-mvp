'use client';

import {
    Navbar,
    IconButton,
    Typography,
    MobileNav,
    Button,
    Collapse,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaBuilding } from "react-icons/fa";export default function NavbarMenu() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <div className="h-[100px] w-full overflow-scroll">
            <Navbar
                fullWidth
                variant="gradient"
                placeholder="Barra de Navegação"
                className="mx-auto h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-3"
            >
                <div className="flex items-center justify-around gap-20 text-blue-gray-900 ">
                    <Typography
                        placeholder="Imóveis Registrados"
                        className="flex items-bottom gap-2 text-xl mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <FaBuilding className="text-2xl text-blue-700"/>
                        Imóveis Registrados
                    </Typography>
                </div>
                <Collapse open={openNav}>
                    <div className="flex items-center gap-x-1">
                        <Button placeholder="Login" fullWidth variant="text" size="sm" className="">
                            <span>Login</span>
                        </Button>
                        <Button color="blue" placeholder="Cadastrar" fullWidth variant="gradient" size="sm">
                            <span>Cadastrar</span>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}