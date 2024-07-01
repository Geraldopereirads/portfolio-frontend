import { useState } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { RiMenuAddLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { BiSolidFilePdf } from "react-icons/bi";
import { GrGithub, GrLinkedinOption, GrInstagram } from "react-icons/gr";
import ThemeSwitcher from "../ThemeSwither";

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="customBox flexRow font-semibold sticky top-0 z-10 space h-[75px] bg-header">
      {nav ? (
        <>
          <button
            onClick={() => setNav(!nav)}
            className="z-20 md:hidden text-textWhite"
          >
            <MdClose className="z-10" size={30} />
          </button>

          <div className="md:hidden fixed w-full h-full top-0 left-0 right-0 flex items-center justify-center bg-gradient-to-t from-yellow-400 to-black ease-in opacity-95 pointer-events-auto transform translate-y-0 z-10">
            <nav className=" flex flex-col items-center justify-center gap-10 container text-xl text-textWhite">
              <Link href="/">Início</Link>
              <Link href="/about">Sobre</Link>
              <Link href="/portfolio">Projetos</Link>
              <Link href="/tools">Ferramentas</Link>
              <Link href="/contact">Contato</Link>
            </nav>
          </div>
        </>
      ) : (
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden flex text-textWhite"
        >
          <RiMenuAddLine size={30} />
        </button>
      )}

      <div className="hidden md:block">
        <nav className="text-textWhite flex text-xl md:gap-7 lg:gap-9 m:text-2xl xl:gap-12 xl:text-3xl 2xl:text-3xl">
          <Link href="/" className="hover">
            Início
          </Link>
          <Link href="/about" className="hover">
            Sobre
          </Link>
          <Link href="/portfolio" className="hover">
            Projetos
          </Link>
          <Link href="/tools" className="hover">
            Ferramentas
          </Link>
          <Link href="/contact" className="hover">
            Contato
          </Link>
        </nav>
      </div>

      <section className="flex flex-row gap-4 lg:gap-5 2xl:gap-8">
        <Link
          href="https://www.instagram.com/geraldopereiradsj/"
          title="WhatsApp"
          target="_blank"
        >
          <GrInstagram className="iconsSize hover" />
        </Link>

        <Link
          href="https://wa.me/5522997773136"
          title="WhatsApp"
          target="_blank"
        >
          <BsWhatsapp className="iconsSize hover" />
        </Link>
        <Link
          href="https://github.com/Geraldopereirads"
          title="GitHub"
          target="_blank"
        >
          <GrGithub className="iconsSize hover" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/geraldo-pereira/"
          title="LinkeDin"
          target="_blank"
        >
          <GrLinkedinOption className="iconsSize hover" />
        </Link>
        <Link
          href="https://docs.google.com/document/d/18fuUqM4vwsqAulXEXX8KmdRBKsyfy-m2SUco9UH9l7I/edit?usp=sharing"
          target="_blank"
          title="Currículo"
        >
          <BiSolidFilePdf className="iconsSize hover" />
        </Link>
        <ThemeSwitcher />
      </section>
    </header>
  );
};

export default Header;
