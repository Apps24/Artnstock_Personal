import React from "react";
import WeTheArtnstockers from "../../assets/images/FooterSubComp/WeTheArtnstockers.png";
import Wallpaper from "../../assets/images/FooterSubComp/Wallpaper.png";
import OnlineVougue from "../../assets/images/FooterSubComp/OnlineVogue.png";
import FreshInflux from "../../assets/images/FooterSubComp/FreshInflux.png";
import Auction from "../../assets/images/FooterSubComp/Auction.png";
import Certificate1 from "../../assets/images/FooterSubComp/Certificate1.png";
import Certificate2 from "../../assets/images/FooterSubComp/Certificate2.png";
import Certificate3 from "../../assets/images/FooterSubComp/Certificate3.png";
import TeamBanner from "../../assets/images/FooterSubComp/TeamBanner.png";

const artnstockers = [
  {
    img: "",
    name: "Name 1",
    desc: "Lorem ipsum dolor",
    desc1:
      "We the Artnstockers are Rockingly bonded but Strickingly different, in creative bridging. Our (Rockstars) provide you the choice of pick-n-choosing apt to satiating your finicky taste of Art, Photos, Footages, Music, Templates and Products. And for you our Contributors of all kinds to come forth get explored, appreciated and sold!!!",
    desc2:
      "For your creative ability and the magic you create in building the balance within you and your creative surrounding!",
  },
  {
    img: "",
    name: "Name 2",
    desc: "Lorem ipsum dolor",
    desc1:
      "We the Artnstockers are Rockingly bonded but Strickingly different, in creative bridging. Our (Rockstars) provide you the choice of pick-n-choosing apt to satiating your finicky taste of Art, Photos, Footages, Music, Templates and Products. And for you our Contributors of all kinds to come forth get explored, appreciated and sold!!!",
    desc2:
      "For your creative ability and the magic you create in building the balance within you and your creative surrounding!",
  },
  {
    img: "",
    name: "Name 3",
    desc: "Lorem ipsum dolor",
    desc1:
      "We the Artnstockers are Rockingly bonded but Strickingly different, in creative bridging. Our (Rockstars) provide you the choice of pick-n-choosing apt to satiating your finicky taste of Art, Photos, Footages, Music, Templates and Products. And for you our Contributors of all kinds to come forth get explored, appreciated and sold!!!",
    desc2:
      "For your creative ability and the magic you create in building the balance within you and your creative surrounding!",
  },
  {
    img: "",
    name: "Name 4",
    desc: "Lorem ipsum dolor",
    desc1:
      "We the Artnstockers are Rockingly bonded but Strickingly different, in creative bridging. Our (Rockstars) provide you the choice of pick-n-choosing apt to satiating your finicky taste of Art, Photos, Footages, Music, Templates and Products. And for you our Contributors of all kinds to come forth get explored, appreciated and sold!!!",
    desc2:
      "For your creative ability and the magic you create in building the balance within you and your creative surrounding!",
  },
];

const Team = () => {
  return (
    <>
      <div className="wrapper">
        <main>
          <div
            className="hero"
            style={{
              backgroundImage: `url(${TeamBanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="z-50  flex justify-center text-center text-[#ffffff]">
              <div className="mt-[63px] mb-[68px]">
                <p className="text-[75px] text-[#333333] font-semibold leading-[1]">
                  TEAM
                </p>
                <p className="text-[14px] text-[#333333] ">
                  Join us! We are a thriving artist community dedicated to
                  supporting one another <br />
                  with InVogue contributors which matches our mission
                </p>
                <p className="text-[18px] text-[#333333] font-medium">
                  Passion is Vision
                </p>
              </div>
            </div>
          </div>
          <p className="text-[#757575] text-[12px] text-center my-[30px] leading-[0]">
            Artnstock / Team
          </p>
          <div className="flex justify-center gap-[30px]">
            <img src={WeTheArtnstockers} alt="" />
            <div className="text-[14px] text-[#757575]">
              <p>
                We the Artnstockers are Rockingly bonded but Strickingly
                different, in <br /> creative bridging.
              </p>

              <p className="my-[23px]">
                Our (Rockstars) provide you the choice of pick-n-choosing apt to{" "}
                <br />
                satiating your finicky taste of Art, Photos, Footages, Music,
                Templates <br /> and Products. And for you our Contributors of
                all kinds to come forth get <br /> explored, appreciated and
                sold!!!
              </p>

              <p>
                For your creative ability and the magic you create in building
                the balance <br /> within you and your creative surrounding!
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div>
              {artnstockers.map((item) => {
                return (
                  <div className="w-w930">
                    <div className="hrLine w-[100%] bg-[#efefef]"></div>
                    <div className="flex justify-center gap-[30px]">
                      {/* <img src={} alt="" /> */}
                      <div className="w-[450px] h-[450px] bg-[#f5f5f7] rounded-2xl"></div>
                      <div className="w-[450px]">
                        <p className="text-[38px] text-[#333333] mb-3 font-medium leading-[0.9]">
                          {item.name}
                        </p>
                        <p className="text-[12px] text-[#757575] leading-[0] my-[13px]">
                          {item.desc}
                        </p>
                        <p className="text-[14px] text-[#757575] leading-[1.3] mt-[10px]">
                          {item.desc1}
                        </p>
                        <p className="text-[14px] text-[#757575] leading-[1.3] mt-7">
                          {item.desc2}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t-2 border-[#efefef] py-[30px] mt-[50px]">
            <div
              className="flex justify-center
              "
            >
              <p className="mr-[50px]">
                <img src={Wallpaper} alt="" />
              </p>
              <p className="border-x-2 border-[#efefef] px-[50px]">
                <img src={OnlineVougue} alt="" />
              </p>
              <p className="border-r-2 border-[#efefef] px-[50px]">
                <img src={FreshInflux} alt="" />
              </p>
              <p className="ml-[50px]">
                <img src={Auction} alt="" />
              </p>
            </div>
          </div>
          <div className="bg-[#f5f5f7] py-[15px]">
            <div className="flex justify-center gap-[18px]">
              <p>
                <img src={Certificate1} alt="" />
              </p>
              <p>
                <img src={Certificate2} alt="" />
              </p>
              <p>
                <img src={Certificate3} alt="" />
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Team;
