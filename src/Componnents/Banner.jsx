import BannerImg from '../assets/images/user.png';

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col justify-evenly md:flex-row-reverse">
        <img
          src={BannerImg}
          className="md:w-1/2 w-full"
        />
        <div className='md:w-1/2 ml-5 w-full'>
          <h1 className="md:text-5xl text-2xl font-bold">One step closer <br /> to your <br /> <span className='text-violet-500'>Dream Job</span></h1>
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
