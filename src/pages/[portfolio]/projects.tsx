import { CardsProps } from "@/interface/projects.interface";
import { api } from "@/services/api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Card from "../../components/portfolioPage/cards/projects.card";
import Header from "@/components/header/header";

const Projects: NextPage<CardsProps> = ({ cards }: CardsProps) => {
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
          <Link href="/portfolio/projects">Todos os Projetos</Link>
          <Link href="/portfolio/fullstack">Full-Stack</Link>
        </nav>


        <ul>
          {cards.map((project) => (
            <Card key={project.id} card={project} />
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<CardsProps>("/projects");

  return {
    props: { cards: response.data },
    revalidate: 60,
  };
};

export default Projects;
