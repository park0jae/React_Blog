# React_Blog

### ๐ ํ๋ก์ ํธ ์ฃผ์ 

React.js๋ฅผ ์ด์ฉํ์ฌ ๊ฐ๋จํ ๋ธ๋ก๊ทธ ์ฌ์ดํธ๋ฅผ ์ ์ํ์์. ๊ธฐ๋ณธ์ ์ธ ๋ฐ์ดํฐ ์ฒ๋ฆฌ ๊ธฐ๋ฅ์ธ CRUD์ ๋ํ ๊ฐ๋์ ์ ์ฉํ ๊ธฐ์ด ํ๋ก์ ํธ

<img width="828" alt="image" src="https://user-images.githubusercontent.com/84398970/216830791-50a14600-a758-45d5-b751-26dc9b7eceec.png">


<br/>

๐ ์ ๋ฐ์ ์ธ ํ๋ฆ ์ดํด๋ณด๊ธฐ 

1. ์๋ก์ด ๊ธ ๋ฑ๋ก ๊ธฐ๋ฅ
<img width="839" alt="image" src="https://user-images.githubusercontent.com/84398970/216830918-babe6ac8-e8d3-4573-bd64-47cf9c5c6b73.png">

  - `<input>` ๋ด์ onChange() ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ ์๋ ฅ๊ฐ์ด ๋ณํ  ๋๋ง๋ค ๋ณ์์ ์ ์ฅ๋๋๋ก ํ์๊ณ  , `<button>` ๋ด์ onClick() ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ ๊ธฐ์กด ๊ธ์ ๊ด๋ฆฌํ๋ state ๋ณ์์ ์ ์ฅ๋ ๊ฐ์ ์ถ๊ฐํ์ฌ state ๋ณํ ํจ์๋ฅผ ์ด์ฉํ์ฌ ์ฌ๋ ๋๋ง ๋๋๋ก ํ์๋ค.


<br/>

2. ๊ธ ์ญ์  ๊ธฐ๋ฅ

<img width="823" alt="image" src="https://user-images.githubusercontent.com/84398970/216831315-c542b6e1-715b-4108-8f62-2e8834178032.png">

<img width="810" alt="image" src="https://user-images.githubusercontent.com/84398970/216831326-5442c9fd-1dbb-4e36-a4a6-23ea26068762.png">

  - ์ญ์  ๋ฒํผ์ ํด๋ฆญํ๋ฉด ์ญ์ `<button>` ๋ด์ onClick() ๋ฉ์๋๋ฅผ ์ด์ฉํ์ฌ splice ํจ์๋ฅผ ์ฌ์ฉํด ๋ฐฐ์ด์ ์๋กญ๊ฒ ๊ตฌ์ฑํ๊ณ , state ๋ณํ ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ๋ ๋๋ง ๋๋๋ก ํ์๋ค.
  
  
 <br/>
 
 3. ๋ชจ๋ฌ์ฐฝ ๊ธฐ๋ฅ & ๊ธ ์ ๋ชฉ ์์  ๊ธฐ๋ฅ
 
 <img width="823" alt="image" src="https://user-images.githubusercontent.com/84398970/216831505-c89b00fa-5386-4304-b0ba-987da2bfff1e.png">

  - ๊ธ์ ์ ๋ชฉ์ ํด๋ฆญํ๋ฉด ํด๋น ๊ธ์ ๋ํ ๋ชจ๋ฌ์ฐฝ์ด ๋ณด์ด๊ณ  , ํ๋ฒ ๋ ํด๋ฆญํ๋ฉด ๋ชจ๋ฌ์ฐฝ์ด ์ฌ๋ผ์ง๋๋ก ์กฐ๊ฑด๋ฌธ์ ํตํด state๋ฅผ ์กฐ์ํ์ฌ ๋ชจ๋ฌ์ฐฝ ์ปดํฌ๋ํธ๋ฅผ ์กฐ์ํ์๊ณ  ์์  ์๋ ฅ๋์ ์๋ก์ด ๊ฐ์ ์๋ ฅํ๊ณ  ์์  ๋ฒํผ์ ๋๋ฅด๋ฉด ์ ๋ชฉ ๊ฐ์ state๋ฅผ ๋ณ๊ฒฝํ์ฌ ์ ๋ชฉ์ด ๋ฐ๋๋๋ก ํ์๋ค.
  
  ---
  
  ### ๋ฐฐ์ด ์ 
  
  > ๋ฆฌ์กํธ์ JSX ๋ฌธ๋ฒ์ ๋ํ ๋ด์ฉ๊ณผ state ๋ณ์๋ฅผ ์กฐ์ํ์ฌ state ๋ณ๊ฒฝํจ์๋ฅผ ํตํด ์ฌ๋ ๋๋ง ํ๋ ๋ฐฉ๋ฒ, props ๋ฅผ ์ด์ฉํด ๋ถ๋ชจ ์ปดํฌ๋ํธ๋ก ๋ถํฐ ์์ ์ปดํฌ๋ํธ๋ก state ๋ฅผ ๊ณต์ ํ๋ ๋ฐฉ๋ฒ ๋ฑ ๋ฆฌ์กํธ์ ๊ธฐ์ด์ ๋ํด ํ์ตํ๋ ํ๋ก์ ํธ๊ฐ ๋์๋ค.
