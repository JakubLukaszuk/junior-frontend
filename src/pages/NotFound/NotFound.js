import React from 'react'
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/routes';
import './NotFound.css'

const NotFoundPage = () => {
    return (
        <div className = {['NotFound', 'wrapper'].join(' ')}>
            <span className = {['NotFound', 'info'].join(' ')}>404 Page Not found</span>
            <Link className = {['NotFound', 'goHome'].join(' ')} to={HOME}>
                Go Home
            </Link>
        </div>
    )
}

export default NotFoundPage