import { Link } from "react-router-dom";
import locationIcon from "../assets/icons/location2.png";
import salaryIcon from "../assets/icons/money.png";

const AppliedJobsCard = ({ job }) => {
  const {
    id,
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div className="flex justify-between gap-4 border-2">
      <div className="w-1/3 flex justify-center items-center">
        <img src={logo} className="w-1/2 h-1/2" alt="logo" />
      </div>
      <div className="w-1/3">
        <h3 className="text-xl font bold py-2">{job_title}</h3>
        <p>{company_name}</p>
        <div className="flex py-2">
          <button className="px-5 border border-violet-600 py-2 font-extrabold text-violet-600 rounded-md ">
            {remote_or_onsite}
          </button>
          <button className="px-5 border border-violet-600 py-2 font-extrabold text-violet-600 rounded-md  ml-3">
            {job_type}
          </button>
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
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobsCard;
