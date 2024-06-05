import Header from "@/components/header/header";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <main className="flexCol">
        <h1 className="primaryTitle">Geraldo Pereira</h1>
        <section>
          <p>
            Desenvolvedor Full Stack Jr. com sólida formação em Desenvolvimento
            Web Full Stack pela Kenzie Academy Brasil e graduação em andamento
            em Engenharia de Software. Possuo conhecimento abrangente em
            desenvolvimento Front End e Back End, com foco na criação de
            aplicações web eficientes e responsivas. Comprometido com o
            aprendizado contínuo e a aplicação das melhores práticas de
            programação, viso sempre a entrega de soluções de alta qualidade.
            Inglês intermediário.
          </p>
        </section>
        <ul className="flex flex-row">
          <li>Organização</li>
          <li>Criativo</li>
          <li>Comunicação</li>
          <li>Eficiência</li>
        </ul>
        <picture>
          <img
            src="https://github.com/Geraldopereirads.png"
            alt="Desenvolvedor Full-Stack"
            width={200}
            height={200}
            className="rounded-full"
          />
        </picture>

        <ul className="flex flex-row">
          <li>Adaptabilidade</li>
          <li>Curioso</li>
          <li>Resolução</li>
          <li>Lógica</li>
        </ul>
        <section>
          <p>
            Experiência sólida na construção de projetos utilizando stacks como
            HTML, CSS, JavaScript ES6, React, TypeScript, Node.js, Python e
            Next.js. Desenvolvo aplicações por meio de metodologias ágeis
            (SCRUM), utilizando ferramentas como Trello e Notion, e Git para
            versionamento. Possuo experiência na construção de APIs utilizando
            frameworks como Express.js, Prisma, TypeORM e NestJS, além de
            conhecimentos sólidos em SQL (PostgreSQL). Atualmente, busco
            aprimorar continuamente minhas habilidades técnicas, com foco no
            estudo aprofundado de Java.{" "}
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
