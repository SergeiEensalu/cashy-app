import Header from "../component/Header";
import HistoryCardItem from "../component/HistoryCardItem";
import {assetsHistory, workHistory} from '../database/data'

const History = ({contact}) => {
    return (
        <div
            className="min-h-screen flex flex-col mx-auto bg-gray-200 opacity-100 font-poppinss bg-no-repeat bg-cover bg-center">
            <Header header="My History"/>
            <div className="pt-12 px-4">
                <p className="text-xl font-semibold text-black">Assets history</p>
                <div className="border-b border-grey-light">
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <div className="sm:flex sm:items-center">
                            {assetsHistory.map((history, index) => (
                                <HistoryCardItem
                                    description={history.name + " (" + history.ticker + ", " + history.price + ") "}
                                    price={history.price} date={history.date}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-12 px-4">
                <p className="text-xl font-semibold text-black">Work history</p>
                <div className="border-b border-grey-light">
                    <div className="shadow-md rounded-lg overflow-hidden">
                        <div className="sm:flex sm:items-center">
                            {workHistory.map((history, index) => (
                                <HistoryCardItem
                                    description={history.name + " (" + (history.ticker ? (history.ticker + ", ") : "") + (history.price ?? "") + ") "}
                                    date={history.date}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History