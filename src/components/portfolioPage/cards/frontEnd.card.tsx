import { CardProps } from "@/interface/projects.interface";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const Card = ({ card }: CardProps) => {
  return (
    <li>
      <Link href={card.url} target="_blank">
        {card.title}
      </Link>
      <Link href={card.url} target="_blank">
        <Image
          width={300}
          height={300}
          src={card.image}
          alt="Capa do projeto frontend"
        />
      </Link>
      <div>
        <Link href={card.github} target="_blank">
          <FaGithub size={25} />
        </Link>
        <Link href={card.url} target="_blank">
          <FaLink size={25} />
        </Link>
      </div>
    </li>
  );
};

export default Card;
