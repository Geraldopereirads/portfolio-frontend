import Header from "@/components/header/header";
import { CardsProps } from "@/interface/projects.interface";
import { api } from "@/services/api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Card from "../../components/portfolioPage/cards/frontEnd.card";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { Swiper, SwiperSlide } from "swiper/react";

const FrontEnd: NextPage<CardsProps> = ({ cards }: CardsProps) => {
  const [search, setSearch] = useState("");
  const [slidePerView, setSlidePerView] = useState(1);
  const [width] = useWindowSize();

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

  const searchLowerCase = search.toLowerCase();

  const filterProjects = Array.isArray(cards)
    ? cards.filter((project) =>
        project.title.toLowerCase().includes(searchLowerCase)
      )
    : [];

  return (
    <>
      <Header />
      <main className="flexCol">
        <Link href="/portfolio">
          <h1 className="primaryTitle">Portfólo</h1>
        </Link>

        <nav className="mt-20 mb-20 flex flex-row flex-wrap items-center justify-center gap-5 ">
          <Link className="buttonsPortfolio" href="/portfolio/frontend">
            Front-End
          </Link>
          <Link className="buttonsPortfolio" href="/portfolio/backend">
            Back-End
          </Link>
          <Link className="buttonsPortfolio" href="/portfolio/projects">
            Todos os Projetos
          </Link>
          <Link className="buttonsPortfolio" href="/portfolio/fullstack">
            Full-Stack
          </Link>
        </nav>

        <form>
          <input
            className="h-11 bg-textD rounded-lg pl-5 w-[100%] mb-12 text-textWhite p:w-[437px]"
            type="search"
            value={search}
            onChange={handleSearchChange}
            placeholder="Insira o título do projeto"
          />
        </form>

        <ul className="max-w-[100%] md:hidden">
          <Swiper
            slidesPerView={slidePerView}
            pagination={{ clickable: true }}
            loop={true}
          >
            {filterProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <Card card={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>

        <ul className="space mb-16 hidden md:grid gap-10 grid-cols-2 xl:grid-cols-3 xl: 2xl:grid-cols-4 2xl:gap- sm:hidden">
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
    revalidate: 60 * 15,
  };
};

export default FrontEnd;
