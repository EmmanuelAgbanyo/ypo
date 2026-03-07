import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="notfound">
            <div className="notfound__inner">
                <div className="notfound__number gradient-text">404</div>
                <h1 className="notfound__title">Page Not Found</h1>
                <p className="notfound__body">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <div className="notfound__ctas">
                    <Link to="/" className="btn btn-primary btn-lg">Back to Home <i className="fas fa-home" /></Link>
                    <Link to="/contact" className="btn btn-outline btn-lg">Contact Us <i className="fas fa-envelope" /></Link>
                </div>
            </div>
        </div>
    )
}
