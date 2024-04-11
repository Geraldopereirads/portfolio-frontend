import Header from "@/components/header/header";
import Image from "next/image";
import fullstackDeveloper from "../assets/img/home/dev.svg";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main >
        <div >
          <h1 >
            <small>Olá</small> <br />
            Eu sou Geraldo Pereira, Desenvolvedor Full-Stack
          </h1>
          <h2>Seja bem-vindo ao meu portólio website</h2>
          <a
            href=""
          >
            Saiba mais sobre mim
          </a>
        </div>

        <Image
          src={fullstackDeveloper}
          alt="Desenvolvedor Full-Stack"
          width={300}
          height={200}
        />
      </main>
    </>
  );
};
export default Home;
