import Header from "@/components/header/header";
import Image from "next/image";
import fullstackDeveloper from "../assets/img/home/dev.svg";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <main className="space flex flex-col items-center justify-evenly text sm:flexRow sm:gap-12">
        <div className="flex flex-col gap-3">
          <h1 className="text text-3xl leading-[137%] max-w-51 p:text-4xl p:leading-[137%] p:max-w-38 pp:max-w-[73%] sm:text-5xl lg:max-w-[40%] xl:text-5xl xl:max-w-[32%] 2xl:max-w-[25%] 2xl:leading-[120%]">
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
          className="p:w-80 md:w-96 xl:w-[36rem] 2xl:w-[470px]"
        />
      </main>
    </>
  );
};
export default Home;
