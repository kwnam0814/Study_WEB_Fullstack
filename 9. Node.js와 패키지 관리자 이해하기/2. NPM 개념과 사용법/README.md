# Node & Express

## Node, NPM 이해

### 노드의 모듈시스템

**NPM (Node Package Manager)**

노드를 설치하면 npm도 함께 설치된다.

npm은 다양한 자바스크립트 라이브러리를 설치, 관리할 수 있는 노드의 패키지매니저이다.

npm을 사용해 전세계 자바스크립트 개발자들이 미리 구현해둔 유용한 기능을 손쉽게 사용할 수 있다.

패키지매니저는 비단 노드에서만 존재하는 것이 아니라 다른 언어나 플랫폼에서도 존재한다.

예를 들어...

파이썬 pip / PHP composer / 자바 maven, gradle / 리눅스 apt-get 등..

프로젝트 폴더에서 콘솔을 통해 명령어를 입력한다.

```bash
npm init
```

package.json 파일이 생성되며 이 json파일을 통해 다양한 패키지 의존성을 관리할 수 있다.

또한 이 파일 자체를 공유해서 팀 내 동일한 노드 개발환경을 손쉽게 구축할 수 있다.

```json
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

nodemon 설치 예시

```bash
npm install nodemon // npm i nodemon
```