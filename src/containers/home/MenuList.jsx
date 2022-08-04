import { useEffect, useState } from 'react';
import MenuCard from '../../components/MenuCard';
import apiUrl from '../../apis/apiUrl';

const MenuList = ({ url }) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const fetchedMenus = await apiUrl.get("filter.php?c=" + url);
                setMenus(fetchedMenus.data.meals);
                console.log("ini data detail category" + JSON.stringify(fetchedMenus.data))
            } catch (error) {
                console.log(error);
            }
        }
        fetchMenus();
    }, []);
    return (
        <div className='grid grid-cols-5 gap-5 mx-4 p-11'>
            {
                menus.map(menu => (
                    <MenuCard key={menu.idMeal} menu={menu} />
                ))
            }
        </div>
    );
}

export default MenuList;