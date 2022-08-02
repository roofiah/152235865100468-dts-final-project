import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuCard from '../../components/MenuCard';
import apiUrl from '../../apis/apiUrl';

const MenuList = () => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const fetchedMenus = await apiUrl.get("filter.php?c=Seafood");
                setMenus(fetchedMenus.data.meals);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMenus();
    }, []);
    return (
        <div className='grid grid-cols-4 gap-5 mx-4 p-11'>
            {
                menus.map(menu => (
                    <MenuCard key={menu.idMeal} menu={menu} />

                ))
            }
        </div>
    );
}

export default MenuList;