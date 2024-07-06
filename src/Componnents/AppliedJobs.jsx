import { useLoaderData } from "react-router-dom";
import BG_1 from "../assets/images/bg1.png";
import { useEffect, useState } from "react";
import { getSaveJobApplication } from "../utilities/localstorage";
import AppliedJobsCard from "./AppliedJobsCard";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getSaveJobApplication();

    // if(jobs.length > 0){
    //   const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id) )
    // }

    const jobsApplied = [];
    for (const id of storedJobIds) {
      const job = jobs.find((job) => job.id === id);
      if (job) {
        jobsApplied.push(job);
      }
    }

    setAppliedJobs(jobsApplied);
    console.log(storedJobIds, jobs, jobsApplied);
  }, []);

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
      <div className="text-right my-10">
        <details className="dropdown">
          <summary className="px-5 border border-violet-600 py-2 font-extrabold text-violet-600 rounded-md m-1">Filter By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>On Site</a>
            </li>
            <li>
              <a>Remote</a>
            </li>
          </ul>
        </details>
        
      </div>

      <div className="grid grid-cols-1 gap-4 my-10">
        {appliedJobs.map((job) => (
          <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
