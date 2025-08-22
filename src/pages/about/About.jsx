import Background from "../../components/background/Background";

const About = () => {
  return (
    <>
      <Background imgUrl={"../src/assets/photography//7.jpg"} />
      <section className="max-w-5xl mx-auto mt-8 py-2 md:mt-26 md:py-20 px-4 lg:px-0">
        <div className="flex flex-col md:flex-row items-center py-2 md:py-20">
          <div className="w-full md:w-1/3 lg:pr-4 pr-4">
            <img
              src="/images/portrait/1.jpg"
              alt="Portrait"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="w-full mt-10 md:mt-0 md:w-2/3 px-4 text-justify lg:pl-4 pl-4">
            <h2 className="text-3xl font-semibold mb-10">About</h2>
            <p className="text-lg mb-2">
              Hi, I'm Rory Chen! I'm a software engineer and indie game
              developer. I have a Msc in Information and Communication
              Technology and a Bsc in Software Engineering.
            </p>
            <p className="text-lg mb-2">
              I mainly use C# and Unity for game development, but I also have
              knowledge of some other programming languages and game engines.
              I'm always willing to learn and usually pick up new skills
              quickly.
            </p>
            <p className="text-lg mb-2">
              I draw inspirations from reality and my personal experiences, and
              I am good at transforming them into unique game ideas. To bring
              these ideas to life, I self-taught digital painting and 3D
              modelling in my spare time. I love using game development and art
              to express my emotions, values, and ways of thinking.
            </p>
            <p className="text-lg mb-4">
              Currently, I'm looking for work as a game developer or technical
              artist. Feel free to reach out if you like my work!
            </p>
            <p className="text-base">
              Email:{" "}
              <a
                href="mailto:rorychen168@gmail.com"
                className="text-gray-600 hover:text-blue-500"
              >
                rorychen168@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
