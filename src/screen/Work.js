import Header from "../component/Header";
import {works} from '../database/data'
import CardWithDescription from "../component/CardWithDescription";

const Work = () => {
    return (
        <div
            className="min-h-screen flex flex-col mx-auto bg-gray-200 opacity-100 font-poppinss bg-no-repeat bg-cover bg-center">
            <Header header="Work suggestions"/>
            <div className="pt-12 px-4">
                <div className="border-b border-grey-light">
                    <div className="rounded-lg overflow-hidden">
                        <div className="sm:flex sm:items-center">
                            {works.map((item, index) => (
                                <CardWithDescription description={item.description} name={item.name} buttonText='Select'
                                                     successMessageText="'Your work has been saved'"
                                                     additionalText={`Payment per hour: ${item.paymentPerHour} euro`}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work