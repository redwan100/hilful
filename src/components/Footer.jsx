import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-navBg pt-8 mt-8">
      <div className="my-container flex flex-wrap gap-5 justify-between">
        <div className="text-zinc-100 space-y-4">
          <h2 className="text-2xl font-semibold">Lets talk🤙</h2>

          <div className="text-zinc-200 space-y-2">
            <p className="flex items-center gap-2">
              <BsTelephone /> +8801976243616
            </p>
            <p className=" ">
              <Link to="https://wa.me/01976243616" className="cursor-pointer flex items-center gap-3" target="_blank">
                <AiOutlineWhatsApp size={18} />
                <Link to="https://wa.me/01976243616" target="_blank">01976243616</Link>
              </Link>
            </p>
            <p className=" ">
              <Link to="mailto:khidmahit2023@gmail.com" className="cursor-pointer flex items-center gap-3" target="_blank">
                <MdOutlineMailOutline size={18} />
                <Link to="mailto:khidmahit2023@gmail.com" target="_blank">khidmahit2023@gmail.com</Link>
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <BiMap /> Tongibari, Munshiganj, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="text-zinc-100 flex flex-col space-y-2  capitalize font-medium">
          <Link to={"/"}>home</Link>
          <Link to={"/"}>service</Link>
          <Link to={"/about-us"}>company</Link>
        </div>

        <div className="text-zinc-100 flex flex-col space-y-2  capitalize ">
          <Link to={"/"}>technical support</Link>
          <Link to={"/"}>development</Link>
          <Link to={"/"}>technology information</Link>
          <Link to={"/"}>testing</Link>
          <Link to={"/"}>consulting</Link>
        </div>
      </div>

      <p className="text-zinc-200 text-center font-semibold  py-3">
        &copy; {new Date().getFullYear()} copy rights. All right reserved by
        <span className="font-bold text-yellow-400"> khidmah it</span>
      </p>
    </div>
  );
};

export default Footer;
