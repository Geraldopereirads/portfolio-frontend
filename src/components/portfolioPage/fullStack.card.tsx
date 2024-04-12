import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Card = () => {
  return (
    <li>
      <Link href="" target="_blank">
        Em Construção
      </Link>
      <Link href="" target="_blank">
        <Image
          width={300}
          height={200}
          src=""
          alt="Capa do projeto frontend"
        />
      </Link>
      <div>
        <Link href="" target="_blank">
          <FaGithub size={25} />
        </Link>
      </div>
    </li>
  );
};

export default Card;
