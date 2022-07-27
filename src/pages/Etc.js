import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="page-content">
            <div className="wrapper">
                <div className="page">
                    <header className="post-header">
                        <h1 className="post-title">
                            Home
                        </h1>
                    </header>
                    <span className="page-divider">
                        <span className="one"></span>
                        <span className="two"></span>
                    </span>
                    <p>
                        <img alt="home" src="img/home.JPG"/>
                    </p>
                </div>
            </div>
        </div>
    )
}