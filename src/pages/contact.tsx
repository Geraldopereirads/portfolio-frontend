import Header from "@/components/header/header";
import { NextPage } from "next";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

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
      <main>
        <h1>Contato</h1>
        <p>
          Desperte sua próxima ideia incrivel e transforme projetos em
          realidade!
        </p>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            placeholder="Digite seu WhatsApp"
            onChange={(e) => setWhatsapp(e.target.value)}
            value={whatsapp}
          />
          <input
            type="text"
            placeholder="Digite seu E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <input type="submit" value="Enviar" className="cursor-pointer"/>
        </form>
      </main>
    </>
  );
};

export default Contact;
