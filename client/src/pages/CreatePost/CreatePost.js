import { useState} from "react";
import "./CreatePost.scss";
import axios from "axios";
import {useHistory} from "react-router-dom";


const CreatePost = () => {

    const history = useHistory();
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [baseImg,setBaseImg] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value);

    }
    const onChangeDescription = (e) => {
        setDescription(e.target.value);

    }

    const uploadImg=async(e)=>{
        const file=e.target.files[0];
        const base64=await convertBase64(file)
        setBaseImg(base64);
        // console.log(base64)
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }


    const data= {
        title: title,
        description: description,
        photo:baseImg,
    }
        const uploadHandler = async () => {
        try {
            await axios.post('/api/post/create', {...data}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                    // console.log(response);
                }

            )

           history.push("/")
        } catch (error) {
            console.log(error, "Error1234654 ")
        }
    }

    return (
        <div  className="post ant-card-hoverable">
            <h2>Your Post</h2>
            <label >
                Post Title
                <input type="text" onChange={onChangeTitle} className="titleInput"/>
            </label>
            <label >
                Post Description
                <input type="text" onChange={onChangeDescription} className= "descriptionInput"/>
            </label>
            <label >
                Post image
                <img src={baseImg} height='200px' width='200px'/>
                <input type="file"  onChange={(e)=>{uploadImg(e);}}/>
            </label>
            <button onClick={uploadHandler}>Create Post</button>

        </div>
    );
}

export default CreatePost
