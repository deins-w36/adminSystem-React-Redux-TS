import React from 'react'
import { Link } from 'react-router-dom'

import './user.scss'

interface UserProps {
    name: string
    id: number
    getUserId(id: number): void
}

const UserItem: React.FC<UserProps> = ({ name, id, getUserId }) => {
    const getId = () => {
        getUserId(id)
    }

    return (
        <Link to={`/users/${id}`} className='link' onClick={getId}>
            <div className='user__item'>
                <div className='user__name'>
                    {id + 1}. {name}
                </div>
            </div>
        </Link>
    )
}

export default UserItem
