import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import UserItem from './UserItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

import './user.scss'

const UserList: React.FC = () => {
    const navigate = useNavigate()
    const { users, error, loading } = useTypedSelector(state => state.user)
    const { fetchUsers, rememberUser } = useActions()

    useEffect(() => {
        const isLoggin = localStorage.getItem('auth')
        if (!isLoggin) {
            navigate('/')
        }

        fetchUsers()
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <h1 className='errorLoading'>Идет загрузка</h1>
    }
    if (error) {
        return <h2 className='errorLoading'>{error}</h2>
    }

    const getUserId = (id: number) => {
        let user = users.filter((item, i) => id === i)
        rememberUser(user)
    }

    return (
        <section className='user'>
            <div className='container-user'>
                <div className='user__items'>
                    {users.map(user => (
                        <UserItem key={user.id} name={user.name} id={user.id} getUserId={getUserId} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UserList
