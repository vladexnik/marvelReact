import './charForm.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../../style/button.scss'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import useMarvelService from '../../services/service';


const CharForm=()=>{

    const [char,setChar]=useState(null);
    const {loading, error, clearError, getCharacterByName}=useMarvelService();

    const updateChar=(name)=>{
        clearError();
        getCharacterByName(name)
            .then(onCharLoaded)
    }

    const onCharLoaded=(char)=>{
        setChar(char);
    }

    const criticalError= error ? 
        <div className="char__search-critical-error">
            <ErrorMessage/>
        </div> : null;

    const result= !char ? null : char.length > 0 ?
        <div className="char__search-wrapper">
            <div className="char__search-success">
                Found this char. Visit {char[0].name} page!
            </div>
            <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div> 
        :   <div className="char__search-wrapper">  
                <div className="char__search-error">
                    Not found. Try another
                </div>
            </div>;

    return(
        <div className="char__search-form">
            <Formik 
                initialValues= { 
                { 
                    charName: ''
                }}

                validationSchema = {Yup.object({
                    charName: Yup.string()
                                .min(2, "2 symbols min")
                                .required('Necessary field')       
                })}

                // нажим на кнопку
                // отправляемся на сервер брать данные
                // обновляем состояние ф-ей onCharLoaded
                onSubmit= {
                    ({charName})=>{
                        updateChar(charName);
                    }
                }
            >

                <Form>
                    <label className="char__search-label" htmlFor="text">Find character</label>
                    <div className="char__search-wrapper">
                        <Field
                            id="charName" 
                            name="charName" 
                            type="text" 
                        />
                        
                        {/* <ErrorMessage className="error" name="terms" component="div"/> */}
                        <button className="button button__main"
                            type='submit' 
                            disabled={loading}
                        >
                            <div className="inner">Find</div>
                        </button>
                    </div>
                    <ErrorMessage component="div" className="char__search-error" name="charName" />
                </Form>
            </Formik>
            {result}
            {criticalError}
        </div>
    )   
}

export default CharForm;