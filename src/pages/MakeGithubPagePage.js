import React from "react";
import {Title, PageDivider, Section, CodeBlockDefaultExample} from "./Components/Page";
import {Link} from "react-router-dom";
import MakeGithubRepository from "./MakeGithubRepository";

/*
const exampleCodeBlock = `// React Component
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  mountNode
);`;
*/

/*
const text1 =
    `% sudo dnf install epel-release
% sudo dnf install npm nodejs`;
*/

const text3 =
    `% cd app
% sudo npm install --location=global create-react-app
npm WARN deprecated tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.

changed 67 packages, and audited 68 packages in 1s

4 packages are looking for funding
  run \`npm fund\` for details

2 high severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.

Run \`npm audit\` for details.`;

const text5 =
    `% create-react-app ghpages

Creating a new React app in /Users/bl216/Development/app/ghpages.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...


added 1393 packages in 11s

(...)

Created git commit.

Success! Created ghpages at /Users/bl216/Development/app/ghpages
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd ghpages
  npm start

Happy hacking!`;

const text7 =
    `% cd ghpages
% npm start
Compiled successfully!

You can now view appname in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.11:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully`;

const text9 =
    `% npm install --save gh-pages
added 16 packages, and audited 1461 packages in 2s

204 packages are looking for funding
  run \`npm fund\` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run \`npm audit\` for details.`;

const text10 =
    `% vi package.json`;

const text11 =
    `% npm run build

> ghpages@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  46.6 kB  build/static/js/main.f61de34f.js
  1.78 kB  build/static/js/787.21191d21.chunk.js
  541 B    build/static/css/main.073c9b0a.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment

`;

const text12 =
    `% git add .
% git commit -m 'initial commit'
[master 036a94b] initial commit
 2 files changed, 298 insertions(+)
% git remote add origin git@github.com:bl216/bl216.github.io.git
% git push origin master
Enumerating objects: 26, done.
Counting objects: 100% (26/26), done.
Delta compression using up to 8 threads
Compressing objects: 100% (26/26), done.
Writing objects: 100% (26/26), 304.17 KiB | 8.45 MiB/s, done.
Total 26 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), done.
remote: 
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/bl216/bl216.github.io/pull/new/master
remote: 
To github.com:bl216/bl216.github.io.git
 * [new branch]      master -> master`;

const text14 =
    `{
  "name": "ghpages",
  "version": "0.1.0",
  "homepage": "https://bl216.github.io",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "gh-pages": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
(...)`;

const text15 =
    `% npm run deploy

> ghpages@0.1.0 predeploy
> npm run build


> ghpages@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  46.6 kB  build/static/js/main.f61de34f.js
  1.78 kB  build/static/js/787.21191d21.chunk.js
  541 B    build/static/css/main.073c9b0a.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  https://cra.link/deployment


> ghpages@0.1.0 deploy
> gh-pages -d build

Published`;

//h2: 두번째타이틀

