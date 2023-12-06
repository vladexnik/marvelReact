import { Helmet } from 'react-helmet';

import './singleComicPage.scss';
import {useParams, Link, useNavigate} from "react-router-dom";
import {useState,useEffect } from 'react';
import useMarvelService from '../../../services/service';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';


const SingleComicPage = () => {
    const {comicId}=useParams();
    const [comic,setComic]=useState(null);
    const {loading,error,getComic, clearError}=useMarvelService();
    
    
    useEffect(()=>{
        updateComic();
    },[comicId])

    const updateComic=()=>{
            clearError();
            getComic(comicId)
                .then(onComicLoaded)  
    }

    const onComicLoaded=(comic)=>{
        setComic(comic);
        
    }
    
    const errorMess=error ? <ErrorMessage/> : null;
    const spinn=loading ? <Spinner/> : null;
    const content=!( loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            {errorMess}
            {spinn}
            {content}
        </>
    )
}

const View=({comic})=>{
    const {homepage, title, description, pageCount, language, thumbnail,price}=comic;
    const navigate=useNavigate();
    return (
        <div className="single-comic">

            <Helmet>
                <style type="text/css">{`
                    body {
                        background-color: #fff ;
                    }
                `}</style>
                <meta
                    name="description"
                    content={`${title} comics book`}
                />
                <title>{title}</title>
            </Helmet >
            <div>
                <img src={thumbnail} alt={title} className="single-comic__img"/>
                <a href={homepage} className="button button__main comic">
                    <div className="inner">homepage</div>
                </a>
            </div>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">{language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
            <button className="back" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

export default SingleComicPage;