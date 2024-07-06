import { useEffect, useState } from "react";

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

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

      </div>
    </div>
  );
};

export default FeaturedJobs;
