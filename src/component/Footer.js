import FooterItem from "./FooterItem";

const Footer = () => {
    return (
        <div className="w-full flex flex-col fixed bottom-0 px-7 py-10 mx-auto items-center">
            <div className="px-5 pt-3 bg-white shadow-lg rounded-2xl">
                <div className="flex flex-row space-x-3">

                    <FooterItem label="Works" direction="works"/>
                    <FooterItem label="Assets" direction="assets"/>
                    <FooterItem label="Account" direction="account"/>
                    <FooterItem label="History" direction="history"/>
                </div>
            </div>
        </div>
    )
}

export default Footer