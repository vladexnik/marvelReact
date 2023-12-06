
import { Helmet } from "react-helmet";
import AppBanner from "../../components/appBanner/AppBanner"
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from '../comicsList/ComicsList';



const ComicsPage=()=>{

    return(
        <>
        <Helmet>
            <meta
                name="description"
                content="Page with lists of our comucs"
            />
            <title>Comics Page</title>
        </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;