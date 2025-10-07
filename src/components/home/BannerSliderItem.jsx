import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BannerSliderItem = () => {

    const navigate = useNavigate();

    return (
        <div className='flex gap-5 bg-[#F1DBE8] px-10 rounded-3xl py-5'>
            <div>
                <img src="../../../assets/images/discount.png" alt="" />
            </div>
            <div>
                <h3 className='font-black tracking-[-.5px] mb-3'>به روزترین تخفیف ها <br /> از تمامی فروشگاه ها</h3>
                <Button variant='contained' endIcon={
                    <svg width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.961552 4.11738C0.397449 3.79169 0.39745 2.97748 0.961552 2.6518L4.76925 0.453424C5.33335 0.127739 6.03848 0.534845 6.03848 1.18621L6.03848 5.58296C6.03848 6.23433 5.33335 6.64143 4.76924 6.31575L0.961552 4.11738Z" fill="#E24C65" />
                    </svg>
                }
                    color='white'
                    style={{
                        borderRadius: "25px",
                        padding: "3px 20px",
                        letterSpacing: -1,
                        fontWeight: "bold"
                    }}
                    onClick={() => navigate('/discount')}
                >
                    مشاهده
                </Button>
            </div>
        </div>
    );
};

export default BannerSliderItem;