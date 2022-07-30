import React from "react";
import {Link} from "react-router-dom";

function ConnectGithubSshPage() {
    return (
        <div className="page-content">
            <div className="post">
                <div className="post-header-container">
                    <div className="scrim">
                        <header className="post-header">
                            <h1 className="post-title">
                                How to connect to Github using SSH
                            </h1>
                        </header>
                    </div>
                </div>
                <div className="wrapper">
                <span className="page-divider">
                    <span className="one"></span>
                    <span className="two"></span>
                </span>
                    <section className="post-meta">
                        <div className="post-date">
                            July 30, 2022
                        </div>
                        <div className="post-categories">
                            &nbsp;In&nbsp;
                            <Link to="/">Github</Link>
                        </div>
                    </section>
                    <article className="post-content">
                        <p>
                            SSH키페어를 이용하면 각종 서비스에 쉽게 액세스가 가능하다. 아직 없으면 아래 링크를 참조.
                        </p>

                        <p>
                            <div className="post-categories">
                                <Link to="/GenerateKeypairPage">
                                    How to generate the SSH key pair
                                </Link>
                            </div>
                        </p>

                        <h2>
                            깃허브 설정
                        </h2>

                        <p>
                            깃허브 레포지토리에 접속하면 셋팅 탭이 있습니다.
                            일로 들어가면 왼쪽에 액션리스트가 나오는데요, 그중 보안의 Deploy keys를 클릭합니다.
                            타이틀을 적고, 퍼블릭키를 복붙한 뒤 체크박스에 체크를 넣고 Add key를 클릭합니다.

                            When you access your Github, you can see the Setting tab.
                        </p>

                        <p>
                            <img alt="1" src="img/ConnectGithubSsh/1.png"/>
                        </p>

                        <p>
                            그럼 아래와 같이 등록이 완료된 것을 확인할 수 있습니다.
                        </p>

                        <p>
                            <img alt="2" src="img/ConnectGithubSsh/2.png"/>
                        </p>

                        <h2>
                            로컬에서 확인
                        </h2>

                        <p>
                            깃 초기설정이 필요하다. 안되어있으면 아래를 먼저.
                        </p>

                        <div className="language-bash highlighter-rouge">
                            <div className="highlight">
                                <pre className="highlight">
                                    <code>
                                        % git init<br/>
                                        % git config --global user.email "blcu216@gmail.com"<br/>
                                        % git config --global user.name "bl216"
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <p>
                            아래 커맨드로 확인가능
                        </p>

                        <div className="language-bash highlighter-rouge">
                            <div className="highlight">
                                <pre className="highlight">
                                    <code>
                                        $ ssh -T git@github.com
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <p>
                            then you can see below. Insert yes
                        </p>

                        <div className="language-bash highlighter-rouge">
                            <div className="highlight">
                                <pre className="highlight">
                                    <code>
                                        The authenticity of host 'github.com (140.82.113.3)' can't be established.<br/>
                                        ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.<br/>
                                        This key is not known by any other names<br/>
                                        Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <p>
                            and then
                        </p>

                        <div className="language-bash highlighter-rouge">
                            <div className="highlight">
                                <pre className="highlight">
                                    <code>
                                        Hi bl216/bl216.github.io! You've successfully authenticated, but GitHub does not provide shell access.
                                    </code>
                                </pre>
                            </div>
                        </div>

                        <div>
                            <br/>
                        </div>

                    </article>

                </div>
            </div>
        </div>
    );
}

export default ConnectGithubSshPage;
