import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Image
          src="/profile-photo.jpg"
          alt="foto-joao"
          width={70}
          height={40}
        />
      </div>
    </nav>
  );
}
 
export default NavBar;