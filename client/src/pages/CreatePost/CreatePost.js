import {useState} from "react";
import "./CreatePost.css";
import axios from "axios";


const CreatePost = () => {

    const [data, setData] = useState({
        title: '',
        description: '',
        photo: null
    })
    const [success, setSuccess] = useState()

    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const uploadHandler = async () => {
        try {
            await axios.post('', {...data}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response =>
                setSuccess(response.data.message)
            )
        } catch (error) {
            console.log(error, "Error ")
        }
    }

    return (
        <div  className="container">
            <h2>Your Post</h2>
            <label > Post Title</label>
            <input type="text" onChange={changeHandler} className="titleInput"/>
            <label >Post Description</label>
            <input type="text" onChange={changeHandler} className= "descriptionInput"/>
            <label > Post image </label>
            <input type="file" onChange={changeHandler}/>
            <button onClick={uploadHandler}>Create Post</button>

        </div>
    );
}

export default CreatePost
