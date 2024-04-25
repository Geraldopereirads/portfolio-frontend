import Header from "@/components/header/header";
import { CardsProps } from "@/interface/projects.interface";
import { api } from "@/services/api";
import { useWindowSize } from "@react-hook/window-size";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "../components/portfolioPage/cards/projects.card";

const Portfolio: NextPage<CardsProps> = ({ cards }: CardsProps) => {
  const [slidePerView, setSlidePerView] = useState(1);
  const [width] = useWindowSize();
  const [search, setSearch] = useState("");

  useEffect(() => {
    function handleResize() {
      if (width < 600) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value); // Atualize o estado `search` com o valor digitado pelo usuário
  };

  const searchLowerCase = search.toLowerCase()

  const filterProjects = cards.filter((project) => project.title.toLowerCase().includes(searchLowerCase));

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
          <Link href="/portfolio/projetos">Projetos</Link>
          <Link href="/portfolio/fullstack">Full-Stack</Link>
        </nav>

        <form>
          <input className="w-96 text-black"
            type="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Insira o título do projeto que você está buscando"
          />
        </form>

        {/* <ul>
          <Swiper loop={true} slidesPerView={slidePerView}>
            {cards.map((project) => (
              <SwiperSlide key={project.id}>
                <Card card={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul> */}
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
  const response = await api.get<CardsProps>("/projects");

  return {
    props: { cards: response.data },
    revalidate: 60,
  };
};

export default Portfolio;
