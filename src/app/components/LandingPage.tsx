import { Posts } from "./Posts";

export const LandingPage = () => {
  return (
    <div className="mx-auto text-center p-3 md:w-150 flex flex-col">
      <h1 className="text-3xl">Hello and Welcome! &#128512;</h1>
      <p>I am Shefali,</p>
      <p>a software engineer and learner.</p>
        <Posts />
    </div>
  );
};
