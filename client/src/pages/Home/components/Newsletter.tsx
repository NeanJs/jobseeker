
import Button from "../../../components/Button";
import { Text } from "../../../components/Texts";

function Newsletter() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[30vh] bg-cream p-2">
      <div className="w-full flex flex-col items-start md:w-fit gap-4">
        <span className="text-head text-2xl md:text-3xl font-semibold">
          Subscribe to our <span className="text-prime">Newsletter</span>
        </span>
        <Text text="Get notifed with events and offers" subhead/>
        <div className="flex w-full md:flex-row gap-2 justify-center">
          <input placeholder="Enter your Email" className="w-full p-2" />
          <Button text={"Subscribe"} />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
