import { Button, TextField } from "@mui/material";
import AuthLayout from "../../components/auth/AuthLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { sendCode } from "../../features/auth/authActions"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCookie, isTimePassed } from "../../helper";
import { toast } from "react-toastify";



const SendCode = () => {

    const schema = yup.object().shape({
        phoneNumber: yup.string().required("وارد کردن شماره همراه ضروری است").min(11, " شماره همراه باید 11 رقم باشد.")
    }).required();

    const { loading } = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = async value => {
        const expireDate = getCookie("expireDate")
        if (expireDate && isTimePassed() === false) {
            toast.info("دریافت کد هر دو دقیقه یکبار ممکن است.")
        } else {
            const data = {
                otp: value
            }
            await dispatch(sendCode(JSON.stringify(data)))
        }
    }

    useEffect(() => {
        if (loading == "succeeded") {
            navigate("/login")
        } else {
            console.log("Error")
        }
    }, [loading, navigate])

    return (
        <AuthLayout >
            <p className="mt-5">
                شماره همراه فعال خودتون را وارد کنید <br /> تا کد تایید براتون ارسال بشه
            </p>
            <form className="mt-10" onSubmit={handleSubmit(submitForm)}>
                <TextField
                    name="phoneNumber"
                    autoFocus
                    className="w-full"
                    type="number"
                    color="orange"
                    label={
                        <div className="flex items-center gap-1 text-[#6F6F9D]">
                            <span>
                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12C3.72386 12 3.5 12.2239 3.5 12.5C3.5 12.7761 3.72386 13 4 13H6C6.27614 13 6.5 12.7761 6.5 12.5C6.5 12.2239 6.27614 12 6 12H4ZM2 0C0.89543 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.89543 9.10457 0 8 0H2ZM1 2C1 1.44772 1.44772 1 2 1H8C8.55228 1 9 1.44772 9 2V14C9 14.5523 8.55228 15 8 15H2C1.44772 15 1 14.5523 1 14V2Z" fill="#6F6F9D" />
                                </svg>
                            </span>
                            <span>شماره همراه</span>
                            <span className="text-red-500">*</span>
                        </div>
                    }
                    variant="outlined"
                    InputProps={{
                        style: {
                            borderRadius: "25px"
                        }
                    }}
                    {...register("phoneNumber")}
                />
                <p className="text-red-500 text-sm text-start pr-4 mt-1">
                    {errors.phoneNumber?.message}
                </p>
                <div className="mt-5">
                    <Button
                        type="submit"
                        className="w-full"
                        color="orange"
                        variant="contained"
                        size="large"
                        style={{ borderRadius: "25px", padding: "12px" }}
                        disabled={loading == "loading"}

                    >
                        {loading == "loading" ? "بارگزاری ..." : "ارسال کد تایید"}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default SendCode;