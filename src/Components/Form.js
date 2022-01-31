import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


const Form = () => {
  const {id} = useParams()
  const [note, setNote] = useState({
    title:''
  });

  const CreateNote = async () => {
    fetch(`/api/setapi/`, {
      method: "POST",
      headers: {
        'content-type': "application/json",
      },
      body: JSON.stringify(note),
    });
  }

  const HandleChange = (e) => {
    const {value,name} = e.target
    setNote({[name]:value})
  }

  const HandleFormSubmit = (e) => {
    e.preventDefault()
   };

  const HandleSubmit = () => {
    CreateNote()
    setNote({'title':''})
  }
  
  return (
    <div>
      <form onSubmit={HandleFormSubmit}>
        <label>
          Title :{" "}
          <input
            type="text"
            placeholder="Enter Your Title"
            value={note.title}
            name='title'
            onChange={HandleChange}
            autoComplete='off'
          />
        </label>

        <button type="submit" onClick={HandleSubmit}>Submit</button>
       
      </form>
    </div>
  );
};

export default Form;
