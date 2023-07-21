import { styled } from "styled-components";

import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const List = ({text, updateMode, deleteTodo}) => {
  return (
    <Todo>
      <Text>{text}</Text>

      <Icons>
        <EditIcon onClick={updateMode} />
        <DelIcon onClick={deleteTodo} />
      </Icons>
    </Todo>
  );
};

export default List;

const Todo = styled.div`
  position: relative;
  margin-top: 1rem;
  background-color: #000;
  color: #fff;
  padding: 2rem 3rem;
  border-radius: 5px;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 2.9375rem;
  transform: translateY(-50%);
`;

const Icons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.25rem;
  display: flex;
  gap: .5rem;
`;

const EditIcon = styled(BiEdit)`
  cursor: pointer;
  font-size: 1.25rem;
`;

const DelIcon = styled(AiFillDelete)`
  cursor: pointer;
  font-size: 1.25rem;
`;