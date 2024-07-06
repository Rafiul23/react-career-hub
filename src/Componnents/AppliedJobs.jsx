import { useLoaderData } from "react-router-dom";
import BG_1 from "../assets/images/bg1.png";
import { useEffect, useState } from "react";
import { getSaveJobApplication } from "../utilities/localstorage";
import AppliedJobsCard from "./AppliedJobsCard";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(()=>{
        const storedJobIds = getSaveJobApplication();

        // if(jobs.length > 0){
        //   const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id) )
        // } 

        const jobsApplied = [];
        for(const id of storedJobIds){
            const job = jobs.find(job => job.id === id)
            if(job){
                jobsApplied.push(job);
            }
        }

        setAppliedJobs(jobsApplied);
        console.log(storedJobIds, jobs, jobsApplied);
    }, [])

  return (
    <div>
      <div
        className="min-h-[200px]"
        style={{
          backgroundImage: `url(${BG_1})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl text-center mt-[100px] font-medium">
          Applied Jobs: {appliedJobs.length}
        </h2>
      </div>
        <div className="grid grid-cols-1 gap-4 my-10">
        {
            appliedJobs.map(job => <AppliedJobsCard
            key={job.id}
            job={job}
            ></AppliedJobsCard>)
        }
        </div>

    </div>
  );
};

export default AppliedJobs;
