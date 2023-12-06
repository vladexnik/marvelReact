import { Component } from "react";

class ErrorBoundary extends Component{
    state={
        error: false
    }

    // static getDerivedStateFromError(error){
    //     return {
    //         error: true
    //     } 
    // }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: true
        })
        console.log(errorInfo)
    }

    render(){
        if(this.state.error){
            return <h2>Somth went wrong </h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;