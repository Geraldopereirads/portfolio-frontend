import { useState } from "react"
import Link from "next/link";
import { MdOutlineDarkMode, MdClose } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";

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

            <section>
        <Link
          href="https://wa.me/5522997773136"
          title="WhatsApp"
          target="_blank"
        >
          <BsWhatsapp size={25} />
        </Link>
        <Link
          href="https://github.com/Geraldopereirads"
          title="GitHub"
          target="_blank"
        >
          <GrGithub size={25} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/geraldo-pereira/"
          title="LinkeDin"
          target="_blank"
        >
          <GrLinkedinOption size={25} />
        </Link>
        <Link
          href="https://docs.google.com/document/d/1RuY9K2i9rQIZCorUadjX_VIELbHQhU19/edit"
          target="_blank"
          title="Currículo"
        >
          <FaFilePdf size={25} />
        </Link>
        <Link href="">
          <MdOutlineDarkMode size={25} />
        </Link>
      </section>

        </header>
    )
}

export default Header;
