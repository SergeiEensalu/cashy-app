const Header = ({ header }) => {
    return (
        <div className="flex justify-between pt-4 items-center bg-gray-800 p-3">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </div>
            <div>
                <p className="font-semibold text-white text-2xl">{header}</p>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header