import React from 'react';
import {Link} from "react-router-dom";
import {CodeBlock, dracula} from "react-code-blocks";


//맨처음 큰 제목
function Title(props) {
    return (
        <div className="post-header-container">
            <div className="scrim">
                <header className="post-header">
                    <h1 className="post-title">
                        {props.title}
                    </h1>
                </header>
            </div>
        </div>
    );
}

function PageDivider() {
    return (
        <span className="page-divider">
            <span className="one"></span>
            <span className="two"></span>
            </span>
    );
}

//날짜, 포스트분류
function Section(props) {
    return (
        <section className="post-meta">
            <div className="post-date">
                {props.date}
            </div>
            <div className="post-categories">
                &nbsp;In&nbsp;
                <Link to="/">{props.post}</Link>
            </div>
        </section>
    );
}

function CodeBlockDefaultExample (props) {
    return (
        <code>
            <CodeBlock language={props.language} showLineNumbers={false} text={props.text} theme={dracula}/>
        </code>
    );
}

/*
const CodeBlockDefaultExample = (props) => {
    return (
        <CodeBlock language="zsh" showLineNumbers={false} text={props.text11}/>
    );
};
*/



export {Title, PageDivider, Section, CodeBlockDefaultExample}