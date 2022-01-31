import React,{useState, useEffect} from 'react';
import Form from '../Components/Form';
import Items from '../Components/Items';

const NoteList = () => {
    const [note, setNote] = useState([])

    useEffect(() => {
      getNote()
    }, [])

    const getNote = async () => {
      let response = await fetch('/api/setapi/');
      let data = await response.json()
      setNote(data)
    }
    
    return (
      <div>
        <h1> &#9782; Notes </h1>
        <Form />
        <div>
          {note.map((item, index) => (
            <Items note={item} key={index} />
          ))}
        </div>
      </div>
    );
};

export default NoteList;
