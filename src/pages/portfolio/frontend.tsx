import Header from "@/components/header/header";
import { NextPage } from "next";
import Link from "next/link";

const FrontEnd: NextPage = () => {
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

export default FrontEnd;
