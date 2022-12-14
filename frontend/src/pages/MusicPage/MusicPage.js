import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MusicPage = () => {
    //State
    const [user, token] = useAuth();
    const [artist, setArtists] = useState([]);

    //Functionality

    //Effects upon State Change

    //Return JSX
    return (
        <div>

        </div>
    )
}

export default MusicPage;