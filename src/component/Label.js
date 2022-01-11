const Label = ({ svg, data }) => {
    return (
        <div className="w-full flex flex-col w-full max-w-md mx-auto items-center">
            <div className="px-5 pt-3 bg-white rounded-md">
                <div className="flex flex-row space-x-3">
                            <span className="flex flex-col items-center">
                                <div className="mb-4">
                                    {svg}
                                    <h2 className="text-md font-bold">{data}</h2>
                                </div>
							</span>
                </div>
            </div>
        </div>
    )
}

export default Label