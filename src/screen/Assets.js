import Header from "../component/Header";
import {stocks, bonds, realEstate} from '../database/data'
import CardWithDescription from "../component/CardWithDescription";

const Assets = () => {
    return (
        <div
            className="min-h-screen flex flex-col mx-auto bg-gray-200 opacity-100 font-poppinss bg-no-repeat bg-cover bg-center">
            <Header header="Buy-Sell Assets"/>
            <div className="pt-12 px-4">
                <div className="border-b border-grey-light">
                    <div className="rounded-lg overflow-hidden">
                        <div className="px-4">
                            <p className="text-xl font-semibold text-black">Assets</p>
                            <div className="sm:flex sm:items-center">
                                {stocks.map((item, index) => (
                                    <CardWithDescription description={null} name={`${item.name} (${item.ticker})`}
                                                         buttonText="Buy / Sell"
                                                         successMessageText="Order completed"
                                                         additionalText={`Price: ${item.price} euro`}/>
                                ))}
                            </div>
                        </div>
                        <div className="pt-4 px-4">
                            <p className="text-xl font-semibold text-black">Real Estate</p>
                            <div className="sm:flex sm:items-center">
                                {realEstate.map((item, index) => (
                                    <CardWithDescription description={null} name={`${item.name}`}
                                                         buttonText="Buy / Sell"
                                                         successMessageText="Order completed"
                                                         additionalText={`Price: ${item.price} euro`}/>
                                ))}
                            </div>
                        </div>
                        <div className="pt-4 px-4 pb-8">
                            <p className="text-xl font-semibold text-black">Bonds</p>
                            <div className="sm:flex sm:items-center">
                                {bonds.map((item, index) => (
                                    <CardWithDescription description={null} name={`${item.name} (${item.ticker})`}
                                                         buttonText="Buy / Sell"
                                                         successMessageText="Order completed"
                                                         additionalText={`Price: ${item.price} euro`}/>
                                ))}
                            </div>
                        </div>
                        <div className="pb-8">

                        </div> <div className="pb-8">

                        </div> <div className="pb-8">

                        </div> <div className="pb-8">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assets