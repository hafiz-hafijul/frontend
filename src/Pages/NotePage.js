import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NotePage = () => {
    
    const { id } = useParams()
    const history = useNavigate()

    const [note, setNote] = useState(null)
    
    useEffect(() => {
        getItem()
    }, [id])
    
    const getItem = async () => {
        const response = await fetch(`/api/strapi/${id}/`);
        const data = await response.json()
        setNote(data)
    }

    const HandleEdit = async () => {
        fetch(`/api/strapi/${id}/`, {
            method: 'PUT',
            'headers': {
                'content-type':'application/json'
            },
            body:JSON.stringify(note)
        })
        history("/");
    }

    const HandleChange = (e) => {
        const {name, value} = e.target
        setNote({[name]:value})
    }

    const HandleDelete = async () => {
        fetch(`/api/strapi/${id}/`, {
            method: "DELETE",
            'headers': {
                'content-type':'application/json'
            }
        });
        history('/')
    }

    const HandleForm = (e) => {
        e.preventDefault();
    }

    return (
      <div>
        <form onSubmit={HandleForm}>
          <label> Edit Note : {" "}
            <input
              type="text"
              onChange={HandleChange}
              value={note?.title}
              name="title"
            />
          </label>
          <button onClick={HandleEdit}>Edit</button>
          <button onClick={HandleDelete}>Delete</button>
        </form>
      </div>
    );
};

export default NotePage;
