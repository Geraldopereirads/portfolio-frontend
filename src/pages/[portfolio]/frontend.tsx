import Header from "@/components/header/header";
import { CardsProps } from "@/interface/projects.interface";
import { api } from "@/services/api";
import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import Link from "next/link";
import Card from "../../components/portfolioPage/cards/frontEnd.card";
import { useState } from "react";

const FrontEnd: NextPage<CardsProps> = ({ cards }: CardsProps) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value); // Atualize o estado `search` com o valor digitado pelo usuário
  };

  const searchLowerCase = search.toLowerCase();

  const filterProjects = cards.filter((project) =>
    project.title.toLowerCase().includes(searchLowerCase)
  );

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

        <form>
          <input
            className="w-96 text-black"
            type="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Insira o título do projeto que você está buscando"
          />
        </form>

        <ul>
          {filterProjects.map((project) => (
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
  const response = await api.get<CardsProps>("/frontend");

  return {
    props: { cards: response.data },
    revalidate: 60,
  };
};

export default FrontEnd;
