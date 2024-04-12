import Header from '@/components/header/header'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Geraldo Pereira</h1>
        <section>
          <p>
            Olá! Sou desenvolvedor Full-stack com mais de um ano de experiência
            em desenvolvimento web. Durante minha jornada, concluí diversos
            projetos significativos que demonstram minhas habilidades e
            expertise na área.
          </p>
          <p>
            Um desses projetos é uma aplicação para uma hamburgueria fictícia,
            construída utilizando React. Essa aplicação se destaca por sua
            integração com uma API para obtenção de produtos, funcionalidades
            avançadas como adicionar produtos ao carrinho e exibição do valor
            total da compra. Além disso, a estilização é responsiva, seguindo as
            melhores práticas de mobile first.
          </p>
          <p>
            Outro projeto relevante é uma aplicação de listagem de tecnologias
            desenvolvida em React e TypeScript. Essa aplicação inclui recursos
            como cadastro e login de usuários, além da capacidade de cadastrar e
            remover tecnologias. Para garantir a qualidade e segurança, utilizei
            tecnologias como React Hook Form, Yup, React-Toastify e Context API,
            juntamente com Styled Components para a estilização responsiva.
          </p>
        </section>
        <ul>
          <li>Organização</li>
          <li>Criativo</li>
          <li>Comunicação</li>
          <li>Eficiência</li>
        </ul>
        <picture>
          <img
            src='https://github.com/Geraldopereirads.png'
            alt='Desenvolvedor Full-Stack'
            width={300}
            height={300}
          />
        </picture>

        <ul>
          <li>Adaptabilidade</li>
          <li>Curioso</li>
          <li>Resolução</li>
          <li>Lógica</li>
        </ul>
        <section>
          <p>
            Além disso, desenvolvi uma API para uma locadora de filmes
            fictícios, utilizando tecnologias de ponta, como TypeScript, Zod,
            PostgreSQL, TypeORM, PG e PG-Format. Essa API permite realizar
            operações de CRUD completo de filmes, demonstrando minha competência
            na construção de sistemas robustos e escaláveis.
          </p>
          <p>
            Estou sempre em busca de novos desafios e estou animado para
            continuar contribuindo com meus conhecimentos e habilidades em
            projetos futuros. Se você busca um profissional com paixão pelo
            desenvolvimento, estou à disposição para colaborar em sua próxima
            empreitada.
          </p>
        </section>
      </main>
    </>
  )
}

export default About
