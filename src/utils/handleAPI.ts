import axios, { AxiosResponse } from 'axios';

const baseURL = 'https://todo-list-backend-pfy5.onrender.com';

export interface ToDo {
  _id: string;
  text: string;
} 

const getAllToDo = (
    setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>
  ) => {

  axios
    .get(baseURL)
    .then(({data}: AxiosResponse<ToDo[]>) => {
      console.log('Data =>', data);
      setToDo(data);
    })
};

const addToDo = (
    text: string, 
    setText: React.Dispatch<React.SetStateAction<string>>, 
    setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>
  ) => {

  axios
    .post<void>(`${baseURL}/save`, {text})
    .then((data) => {
      console.log(data);
      setText('');
      getAllToDo(setToDo);
    })
    .catch((err: any) => console.log(err));
};

const updateToDo = (
    toDoId: string, 
    text: string, 
    setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>, 
    setText: React.Dispatch<React.SetStateAction<string>>, 
    setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>
  ) => {

  axios
    .post<void>(`${baseURL}/update`, {_id: toDoId, text})
    .then((data) => {
      setText('');
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err: any) => console.log(err));
};

const deleteToDo = (
    _id: string, 
    setToDo: React.Dispatch<React.SetStateAction<ToDo[]>>
  ) => {

  axios
    .post<void>(`${baseURL}/delete`, {_id})
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err: any) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };