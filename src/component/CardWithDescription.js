import Swal from "sweetalert2";
import {
    useNavigate
} from 'react-router-dom';

const CardWithDescription = ({name, description, additionalText, buttonText, successMessageText}) => {
    const navigate = useNavigate();

    function select() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: successMessageText,
            showConfirmButton: false,
            timer: 1500
        })

        navigate('/account');
    }

    return (
        <div className="flex justify-center items-center">
            <div className="w-full bg-white border-2 p-6 rounded-md tracking-wide shadow-lg">
                <div id="header" className="flex items-center mb-4">
                    <img alt="avatar" className="w-20 rounded-full border-2 border-gray-300"
                         src="https://picsum.photos/seed/picsum/200"/>
                    <div id="header-text" className="leading-5 ml-6 sm">
                        <h4 id="name" className="text-xl font-semibold">{name}</h4>
                        <h5 id="job" className="font-semibold text-blue-600">{additionalText} </h5>
                    </div>
                </div>
                { description &&
                    <div id="quote">
                        <q className="italic text-gray-600">{description}</q>
                    </div>
                }
                <div className="flex justify-end">
                    <button
                        className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg" onClick={select}>
                        {buttonText}
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="inline ml-2 w-6 stroke-current text-white stroke-2" viewBox="0 0 24 24" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardWithDescription
