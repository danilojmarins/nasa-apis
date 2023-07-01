import { useState } from "react";
import { HiBars3 } from 'react-icons/hi2';
import Container from "../Container";
import Logo from "./Logo";
import MobileMenuTab from "./MobileMenuTab";
import Navlinks from "./Navlinks";

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

    return (
        <div
            className="
                fixed
                w-screen
                border-b-[1px]
                top-0
                shadow-sm
                py-2 md:py-3
            "
        >
            <Container>
                <div
                    className="
                        flex
                        items-center
                        justify-between
                    "
                >
                    <Logo />

                    <Navlinks />

                    <div
                        className="block sm:hidden"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <HiBars3 className="text-2xl cursor-pointer" />
                    </div>

                    {showMobileMenu && <MobileMenuTab />}
                </div>
            </Container>
        </div>
    )
}

export default Navbar;