import './App.css';
import React, {useState} from 'react';

function App() {

  let [title,setTitle] = useState(['전주 맛집 추천해주세요', '대전 맛집 추천해주세요', '서울 맛집 추천해주세요']);
  let [like, setLike] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [index,setIndex] = useState(0);
  let [input,setInput] = useState("");
  let [like2 , setLike2] = useState(0);

  
  return (
    <div className="App">
      <div class="black-nav">
        <h4>PYJ_Blog</h4>
      </div>

      <button onClick={()=>{
          let newArr =[...title];
          newArr = newArr.sort();
          setTitle(newArr);
      }}>가나다순정렬</button>

    
      
      {
        title.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=> {
                  modal == true ? setModal(false) : setModal(true);
                  setIndex(i);
                }}>{title[i]} <span onClick={(e)=>{
                  e.stopPropagation(); 
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy); 
                  }}>👍</span> {like[i]}  <button onClick={(e)=>{
                    e.stopPropagation();
                    let copy = [...title];
                    copy.splice(i,1);
                    setTitle(copy);
                  }}> 삭제 </button></h4>
              <p>{"2월 " +i + 1+ "일 발행"}</p>
              
            </div>
          )
        })
      }

      
      <input placeholder="글 제목을 입력하세요." onChange={(e)=>{
         setInput(
          e.target.value
        );
      }}></input><button onClick={(e)=>{
          const copy = title.concat(input);
          //copy.unshift(input);
          const copyLike = like.concat(like2);
          setTitle(copy);
          setLike(copyLike);
          setInput("");
      }}>등록</button>

      {
        modal == true ? <Modal index = {index} title = {title} setTitle={setTitle} /> : null 
      }
    </div>
  );
}

function Modal(props){
  let [input,setInput] = useState("");
  return (
    <div className='modal'>
        <h4>{props.title[props.index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <input onChange={(e)=>{
          setInput(e.target.value);
        }}></input>
        <button onClick={()=>{
          let copy = [...props.title];
          copy[props.index] = input;
          props.setTitle(copy);
          setInput("");
        }}>글수정</button>
    </div>
  )
}

export default App;
