import { Button, TextField } from '@mui/material';
import Layout from '../layouts/Layout';
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <Layout>
            <div className="py-5 px-5">
                <h1 className="text-[#212121] text-xl font-extrabold">تماس با ما</h1>
                <div className="mt-5 grid gap-5">
                    <a href='tel:09925531470' className='flex gap-4 items-center'>
                        <div className='p-3 bg-[#EDEFF1] rounded-full'>
                            <img className='w-6 h-6' src="../../../assets/images/contact/call.svg" alt="" />
                        </div>
                        <div>
                            <p className='text-[#6F6F9D] text-sm font-light'>شماره تماس</p>
                            <p className='font-bold'>09925531470</p>
                        </div>
                    </a>
                    <div className='flex gap-4 items-center'>
                        <div className='p-3 bg-[#EDEFF1] rounded-full'>
                            <img className='w-6 h-6' src="../../../assets/images/contact/email.svg" alt="" />
                        </div>
                        <div>
                            <p className='text-[#6F6F9D] text-sm font-light'>پست الکترونیک</p>
                            <p className='font-bold'>info@Sanjab.app</p>
                        </div>
                    </div>
                    <a href='https://wa.me/+989108390446' className='flex gap-4 items-center'>
                        <div className='p-3 bg-[#EDEFF1] rounded-full'>
                            <FaWhatsapp className='w-6 h-6 text-[#7373A0]' />
                        </div>
                        <div>
                            <p className='text-[#6F6F9D] text-sm font-light'>واتس اپ</p>
                            <a className='font-bold'>09108390446</a>
                        </div>
                    </a>
                    <a href='https://t.me/+989108390446' className='flex gap-4 items-center'>
                        <div className='p-3 bg-[#EDEFF1] rounded-full'>
                            {/* <img className='w-6 h-6' src="../../../assets/images/contact/call.svg" alt="" />
                             */}
                            <FaTelegramPlane className='w-6 h-6 text-[#7373A0]' />
                        </div>
                        <div>
                            <p className='text-[#6F6F9D] text-sm font-light'>تلگرام</p>
                            <p className='font-bold'>09108390446</p>
                        </div>
                    </a>
                    {/* <div className='flex gap-4 items-center'>
                        <div className='p-3 bg-[#EDEFF1] rounded-full'>
                            <img className='w-6 h-6' src="../../../assets/images/contact/location.svg" alt="" />
                        </div>
                        <div>
                            <p className='text-[#6F6F9D] text-sm font-light'>آدرس</p>
                            <p className='font-bold'>بلوار شماره 1، خیابان شماره 2، کوچه3، پ4</p>
                        </div>
                    </div> */}
                </div>
                <div className='mt-7 px-5 hidden'>
                    <h1 className="text-[#212121] text-xl font-bold">فرم تماس با ما</h1>
                    <div>
                        <form className="mt-5 grid gap-5"
                        // onSubmit={handleSubmit(submitForm)}
                        >
                            <div>
                                <TextField
                                    name="phoneNumber"
                                    className="w-full"
                                    type="text"
                                    placeholder='نام و نام خانوادگی'
                                    variant="standard"
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                            background: "#EDEFF1",
                                            height: "50px",
                                            paddingRight: "20px",
                                            fontSize: "14px"
                                        },
                                        disableUnderline: true
                                    }}
                                // {...register("phoneNumber")}
                                />
                                <p className="text-red-500 text-sm text-start pr-4 mt-1">
                                    {/* {errors.phoneNumber?.message} */}
                                </p>
                            </div>
                            <div>
                                <TextField
                                    className='w-full'
                                    multiline
                                    rows={7}
                                    placeholder='متن پیام خود را بنویسید'
                                    variant="standard"
                                    InputProps={{
                                        style: {
                                            borderRadius: "15px",
                                            background: "#EDEFF1",
                                            paddingRight: "20px",
                                            fontSize: "14px"
                                        },
                                        disableUnderline: true
                                    }}
                                />
                            </div>
                            <div className="mt-5 flex gap-5">
                                <Button
                                    type="submit"
                                    className="w-full"
                                    color="orange"
                                    variant="contained"
                                    size="large"
                                    style={{ borderRadius: "10px", padding: "12px", fontWeight: "700px" }}
                                // disabled={loading}
                                >
                                    ارسال پیام
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;