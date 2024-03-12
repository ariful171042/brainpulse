import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import ModileNav from "./common/ModileNav";
import NavItems from "./common/NavItems";
import Button from "./common/Button";

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

        <div>
          <div className="flex justify-center items-center gap-4">
            <div className="md:hidden">
              <ModileNav />
            </div>
            <div className="hidden md:block">
              <UserButton />
            </div>
          </div>

          <SignedOut>
            <Button variant="primary">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
