import { Button, TextField } from '@mui/material';
import Layout from '../layouts/Layout';
import * as yup from "yup";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfile, setProfile } from '../../features/profile/profileActions';

const schema = yup.object().shape({
    phoneNumber: yup.string().required("وارد کردن شماره همراه ضروری است").min(11, " شماره همراه باید 11 رقم باشد."),
    firstName: yup.string().required("وارد کردن نام ضروری است"),
    lastName: yup.string().required("وارد کردن نام خانوادگی ضروری است")
}).required();

const Profile = () => {


    const { profile, loading } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        dispatch(getProfile())
    }, [])
    console.log(profile)


    useEffect(() => {
        if (loading === false) {
            reset(profile);
        }
    }, [loading, profile, reset]);

    const navigate = useNavigate();





    const onSubmit = formData => {
        const data = {
            customerDto: formData
        }
        dispatch(setProfile(data))
    }


    return (
        <Layout>
            <div className="py-5 px-5">
                <h1 className="text-[#212121] text-xl font-extrabold">اطلاعات کاربری</h1>
                <form className="mt-10 grid gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="w-full"
                                    type="text"
                                    color="orange"
                                    label={
                                        <div className="flex items-center gap-1 text-[#6F6F9D]">
                                            <span>نام</span>
                                        </div>
                                    }
                                    variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: "25px"
                                        }
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                        <p className="text-red-500 text-sm text-start pr-4 mt-1">
                            {errors.firstName?.message}
                        </p>
                    </div>
                    <div>
                        <Controller
                            name="lastName"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="w-full"
                                    type="text"
                                    color="orange"
                                    label={
                                        <div className="flex items-center gap-1 text-[#6F6F9D]">
                                            <span>نام خانواگی</span>
                                        </div>
                                    }
                                    variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: "25px"
                                        }
                                    }}
                                    InputLabelProps={{ shrink: true }}

                                />
                            )}
                        />

                        <p className="text-red-500 text-sm text-start pr-4 mt-1">
                            {errors.lastName?.message}
                        </p>
                    </div>
                    {/* <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <p className='text-[#6F6F9D]'>جنسیت</p>
                            </InputLabel>
                            <Select
                                color="orange"
                                className="w-full"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="جنسیت"
                                style={{ borderRadius: "25px" }}
                            // value={age}
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>مرد</MenuItem>
                                <MenuItem value={20}>زن</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}
                    {/* <div>
                        <TextField
                            name="phoneNumber"
                            className="w-full"
                            type="date"
                            color="orange"
                            label={
                                <div className="flex items-center gap-1 text-[#6F6F9D]">
                                    <span>تاریخ تولد</span>
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
                    </div> */}
                    <div>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="w-full"
                                    type="text"
                                    color="orange"
                                    label={
                                        <div className="flex items-center gap-1 text-[#6F6F9D]">
                                            <span>شماره همراه</span>
                                        </div>
                                    }
                                    variant="outlined"
                                    InputProps={{
                                        style: {
                                            borderRadius: "25px"
                                        }
                                    }}
                                    InputLabelProps={{ shrink: true }}

                                />
                            )}
                        />
                        <p className="text-red-500 text-sm text-start pr-4 mt-1">
                            {errors.phoneNumber?.message}
                        </p>
                    </div>
                    {/* <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <p className='text-[#6F6F9D]'>استان</p>
                            </InputLabel>
                            <Select
                                color="orange"
                                className="w-full"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="جنسیت"
                                style={{ borderRadius: "25px" }}
                            // value={age}
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>قزوین</MenuItem>
                                <MenuItem value={20}>تهران</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <p className='text-[#6F6F9D]'>شهر</p>
                            </InputLabel>
                            <Select
                                color="orange"
                                className="w-full"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="جنسیت"
                                style={{ borderRadius: "25px" }}
                            // value={age}
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>قزوین</MenuItem>
                                <MenuItem value={20}>زن</MenuItem>
                            </Select>
                        </FormControl>
                    </div> */}
                    <div className="mt-5 flex gap-5">
                        <Button
                            type="submit"
                            className="w-full"
                            color="orange"
                            variant="contained"
                            size="large"
                            style={{ borderRadius: "25px", padding: "12px", fontWeight: "700px" }}
                        // disabled={loading}

                        >
                            {/* {loading ? "بارگزاری ..." : "ارسال کد تایید"} */}
                            تایید و ثبت اطلاعات
                        </Button>
                        <Button
                            type="button"
                            className="w-full"
                            color="orange"
                            variant="outlined"
                            size="large"
                            style={{ borderRadius: "25px", padding: "12px", fontWeight: "700px" }}
                            // disabled={loading}
                            onClick={() => navigate("/account")}

                        >
                            {/* {loading ? "بارگزاری ..." : "ارسال کد تایید"} */}
                            بازگشت
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Profile;