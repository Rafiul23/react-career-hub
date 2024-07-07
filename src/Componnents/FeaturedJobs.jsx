import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('/data/jobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    },[])

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="md:text-5xl text-2xl">Featured Jobs</h1>
        <p className=" py-3">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-5 mx-auto">
            {
                featuredJobs.slice(0, dataLength).map(job => <JobCard key={job.id} 
                job={job}
                ></JobCard>)
            }
      </div>

      <div className="text-center my-5">
       {
        dataLength === featuredJobs.length ?
        <button className="btn btn-primary" onClick={()=> setDataLength(4)}>Show Less Jobs</button>
        : 
        <button className="btn btn-primary" onClick={()=> setDataLength(featuredJobs.length)}>Show All Jobs</button>
       }
      </div>
    </div>
  );
};

export default FeaturedJobs;
