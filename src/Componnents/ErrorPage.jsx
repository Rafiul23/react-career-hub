import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-20">
         <p className="py-5 text-2xl">404 | Something went wrong</p>   
         <Link to='/'><button className="btn btn-warning">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;