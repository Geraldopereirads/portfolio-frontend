import Header from "@/components/header/header";
import { NextPage } from "next";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { GrGithub, GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const Contact: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      toast.error("Preencha todos os campos");
    } else {
      const templateParams = {
        from_name: name,
        message: message,
        whatsapp: whatsapp,
        email: email,
      };
      emailjs
        .send(
          "service_lgjwc3o",
          "template_l9cgi6r",
          templateParams,
          "bL3i2klCcpK676Raf"
        )
        .then(
          (res) => {
            toast.success("Menssagem enviada com sucesso");
            setName("");
            setWhatsapp("");
            setEmail("");
            setMessage("");
          },
          (err) => {
            toast.error("Erro ao enviar email");
          }
        );
    }
  }

  return (
    <>
      <Header />
      <main className="flexCol">
        <h1 className="primaryTitle">Contato</h1>
        <h2
          className="w-[72%] pt-20
         flex justify-center items-center font-semibold text-base minOne:w-[53%] p:w-[50%] p:text-lg pp:w-[100%] md:text-2xl lg:text-[29px]"
        >
          Desperte sua próxima ideia incrivel e transforme projetos em
          realidade!
        </h2>
        <form
          onSubmit={sendEmail}
          className="flexCol justify-center gap-5 w-full max-w-[900px] text-textWhite"
        >
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="ContactInputs"
          />
          <input
            type="text"
            placeholder="Digite seu WhatsApp"
            onChange={(e) => setWhatsapp(e.target.value)}
            value={whatsapp}
            className="ContactInputs"
          />
          <input
            type="text"
            placeholder="Digite seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="ContactInputs"
          />
          <textarea
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-28 w-[100%] rounded pt-5 pl-3 bg-textD"
          ></textarea>
          <input
            type="submit"
            value="Enviar"
            className=" mb-5 font-black h-10 rounded cursor-pointer bg-primary text-textD w-full max-w-[900px]"
          />
        </form>
        <section className="flex flex-row gap-4 lg:gap-5 2xl:gap-8">
          <Link
            href="https://www.instagram.com/geraldopereiradsj/"
            title="WhatsApp"
            target="_blank"
          >
            <GrInstagram className="iconsSize text-textD dark:text-textWhite" />
          </Link>

          <Link
            href="https://wa.me/5522997773136"
            title="WhatsApp"
            target="_blank"
          >
            <BsWhatsapp className="iconsSize text-textD dark:text-textWhite" />
          </Link>
          <Link
            href="https://github.com/Geraldopereirads"
            title="GitHub"
            target="_blank"
          >
            <GrGithub className="iconsSize text-textD dark:text-textWhite" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/geraldo-pereira/"
            title="LinkeDin"
            target="_blank"
          >
            <GrLinkedinOption className="iconsSize text-textD dark:text-textWhite" />
          </Link>
          <Link
            href="https://docs.google.com/document/d/18fuUqM4vwsqAulXEXX8KmdRBKsyfy-m2SUco9UH9l7I/edit?usp=sharing"
            target="_blank"
            title="Currículo"
          >
            <BiSolidFilePdf className="iconsSize text-textD dark:text-textWhite" />
          </Link>
        </section>
        <div className="flex flex-col justify-center gap-2 font-bold text-lg">
          <span className="flex flex-row pt-10 gap-2">
            <Link href="https://wa.me/5522997773136" target="_blank">
              <BsWhatsapp
                size={20}
                className="iconsSize text-textD dark:text-textWhite"
              />
            </Link>
            22 9 9777-3136
          </span>
          <span className="flex flex-row gap-2">
            <MdOutlineMarkEmailRead size={20} /> geraldo.pereirads@hotmail.com
          </span>
          <span className="flex flex-row gap-2">
            <Link
              href="https://www.linkedin.com/in/geraldo-pereira/"
              title="LinkeDin"
              target="_blank"
            >
              <GrLinkedinOption
                className="iconsSize text-textD dark:text-textWhite"
                size={20}
              />
            </Link>
            linkedin.com/in/geraldo-pereira
          </span>
        </div>
      </main>
    </>
  );
};

export default Contact;
