import Container from "../Container";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

const Navbar = () => {
    return (
        <div
            className="
                fixed
                w-screen
                border-b-[1px]
                top-0
                shadow-2xl
                py-5
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
                </div>
            </Container>
        </div>
    )
}

export default Navbar;