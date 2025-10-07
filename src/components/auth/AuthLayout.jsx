
const AuthLayout = ({ children }) => {
    return (
        <section className="h-screen">
            <div className="bg-login-bg bg-no-repeat bg-[#EDEFF1] bg-cover h-2/5 flex justify-center items-center">
                <div className="bg-[#6f6f9d2d] p-3 rounded-3xl">
                    <div className="flex items-center gap-5 bg-white rounded-3xl px-5 py-8">
                        <img className="w-14" src="../../assets/images/logo.png" alt="" />
                        <div className="text-center">
                            <h3 className="font-extrabold text-2xl">سنجاب</h3>
                            <p className="text-[#212121]">سامانه اعتبار خرید</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-10 text-center">
                <h3 className="font-black text-2xl">ورود به برنامه</h3>
                {children}
            </div>
        </section>
    );
};

export default AuthLayout;