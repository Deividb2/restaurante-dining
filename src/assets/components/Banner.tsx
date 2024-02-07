import { Link } from "react-router-dom";
import ChefeBanner from "../../../public/imgs/chefeBanner.jpg";
import GaleryImg1 from "../../../public/imgs/galeryImg1.jpg";
import GaleryImg2 from "../../../public/imgs/galeryImg2.jpg";
import GaleryImg3 from "../../../public/imgs/galeryImg3.jpg";
import GaleryImg4 from "../../../public/imgs/galeryImg4.jpg";

export default function Banner() {
  return (
    <>
      <section className="flex flex-col mb-5 md:mb-0 md:flex-row md:justify-between lg:pr-36">
        <div className="flex flex-col gap-8 pl-6 pr-4 py-5 md:pl-12 lg:pl-20 xl:gap-10">
          <h2 className="flex flex-col font-bold text-5xl xl:text-7xl">
            <span className="text-red-600">Jantar </span>
            No Lago
          </h2>
          <p className="max-w-[30rem] xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            sint, explicabo optio ullam pariatur quam dicta fuga voluptate
            mollitia tenetur deserunt atque dolore cumque itaque nihil molestiae
            maiores quos perspiciatis.
          </p>
          <Link
            to="/cardapio"
            className="py-3 px-8 rounded-full bg-red-600 text-white font-semibold self-start
                        md:hover:pr-12 transition-[padding-right] delay-75 ease"
          >
            VER MENU
          </Link>
        </div>

        <div
          className="rounded-full bg-no-repeat bg-cover self-center w-[18rem] h-[18rem] md:w-[25rem] md:h-[20rem]
                    lg:w-[30rem] lg:h-[25rem] xl:w-[31rem] xl:h-[30rem]"
          style={{ backgroundImage: `url(${ChefeBanner})` }}
        ></div>
      </section>

      <section className="hidden md:flex justify-center gap-3 flex-wrap my-10 lg:mt-[100px] md:mb-20">
        <Imgs path={GaleryImg1} />
        <Imgs path={GaleryImg2} />
        <Imgs path={GaleryImg3} />
        <Imgs path={GaleryImg4} />
      </section>
    </>
  );
}

interface Images {
  path: string;
}

const Imgs = (props: Images) => {
  return (
    <div
      className="w-[15rem] h-[14rem] bg-no-repeat bg-cover bg-center hover:scale-105 hover:object-cover"
      style={{ backgroundImage: `url(${props.path})` }}
    ></div>
  );
};
