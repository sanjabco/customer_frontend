import { useState } from 'react';
import ExclusiveDiscount from './ExclusiveDiscount';
import GeneralDiscount from './GeneralDiscount';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Tabs = () => {
    const tabsData = [
        { label: 'تخفیف های اختصاصی', content: <ExclusiveDiscount />, disable: true },
        { label: 'تخفیف های عمومی', content: <GeneralDiscount />, disable: false },
        // Add more tabs as needed
    ];
    const [activeTabIndex, setActiveTabIndex] = useState(1);

    return (
        <div className="py-5">
            <div className="grid grid-cols-2 bg-white rounded-full h-12">
                {tabsData.map((tab, index) => (
                    <button
                        key={index}
                        disabled={tab.disable}
                        className={`px-4 py-2 font-light rounded-full whitespace-no-wrap border-b-2 transition duration-300 ease-in-out ${index === activeTabIndex
                            ? 'bg-[#6F6F9D] text-white font-medium'
                            : 'border-transparent text-[#6F6F9D]'
                            }`}
                        onClick={() => setActiveTabIndex(index)}
                    >
                        <span className='text-sm '>{tab.label}</span>
                    </button>
                ))}
            </div>
            <div className='my-3 flex justify-between items-center'>
                <div className='flex gap-10'>
                    <button className='flex items-center gap-2 text-[#6F6F9D]'>
                        <span>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.08005 12.5924H0.779053C0.365053 12.5924 0.0290527 12.2564 0.0290527 11.8424C0.0290527 11.4284 0.365053 11.0924 0.779053 11.0924H7.08005C7.49405 11.0924 7.83005 11.4284 7.83005 11.8424C7.83005 12.2564 7.49405 12.5924 7.08005 12.5924Z" fill="#6F6F9D" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.1909 3.90002H9.89087C9.47687 3.90002 9.14087 3.56402 9.14087 3.15002C9.14087 2.73602 9.47687 2.40002 9.89087 2.40002H16.1909C16.6049 2.40002 16.9409 2.73602 16.9409 3.15002C16.9409 3.56402 16.6049 3.90002 16.1909 3.90002Z" fill="#6F6F9D" />
                                <mask id="mask0_1854_2934" maskUnits="userSpaceOnUse" x="0" y="0" width="7" height="7">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H6.2258V6.1916H0V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1854_2934)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.11276 1.49963C2.22376 1.49963 1.49976 2.21563 1.49976 3.09663C1.49976 3.97663 2.22376 4.69163 3.11276 4.69163C4.00276 4.69163 4.72576 3.97663 4.72576 3.09663C4.72576 2.21563 4.00276 1.49963 3.11276 1.49963ZM3.11276 6.19163C1.39676 6.19163 -0.000244141 4.80363 -0.000244141 3.09663C-0.000244141 1.38963 1.39676 -0.000366211 3.11276 -0.000366211C4.82976 -0.000366211 6.22576 1.38963 6.22576 3.09663C6.22576 4.80363 4.82976 6.19163 3.11276 6.19163Z" fill="#6F6F9D" />
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.3877 10.2076C13.4977 10.2076 12.7737 10.9236 12.7737 11.8036C12.7737 12.6846 13.4977 13.3996 14.3877 13.3996C15.2767 13.3996 15.9997 12.6846 15.9997 11.8036C15.9997 10.9236 15.2767 10.2076 14.3877 10.2076ZM14.3877 14.8996C12.6707 14.8996 11.2737 13.5106 11.2737 11.8036C11.2737 10.0966 12.6707 8.70764 14.3877 8.70764C16.1037 8.70764 17.4997 10.0966 17.4997 11.8036C17.4997 13.5106 16.1037 14.8996 14.3877 14.8996Z" fill="#6F6F9D" />
                            </svg>
                        </span>
                        <span className='text-sm font-medium'>فیلترها</span>
                    </button>
                    <button className='flex items-center gap-2 text-[#6F6F9D]'>
                        <span>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.08005 12.5924H0.779053C0.365053 12.5924 0.0290527 12.2564 0.0290527 11.8424C0.0290527 11.4284 0.365053 11.0924 0.779053 11.0924H7.08005C7.49405 11.0924 7.83005 11.4284 7.83005 11.8424C7.83005 12.2564 7.49405 12.5924 7.08005 12.5924Z" fill="#6F6F9D" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.1909 3.90002H9.89087C9.47687 3.90002 9.14087 3.56402 9.14087 3.15002C9.14087 2.73602 9.47687 2.40002 9.89087 2.40002H16.1909C16.6049 2.40002 16.9409 2.73602 16.9409 3.15002C16.9409 3.56402 16.6049 3.90002 16.1909 3.90002Z" fill="#6F6F9D" />
                                <mask id="mask0_1854_2934" maskUnits="userSpaceOnUse" x="0" y="0" width="7" height="7">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H6.2258V6.1916H0V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1854_2934)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.11276 1.49963C2.22376 1.49963 1.49976 2.21563 1.49976 3.09663C1.49976 3.97663 2.22376 4.69163 3.11276 4.69163C4.00276 4.69163 4.72576 3.97663 4.72576 3.09663C4.72576 2.21563 4.00276 1.49963 3.11276 1.49963ZM3.11276 6.19163C1.39676 6.19163 -0.000244141 4.80363 -0.000244141 3.09663C-0.000244141 1.38963 1.39676 -0.000366211 3.11276 -0.000366211C4.82976 -0.000366211 6.22576 1.38963 6.22576 3.09663C6.22576 4.80363 4.82976 6.19163 3.11276 6.19163Z" fill="#6F6F9D" />
                                </g>
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.3877 10.2076C13.4977 10.2076 12.7737 10.9236 12.7737 11.8036C12.7737 12.6846 13.4977 13.3996 14.3877 13.3996C15.2767 13.3996 15.9997 12.6846 15.9997 11.8036C15.9997 10.9236 15.2767 10.2076 14.3877 10.2076ZM14.3877 14.8996C12.6707 14.8996 11.2737 13.5106 11.2737 11.8036C11.2737 10.0966 12.6707 8.70764 14.3877 8.70764C16.1037 8.70764 17.4997 10.0966 17.4997 11.8036C17.4997 13.5106 16.1037 14.8996 14.3877 14.8996Z" fill="#6F6F9D" />
                            </svg>
                        </span>
                        <span className='text-sm font-medium'>مرتب سازی</span>
                    </button>
                </div>
                <div>
                    <FormControl fullWidth>
                        {/* <InputLabel id="demo-simple-select-label">تعداد نمایش</InputLabel> */}
                        <Select
                            className='text-red-500'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0, outline: 0 }, color: "#6F6F9D", fontSize: "14px" }}
                            // value={age}
                            // label="Age"
                            // onChange={handleChange}
                            inputProps={{ IconComponent: () => null }}
                            defaultValue={30}                        >
                            <MenuItem value={10}>5 مورد</MenuItem>
                            <MenuItem value={20}>10 مورد</MenuItem>
                            <MenuItem value={30}>20 مورد</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div >
                {tabsData[activeTabIndex].content}
            </div>
        </div>
    );
};

export default Tabs;