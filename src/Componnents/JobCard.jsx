import { Link } from 'react-router-dom';
import locationIcon from '../assets/icons/location2.png'
import salaryIcon from '../assets/icons/money.png';

const JobCard = ({job}) => {

    const {logo, company_name, job_title, remote_or_onsite, job_type, location, salary, id  } = job;

    return (
        <div className="p-5">
                    <img src={logo} alt="logo" />
                    <h3 className="text-xl font bold py-2">{job_title}</h3>
                    <p>{company_name}</p>
                    <div className="flex py-2">
                    <button className="px-5 border border-violet-600 py-2 font-extrabold text-violet-600 rounded-md ">{remote_or_onsite}</button>
                    <button className="px-5 border border-violet-600 py-2 font-extrabold text-violet-600 rounded-md  ml-3">{job_type}</button>
                    </div>
                    <div className="flex my-4">
                        <div className="flex">
                            <img src={locationIcon} alt="location" />
                            <p>{location}</p>
                        </div>
                        <div className="flex ml-3">
                            <img src={salaryIcon} alt="salary" />
                            <p>{salary}</p>
                        </div>
                    </div>
                    <Link to={`/job/${id}`}>
                    <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
    );
};

export default JobCard;