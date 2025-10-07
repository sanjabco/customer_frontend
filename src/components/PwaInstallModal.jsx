import { useEffect, useState } from 'react';

const PwaInstallModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handler = (event) => {
            event.preventDefault();
            setDeferredPrompt(event);
            setTimeout(() => {
                setShowModal(true);
            }, 5000); // 10 seconds after entering
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => {
            window.removeEventListener('beforeinstallprompt', handler);
        };
    }, []);

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            setShowModal(false);
        }
    };

    const handleContinue = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div className="z-[100] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white shadow-lg rounded-lg p-6 transition-all transform -translate-y-full animate-slide-down">
                        <h2 className="text-xl font-bold mb-4">اپلیکشین سنجاب</h2>
                        <p className="mb-4">برای نصب اپلیکشین سنجاب روی دکمه نصب کلیک کنید.</p>
                        <div className="flex justify-between">
                            <button onClick={handleInstall} className="bg-blue-500 text-white px-4 py-2 rounded">
                                نصب
                            </button>
                            <button onClick={handleContinue} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                                ادامه در وبسایت
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PwaInstallModal;