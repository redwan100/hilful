import { Link } from "react-router-dom";
import Button from "../shared/Button";
import OurProcessgraphic from "../services/Graphic/OurProcessgraphic";
import Servicesgraphic from "../services/Graphic/Servicesgraphic";
import graphic from '../../assets/update/Graphic-Design/Graphic-Design-Templte.jpg'

const GraphicsDesign = () => {
  const navItems = [
    {
      label: "Design analysis       ",
      to: "#",
    },
    {
      label: "Presentation",
      to: "#",
    },
    {
      label: "Delivery",
      to: "#",
    },
    {
      label: "Revision",
      to: "#",
    }
  ];
  return (
    <section className="my-container">
      <header className="items-center grid-cols-4 gap-10 py-8 space-y-4 lg:grid lg:space-y-0 lg:py-20">
        <div className="col-span-2 space-y-4">
          <h3 className="text-3xl md:text-left font-semibold leading-tight lg:text-4xl text-justify">
            We Build Graphic Design Art to Solve Clients Business Challenges
          </h3>
          <p className="font-semibold text-start md:text-left">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <div className="flex justify-center md:justify-start"> <Button text="Request A Quote" /></div>
        </div>
        <ul className="col-span-2 flex items-center justify-end space-y-1 lg:space-y-1 hidden md:block">
          <img className="w-full" src={graphic} alt="" />
          <div className="flex flex-col	items-end">
            {navItems.map((item) => (
              <li key={item.label} className="text-lg font-bold ">
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </div>
        </ul>
      </header>
      <div>
        <OurProcessgraphic />
        <Servicesgraphic />
      </div>
    </section>
  );
};

export default GraphicsDesign;
