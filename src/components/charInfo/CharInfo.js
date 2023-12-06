import './charInfo.scss';
import {useState,useEffect } from 'react';
import useMarvelService from '../../services/service';
import  setContent from '../../utils/setContent';
import PropTypes from 'prop-types';

const CharInfo=(props)=>{

    const [char,setChar]=useState(null);
    const { getCharacter, clearError, process, setProcess }=useMarvelService();

    useEffect(()=>{
        updateChar()
    },[props.characterId])


    const updateChar=()=>{
        const {characterId}=props;
            if(!characterId){
                return;
            }
            clearError();
            getCharacter(characterId)
                .then(onCharLoaded)
                .then(()=> setProcess('confirmed'))         
    }

    const onCharLoaded=(char)=>{
        setChar(char);
    }

    return (
        <div className="char__info">
            {setContent(process, View, char)}
        </div>
    )
   
}

//ожидание
//получение заказа
//доставка
//получение оплаты
// finite-state machine

const View=({data})=>{
    const {name,description,thumbnail,homepage,wiki,comics}=data;

    let imgStyle={ 
        'objectFit': 'contain'
    }
    if(thumbnail==='http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
            imgStyle={ 
            'objectFit': 'contain' }
    }

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}   
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length> 0 ? null :               
                    <li className="char__comics-item" >
                        Sorry. There is no comics with this character. U can create it :|
                    </li> 
                }
                
                {   
                    comics.map((item, i)=>{
                        if(i>4) return;
                        return(                     
                                <li key={i} className="char__comics-item" >
                                    {item.name}
                                </li> 
                            )  
                        })
                }  
            </ul>
        </>
    )
}

// CharInfo.propTypes={
//     characterId: PropTypes.string.isRequired
// }

export default CharInfo;