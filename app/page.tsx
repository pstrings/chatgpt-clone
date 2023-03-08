import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center mx-10">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{`"Explain something to me."`}</p>
            <p className="infoText">{`"What is the difference between a cat and a dog?"`}</p>
            <p className="infoText">{`"What is the colour of the sun?"`}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{`"Can change the ChatGPT model to use."`}</p>
            <p className="infoText">{`"Messages are stored in Firestore."`}</p>
            <p className="infoText">{`"Notification when ChatGPT is thinking"`}</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">{`"May occasionally generate incorrect information."`}</p>
            <p className="infoText">{`"May occasionally produce harmful instructions or biased content."`}</p>
            <p className="infoText">{`"Limited knowledge of the world after 2021"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
