import Header from "@/components/header/header";
import Image from "next/image";
import fullstackDeveloper from "../assets/img/home/dev.svg";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-evenly text sm:flexRow sm:gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="text text-3xl leading-[137%] max-w-[51%] minOne:max-w-[100%] p:text-4xl p:leading-[114%] p:max-w-[100%] pp:max-w-[73%] sm:text-[2.063rem] lg:leading-[100%] lg:max-w-[60%] lg:text-5xl xl:text-5xl xl:max-w-[70%] 2xl:max-w-[50%] 2xl:leading-[120%]">
            <small className="textSmall">Olá</small> <br />
            Eu sou Geraldo Pereira, Desenvolvedor Full-Stack
          </h1>
          <small className="textSmall">
            Seja bem-vindo ao meu portólio website
          </small>
          <Link
            href="/about"
            className="flex items-center justify-center textDark h-12 w-56 rounded-lg bg-primary"
          >
            Saiba mais sobre mim
          </Link>
        </div>

        <Image
          src={fullstackDeveloper}
          alt="Desenvolvedor Full-Stack"
          width={300}
          height={200}
          className="p:w-80 xl:w-[36rem] lg:w-[22rem] 2xl:w-[470px] "
        />
      </main>
    </>
  );
};
export default Home;
