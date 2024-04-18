import Header from "@/components/header/header";
import { CardsProps } from "@/interface/projects.interface";
import { api } from "@/services/api";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Card from "../../components/portfolioPage/cards/frontEnd.card";

const FrontEnd: NextPage<CardsProps> = ({ cards }: CardsProps) => {
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

        <h1>Front-End</h1>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<CardsProps>("/projects");

  return {
    props: { cards: response.data },
    revalidate: 60,
  };
};

export default FrontEnd;
