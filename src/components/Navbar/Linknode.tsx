interface LinknodeProps {
    children: React.ReactNode
}

const Linknode: React.FC<LinknodeProps> = ({ children }) => {
    return (
        <div 
                className="
                    font-chakra
                    text-gray-900
                    text-sm md:text-base lg:text-lg
                    border-[1px]
                    rounded-xl
                    px-4
                    py-3
                    hover:shadow-md
                    transition
                    cursor-pointer
                "
            >
                {children}
            </div>
    )
}

export default Linknode;