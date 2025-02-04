// import EmployerStats from "./components/EmployerStats";
// import EmployerJobs from "./components/EmployerJobs";
// import EmployerProfile from "./components/EmployerProfile";
// import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

function EmployerDashboard() {
  const data = useSelector((state: RootState) => state.auth);
  console.log(data);

  return (
    <div className="employer-dashboard text-xs w-full h-full grid place-items-center gap-20 py-10 sm:text-base">
      <div className="w-full h-full flex flex-row justify-between items-center">
        <div className="dashboard-content h-[50vh] w-full flex flex-col items-start justify-center gap-12">
          <div className="content-text flex flex-col justify-center items-start gap-5 leading-relaxed">
            <div className="text-head w-full flex flex-col text-2xl md:text-4xl font-normal items-start gap-3 ">
              <span>Welcome back, Employer!</span>
              <span className="text-prime">
                Manage your job postings and applications
              </span>
            </div>
            <span className="text-body md:w-3/5 text-gray-500 text-md w-fit grid">
              Here you can view your job postings, manage applications, and
              update your profile.
            </span>
          </div>
        </div>
      </div>
      <EmployerStats />
      <EmployerJobs />
      <EmployerProfile />
      <Footer />
    </div>
  );
}
export default EmployerDashboard;
// components/EmployerStats.tsxx

const EmployerStats = () => {
  return (
    <div className="employer-stats w-full flex flex-col items-center gap-5">
      <h2 className="text-xl font-semibold">Your Statistics</h2>
      <div className="stats-grid grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        <div className="stat-card p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">Total Jobs Posted</h3>
          <p className="text-2xl font-bold">10</p>
        </div>
        <div className="stat-card p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">Applications Received</h3>
          <p className="text-2xl font-bold">50</p>
        </div>
        <div className="stat-card p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">Profile Views</h3>
          <p className="text-2xl font-bold">200</p>
        </div>
      </div>
    </div>
  );
};

// components/EmployerJobs

const EmployerJobs = () => {
  return (
    <div className="employer-jobs w-full flex flex-col items-center gap-5">
      <h2 className="text-xl font-semibold">Your Job Postings</h2>
      <div className="jobs-list w-full flex flex-col gap-4">
        <div className="job-card p-4 bg-white shadow rounded">
          <h3 className="text-lg font-medium">Software Engineer</h3>
          <p className="text-gray-500">Posted on: 2023-01-01</p>
        </div>
        <div className="job-card p-4 bg-white shadow rounded"></div>
        <h3 className="text-lg font-medium">Product Manager</h3>
        <p className="text-gray-500">Posted on: 2023-02-15</p>
      </div>
      <div className="job-card p-4 bg-white shadow rounded">
        <h3 className="text-lg font-medium">UI/UX Designer</h3>
        <p className="text-gray-500">Posted on: 2023-03-10</p>
      </div>
    </div>
  );
};

// components/EmployerProfile.tsx

const EmployerProfile = () => {
  return (
    <div className="employer-profile w-full flex flex-col items-center gap-5">
      <h2 className="text-xl font-semibold">Your Profile</h2>
      <div className="profile-details p-4 bg-white shadow rounded w-full">
        <div className="profile-item flex flex-col gap-2">
          <span className="font-medium">Company Name:</span>
          <span className="text-gray-500">Tech Solutions Inc.</span>
        </div>
        <div className="profile-item flex flex-col gap-2">
          <span className="font-medium">Email:</span>
          <span className="text-gray-500">employer@techsolutions.com</span>
        </div>
        <div className="profile-item flex flex-col gap-2">
          <span className="font-medium">Phone:</span>
          <span className="text-gray-500">+1 234 567 890</span>
        </div>
        <div className="profile-item flex flex-col gap-2">
          <span className="font-medium">Location:</span>
          <span className="text-gray-500">San Francisco, CA</span>
        </div>
      </div>
    </div>
  );
};

// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="footer w-full py-4 bg-gray-800 text-white text-center">
      <p>&copy; 2023 Tech Solutions Inc. All rights reserved.</p>
    </footer>
  );
};
