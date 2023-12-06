import './comicsList.scss';

import {useState, useEffect} from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/service';
import { Link } from 'react-router-dom';

const setContent=(process, Component, newItemLoading)=>{
    switch(process){
        case 'waiting':
            return <Spinner/>;
            break;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
            break;
        case 'confirmed':
            return <Component/>;
            break;
        case 'error':
            return <ErrorMessage/>;
            break;
        default: 
            throw new Error('unexpected process state');

    }
}

const ComicsList = () => {

    const [comicsList,setComicsList]=useState([]);
    const [offset, setOffset] = useState(55);
    const [newItemLoading,setNewItemLoading]=useState(false);
    const [comicsEnded,setComicsEnded]=useState(false);


    const {getAllComics, process, setProcess}=useMarvelService();

    useEffect(()=>  {
        onRequest(offset);
    },[]);
    
//////    

    const onRequest=(offset,initial)=>{
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(()=> setProcess('confirmed'))
            .then(res=> console.log(res))
    }

    const onComicsListLoaded=(newComicsList)=>{
        let ended=false;
        if(newComicsList.length<8) {
            ended=true;
        }

        setComicsList(comicsList=> [...comicsList, ...newComicsList]); // важно что было в предыд charList
        setNewItemLoading(false)
        setOffset(offset=>offset+4)
        setComicsEnded(ended)
    } 

    function renderComics(arr){
        const items=arr.map((item,i)=>{
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return(
                <li className="comics__item"
                    tabIndex={0}
                    key={i}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} style={imgStyle} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            )   
    });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

        return(
            <div className="comics__list">
                 {setContent(process, ()=> renderComics(comicsList), newItemLoading)}

                <button className="button button__main button__long"
                    disabled={newItemLoading}
                    onClick={()=> onRequest(offset)}
                    style={{'display': comicsEnded ? 'none' : 'block'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )    
}

export default ComicsList;