function MakeGithubPagePage() {
    return (
        <div className="page-content">
            <div className="post">

                <Title title="How to make Github Pages"/>

                <div className="wrapper">

                    <PageDivider/>

                    <Section date="July 30, 2022" post="Github"/>

                    <article className="post-content">
                        <p>
                            개요
                        </p>

                       <h2>
                            (Optional) 깃허브 리포지토리 만들기
                        </h2>

                        <p>
                            (optional) npm과nodejs설치가 필요하다.
                            <div className="post-categories">
                                <Link to="/MakeGithubRepository">
                                    How to make Github repository
                                </Link>
                            </div>
                        </p>

                        <h2>
                            create-react-app
                        </h2>

                        <p>
                            (optional) npm과nodejs설치가 필요하다.
                            <div className="post-categories">
                                <Link to="/InstallNodejsAndNpm">
                                    How to install Node.js and npm in MacOS
                                </Link>
                            </div>
                        </p>

                        <p>
                            설명

                            When you access your Github, you can see the Setting tab.
                        </p>


                        <p>
                            1. React JS 앱을 만들 디렉토리로 이동후 npm으로 React 패키지를 설치합니다.
                        </p>

                        <CodeBlockDefaultExample language="none" text={text3}/>

                        <p>
                            2. 새로운 React JS 앱을 생성합니다. git이없으면 에러가 난다.
                        </p>

                        <CodeBlockDefaultExample language="none" text={text5}/>

                        <p>
                            3. 생성된 앱을 실행합니다.
                        </p>

                        <CodeBlockDefaultExample language="none" text={text7}/>

                        <p>
                            페이지가 캇테니 立ち上がる。
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubPagePage/1.png"/>
                        </p>

                        <p>
                            ctrl + c 로 서버를 종료한다.
                        </p>

                        <h2>
                            2. 깃헙페이지를 인스톨한다.
                        </h2>

                        <p>
                            2-1. gh-pages를 설치
                        </p>

                        <CodeBlockDefaultExample language="none" text={text9}/>

                        <p>
                            2-2. 인스톨한거확인+몇가지 수정을 위해 아래파일을 열고 자신의 깃허브 페이지 주소를 적은
                            <code className="highlighter-rouge">homepage</code>를 적고
                            <code className="highlighter-rouge">predeploy</code>랑
                            <code className="highlighter-rouge">deploy</code>도 추가한다.
                            ??행에 gh-pages가 추가된것 도 확인. 나머지는 손댈 필요 없다.
                        </p>

                        <CodeBlockDefaultExample language="none" text={text10}/>

                        <br/>

                        <CodeBlockDefaultExample language="json" text={text14}/>

                        <p>
                            2-3. 빌드:빌드를하면 빌드디렉토리가 생긴다 변동사항을 브라우저가 읽어낼수 있도록 변환해서 모아준다
                        </p>

                        <CodeBlockDefaultExample language="none" text={text11}/>

                        <p>
                            소스코드배포: 깃헙의 gh-pages브랜치에 올려준다.비번을 생성해야한다깃헙에서 아니면 ssh로 안되나? 여기서부터 다시<br/>
                            배포된 화면을 캡처..근데 시간이 좀 걸린다는것도 쓰기 그사이에 아래를 실행
                        </p>

                        <p>
                            ssh키페어를 이용한 push ID PW를 가지고 할수도 있지만 이쪽을 추천.
                            <div className="post-categories">
                                <Link to="/ConnectGithubSshPage">
                                    How to connect to Github using SSH
                                </Link>
                            </div>
                            ssh를 안쓸거면 6행의
                            <code className="highlighter-rouge">% git remote add origin git@github.com:bl216/bl216.github.io.git</code>
                            를
                            <code className="highlighter-rouge">% git remote add origin https://github.com/bl216/bl216.github.io.git</code>
                            로 바꿔서 진행

                        </p>

                        <CodeBlockDefaultExample language="none" text={text12}/>

                        <p>
                            <img alt="1" src="img/MakeGithubPagePage/2.png"/>
                        </p>

                        <p>
                            2-4. 배포
                        </p>

                        <CodeBlockDefaultExample language="none" text={text15}/>

                        <p>
                            gh-pages브런치에 push된 것을 알수 있다.소스코드는 올리지 않고 build->deploy만으로 혼방반영이 가능하다.
                            리포지토리는 일반유저라면 퍼블릭으로 해놔야한다. 프로는 프라이빗도 가능하다고 한다.
                            우측하단에 깃헙블로그가 액티브로되어있다.
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubPagePage/3.png"/>
                        </p>

                        <p>
                            설정을 변경해줘야 한다.
                            그다음에 링크를 눌러보자
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubPagePage/4.png"/>
                        </p>

                        <p>
                            아직 안나온다. 처음에는 10분이나 그 이상 걸리는 것 같다. 아래와같은 화면이 안나오면 README.md파일이 main브런치에 있는지 확인.
                            리포지토리를 생성할 때 선택할 수 있다. 이게 없으면 제대로 작동하지 않으니 주의할 것.
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubPagePage/5.png"/>
                        </p>

                        <p>
                            완성. /index.html을 붙여도 같은 화면이 나온다.
                        </p>

                        <p>
                            <img alt="1" src="img/MakeGithubPagePage/6.png"/>
                        </p>

                        <br/>

                    </article>
                </div>
            </div>
        </div>
    );
}

export default MakeGithubPagePage;
