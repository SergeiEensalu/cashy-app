import React from "react";
import Card from "../component/Card";
import Header from "../component/Header";
import HistoryCardItem from "../component/HistoryCardItem";

const Account = () => {
    return (
        <div
            className="min-h-screen flex flex-col mx-auto bg-gray-200 opacity-100 font-poppinss bg-no-repeat bg-cover bg-center">
            <Header header="My Account"/>
            <div className="flex items-center px-4 pt-12 justify-between">
                <div className="w-24 h-24 bg-blue-600 flex items-center rounded-full">
                    <img alt="" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                </div>
                <div className="w-9/12 flex items-center">
                    <div className="w-10/12 flex flex-col leading-none pl-4">
                        <p className="text-2xl font-bold">Sergei Eensalu</p>
                        <p className="text-sm pt-1 font-light text-gray-700">Software Engineer</p>
                    </div>
                    <div className="w-2/12">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-700" fill="currentColor"
                                 viewBox="0 0 24 24" width="18" height="18">
                                <path fill="none" d="M0 0h24v24H0z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 px-4 flex-col">
                <p className="text-xl font-semibold text-black">My investment portfolio</p>
                <Card label="Stocks" data="600 ¢" backgroundColor="bg-gray-800"/>
                <Card label="Real Estate" data="85k ¢" backgroundColor="bg-blue-600"/>
                <Card label="Bonds" data="700 ¢" backgroundColor="bg-blue-600"/>
            </div>
            <div className="pt-4 px-4 flex-col">
                <p className="text-xl font-semibold text-black">My Balance</p>
                <HistoryCardItem
                    description="32 000 ¢"
                    date="Loan"/>
                <HistoryCardItem
                    description="3400 $"
                    date="Dollars"/>
                <HistoryCardItem
                    description="1493 ¢"
                    date="Euros"/>
            </div>
        </div>
    )
}

export default Account
