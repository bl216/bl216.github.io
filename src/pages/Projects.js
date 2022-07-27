import React from "react";
import {Link} from "react-router-dom";

export default function Projects() {
    return (
        <div className="page-content">
            <div className="wrapper">
                <div className="page">
                    <header className="post-header">
                        <h1 className="post-title">
                            Projects
                        </h1>
                    </header>
                    <span className="page-divider">
                        <span className="one"></span>
                        <span className="two"></span>
                    </span>
                    <article className="post-content">
                        <h2>
                            Blog
                        </h2>
                        <p>
                            This technical blog was made for sharing my experiences that I had experienced on the
                            application developments.
                        </p>
                        <p>
                            <a href="https://github.com/bl216">Github</a>
                        </p>

                        <h4>Period</h4>
                        <ul>
                            <li>July 2022 ~ Present (v1.0)</li>
                        </ul>

                        <h4 id="skills">Skills</h4>
                        <ul>
                            <li>HTML, JavaScript, React, CSS</li>
                            <li>Git</li>
                            <li>Github Pages</li>
                            <li>IntelliJ</li>
                        </ul>

                        <hr/>

                        <h2>
                            World Remote Job
                        </h2>
                        <p>
                            I'm planning a website that is only for developer who want a remote job anywhere in the world.
                        </p>
                        <p>
                            <a href="http://www.bl216.tech">Demo</a>
                            &nbsp;|&nbsp;
                            <a href="https://github.com/bl216">Github</a>
                        </p>
                        <h4>Period</h4>
                        <ul>
                            <li>August 2022 ~ December 2022 (v1.0)</li>
                        </ul>
                        <h4>주요내용</h4>
                        <ul>
                            <li>Sign In</li>
                            <li>a bulletin board</li>
                            <li>Different function for permit</li>
                            <li>Payment</li>
                        </ul>
                        <h4 id="skills">Skills</h4>
                        <ul>
                            <li>Java Spring Framework, JavaScript, React, CSS</li>
                            <li>Oracle, JUnit</li>
                            <li>Git, Jenkins, AWS</li>
                        </ul>

                        <hr/>

                        <h2>
                            Business Automation System
                            {/*For Welfare Industry or HR part*/}
                        </h2>
                        <p>
                            TBD
                        </p>
                        {/*
                        <p>
                            <a href="http://www.bl216.tech">Demo</a>
                            &nbsp;|&nbsp;
                            <a href="http://www.bl216.tech">Github</a>
                        </p>
                        */}
                        <h4>Period</h4>
                        <ul>
                            <li>TBD</li>
                        </ul>

                        {/*
                        <h4>주요내용</h4>
                        <ul>
                            <li>수학 함수, 데이터의 시각화 오픈소스 자바스크립트 라이브러리</li>
                            <li>HTML5 Canvas 사용</li>
                            <li>Zoom In/Zoom out, Data Table 등 사용성 지원</li>
                            <li>다양한 API 지원(Update LIne, Font, Title, Color등 프로퍼티 제어)</li>
                        </ul>
                        */}

                        <h4 id="skills">Skills</h4>
                        <ul>
                            <li>TBD</li>
                        </ul>

                        <br/>

                    </article>
                </div>
            </div>
        </div>
    )
}