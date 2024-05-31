import React, {useState} from 'react';
import logo from '../assets/logo_dark.png';
import {v4 as uuidv4} from 'uuid';
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Created a new room');
    }

    const joinRoom = () => {
        if (!roomId || !userName) {
            toast.error('Room ID and username is required');
            return;
        }

        // Redirect to the chat page
        navigate(`/editor/${roomId}`, {
            state: {
                userName,
            }
        })
    }

    const handleInputEnter = (e) => {
        console.log(e.code);
        if (e.code === "Enter") {
            joinRoom();
        }
    }

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img src={logo} className="logoImage" alt="Logo"></img>
                <h4 className="mainLabel">Paste ROOM ID</h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="Room ID"
                           onChange={(e) => setRoomId(e.target.value)} value={roomId}
                            onKeyUp={handleInputEnter}/>
                    <input type="text" className="inputBox" placeholder="UserName"
                           onChange={(e) => setUserName(e.target.value)} value={userName}
                           onKeyUp={handleInputEnter}/>
                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp
                        <a onClick={createNewRoom} href="" className="createNewBtn"> New Room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>Built with 💛 by{' '} <a href="https://github.com/Rishabh0896">Me:)</a></h4>
            </footer>
        </div>
    );
};

export default HomePage;