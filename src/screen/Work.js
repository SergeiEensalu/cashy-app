import Header from "../component/Header";
import HistoryCardItem from "../component/HistoryCardItem";
import {assetsHistory, workHistory, works} from '../database/data'
import CardWithDescription from "../component/CardWithDescription";

const Suggestion = ({type}) => {

    let header = ''
    let items = []
    if (type === 'WORK') {
        header = "Work suggestions"
        items = works
    } else {
        header = "Broker"
    }
    return (
        <div
            className="min-h-screen flex flex-col mx-auto bg-gray-200 opacity-100 font-poppinss bg-no-repeat bg-cover bg-center">
            <Header header={header}/>
            <div className="pt-12 px-4">
                <div className="border-b border-grey-light">
                    <div className="rounded-lg overflow-hidden">
                        <div className="sm:flex sm:items-center">
                            {items.map((item, index) => (
                                <CardWithDescription description={item.description} name={item.name} paymentPerHour={item.paymentPerHour}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suggestion