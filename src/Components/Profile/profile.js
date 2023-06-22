import React, { useEffect, useRef, useState } from "react";
import { useSelector } from 'react-redux'


export default function Profile() {

    const userState = useSelector(state => state.loginUserReducer)
    const { currentUser } = userState;
    const inputref = useRef(null);
    const [image, setImage] = useState('');

    useEffect(() => {
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) {
            setImage(storedImage);
        }
    }, []);

    const handleimageclick = () => {
        inputref.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
            localStorage.setItem('profileImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }

return (
    <div className="justify-content-center text-center m-4">
        <h3>Profile </h3>
        <hr />

        <div >

            {image ? (
                <img src={image} alt="" className="img-display-after"onClick={handleimageclick} style={{ cursor: 'pointer' }}
                />
            ) : (
                <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    alt="" className="img-display-before" />
            )}
            <input type="file" ref={inputref} onChange={handleImageChange} style={{ display: 'none' }} />
        </div>
        {currentUser ? (
            <div className="m-5 ">
                <p style={{ fontSize: '22px' }}>Name : {currentUser.name}</p>
                <p style={{ fontSize: '22px' }}>Email : {currentUser.email}</p>
                <p style={{ fontSize: '22px' }}>Address : {currentUser.address}</p>
                <p style={{ fontSize: '22px' }}>Contact No : {currentUser.contactno}</p>
            </div>
        ) : (
            <p>Please log in to vies your profile</p>
        )}
    </div>
)
}