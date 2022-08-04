import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavContent = () => {

    return (
        <nav>
            <div className='justify-between flex flex-row'>
                <div>
                    <ul className="md:flex hidden uppercase items-center gap-8 text-sm ml-4 p-4">
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>
                                <div className='px-3 inline-block hover:text-gray-600 flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#F53E3F" class="bi bi-house-door-fill" viewBox="0 0 16 16"> <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" /> </svg>
                                    <div className='text-nav ml-1.5'>Home</div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/daily-menu" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>
                                <div className='px-3 inline-block hover:text-gray-600 flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20"><path d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z" fill="#F53E3F"></path></svg>
                                    <div className='ml-1.5'> Daily Menu</div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dessert" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>
                                <div className='px-3 inline-block hover:text-gray-600 flex flex-row'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512"><title>ionicons-v5-l</title><path d="M384,352H184.36l-41,35-41-35H16v24c0,30.59,21.13,55.51,47.26,56,2.43,15.12,8.31,28.78,17.16,39.47C93.51,487.28,112.54,496,134,496H266c21.46,0,40.49-8.72,53.58-24.55,8.85-10.69,14.73-24.35,17.16-39.47,13.88-.25,26.35-7.4,35-18.63A61.26,61.26,0,0,0,384,376Z" fill="#F53E3F" /><path d="M105,320h0l38.33,28.19L182,320H384v-8a40.07,40.07,0,0,0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67,184.56,267.85,176,236,176H164c-68.22,0-114.43,38.77-116,96.8A40.07,40.07,0,0,0,16,312v8h89Z" fill="#F53E3F" /><path d="M463.08,96H388.49l8.92-35.66L442,45,432,16,370,36,355.51,96H208v32h18.75l1.86,16H236c39,0,73.66,10.9,100.12,31.52A121.9,121.9,0,0,1,371,218.07a124.16,124.16,0,0,1,10.73,32.65,72,72,0,0,1,27.89,90.9A96,96,0,0,1,416,376c0,22.34-7.6,43.63-21.4,59.95a80,80,0,0,1-31.83,22.95,109.21,109.21,0,0,1-18.53,33c-1.18,1.42-2.39,2.81-3.63,4.15H416c16,0,23-8,25-23l36.4-345H496V96Z" fill="#F53E3F" /></svg>
                                    <div className='ml-1.5'>Dessert</div>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/vegetarian" className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}>
                                <div className='px-3 inline-block hover:text-gray-600 flex flex-row'>
                                    <svg version="1.1" id="restaurant-sushi" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"> <path id="path4999" d="M5.5,3C5.2239,3,5,3.2239,5,3.5H2.75C1.2265,3.5,0,4.7265,0,6.25c0,0.8274,0.3687,1.5592,0.9434,2.0625&#xA;&#x9;C0.3803,8.6675,0,9.2893,0,10c0,1.0994,0.9006,2,2,2h3.5h2H10c1.0994,0,2-0.9006,2-2c0-0.4883-0.1863-0.9294-0.4805-1.2773&#xA;&#x9;l2.1777,0.9629c0.3716,0.1831,0.8213,0.0303,1.0044-0.3413c0.1831-0.3716,0.0303-0.8213-0.3413-1.0044&#xA;&#x9;c-0.0188-0.0093-0.038-0.0178-0.0576-0.0254l-1.8105-0.8027l1.6309-0.2715c0.4099-0.0599,0.6936-0.4408,0.6337-0.8507&#xA;&#x9;c-0.0544-0.3724-0.3765-0.6469-0.7528-0.6415c-0.0426,0.0003-0.085,0.0042-0.127,0.0117l-2.1309,0.3555&#xA;&#x9;C11.2595,4.9521,10.0387,3.7837,8,3.5488V3.5C8,3.2239,7.7761,3,7.5,3H5.5z M6,4h1v5v2H6V9V4z M9.5,8&#xA;&#x9;c0.259,0,0.4638,0.1974,0.4902,0.4492l0.0762-0.1328c0.1385-0.2399,0.4437-0.3201,0.6836-0.1816s0.3201,0.4418,0.1816,0.6816&#xA;&#x9;l-0.2578,0.4473C10.8727,9.445,11,9.7021,11,10c0,0.5626-0.4374,1-1,1H8V9h1V8.5C9,8.223,9.223,8,9.5,8z M2.4395,8.0703&#xA;&#x9;c0.1934-0.0242,0.3903,0.0662,0.4941,0.2461l0.2012,0.3477C3.226,8.5647,3.3538,8.5,3.5,8.5C3.777,8.5,4,8.723,4,9h1v2H2&#xA;&#x9;c-0.5626,0-1-0.4374-1-1s0.4374-1,1-1h0.1738L2.0684,8.8164C1.9299,8.5765,2.0101,8.2733,2.25,8.1348&#xA;&#x9;C2.31,8.1001,2.375,8.0784,2.4395,8.0703z" fill="#F53E3F" /> </svg>
                                    <div className='ml-1.5'> Vegetarian</div>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row mr-9 items-center'>
                    <div className='mr-2'><a href="#" class="fa fa-google"></a></div>
                    <div className='mr-2'><a href="#" class="fa fa-instagram"></a></div>
                    <div className='mr-2'><a href="#" class="fa fa-facebook"></a></div>
                    <div className=''> <a href="#" class="fa fa-twitter"></a></div>
                </div>
            </div>
        </nav>
    )
}

export default NavContent