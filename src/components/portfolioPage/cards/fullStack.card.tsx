import { CardProps } from "@/interface/projects.interface";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Card = ({ card }: CardProps) => {
  return (
    <li>
      <Link href={card.url} target="_blank">
        Em Construção
      </Link>
      <Link href={card.url} target="_blank">
        <Image
          width={300}
          height={200}
          src={card.image}
          alt="Capa dos projetos FullStack"
        />
      </Link>
      <div>
        <Link href={card.github} target="_blank">
          <FaGithub size={25} />
        </Link>
      </div>
    </li>
  );
};

export default Card;
