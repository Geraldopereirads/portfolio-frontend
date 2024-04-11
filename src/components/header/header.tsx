import { useState } from "react"
import Link from "next/link";
import { MdOutlineDarkMode, MdClose } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";

const Header = () => {
    const [nav, setNav] = useState(false)

    return (
        <header>
            {nav ? (
                <>
                <button onClick={() => setNav(!nav)}>
                    <MdClose size={30}/>
                </button>

                <div>
                    <nav>
                        <Link href="/">
                            Início
                        </Link>
                        <Link href="/about">
                            Sobre
                        </Link>
                        <Link href="/portfolio">
                            Portfólio
                        </Link>
                        <Link href="/tools">
                            Ferramentas
                        </Link>
                        <Link href="/contact">
                            Contato
                        </Link>
                    </nav>
                </div>
                </>
            ) : (
                <button onClick={() => setNav(!nav)}>
                    <RiMenuAddLine size={30} />
                </button>
            )}
        </header>
    )
}

export default Header;
