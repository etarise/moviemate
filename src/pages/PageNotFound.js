import PageNotFoundImage from "../assets/pagenotfound.png";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useTitle } from "../Hooks/useTitle";

export const PageNotFound = () => {
  useTitle(`Page Not Found `);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex  flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 PageNotFound"
            />
          </div>
        </div>
        <div className=" flex justify-center my-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
