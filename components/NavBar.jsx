import Link from "next/link"
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
            <a>About</a>
          </Link>

          <Link href="/projects">
            <a>Projects</a>
          </Link>

          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
