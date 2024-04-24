import Header from "@/components/header/header";
import { CardsProps } from "@/interface/projects.interface";
import { api } from "@/services/api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Card from "../components/portfolioPage/cards/projects.card";
import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio: NextPage<CardsProps> = ({ cards }: CardsProps) => {
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

export default Portfolio;
