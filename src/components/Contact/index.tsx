import SectionTitle from "../Common/SectionTitle";
import { Button } from "../ui/button";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className=" py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className=" flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >

              <SectionTitle
                title="Contact Us"
                paragraph="We love hearing from our customers. Please fill out the form below and we will get back to you as soon as we can."
                center
                width="665px"
              />
              <form className="mt-4" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="relative z-0 w-full mt-[40px] mb-8 group">
                  <input
                    type="text"
                    name="name"
                    className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-2 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-primary dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer mx-auto placeholder:px-2"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  ></label>
                </div>
                {/* End single block */}

                <div className="relative z-0 w-full mb-8 group">
                  <input
                    type="email"
                    name="email"
                    className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-2 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-primary dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer placeholder:px-2"
                    placeholder="Email"
                    id="user_email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  ></label>
                </div>
                {/* End single block */}

                <div className="relative z-0 w-full mb-8 group">
                  <textarea
                    name="message"
                    className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-2 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-primary dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer placeholder:px-2"
                    placeholder="Message"
                    id="message"
                    rows={5}
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  ></label>
                </div>
                {/* End single block */}

                <div className="mx-auto max-w-md sm:max-w-xl pt-10 flex justify-center">
                  <Button className={"primary"}>
                    <span className={"text-white relative z-[5]"}>Get In Touch</span>
                  </Button>
                </div>
                {/* End single block */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
