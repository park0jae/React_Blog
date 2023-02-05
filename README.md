# React_Blog

### 📍 프로젝트 주제

React.js를 이용하여 간단한 블로그 사이트를 제작하였음. 기본적인 데이터 처리 기능인 CRUD에 대한 개념을 적용한 기초 프로젝트

<img width="828" alt="image" src="https://user-images.githubusercontent.com/84398970/216830791-50a14600-a758-45d5-b751-26dc9b7eceec.png">


<br/>

🔍 전반적인 흐름 살펴보기 

1. 새로운 글 등록 기능
<img width="839" alt="image" src="https://user-images.githubusercontent.com/84398970/216830918-babe6ac8-e8d3-4573-bd64-47cf9c5c6b73.png">

  - `<input>` 내의 onChange() 메소드를 이용하여 입력값이 변할 때마다 변수에 저장되도록 하였고 , `<button>` 내의 onClick() 메소드를 이용하여 기존 글을 관리하던 state 변수에 저장된 값을 추가하여 state 변환 함수를 이용하여 재렌더링 되도록 하였다.


<br/>

2. 글 삭제 기능

<img width="823" alt="image" src="https://user-images.githubusercontent.com/84398970/216831315-c542b6e1-715b-4108-8f62-2e8834178032.png">

<img width="810" alt="image" src="https://user-images.githubusercontent.com/84398970/216831326-5442c9fd-1dbb-4e36-a4a6-23ea26068762.png">

  - 삭제 버튼을 클릭하면 역시 `<button>` 내의 onClick() 메소드를 이용하여 splice 함수를 사용해 배열을 새롭게 구성하고, state 변환 함수를 사용하여 재렌더링 되도록 하였다.
  
  
 <br/>
 
 3. 모달창 기능 & 글 제목 수정 기능
 
 <img width="823" alt="image" src="https://user-images.githubusercontent.com/84398970/216831505-c89b00fa-5386-4304-b0ba-987da2bfff1e.png">

  - 글의 제목을 클릭하면 해당 글에 대한 모달창이 보이고 , 한번 더 클릭하면 모달창이 사라지도록 조건문을 통해 state를 조작하여 모달창 컴포넌트를 조작하였고 수정 입력란에 새로운 값을 입력하고 수정 버튼을 누르면 제목 값의 state를 변경하여 제목이 바뀌도록 하였다.
  
  ---
  
  ### 배운 점
  
  > 리액트의 JSX 문법에 대한 내용과 state 변수를 조작하여 state 변경함수를 통해 재렌더링 하는 방법, props 를 이용해 부모 컴포넌트로 부터 자식 컴포넌트로 state 를 공유하는 방법 등 리액트의 기초에 대해 학습하는 프로젝트가 되었다.
