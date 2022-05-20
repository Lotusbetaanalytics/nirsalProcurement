import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helpers } from '../'
import { AiOutlineLogout } from 'react-icons/ai'
import logo from '../../assets/logo.png'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMe, userLogout } from '../../redux/actions/authActions'

const Navigation = () => {
    // Helpers
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // user state
    const userProfile = useSelector((state) => state.userProfile)
    const { user = {} } = userProfile
    const role = "hop"

    console.log(user)
    useEffect(() => {
        // get loggedin user
        dispatch(getMe())
    }, [dispatch])

    const logoutHandler = () => {
        dispatch(userLogout())
        navigate("/")
    }
    return (
        <div className={styles.navigation}>
            <div>
                <div className={styles.logo}>
                    <img src={logo} alt="Nirsal Procurement" />
                </div>
                <div className={styles.name}>
                    <h3>Hi {user.fullname}!</h3>
                    <p>It's nice seeing you again</p>
                </div>
                <div className={styles.links}>
                    <ul>
                        {Helpers.url[role].map((item, i) => (
                            <li key={i}><Link to={item.path}><item.Icon />{item.name}</Link></li>
                        ))}

                    </ul>
                </div>
            </div>

            <div className={styles.links}>
                <ul>
                    <li onClick={logoutHandler}><Link to="/#"><AiOutlineLogout /> Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation