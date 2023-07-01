import Linknode from "./Linknode";

const Navlinks = () => {
    return (
        <div
            className="
                hidden sm:flex
                justify-between gap-5 lg:gap-8
            "
        >
            <Linknode>
                APOD
            </Linknode>

            <Linknode>
                Mars Rover
            </Linknode>

            <Linknode>
                Mars Weather
            </Linknode>
        </div>
    )
}

export default Navlinks;