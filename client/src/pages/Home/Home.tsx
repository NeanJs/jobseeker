import JobFinder from "../../components/JobFinder";
import JobsCategories from "../Jobs/Categories/JobsCategories";
import JobData from "./components/JobData";
//@ts-ignore
import nomad from "../../assets/nomad.svg";
import JobSuggestions from "../Jobs/Popular/JobSuggestions";
import Newsletter from "./components/Newsletter";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import Footer from "./components/Footer";
function Home() {
  const suggestions = ["Designer", "Developer", "Affiliate"];
  const data = useSelector((state: RootState) => state.auth);
  console.log(data);
  return (
    <div className="home text-xs w-full h-full grid place-items-center gap-20 py-10 sm:text-base">
      <div className="w-full h-full flex flex-row justify-between items-center">
        <div className="home-content h-[50vh] w-full flex flex-col items-start justify-center gap-12">
          <div className="content-text flex flex-col justify-center items-start gap-5 leading-relaxed">
            {/* <h1 className="text-xl font-extrabold tracking-wider md:text-7xl">
              JobSeeker.
            </h1> */}
            <div className="text-head w-full flex flex-col text-2xl md:text-4xl font-normal items-start gap-3 ">
              <span>Discover more than</span>
              <span className="text-prime">8000+ jobs</span>
            </div>
            <span className="text-body md:w-3/5 text-gray text-md w-fit grid">
              Find yourself the jobs of your choice all around the world and
              that too from your desired location.
            </span>
          </div>
          <div className="flex flex-col items-start gap-4">
            <span>Begin Searching:</span>
            <JobFinder />
            <div className="flex flex-row items-center gap-2">
              <span>Suggestions:</span>
              <div className="flex gap-2 flex-wrap">
                {suggestions.map((suggestion) => (
                  <span className="ease duration-300 px-2 py-1 bg-black text-white border-black hover:bg-transparent border-2  hover:text-black cursor-pointer">
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img src={nomad} alt="" className="hidden lg:flex" />
      </div>
      <JobData />
      <JobsCategories
        header="Explore jobs by category"
        subheader="Find jobs across different niche"
        // showBtn
      />
      <JobSuggestions />
      <Newsletter />
    </div>
  );
}

export default Home;
