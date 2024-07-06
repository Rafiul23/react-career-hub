import BannerImg from '../assets/images/user.png';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col justify-evenly lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="w-1/2"
        />
        <div className='w-1/2 ml-5'>
          <h1 className="text-5xl font-bold">One step closer <br /> to your <br /> <span className='text-violet-500'>Dream Job</span></h1>
          <p className="py-6">
          Explore thousands of job opportunities with <br /> all the information you need. <br /> Its your future. Come find it. Manage all your job application <br /> from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
