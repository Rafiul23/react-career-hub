import { useLoaderData, useParams } from "react-router-dom";
import BG_1 from "../assets/images/bg1.png";
import salaryIcon from '../assets/icons/money.png';
import titleIcon from '../assets/icons/calendar.png'
import phoneIcon from '../assets/icons/phone.png';
import emailIcon from '../assets/icons/email.png';
import addressIcon from '../assets/icons/location2.png'
import { toast } from "react-toastify";
import { saveJobApplication } from "../utilities/localstorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id == id);

  const handleApplyJobs = ()=>{
    saveJobApplication(idInt);
    toast.success('You have applied successfully')
  }

  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  return (
    <div>
      <Helmet>
        <title>Career Hub | Job Details</title>
      </Helmet>
      <div
        className="min-h-[200px]"
        style={{
          backgroundImage: `url(${BG_1})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2 className="text-4xl text-center mt-[100px] font-medium">
          Job Details Page of {job_title}
        </h2>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-16">
        <div className="col-span-2 p-2">
          <p className="py-6">
            <span className="font-bold">Job Description: </span>
            {job_description}
          </p>
          <p className="py-6">
            <span className="font-bold">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p className="font-bold py-6">Educational Requirements: </p>
          <p>{educational_requirements}</p>
          <p className="font-bold py-6">Experiences: </p>
          <p>{experiences}</p>
        </div>

        <div className="col-span-1">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title my-2">Job Details</h2>
              <hr />

              <div className="flex mt-3">
                <img src={salaryIcon} className="mr-2" alt="salary" />
                <p><span className="font-bold">Salary: </span>{salary} per month</p>
              </div>

              <div className="flex">
                <img src={titleIcon} className="mr-2" alt="job-title" />
                <p><span className="font-bold">Job Title: </span>{job_title}</p>
              </div>
              

              <h2 className="card-title my-2">Contact Informations:</h2>
              <hr />
              <div className="flex mt-3">
                <img src={phoneIcon} className="mr-2" alt="phone" />
                <p><span className="font-bold">Phone: </span>{contact_information.phone}</p>
              </div>
              <div className="flex">
                <img src={emailIcon} className="mr-2" alt="email" />
                <p><span className="font-bold">Email: </span>{contact_information.email}</p>
              </div>
              <div className="flex">
                <img src={addressIcon} className="mr-2 w-5 h-5 mt-1" alt="address" />
                <p><span className="font-bold">Address: </span>{contact_information.address}</p>
              </div>
              

            </div>
          </div>
          <button onClick={handleApplyJobs} className="btn btn-primary my-4 w-full">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
