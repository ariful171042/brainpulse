import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ModileNav from "./common/ModileNav";
import NavItems from "./common/NavItems";
import Button from "./common/Button";
import { RiProfileFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-transparent z-50 border-b border-se">
      <div className="wrapper py-5 text-white flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-2xl cursor-pointer">Logo</p>
        </Link>

        <div className="md:flex hidden items-center text-lg">
          <NavItems />
        </div>

        <div className="flex gap-4">
          <SignedOut>
            <div className="z-[1]">
              <Button variant="primary">
                <Link href="/sign-in">Login</Link>
              </Button>
            </div>
          </SignedOut>

          <div className="flex justify-center items-center gap-4">
            <div className="md:hidden">
              <ModileNav />
            </div>
            <div className="hidden md:block text-2xl text-gray-200">
              <Link href="/profile" className="flex items-center gap-4">
                <SignedIn>
                  <RiProfileFill />
                </SignedIn>
                <UserButton />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
