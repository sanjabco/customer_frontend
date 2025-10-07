import { Link } from "react-router-dom";

const Menu = () => {

    const data = [
        {
            id: 1,
            title: "اطلاعات کابری",
            icon: "Profile.svg",
            to: "profile",
            active: true
        },
        {
            id: 2,
            title: "معرفی فروشگاه",
            icon: "Buy.svg",
            to: "shop-request",
            active: true
        },
        {
            id: 3,
            title: "پشتیبانی",
            icon: "Heart.svg",
            to: "support",
            active: false
        },
        {
            id: 4,
            title: "درباره ما",
            icon: "InfoSquare.svg",
            to: "about",
            active: true
        },
        {
            id: 5,
            title: "تماس با ما",
            icon: "Calling.svg",
            to: "contact",
            active: true
        },
        {
            id: 6,
            title: "دعوت از دوستان",
            icon: "TicketStar.svg",
            to: "invite",
            active: false
        },
    ]


    return (
        <ul>
            {
                data.map(item => {
                    return (
                        <li key={item.id} className={`py-5 border-b ${!item.active && "pointer-events-none opacity-80"}`}>
                            <Link to={`/account/${item.to}`} className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <img src={`../../../assets/images/account/${item.icon}`} alt="" />
                                    <p>{item.title}</p>
                                </div>
                                <img src="../../../assets/images/account/Shape.svg" alt="" />
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default Menu;