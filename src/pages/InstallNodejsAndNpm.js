import React from "react";
import {Title, PageDivider, Section, CodeBlockDefaultExample} from "./Components/Page";

const text1 =
    `% node -v
v16.16.0
% npm -v
v8.11.0`;

//h2: 두번째타이틀

function InstallNodejsAndNpm() {
    return (
        <div className="page-content">
            <div className="post">

                <Title title="How to install Node.js and npm in MacOS"/>

                <div className="wrapper">

                    <PageDivider/>

                    <Section date="July 30, 2022" post="Node.js"/>

                    <article className="post-content">
                        <p>
                            개요
                        </p>

                        <h2>
                            홈피에서 다운로드
                        </h2>

                        <p>
                            공홈에서 패키지 다운로드
                            <div className="post-categories">
                                <a href="https://nodejs.org/en/" className="logo">
                                    Node.js Official Site
                                </a>
                            </div>
                        </p>

                        <p>
                            <img alt="1" src="img/InstallNodejsAndNpm/1.png"/>
                        </p>

                        <p>
                            다운로드된 파일 확인
                        </p>

                        <p>
                            <img alt="1" src="img/InstallNodejsAndNpm/2.png"/>
                        </p>

                        <h2>
                            설치시작
                        </h2>

                        <p>
                            <img alt="1" src="img/InstallNodejsAndNpm/3.png"/>
                        </p>

                        <p>
                            <img alt="1" src="img/InstallNodejsAndNpm/4.png"/>
                        </p>

                        <p>
                            <img alt="1" src="img/InstallNodejsAndNpm/5.png"/>
                        </p>

                        <p>
                            <img alt="1" src="img/InstallNodejsAndNpm/6.png"/>
                        </p>

                        <h2>
                            터미널을 열고 확인
                        </h2>

                        <CodeBlockDefaultExample language="none" text={text1}/>

                        <br/>

                    </article>
                </div>
            </div>
        </div>
    );
}

export default InstallNodejsAndNpm;
