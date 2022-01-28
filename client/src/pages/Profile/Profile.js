import './Profile.scss'
// import profileImg from './user.png'
import {useEffect, useState} from "react";
import axios from "axios";
import {Avatar, Skeleton} from 'antd';

function Profile(){

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');

    const data = JSON.parse(window.localStorage.getItem('userData'));

    useEffect(() => {
        const userData = async () => {
            try {
                await axios.get(`/api/user/${data.userId}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(response =>[
                        setFirstName(response.data.firstname),
                        setLastName(response.data.lastname),
                        setEmail(response.data.email),
                    ]
                )
            } catch (error) {
                console.log(error, "Error ")
            }
        }
        userData()
    }, [])


    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
        console.log(firstName)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value);
        console.log(lastName)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log(email)

    }

    const Save = () => {
        console.log('saved');
    }


    return (
        <div className='profile'>
            <div className='profile-item ant-card-hoverable'>
                {/*<div className='profile-img'>*/}
                {/*    /!*<img  src={profileImg} />*!/*/}
                {/*    /!*<Skeleton.Avatar active={true} size={'Large'}  />*!/*/}
                {/*</div>*/}
                <Avatar />
                <form className='profile-form'>
                    <label>
                        FirstName
                        <input onChange={onChangeFirstName} type='text' name='firstname' value={firstName}/>
                    </label>
                    <label>
                        LastName
                        <input onChange={onChangeLastName} type='text' name='lastname' value={lastName}/>
                    </label>
                    <label>
                        Email
                        <input onChange={onChangeEmail} type='email' name='email' value={email}/>
                    </label>
                    <input type='submit' onSubmit={Save} value='Save' />
                </form>
            </div>
        </div>
    )
}



export default Profile;