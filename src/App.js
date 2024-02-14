import "./App.css";
import { useEffect, useState } from "react";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import pesuja from "./assets/pesuja.png";
import pesujamantuja from "./assets/pesujamantuja.png";
import stresi from "./assets/stresi.jpeg";

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noPressed, setNoPressed] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  useEffect(() => {
    if (noCount > 8) {
      setNoPressed(true);
    }
  }, [noCount]);

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "E sigurte????",
      "Hajt hajt?",
      "te luteeem!",
      "paaaashhhhhhhh...",
      "ani bre ani",
      "sad",
      "pain",
      "deshprim me jete",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleReset = () => {
    setNoCount(0);
    setYesPressed(false);
    setNoPressed(false);
  };

  if (noPressed) {
    return (
      <div className="overflow-auto flex flex-col items-center justify-center pt-4 h-screen selection:bg-rose-600 selection:text-white text-zinc-900">
        <div className="text-4xl md:text-6xl font-bold my-4">Gjendje</div>
        <img src={stresi} alt="gjendje" width={500} />

        <div
          className="border border-gray-400 p-4 mt-10 cursor-pointer"
          onClick={() => handleReset()}
        >
          Try again
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-auto flex flex-col items-center justify-center pt-4 h-screen selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="gif"
          />
          <div className="text-4xl md:text-6xl font-bold my-4">
            GG babyyyyy!!
          </div>
          <div>Dress something nice for tonight ;)</div>
        </>
      ) : (
        <>
          {/* <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          /> */}
          <div className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32">
            <div className="absolute w-[300px]">
              Here's a cringe pic I found :P
            </div>
            <img
              src={lovesvg2}
              className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
              alt="gif"
            />
          </div>

          {/* <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          /> */}
          <div className="text-2xl">Hey Shpresa! 🌸</div>
          <br />
          <div className="text-center w-[60%]">
            I probably don't say this a lot, but I wanted to write this to show
            just how much you mean to me. We're almost hitting the 2 year mark
            together, and I must say that the memories and moments we went
            through remain my favorite ones ever.
            <br /> I know times might be rough sometimes but I believe in you
            and what you can accomplish. Shpresa, you are the best person that I
            have ever met. Period. <br /> You make me a better person everyday,
            with your love, care and your silly jokes :)
          </div>

          <div className="mt-10">
            <img src={pesujamantuja} alt="pesuja" width={300} />
          </div>

          <h2 className="text-2xl md:text-4xl my-4 text-center mt-40">
            Now.. without further ado..
          </h2>
          <div className="mb-10">I have a question for you...</div>

          <h2 className="text-2xl md:text-4xl my-4 text-center">
            Will, you Shpresa, be my...Pookie? I mean Valentines???
          </h2>

          <img src={pesuja} alt="pesuja" width={300} />

          <div className="flex flex-wrap justify-center gap-2 items-center mt-10 mb-20">
            <button
              className={`bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <a
        className="fixed bottom-2 left-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
        href="https://github.com/Xeven777/valentine"
        target="__blank"
      >
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        by Dio
      </a>
    </>
  );
};

export default App;
