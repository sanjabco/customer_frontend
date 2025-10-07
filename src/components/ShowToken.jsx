import { useEffect, useState } from 'react';
import { getCookie } from '../helper';

const ShowToken = () => {

    const [text, setText] = useState('');

    useEffect(() => {
        // Retrieve the value from local storage
        const storedText = getCookie('token');
        if (storedText) {
            setText(storedText);
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="p-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="mb-4">Here is your copyable text:</p>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={text}
                        readOnly
                        className="flex-grow p-2 border border-gray-300 rounded-l-lg"
                    />
                    <button
                        onClick={handleCopy}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ShowToken;