const Logo = () => {
    return (
        <div className="flex items-center">
            <img
                className="
                    w-14
                    md:w-16
                    lg:w-20
                "
                src="/nasa-light.png"
            ></img>
            <h1
                className="
                    font-chakra
                    text-gray-900
                    font-bold
                    text-lg sm:text-xl md:text-2xl
                    ml-5
                "
            >
                NASA APIs
            </h1>
        </div>
    )
}

export default Logo;