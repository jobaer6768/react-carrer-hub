

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="border border-purple-300 rounded-lg">
            
            <div className="p-10 space-y-3">
                <img className="" src={logo} alt="" />
                <p>{job_title}</p>
                <p>{company_name}</p>
                <div className="flex gap-6">
                    <div className="border border-purple-300 rounded-lg text-purple-300 px-4 py-2">
                        {remote_or_onsite}
                    </div>
                    <div className="border border-purple-300 rounded-lg text-purple-300 px-4 py-2">
                        {job_type}
                    </div>
                </div>
                <div className="flex gap-6">
                    <p>{location}</p>
                    <p>Salary: {salary}</p>
                </div>
                <button className="btn btn-primary text-white font-semibold">View Details</button>
            </div>

        </div>
    );
};

export default Job;