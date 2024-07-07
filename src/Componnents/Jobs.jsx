import { Helmet } from "react-helmet-async";
import FeaturedJobs from "./FeaturedJobs";


const Jobs = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Jobs</title>
            </Helmet>
          <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Jobs;