import Header from "@/components/header/header";
import { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Contato</h1>
        <p>
          Desperte sua próxima ideia incrivel e transforme projetos em
          realidade!
        </p>
        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="text" placeholder="Digite seu WhatsApp" />
          <input type="text" placeholder="Digite seu E-mail" />
          <textarea placeholder="Digite sua mensagem..."></textarea>
          <input type="submit" value="Enviar" />
        </form>
      </main>
    </>
  );
};

export default Contact;
