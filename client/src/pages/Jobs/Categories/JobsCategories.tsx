import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import {CATEGORIES} from "../../../constants/constants"

interface JobProps {
  showBtn?: boolean;
  header?: string;
  subheader?: string;
}
export default function JobsCategories({
  showBtn,
  header,
  subheader,
}: JobProps) {
  return (
    <div className="w-full h-full flex flex-col gap-10 flex-start">
      <div className="category-header">
        <div className="header-content w-full flex flex-col gap-4 lg:flex-row lg:items-center justify-between">
          <div className="content-text flex flex-col gap-2">
            <h1 className="text-head text-2xl lg:text-4xl font-bold">
              {header}
            </h1>
            <span className="text-body text-gray">{subheader}</span>
          </div>
          {showBtn && (
            <Button
              text={`All Category`}
              className="border-gray border-2 font-bold"
            />
          )}
        </div>
      </div>
      <div className="category-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {CATEGORIES.map((category, id) => (
          <Link
            to={{
              pathname: `jobs/${category.title
                .split(" ")
                .join("")
                .split("&")
                .join("and")
                .toLowerCase()}`,
            }}
            className="bg-white ease duration-300 flex items-start p-4 gap-2 cursor-pointer rounded-md hover:shadow-lg"
            key={`${category.title}-${id}`}
          >
            <span
              className="icon rounded-md p-5 h-full grid place-items-center text-3xl"
              style={{ background: category.color, color: category.iconcolor }}
            >
              {<category.icon />}
            </span>
            <div className="category-data flex flex-col items-start gap-2">
              <span className="category-title font-bold text-md">
                {category.title}
              </span>
              <div className="text-gray text-sm">
                {category.positions} jobs available
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
