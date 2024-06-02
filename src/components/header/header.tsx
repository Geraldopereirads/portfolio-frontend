import { useState } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BiSolidFilePdf } from "react-icons/bi";
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import ThemeSwitcher from "../ThemeSwither";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between font-semibold sticky top-0 z-10 space h-16 bg-header">
      {nav ? (
        <>
          <button onClick={() => setNav(!nav)} className="z-20 md:hidden text-textWhite">
            <MdClose className="z-10" size={30} />
          </button>

          <div className="md:hidden fixed w-full h-full top-0 left-0 right-0 flex items-center justify-center bg-gradient-to-t from-yellow-400 to-black ease-in opacity-95 pointer-events-auto transform translate-y-0 z-10">
            <nav className=" flex flex-col items-center justify-center gap-10 container text-xl">
              <Link href="/">Início</Link>
              <Link href="/about">Sobre</Link>
              <Link href="/portfolio">Portfólio</Link>
              <Link href="/tools">Ferramentas</Link>
              <Link href="/contact">Contato</Link>
            </nav>
          </div>
        </>
      ) : (
        <button onClick={() => setNav(!nav)} className="md:hidden flex text-textWhite">
          <RiMenuAddLine size={30} />
        </button>
      )}

      <div className="hidden md:block">
        <nav>
          <Link href="/">Início</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/portfolio">Portfólio</Link>
          <Link href="/tools">Ferramentas</Link>
          <Link href="/contact">Contato</Link>
        </nav>
      </div>

      <section className="flex flex-row gap-4 text-textWhite">
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
          <BiSolidFilePdf size={25} />
        </Link>
        <ThemeSwitcher />
      </section>
    </header>
  );
};

export default Header;
