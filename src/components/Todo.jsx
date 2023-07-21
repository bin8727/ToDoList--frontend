import { styled } from "styled-components";
import { useEffect, useState } from "react";

import List from "./List";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../utils/handleAPI";


const Todo = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState(''); 
  

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <Container>
      <h1>TODO LIST</h1>

      <Top>
        <input 
          type="text" 
          placeholder="할 일을 넣어주세요." 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Add 
          onClick={
            isUpdating ? 
              () => updateToDo(toDoId, text, setToDo, setText, isUpdating) 
              : () => addToDo(text, setText, setToDo)
          }
        >
          {isUpdating ? '수정' : '추가'}
        </Add>
      </Top>

      <Lists>
        {toDo.map((item) => 
          <List 
            key={item._id} 
            text={item.text} 
            updateMode={() => updateMode(item._id, item.text)}
            deleteTodo={() => deleteToDo(item._id, setToDo)}
          />
        )}
      </Lists>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  max-width: 37.5rem;
  margin: auto;
  padding: 0 1rem;

  h1 {
    margin-top: 1rem;
    text-align: center;
  }
`;

const Top = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;

  input {
    border: none;
    outline: none;
    width: 25rem;
    padding: .5rem;
    border-bottom: 1px solid #000;
  }
`;

const Add = styled.div`
  background-color: #000;
  color: #fff;
  padding: .5rem 1.5rem;
  cursor: pointer;
`;

const Lists = styled.div``;