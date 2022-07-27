import React from "react";

function MakeGithubPagePage() {
    return (
        <div>
            <div>
                <h1>MakeGithubPagePage</h1><br/>
                <h1>npm과nodejs설치</h1><br/>
                <code>$ sudo dnf install epel-release</code><br/>
                <code>$ sudo dnf install npm nodejs</code><br/>
                <code>$ node -v</code><br/>
                v16.13.0<br/>
                <code>$ npm -v</code><br/>
                v8.1.0<br/><br/>

                1. React JS 앱을 만들 디렉토리로 이동합니다.<br/>
                <code>$ cd app/ghpage</code><br/><br/>
                2. npm으로 React 패키지를 설치합니다.<br/>
                <code>$ npm install -g create-react-app</code><br/><br/>
                3. 새로운 React JS 앱을 생성합니다.<br/>
                <code>$ create-react-app appname</code><br/><br/>
                4. 생성된 앱을 실행합니다. <br/>
                <code>$ cd appname</code><br/>
                <code>$ npm start</code><br/>
                확인사진이있음좋음<br/>
                ctrl + c 로 서버를 종료하거나 또다른 터미널을 연다.<br/>
                깃헙페이지를 인스톨한다.<br/>
                <code>$ npm install --save gh-pages</code><br/>
                인스톨한거확인+몇가지 수정을 위해 아래파일을 연다<br/>
                <code>$ vi package.json</code><br/>
                자료는 딴데서 가져오기<br/>
                빌드:빌드를하면 빌드디렉토리가 생긴다 변동사항을 브라우저가 읽어낼수 있도록 변환해서 모아준다<br/>
                <code>$ npm run build</code><br/>
                배포: 깃헙의 gh-pages브랜치에 올려준다.비번을 생성해야한다깃헙에서 아니면 ssh로 안되나? 여기서부터 다시<br/>
                배포된 화면을 캡처..근데 시간이 좀 걸린다는것도 쓰기 그사이에 아래를 실행<br/>


                <code>$ git init</code><br/>
                <code>(optional)$ git config --global user.email "blcu216@gmail.com"</code><br/>
                <code>(optional)$ git config --global user.name "bl216"</code><br/>
                <code>$ git add .</code><br/>
                <code>$ git commit -m 'initial commit'</code><br/>
                <code>$ git remote add origin https://github.com/bl216/bl216.github.io.git</code><br/>
                <code>$ git push origin master</code><br/>


            </div>
        </div>
    );
}

export default MakeGithubPagePage;
