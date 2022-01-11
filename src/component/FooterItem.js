const FooterItem = ({label, direction}) => {
    return (
        <div className="flex group">
            <a href={direction} className="p-3 text-dark-400 hover:text-yellow-500">
                <span className="flex flex-col items-center">
                    <i className="mdi mdi-compass-outline mdi-24px mx-1 text-gray-500 group-hover:text-gray-700transition-color duration-200"/>
                    <span className="text-md mb-2 transition-all duration-200">{label}</span>
                    <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500 transition-all duration-150 delay-100"/></span>
            </a>
        </div>
    )
}

export default FooterItem