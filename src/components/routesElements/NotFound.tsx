import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../header/Header'

const NotFound:React.FC = () => {
    return (
        <div>
            <Header />
            <h2 className='pageNotF'>Страница не найдена</h2>
            <Link to={'/test'} className='pageNotFLink'>На главную</Link>
        </div>
    );
};

export default NotFound;