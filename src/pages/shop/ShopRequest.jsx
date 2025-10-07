import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Layout from '../layouts/Layout';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const ShopRequest = () => {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        phoneNumber: yup.string().required("وارد کردن شماره همراه ضروری است").min(11, " شماره همراه باید 11 رقم باشد.")
    }).required();



    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = value => {
        console.log('salam')
    }


    return (
        <Layout>
            <div className="py-5 px-5">
                <h1 className="text-[#212121] text-xl font-extrabold">معرفی فروشگاه</h1>
                <form className="mt-10 grid gap-5" onSubmit={handleSubmit(submitForm)}>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                <p className='text-[#6F6F9D]'>دسته بندی</p>
                            </InputLabel>
                            <Select
                                color="orange"
                                className="w-full"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="دسته بندی"
                                style={{ borderRadius: "25px" }}
                            // value={age}
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>پوشاک</MenuItem>
                                <MenuItem value={20}>رستوران</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            name="phoneNumber"
                            className="w-full"
                            type="number"
                            color="orange"
                            label={
                                <div className="flex items-center gap-1 text-[#6F6F9D]">
                                    <span>نام مجموعه</span>
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
                    </div>
                    <div>
                        <TextField
                            name="phoneNumber"
                            className="w-full"
                            type="number"
                            color="orange"
                            label={
                                <div className="flex items-center gap-1 text-[#6F6F9D]">
                                    <span>شماره تماس</span>
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
                    </div>
                    <div>
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
                                <MenuItem value={20}>آبیک</MenuItem>
                                <MenuItem value={40}>ورامین</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField
                            name="phoneNumber"
                            className="w-full"
                            type="text"
                            color="orange"
                            label={
                                <div className="flex items-center gap-1 text-[#6F6F9D]">
                                    <span>آدرس</span>
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
                    </div>
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
                            تایید و ثبت
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

export default ShopRequest;