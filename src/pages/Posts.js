import {Link} from "react-router-dom";
import GenerateKeypair from "./GenerateKeypair";

export default function Posts() {
    return (
        <div className="page-content">
            <div className="wrapper">
                <div className="page">
                    <header className="post-header">
                        <h1 className="post-title">Posts</h1>
                    </header>
                    <span className="page-divider">
                        <span className="one"></span>
                        <span className="two"></span>
                    </span>
                    <article className="post-content">
                        <h2>
                            Github
                        </h2>
                        <ul className="posts-list">
                            <li>
                                <strong>
                                    <Link to="/ConnectGithubSshPage">
                                        How to connect to Github using SSH
                                    </Link>
                                </strong>
                                <span className="post-date"> - July 30 2022</span>
                            </li>
                            <li>
                                <strong>
                                    <Link to="/MakeGithubPagePage">
                                        How to make Github Page using React
                                    </Link>
                                </strong>
                                <span className="post-date"> - July 30 2022</span>
                            </li>
                        </ul>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        {/*
                        <Link to="/CreateRockylinuxDockerPage">CreateRockylinuxDocker</Link><br/>
                        <Link to="/MakeGithubPagePage">MakeGithubPage</Link><br/>
                        <Link to="/GenerateKeypairPage">GenerateKeypair</Link>
                        */}
                    </article>
                </div>
            </div>
        </div>
    )
}