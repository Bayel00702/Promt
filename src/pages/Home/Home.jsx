import React, {useEffect} from 'react';
import Free from "./component/Free/Free";
import Feature from "./component/Feature/Feature";
import Promts from "./component/Promts/Promts";
import What from "./component/What/What";
import Popular from "./component/Popular/Popular";
import Earn from "./component/Earn/Earn";
import Newest from "./component/Newest/Newest";


const Home = () => {

    return (
        <>
            <Free/>
            <Feature/>
            <Promts/>
            <What/>
            <Popular/>
            <Earn/>
            <Newest/>
        </>
    );
};

export default Home;