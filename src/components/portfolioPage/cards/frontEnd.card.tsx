import { CardProps } from "@/interface/projects.interface";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const Card = ({ card }: CardProps) => {
  return (
    <li className=" flex flex-col justify-center items-center gap-2">
      <Link className="text text-2xl" href={card.url} target="_blank">
        {card.title}
      </Link>
      <div className="flex justify-center items-center gap-5">
        <Link href={card.github} target="_blank">
          <FaGithub size={25} />
        </Link>
        <Link href={card.url} target="_blank">
          <FaLink size={25} />
        </Link>
      </div>
      <Link href={card.url} target="_blank">
        <Image
          width={300}
          height={300}
          src={card.image}
          alt="Capa do projeto frontend"
          className="rounded-[20px]"
        />
      </Link>
    </li>
  );
};

export default Card;
