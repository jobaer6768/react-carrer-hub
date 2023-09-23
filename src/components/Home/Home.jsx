

const Home = () => {
    return (
        <div className="container mx-auto mt-10">

            {/* banner section */}
            <div className="flex justify-between">

                <div className="flex-1 space-y-6">

                    <h2 className="text-6xl font-bold">One Step Closer To Your Dream Job</h2>
                    <p className="text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn btn-primary text-white font-semibold">Get Started</button>

                </div>

                <div className="flex-1">

                    <img className="w-full" src="../../assets/images/user.png" alt="Banner" />

                </div>

            </div>

            {/* featured jobs section */}
            <div className="my-32">

                <h2 className="text-4xl font-bold mb-2 text-center">Featured Jobs</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>

        </div>
    );
};

export default Home;