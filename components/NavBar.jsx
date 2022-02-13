import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex sticky justify-center w-screen p-3">
      <div
        className="flex 
          justify-between
          items-center
          space-x-6
          w-3/5
          p-3
          border-b"
      >
        <div>
          <Image
            className="rounded-full"
            src="/profile-photo.jpg"
            alt="foto-joao"
            width="64"
            height="64"
          />
        </div>

        <div className="flex space-x-4 text-lg">
          <Link href="/about">
            <a className="hover:font-bold
              hover:border-b
              hover:border-sky-600
              hover: transition
              hover: origin-left
              hover:delay-75
              ">About</a>
          </Link>

          <Link href="/projects">
            <a
              className="hover:font-bold
              hover:border-b
              hover:border-sky-600
              hover: transition
              hover: origin-left
              hover:delay-75
              "
            >
              Projects
            </a>
          </Link>

          <Link href="/contact">
            <a
              className="hover:font-bold
              hover:border-b
              hover:border-sky-600
              hover: transition
              hover: origin-left
              hover:delay-75
              "
            >
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
