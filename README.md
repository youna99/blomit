


개발자를 위한 블로그 서비스 웹 “블로밋(Blomit)”
=====================================
SeSAC 영등포 6기 웹 개발자 양성 과정 1차 팀 프로젝트 대상 수상작 [대상 - B조.pdf](https://github.com/user-attachments/files/16372912/-.B.pdf)

- 배포 URL: http://223.130.147.143:8080/
- Test ID: sesac1
- Test PW: sesac1234!


프로젝트 개요
---------
- Blomit은 개발자를 주 사용자로 타겟팅하여, 마크다운을 통한 블로깅이 가능하도록 한 서비스입니다.
- 개발 기간: 2024.07.10 ~ 2024.07.23


팀원 구성
------
||김어진|김지민|박성환|박은경|이유나|
|---|---|---|---|---|---|
|Role|[팀장] BE|[팀원] FE, BE, DevOps|[팀원] FE, BE, DevOps|[팀원] FE|[팀원] FE|
|GitHub|[qldirr][qldirr]|[cmkoi1][cmkoi1]|[aixion1506][aixion1506]|[eungyeong0927][eungyeong0927]|[youna99][youna99]|

[cmkoi1]: https://github.com/cmkoi1
[youna99]: https://github.com/youna99
[qldirr]: https://github.com/qldirr
[aixion1506]: https://github.com/aixion1506
[eungyeong0927]: https://github.com/eungyeong0927

<br>

## 1. 개발 환경 
#### Programming Languages
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">


#### Frameworks
<img src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/ejs-B4CA65?style=for-the-badge&logo=ejs&logoColor=white">

#### Libraries
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/chartdotjs-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white"> <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white">

#### Databases
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">

#### Development Environment and Tool
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

#### Communication Tools
<img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

## 2. 브랜치 전략
<pre><code>  
   Main branch
      └── dev
	    ├── F-dev
	    |  ├── F-Login
	    |  ├── F-Register
	    |  └── F-Post
	    |  └── F-Search
	    |  └── F-Comment
	    ├── B-dev
	    |  ├── B-Login
	    |  ├── B-Register
	    |  └── B-Post
	    |  └── B-Search
	    |  └── B-Comment</code></pre>
## 3. 프로젝트 구조 - 트리 형태로 출력
<pre><code>app.js
├── config
├── controller
|  ├── comment
|  ├── post
|  └── user
├── middlewares
├── models
|  ├── comment
|  ├── post
|  ├── user
|  └── index.js
├── package-lock.json
├── package.json
├── .env
├── .gitignore
├── .prettierrc
├── postcss.config.js
├── tailwind.config.js
├── routes
|  ├── comment
|  ├── post
|  ├── user
|  └── index.js
├── static
|  ├── css
|  └── image
├── uploads
├── utils
└── views
   ├── includes
   ├── posts
   ├── search
   └── user</code></pre>
   

## 4. 프로젝트 설계 
 - [명명법](https://github.com/SeSAC-1st/SeSAC-1st/wiki/%EB%AA%85%EB%AA%85%EB%B2%95)
 - [DB 설계](https://github.com/SeSAC-1st/SeSAC-1st/wiki/DB-%EC%84%A4%EA%B3%84)
 - [요구분석 정의서/명세서](https://github.com/SeSAC-1st/SeSAC-1st/wiki/%EC%9A%94%EA%B5%AC-%EB%B6%84%EC%84%9D-%EC%A0%95%EC%9D%98%EC%84%9C-%EB%AA%85%EC%84%B8%EC%84%9C)
 - [git 규칙](https://github.com/SeSAC-1st/SeSAC-1st/wiki/git-%EA%B7%9C%EC%B9%99)
   
## 5. 구현 기능(기능별)
### 회원가입/로그인
<img src="https://github.com/user-attachments/assets/2b2a3378-ccc0-49b9-8936-41ec0aab6f91" width="700" /> <br>
### 댓글, 검색, 페이지네이션
<img src="https://github.com/user-attachments/assets/131d4e2e-21bf-42f5-bd91-e1c86c5dd703" width="700" /> <br>
### 게시글 CRUD
<img src="https://github.com/user-attachments/assets/186d18a4-807b-4b53-adcc-4c36b8564933" width="700" /> <br>

## 6. 모바일 뷰

| 전체 게시글                                                                                                                                 | 게시글 상세                                                                                                                                 | 게시글 작성                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/user-attachments/assets/05eb5379-f6c4-4e88-ad80-36e9d4d08696" width="250"/> | <img src="https://github.com/user-attachments/assets/595d34af-5ab9-436d-ba3f-2b7d19f03e40" width="250"/> | <img src="https://github.com/user-attachments/assets/17a81d49-be39-4546-9cb1-c0e1e4547ef7" width="250"/> |

| **댓글, 대댓글**                                                                                                                   | **마이페이지**                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://github.com/user-attachments/assets/dfba261c-3db4-49a0-9a2a-bef5e12ea25a" width="300"/> | <img src="https://github.com/user-attachments/assets/1baba5fb-fdec-40d9-83d2-40cc61c7bd47" width="300"/> |


