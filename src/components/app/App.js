import AppHeader from "../appHeader/AppHeader";
// switch чтоб не повторять то что в Route

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {lazy,Suspense} from 'react';
import Spinner from "../spinner/Spinner";
const Page404=lazy(()=> import('../pages/404'));
const MainPage=lazy(()=> import('../pages/MainPage'));
const ComicsPage=lazy(()=> import('../pages/ComicsPage'));
const SingleComicPage=lazy(()=> import('../pages/singleComicPage/SingleComicPage'));
const SingleCharPage=lazy(()=> import('../pages/singleCharPage/SingleCharPage'));

const App=()=> {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<span style={{'textAlign': 'center'}}>Loading...</span>}>
                        <Routes> 
                            <Route path="/" element={<MainPage/>}/>                           
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComicPage/>} />
                            <Route path="/characters/:charId" element={<SingleCharPage/>} />
                            <Route path="*" element={<Page404/>} />
                        </Routes>
                    </Suspense>
                </main>       
            </div>
        </Router>
    )
}

// https://reactrouter.com/en/6.12.0/components/outlet

export default App;