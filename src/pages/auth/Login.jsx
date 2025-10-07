// import React from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, isTimePassed } from '../../helper';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { login, sendCode } from '../../features/auth/authActions';
import { MuiOtpInput } from 'mui-one-time-password-input';
import Countdown from '../../components/auth/CountDown';
import { toast } from 'react-toastify';

const Login = () => {

    const { phoneNumber } = useSelector(
        (state) => state.auth
    )

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            code: ""
        }
    });

    const resendCode = async () => {
        if (!isTimePassed()) {
            toast.info("دریافت کد هر دو دقیقه یکبار ممکن است.")
        } else {
            const data = {
                otp: {
                    phoneNumber
                }
            }
            await dispatch(sendCode(JSON.stringify(data)))
        }
    }

    const matchIsNumeric = text => {
        const isNumber = typeof text === 'number'
        const isString = typeof text === "string"
        return (isNumber || (isString && text !== '')) && !isNaN(Number(text))
    }

    const validateChar = value => {
        return matchIsNumeric(value)
    }

    const submitForm = async data => {
        data.phoneNumber = phoneNumber;
        console.log(data)
        try {
            await dispatch(login(data))
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (!phoneNumber) {
            navigate("/send-code")
        }
    }, [])


    return (
        <AuthLayout >
            <p className="mt-5 text-sm">
                کد ارسال شده به شماره {phoneNumber} را وارد نمایید.
            </p>
            <div className='flex justify-between my-4'>
                <Button startIcon={
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5958 1.69368C13.0479 2.60408 14.1557 4.01449 14.6647 5.61564C15.0419 6.78327 15.0988 8.04339 14.8413 9.24281C14.5329 10.6937 13.7425 12.0434 12.6168 13.0521C11.7425 13.8411 10.6737 14.4249 9.52096 14.7341C8.93413 14.8931 8.32934 14.9769 7.72156 15H7.27844C6.10479 14.9625 4.93713 14.6648 3.90719 14.1185C3.0479 13.6648 2.28144 13.0492 1.66766 12.3122C1.37425 12.0058 1.38922 11.4769 1.71257 11.1966C1.99401 10.9191 2.49102 10.896 2.80539 11.1388C2.94611 11.2457 3.03892 11.396 3.16168 11.5203C3.9521 12.3758 5.01796 12.9885 6.17365 13.2457C7.34731 13.5116 8.60479 13.4162 9.71856 12.9711C10.9401 12.4885 11.976 11.5925 12.6108 10.4769C13.0299 9.7457 13.2754 8.92489 13.3234 8.08963C13.3892 7.04917 13.1467 5.99137 12.6257 5.07518C12.1796 4.28038 11.5269 3.59252 10.7515 3.08674C9.95808 2.5694 9.02695 2.2457 8.07485 2.15611C7.07784 2.05784 6.05389 2.2168 5.13772 2.60986C3.87126 3.15033 2.82036 4.13877 2.23054 5.34686C3.13473 5.34686 4.03892 5.34686 4.94611 5.34686C5.07784 5.34397 5.20958 5.36131 5.32934 5.41044C5.60479 5.52027 5.80539 5.78616 5.82934 6.07229C5.86826 6.40177 5.67066 6.73703 5.35928 6.87865C5.22455 6.94223 5.06886 6.96246 4.91916 6.95668C3.55689 6.95668 2.19461 6.95668 0.832335 6.95668C0.595808 6.95668 0.359281 6.85553 0.203593 6.68212C0.0868263 6.55206 0.0209581 6.38732 0 6.2168V1.26015C0.0239521 1.01738 0.158683 0.786166 0.371257 0.656109C0.646707 0.474028 1.03892 0.479808 1.31138 0.667669C1.52695 0.809288 1.66168 1.05206 1.66467 1.30351C1.66766 1.93934 1.66467 2.57229 1.66467 3.20813C2.58084 2.11565 3.83234 1.28328 5.22455 0.861311C6.35629 0.51449 7.57485 0.433565 8.7485 0.621426C9.76347 0.783276 10.7395 1.15033 11.5958 1.69368Z" fill="#FF5644" />
                    </svg>
                }
                    color='orange'
                    onClick={() => { resendCode() }}
                >
                    ارسال مجدد کد تایید
                </Button>
                <div className='flex items-center gap-1 py-1 px-2.5 bg-[#EDEFF1] rounded-full'>
                    <div className='font-medium'>
                        <Countdown storedTime={getCookie("expireDate")} />
                    </div>
                    <span className='pb-0.5'>
                        <svg width="17" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60882 0H9.33466C9.63393 0.246146 9.77914 0.759687 9.38247 0.991667C8.94508 1.11385 8.48112 1.05719 8.03132 1.07135C8.03132 1.77615 8.03132 2.48271 8.0331 3.18927C9.35945 3.31677 10.6344 3.80021 11.7093 4.58823C11.8829 4.40406 12.0547 4.2199 12.2247 4.03396C12.3167 3.73823 12.2866 3.29552 12.6567 3.19281C13.211 3.12906 13.6201 3.67271 13.8662 4.10302C14.0291 4.63958 13.4253 4.79719 13.0286 4.83792C12.8586 4.99375 12.6904 5.15135 12.5222 5.30896C13.3598 6.26875 14.0203 7.4074 14.2629 8.67C14.7286 10.8304 14.0858 13.198 12.5611 14.8024C11.3764 16.0986 9.67997 16.8778 7.93393 17H7.06445C5.02091 16.8672 3.06414 15.7958 1.87945 14.1224C0.275074 11.9354 0.16174 8.78865 1.59966 6.4901C2.72591 4.60771 4.78893 3.37344 6.96705 3.18927C6.96882 2.48271 6.96882 1.77615 6.96882 1.07135C6.5208 1.05719 6.05862 1.11208 5.62122 0.993437C5.20862 0.765 5.42643 0.304583 5.60882 0ZM6.34372 4.36865C5.02091 4.64135 3.79726 5.38156 2.95434 6.43875C1.39247 8.31583 1.22778 11.1864 2.57716 13.2264C3.9832 15.5196 7.08393 16.5715 9.58257 15.5444C12.3238 14.5598 13.9866 11.3245 13.1225 8.52833C12.3823 5.66667 9.23903 3.70635 6.34372 4.36865Z" fill="#6F6F9D" />
                            <path d="M4.42416 7.34185C4.62603 7.08154 5.07051 7.09216 5.26353 7.35779C6.0728 8.20247 6.82895 9.09852 7.62937 9.95206C7.77635 10.1628 8.04905 10.3416 8.03666 10.6267C8.08093 11.0801 7.4151 11.3723 7.12999 10.9986C6.28708 10.1309 5.50968 9.19945 4.68093 8.31758C4.43124 8.06435 4.12489 7.68008 4.42416 7.34185Z" fill="#6F6F9D" />
                        </svg>
                    </span>
                </div>
            </div>
            <form onSubmit={handleSubmit(submitForm)}>
                <div dir='ltr' className='flex gap-5'>
                    <Controller
                        name="code"
                        control={control}
                        rules={{ validate: (value) => value.length === 5 }}
                        render={({ field, fieldState }) => (
                            <Box>
                                <MuiOtpInput
                                    {...field}
                                    length={5}
                                    autoFocus
                                    validateChar={validateChar}
                                />
                                {fieldState.invalid ? (
                                    <p className="text-red-500 text-sm text-end pr-4 mt-2">
                                        .فیلد کد نباید خالی باشد
                                    </p>
                                ) : null}
                            </Box>
                        )}
                    />
                </div>
                <div className="mt-5">
                    <Button
                        type='submit'
                        className="w-full"
                        color="orange"
                        variant="contained"
                        size="large"
                        style={{ borderRadius: "25px", padding: "12px" }}
                    >
                        ورود به برنامه
                    </Button>
                </div>
            </form>
        </AuthLayout >
    );
};

export default Login;