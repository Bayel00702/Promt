import React from 'react';
import Free from "./component/Free/Free";
import Feature from "./component/Feature/Feature";
import Promts from "./component/Promts/Promts";
import What from "./component/What/What";
import Popular from "./component/Popular/Popular";
import Earn from "./component/Earn/Earn";
import Newest from "./component/Newest/Newest";
import Directly from "./component/Directly/Directly";

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
            <Directly/>
        </>
    );
};

export default Home;