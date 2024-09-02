const AboutMe = () => {
  return (
    <div>
      <div className="mx-6 mt-24 flex h-48 items-center justify-evenly">
        <img
          src="./images/rishabh.jpeg"
          className="max-h-64 min-h-32 rounded-full"
        />

        {/* Typewriter Animation */}
        <div className="w-max">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-amber-800 pr-5 font-barlow text-4xl text-amber-800 text-opacity-85">
            Hey There! Welcome......
          </h1>
        </div>
      </div>
      <p className="mx-20 mt-20 flex font-barlow text-xl text-amber-800 text-opacity-85">
        Hi, nice to meet you lovely stranger/s. I am Rishabh. If you would like
        to know more about me, you can continue reading; otherwise, feel free to
        browse around at your ease.
      </p>
      <u className="mx-20 mt-16 flex font-barlow text-xl text-amber-800 text-opacity-85">
        About Me:
      </u>
      <p className="mx-20 flex font-barlow text-xl text-amber-800 text-opacity-85">
        I consider myself a software developer by craft. I enjoy building
        software, at least I think I do, and I have been doing it on and off for
        a while now. In my free time, I like to play video games and watch
        movies. Some of the things I have had a liking for in the past and have
        experienced myself, in no particular order or sense, are as follows:
        Golang, Counter-Strike, Kung Fu Panda, Better call saul, physical sports
        and Hoi An City.
      </p>
    </div>
  );
};

export default AboutMe;
