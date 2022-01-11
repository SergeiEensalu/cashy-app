const HistoryCardItem = ({ description, date }) => {
    return (
        <div className="flex cursor-pointer my-1 pt-3 hover:bg-blue-lightest bg-white items-center">
            <div className="w-8 h-10 text-center py-1">
                <p className="text-3xl p-0 text-grey-dark">&bull;</p>
            </div>
            <div className="w-10/12 h-10 py-3 px-1">
                <p className="hover:text-blue-dark">{description}</p>
            </div>
            <div className="w-3/12 h-10 text-right p-3">
                <p className="text-sm text-grey-dark">{date}</p>
            </div>
        </div>
    )
}

export default HistoryCardItem