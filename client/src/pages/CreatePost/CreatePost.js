import {useState} from "react";
import "./CreatePost.scss";
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
        <div  className="post ant-card-hoverable">
            <h2>Your Post</h2>
            <label >
                Post Title
                <input type="text" onChange={changeHandler} className="titleInput"/>
            </label>
            <label >
                Post Description
                <input type="text" onChange={changeHandler} className= "descriptionInput"/>
            </label>
            <label >
                Post image
                <input type="file" onChange={changeHandler}/>
            </label>
            <button onClick={uploadHandler}>Create Post</button>
        </div>
    );
}

export default CreatePost
