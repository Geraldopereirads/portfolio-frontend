import Header from "@/components/header/header";
import { CardsProps } from "@/interface/projects.interface";
import { api } from "@/services/api";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Card from "../../components/portfolioPage/cards/fullStack.card";

const FullStack: NextPage<CardsProps> = ({ cards }: CardsProps) => {
  return (
    <>
      <Header />
      <main>
        <Link href="/portfolio">
          <h1>Portfólo</h1>
        </Link>

        <nav>
          <Link href="/portfolio/frontend">Front-End</Link>
          <Link href="/portfolio/backend">Back-End</Link>
          <Link href="/portfolio/projects">Projetos</Link>
          <Link href="/portfolio/fullstack">Full-Stack</Link>
        </nav>

        <h1>Full-Stack</h1>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<CardsProps>("/fullstack");

  return {
    props: { cards: response.data },
  };
};

export default FullStack;
