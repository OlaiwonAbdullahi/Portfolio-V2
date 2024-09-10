import { Tweet } from "react-tweet";
export default function Post() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full mt-8">
      <h2 className="text-center mb-4 text-4xl font-semibold text-white">
        Featured Posts
      </h2>
      <span className="bg-gradient-to-r from-textColor to-white bg-clip-text text-transparent font-poppins mt-1 text-base md:text-lg">
        CheckOut Some Of My SocialMedia Posts
      </span>
      <Tweet id="1831789051890036989" />
      <Tweet id="1829968192959099337" />
    </div>
  );
}
