import Link from "next/link";
import Image from "next/image";
import { githubUrl, linkedinUrl } from "../constants";

export const Header = () => {
  return (
    <nav className="bg-slate-300 sticky z-10 p-5 drop-shadow-xl">
      <div className="prose text-center flex justify-between ">
        <Link href={"/"} className=" hover:text-white/80">
          <div>Shefali Swatantra</div>
        </Link>
        <div className="flex">
          <Link href={linkedinUrl} title="Linkedin">
            <Image
              src="/linkedin.svg"
              alt="linkedin-logo"
              width={28}
              height={28}
            />
          </Link>
          <Link href={githubUrl} title="Github">
            <Image
              src="/github.svg"
              alt="github-logo"
              width={28}
              height={28}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
