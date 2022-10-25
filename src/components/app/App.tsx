import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Auth from '../auth/Auth'
import Test from '../routesElements/Test'
import User from '../routesElements/User'
import CreateTest from '../routesElements/CreateTest'
import OnePersone from '../routesElements/OnePersone'
import NotFound from '../routesElements/NotFound'

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Auth />} />
                <Route path='/test' element={<Test />} />
                <Route path='/test/new-test' element={<CreateTest />} />
                <Route path='/users' element={<User />} />
                <Route path='/users/:userId' element={<OnePersone />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
