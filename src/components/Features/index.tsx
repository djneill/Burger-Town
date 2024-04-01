import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-4 md:py-4 lg:py-4">
        <div className="container">
          <SectionTitle
            title="Our Story"
            paragraph='Neen & Chef Phillip first bonded over their shared love of cooking and skateboarding. After skate sessions, burgers became the pair&apos;s go to treat and soon they started collaborating on a burger aiming to  perfect an elevated version of the “backyard dad burger” they grew up on. The burger is composed of 100% full-blooded premium Texas wagyu beef from Iron Table Wagyu in Gatesville, Texas and seasoned with a signature NADC Burger seasoning.'
            center
          />
          <p className=" md:w-[570px] text-base !leading-relaxed text-body-color md:text-lg mx-auto text-center">
            The burger is topped with American cheese, secret sauce, onions, pickles and slightly tamed jalapeños.
          </p>

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
