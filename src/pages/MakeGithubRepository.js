import React from "react";
import {Title, PageDivider, Section, CodeBlockDefaultExample} from "./Components/Page";

const text1 =
    `% node -v
v16.16.0
% npm -v
v8.11.0`;

//h2: 두번째타이틀

function MakeGithubRepository() {
    return (
        <div className="page-content">
            <div className="post">

                <Title title="How to make Github repository"/>

                <div className="wrapper">

                    <PageDivider/>

                    <Section date="July 30, 2022" post="Github"/>

                    <article className="post-content">
                        <p>
                            개요
                        </p>

                        <h2>
                            만들기
                        </h2>

                        <p>
                            로그인을 한다. 계정을 만드는데 어려움은 없을것이다.
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubRepository/1.png"/>
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubRepository/2.png"/>
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubRepository/3.png"/>
                        </p>

                        <br/>

                    </article>
                </div>
            </div>
        </div>
    );
}

export default MakeGithubRepository;
