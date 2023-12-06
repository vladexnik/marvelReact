
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import decoration from '../../resources/img/vision.png';
import { useState } from "react";
import CharForm from "../charForm/CharForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage=()=>{

    const[selectedCharacter, setCharacter]=useState(null);

    const onCharacterSelected=(id)=>{
       setCharacter(id);
    }
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            
            <div className="char__content">
                <CharList onCharacterSelected={onCharacterSelected}/>
                <div className="bigchar">
                    <ErrorBoundary>
                        <CharForm/>
                    </ErrorBoundary>
                    
                    <ErrorBoundary>
                        <CharInfo characterId={selectedCharacter}/>
                    </ErrorBoundary>                    
                </div>
            </div>
            <img className ="bg-decoration" src={decoration} alt="vision"/>    
        </>
    )
}

export default MainPage; 