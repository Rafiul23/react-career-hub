import { useEffect, useState } from "react";
import location from '../assets/icons/location2.png'
import salary from '../assets/icons/money.png';

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(()=>{
        fetch('/data/jobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    },[])

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-5xl">Featured Jobs</h1>
        <p className=" py-3">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-5 max-w-5xl mx-auto">
            {
                featuredJobs.map(job => <div key={job.id} className="p-5">
                    <img src={job.logo} alt="logo" />
                    <h3 className="text-xl font bold py-2">{job.job_title}</h3>
                    <p>{job.company_name}</p>
                    <div className="flex py-2">
                    <button className="btn btn-primary btn-outline">{job.remote_or_onsite}</button>
                    <button className="btn btn-primary btn-outline ml-3">{job.job_type}</button>
                    </div>
                    <div className="flex my-4">
                        <div className="flex">
                            <img src={location} alt="location" />
                            <p>{job.location}</p>
                        </div>
                        <div className="flex ml-3">
                            <img src={salary} alt="salary" />
                            <p>{job.salary}</p>
                        </div>
                    </div>
                    <button className="btn btn-primary">View Details</button>
                </div>)
            }
      </div>
    </div>
  );
};

export default FeaturedJobs;
