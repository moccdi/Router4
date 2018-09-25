import React from 'react';

import './Sidebar.css';
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

export default function Sidebar() {
    const menu = [
        {title: 'Dashboard', path: '/'},
        {title: 'Wallets', path: '/wallets' },
        {title: 'Profile', path: '/profile' },
    ];
    return (
        <aside className="sidebar">
            <ul>
                {menu.map(m => <li key={m.title}>
                        {/*<Link to={m.path}>{m.title}</Link>*/}
                    {/*<NavLink  activeClassName="active" to={m.path}>*/}
                        {/*{m.title}*/}
                    {/*</NavLink>*/}
                        <NavLink exact activeClassName="active" to={m.path}>
                            {m.title}
                        </NavLink>
                    </li>
                )}
            </ul>
        </aside>
    );
}
//приложение не обновляеться


// export default function Sidebar() {
//     const menu = [
//         {title: 'Dashboard', path: '/'},
//         {title: 'Wallets', path: '/wallets' },
//         {title: 'Profile', path: '/profile' },
//     ];
//     return (
//         <aside className="sidebar">
//             <ul>
//                 {menu.map(m => <li key={m.title}>
//                 <a href={m.path}>{m.title}</a>
//
//             </li>
//                 )}
//             </ul>
//         </aside>
//     );
// }