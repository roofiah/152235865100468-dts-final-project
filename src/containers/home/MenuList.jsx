import { useEffect, useState } from 'react';
import MenuCard from '../../components/MenuCard';
import apiUrl from '../../apis/apiUrl';

const MenuList = ({ url }) => {
    const [menus, setMenus] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchMenus = async () => {
        setIsLoading(true)
        try {
            const fetchedMenus = await apiUrl.get("filter.php?c=" + url);
            setMenus(fetchedMenus.data.meals);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchMenus();
    }, []);

    return (
        <>
            {isLoading ?
                <div className='mt-4 w-full h-full text-center'>
                    Please Wait...
                </div>
                :
                <div className='grid grid-cols-5 gap-5 mx-4 p-11'>
                    {
                        menus.map(menu => (
                            <MenuCard key={menu.idMeal} menu={menu} />
                        ))
                    }
                </div>
            }</>
    );
}

export default MenuList;