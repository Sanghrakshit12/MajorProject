import Image from "next/image";
import NitjLogo from "../../../public/nitj logo 1.png";
import HeaderAnimation from "./HeaderAnimation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,15,31,0.8)] backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo and Title Side-by-Side */}
        <div className="flex items-center gap-4">
          <Image
            src={NitjLogo}
            alt="NITJ Logo"
            width={48}
            height={48}
            className="rounded-md"
            priority
          />
          <HeaderAnimation />
        </div>

        {/* Future button or nav */}
      </div>
    </header>
  );
};

export default Header;
