# Next.js + Typescript 프로젝트 생성하기

![](https://images.velog.io/images/april_5/post/36027f63-089a-4315-8757-4218d9e046f3/image.png)

## 설치하기

```bash
npx create-next-app@latest --ts
```

---

- `_app.ts`는 전체 레이아웃 잡을때 사용
- `index.ts`는 home 이자 `/` 인 페이지
- pages folder에 생성되는 파일들은 각 라우팅 되는 페이지들
- src/components 폴더에 있는 파일들은 모달 등 각종 기능을 하는 컴포넌트들로써 index.js에 삽입하여 사용 한다.
- public 폴더에는 이미지파일들이나 폰트파일 등을 넣어놓고 `index.ts`에 들어가는 css 용으로도 사용함.
- 기본적으로 static page를 만들고 외부에서 데이터를 받아오거나 할 경우에는 `getStaticProps`와 `getStaticPath`를 사용해서 가져온다.
- ssr로 할 경우 `getServerSideProps`를 사용한다.
- csr은 필요 파일들을 pre-rendering을 하여 요청시 즉각 보여주고 ssr은 요청이 있을시에 서버에 요청하여 전체 만들어진 페이지를 보여준다.
