import './singleCharPage.scss';
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState,useEffect } from 'react';
import useMarvelService from '../../../services/service';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

const SingleCharPage=()=>{
    const {charId}=useParams();
    const [char, setChar]=useState(null);
    const {loading,error,getCharacter, clearError}=useMarvelService();
    

    useEffect(()=>{
        updateChar();
        // console.log(char);
    },[charId])

    const updateChar=()=>{
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)

    }

    const onCharLoaded=(char)=>{
        setChar(char);
        
    }

    const errorMess=error ? <ErrorMessage/> : null;
    const spinn=loading ? <Spinner/> : null;
    const content=!( loading || error || !char) ? <View char={char}/> : null;
   
    
    return (
        <>
            {errorMess}
            {spinn}
            {content}
        </>
    )

}

const View=({char})=>{
    console.log(char);
    const {comics, homepage, wiki, name, description, thumbnail}=char;
     const navigate=useNavigate();
    return (
        <div className="single-char">
            <div>
                <img src={thumbnail} alt={name} className="single-char__img"/>
                
                <div className="randomchar__btns single" >
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                    <button className="back" onClick={() => navigate(-1)}>Go back</button>
                </div>
                
            </div>
            <div className="single-char__info">
                <h2 className="single-char__name">{name}</h2>
                <p className="single-char__descr">{description}</p>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics.length> 0 ? null :               
                                    <li className="char__comics-item" >
                                         Sorry. There is no comics with this character. U can create it :|
                                    </li> 
                                  
                    }
                    {   
                        comics.map((item, i)=>{
                            
                            return(                     
                                    <li key={i} className="char__comics-item" >
                                         {item.name}
                                    </li> 
                                )  
                            })
                    }  
                </ul>
            </div>
            
            
            <Link to="/" className="single-char__back">Back to all</Link>
            
        </div>
    )
}

export default SingleCharPage;