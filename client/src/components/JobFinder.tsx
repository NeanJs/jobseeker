import { Field, Form, Formik, FormikValues } from "formik";
import { BiSearch, BiMap } from "react-icons/bi";
import Button from "./Button";
interface FinderProps {
  title: string;
  location: string;
}
function JobFinder() {
  const initialValues: FinderProps = {
    title: "",
    location: "",
  };
  return (
    <div className="job-finder w-full md:w-fit h-fit rounded flex bg-white md:items-center py-2 px-3 shadow-2xl">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values: FormikValues) => {
          console.log(values);
        }}
      >
        <Form className="flex gap-4 w-full flex-col md:flex-row md:gap-6 items-start md:items-center">
          <div className="job-field w-full">
            <BiSearch />
            <Field className="text-sm" placeholder="Job title or keywords" name="title" />
          </div>
          <span className="line hidden md:flex"></span>
          <div className="job-field w-full">
            <BiMap />
            <Field className="text-sm" placeholder="Location" name="location" />
          </div>
          <Button text={`Search`} isPrimary className={`mx-auto w-full md:m-0 md:w-fit`} />
          </Form>
      </Formik>
    </div>
  );
}

export default JobFinder;
