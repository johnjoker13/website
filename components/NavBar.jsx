import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap sticky justify-center w-screen p-3">
      <div
        className="xl:flex
          flex-wrap
          justify-between
          items-center
          space-x-6
          w-3/5
          p-3
          border-b"
      >
        <div className="">
          <div>
            <Image
              className="rounded-full"
              src="/profile-photo.jpg"
              alt="foto-joao"
              width="64"
              height="64"
            />
          </div>
        </div>

        <div className="text-center space-x-6 text-lg">
          <Link href="/about">
            <a
              className="
              hover:underline
              hover:decoration-sky-600
              hover:transition
              hover:delay-75
              hover:text-black
              "
            >
              About
            </a>
          </Link>

          <Link href="/projects">
            <a
              className="
              hover:underline
              hover:decoration-sky-600
              hover:transition
              hover:delay-75
              hover:text-black
               "
            >
              Projects
            </a>
          </Link>

          <Link href="/contact" className="m-0">
            <a
              className="
              hover:underline
              hover:decoration-sky-600
              hover:transition
              hover:delay-75
              hover:text-black
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
