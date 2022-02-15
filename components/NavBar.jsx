import Link from "next/link";
import Image from "next/image";
import Toggle from "../components/ThemeToggle";

const NavBar = () => {
  const toggleMobile = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center sticky md:w-4/5 p-3">
        <div
          className="flex
          flex-wrap
          justify-between
          items-center
          border-b
          space-x-6
          md:w-4/5
          w-screen
          p-3
          "
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

          <div className="md:hidden flex items-center">
            <button type="button" className="mobile-menu-button" onClick={toggleMobile}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden items-center md:flex text-center space-x-6 text-lg">
            <Link href="/about">
              <a
                className="
              hover:underline
              dark:text-white
              hover:decoration-sky-600
              hover:dark:decoration-smooth-grey
              hover:transition
              hover:delay-75
              hover:text-black
              hover:dark:text-white
              "
              >
                About
              </a>
            </Link>

            <Link href="/projects">
              <a
                className="
              hover:underline
              dark:text-white
              hover:decoration-sky-600
              hover:dark:decoration-smooth-grey
              hover:transition
              hover:delay-75
              hover:text-black
              hover:dark:text-white
               "
              >
                Projects
              </a>
            </Link>

            <Link href="/contact" className="m-0">
              <a
                className="
              hover:underline
              dark:text-white
              hover:decoration-sky-600
              hover:dark:decoration-smooth-grey
              hover:transition
              hover:delay-75
              hover:text-black
              hover:dark:text-white
              "
              >
                Contact
              </a>
            </Link>
            <Toggle />
          </div>
        </div>
      </div>
      <div
        className="
          mobile-menu
          w-full
          text-2xl
          space-y-2
          flex
          md:hidden
          dark:text-white
          flex-col 
          text-center
          items-center
          font-bold
          text-slate-900
          p-2
          border-b
        "
      >
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Toggle />
      </div>
    </nav>
  );
};

export default NavBar;
