import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    window.open("https://maps.google.com");
  }, []);

  const onWhoWeAreClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWhatWeDoClick = useCallback(() => {
    navigate("/what-we-do");
  }, [navigate]);

  const onGivingTextClick = useCallback(() => {
    navigate("/giving");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  const onImage1IconClick = useCallback(() => {
    window.open("https://www.facebook.com");
  }, []);

  const onImage2IconClick = useCallback(() => {
    window.open("https://twitter.com");
  }, []);

  const onImage3IconClick = useCallback(() => {
    window.open("https://www.instagram.com");
  }, []);

  const onImage4IconClick = useCallback(() => {
    window.open("https://www.youtube.com");
  }, []);

  const onImage5IconClick = useCallback(() => {
    window.open("https://music.apple.com");
  }, []);

  const onImage12IconClick = useCallback(() => {
    window.open("https://www.tiktok.com");
  }, []);

  const onFrameContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameLinkClick = useCallback(() => {
    navigate("/mission");
  }, [navigate]);

  const onFrameLink1Click = useCallback(() => {
    navigate("/vision");
  }, [navigate]);

  const onBtnClick = useCallback(() => {
    navigate("/giving");
  }, [navigate]);

  const onBtnContainerClick = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  const onBtnContainer1Click = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  const onBtnContainer2Click = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  const onBtnContainer3Click = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  const onBtnContainer4Click = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  const onPhone234803Click = useCallback(() => {
    window.location.href = "tel:+2348037231711";
  }, []);

  const onEmailRestoreministriesgmailTextClick = useCallback(() => {
    window.location.href =
      "mailto:restoreminstries.com?subject=welcome, God will restore your lost years";
  }, []);

  const onAddress13McClick = useCallback(() => {
    window.open("https://www.maps.google.com");
  }, []);

  return (
    <div className={styles.home}>
      <img
        className={styles.homeChild}
        alt=""
        src="/rectangle-20@2x.png"
        onClick={onRectangleImageClick}
      />
      <div className={styles.youthExpression}>Youth Expression</div>
      <div className={styles.frame}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/rectangle-36.svg" />
          <b className={styles.rcc}>RCC</b>
        </div>
        <div className={styles.home1}>Home</div>
        <img className={styles.frameItem} alt="" src="/vector-12.svg" />
        <div className={styles.whoWeAre} onClick={onWhoWeAreClick}>
          Who we are
        </div>
        <div className={styles.whatWeDo} onClick={onWhatWeDoClick}>
          What we do
        </div>
        <div className={styles.giving} onClick={onGivingTextClick}>
          Giving
        </div>
        <div className={styles.media}>Media</div>
        <div className={styles.resources}>Resources</div>
        <button
          className={styles.liveWrapper}
          autoFocus={true}
          onClick={onFrameButtonClick}
        >
          <div className={styles.live}>Live</div>
        </button>
      </div>
      <div className={styles.frame1}>
        <img className={styles.frameInner} alt="" src="/rectangle-8@2x.png" />
        <div className={styles.rectangleDiv} />
        <b className={styles.theRestoreChurchContainer}>
          <p className={styles.theRestore}>{`The Restore `}</p>
          <p className={styles.theRestore}>Church Of God</p>
        </b>
        <div className={styles.iWillRestoreContainer}>
          <p className={styles.theRestore}>
            “I will restore to you the years that the swarming locust has eaten,
            the hopper, the destroyer, and the cutter.
          </p>
          <p className={styles.theRestore}> The great army sent among you.”</p>
        </div>
        <div className={styles.joel225}>Joel 2:25</div>
        <div className={styles.joinOurSocial}>
          Join Our Social media platform
        </div>
        <img
          className={styles.image1Icon}
          alt=""
          src="/image-1@2x.png"
          onClick={onImage1IconClick}
        />
        <img
          className={styles.image2Icon}
          alt=""
          src="/image-2@2x.png"
          onClick={onImage2IconClick}
        />
        <img
          className={styles.image3Icon}
          alt=""
          src="/image-3@2x.png"
          onClick={onImage3IconClick}
        />
        <img
          className={styles.image4Icon}
          alt=""
          src="/image-4@2x.png"
          onClick={onImage4IconClick}
        />
        <img
          className={styles.image5Icon}
          alt=""
          src="/image-5@2x.png"
          onClick={onImage5IconClick}
        />
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
        <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
        <img className={styles.image10Icon} alt="" src="/image-10@2x.png" />
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img
          className={styles.image12Icon}
          alt=""
          src="/image-12@2x.png"
          onClick={onImage12IconClick}
        />
        <input
          className={styles.frameInput}
          name="search"
          placeholder="find a center around you"
          type="text"
        />
      </div>
      <div
        className={styles.frame2}
        data-scroll-to="frameContainer"
        onClick={onFrameContainerClick}
      >
        <Link
          className={styles.ourMissionWrapper}
          to="/mission"
          onClick={onFrameLinkClick}
        >
          <div className={styles.ourMission}>Our Mission</div>
        </Link>
        <Link
          className={styles.ourVisionWrapper}
          to="/vision"
          onClick={onFrameLink1Click}
        >
          <div className={styles.ourMission}>Our Vision</div>
        </Link>
      </div>
      <div className={styles.frame3}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-11@2x.png"
        />
        <img className={styles.frameChild1} alt="" src="/rectangle-12@2x.png" />
        <div className={styles.paymentOfTitheContainer}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <div className={styles.joinOurServicesContainer}>
          <p className={styles.theRestore}>{`Join our services `}</p>
          <p className={styles.theRestore}>{`on all the social media `}</p>
          <p className={styles.theRestore}>platforms</p>
        </div>
        <div className={styles.liveService}>Live service</div>
        <div className={styles.giving1}>Giving</div>
        <button className={styles.btn} autoFocus={true} onClick={onBtnClick}>
          <div className={styles.learnMore}>Learn More</div>
        </button>
        <div className={styles.btn1} onClick={onBtnContainerClick}>
          <div className={styles.learnMore1}>Learn More</div>
        </div>
        <img className={styles.image13Icon} alt="" src="/image-13@2x.png" />
        <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
        <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
        <img className={styles.image14Icon} alt="" src="/image-14@2x.png" />
      </div>
      <div className={styles.frame4}>
        <div className={styles.paymentOfTitheContainer1}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <div className={styles.paymentOfTitheContainer2}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <b className={styles.everySunday}>Every Sunday</b>
        <b className={styles.am1200}>10:00 AM - 12:00 PM</b>
        <div className={styles.sundayService}>Sunday Service</div>
        <div className={styles.btn2} onClick={onBtnContainer1Click}>
          <div className={styles.ourMission}>Join Online</div>
        </div>
        <img className={styles.uilcalenderIcon} alt="" src="/uilcalender.svg" />
        <img
          className={styles.mdiclockOutlineIcon}
          alt=""
          src="/mdiclockoutline.svg"
        />
        <img
          className={styles.frameChild2}
          alt=""
          src="/rectangle-582@2x.png"
        />
      </div>
      <div className={styles.frame5}>
        <div className={styles.paymentOfTitheContainer3}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <div className={styles.paymentOfTitheContainer4}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <b className={styles.everyThursday}>Every Thursday</b>
        <b className={styles.pm}>5:30-7:00 PM</b>
        <div className={styles.prayerMeeting}>Prayer Meeting</div>
        <div className={styles.btn3} onClick={onBtnContainer2Click}>
          <div className={styles.ourMission}>Join Online</div>
        </div>
        <img
          className={styles.uilcalenderIcon1}
          alt=""
          src="/uilcalender.svg"
        />
        <img
          className={styles.mdiclockOutlineIcon1}
          alt=""
          src="/mdiclockoutline.svg"
        />
        <img className={styles.frameChild3} alt="" src="/rectangle-54@2x.png" />
      </div>
      <div className={styles.frame6}>
        <div className={styles.paymentOfTitheContainer5}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <div className={styles.paymentOfTitheContainer6}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <b className={styles.everyTuesday}>Every Tuesday</b>
        <b className={styles.pm1}>5:30-7:00 PM</b>
        <div className={styles.bibleStudy}>Bible Study</div>
        <div className={styles.btn4} onClick={onBtnContainer3Click}>
          <div className={styles.ourMission}>Join Online</div>
        </div>
        <img
          className={styles.uilcalenderIcon2}
          alt=""
          src="/uilcalender.svg"
        />
        <img
          className={styles.mdiclockOutlineIcon2}
          alt=""
          src="/mdiclockoutline.svg"
        />
        <img className={styles.frameChild2} alt="" src="/rectangle-55@2x.png" />
      </div>
      <div className={styles.frame7}>
        <div className={styles.paymentOfTitheContainer7}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <div className={styles.paymentOfTitheContainer8}>
          <p className={styles.theRestore}>Payment of Tithe and offering and</p>
          <p className={styles.theRestore}>
            all forms of dues for every service can be made here online
          </p>
        </div>
        <b className={styles.everySunday1}>Every Sunday</b>
        <b className={styles.am12001}>11:45 AM - 12:00 PM</b>
        <div className={styles.holyCommunion}>Holy Communion</div>
        <div className={styles.btn5} onClick={onBtnContainer4Click}>
          <div className={styles.ourMission}>Join Online</div>
        </div>
        <img
          className={styles.uilcalenderIcon3}
          alt=""
          src="/uilcalender1.svg"
        />
        <img
          className={styles.mdiclockOutlineIcon3}
          alt=""
          src="/mdiclockoutline1.svg"
        />
        <img className={styles.frameChild5} alt="" src="/rectangle-56@2x.png" />
      </div>
      <div className={styles.mapAndDirections}>Map and directions</div>
      <div className={styles.homeItem} />
      <div className={styles.homeInner} />
      <div className={styles.homeChild1} />
      <div className={styles.homeChild2} />
      <img className={styles.image13Icon1} alt="" src="/image-131@2x.png" />
      <div className={styles.checkOurYouth}>Check Our Youth site</div>
      <div className={styles.paymentOfTitheContainer9}>
        <p className={styles.theRestore}>Payment of Tithe and offering and</p>
        <p className={styles.theRestore}>
          all forms of dues for every service can be made here online
        </p>
      </div>
      <div className={styles.youthExpression1}>Youth Expression</div>
      <img className={styles.homeChild3} alt="" src="/rectangle-40.svg" />
      <img className={styles.homeChild4} alt="" src="/rectangle-41.svg" />
      <img className={styles.homeChild5} alt="" src="/rectangle-44.svg" />
      <img className={styles.homeChild6} alt="" src="/rectangle-41.svg" />
      <img className={styles.homeChild7} alt="" src="/rectangle-45.svg" />
      <img className={styles.homeChild8} alt="" src="/rectangle-43.svg" />
      <div className={styles.frame8}>
        <b className={styles.rcc1}>RCC</b>
        <div className={styles.contacts}>Contacts</div>
        <div className={styles.navigations}>Navigations</div>
        <div className={styles.socials}>Socials</div>
        <div className={styles.serviceTimes}>Service Times</div>
        <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image18Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image19Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image20Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image21Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image22Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image23Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image24Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image25Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image26Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image27Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.image28Icon} alt="" src="/image-17@2x.png" />
        <img className={styles.frameChild6} alt="" src="/rectangle-57.svg" />
        <div className={styles.phone234803} onClick={onPhone234803Click}>
          Phone: +234 803 723 1711
        </div>
        <div className={styles.home2}>Home</div>
        <div className={styles.whoWeAre1}>Who we are</div>
        <div className={styles.sunday10Am}>Sunday: 10 am</div>
        <div className={styles.tuesday530Pm}>Tuesday: 5:30 pm</div>
        <div className={styles.thursday530Pm}>Thursday: 5:30 pm</div>
        <div className={styles.whatWeDo1}>What we do</div>
        <div className={styles.giving2}>{`Giving `}</div>
        <div className={styles.media1}>Media</div>
        <div className={styles.resource}>Resource</div>
        <div
          className={styles.emailRestoreministriesgmail}
          onClick={onEmailRestoreministriesgmailTextClick}
        >
          Email: restoreministries@gmail.com
        </div>
        <div
          className={styles.address13McContainer}
          onClick={onAddress13McClick}
        >
          <p className={styles.theRestore}>Address:</p>
          <p className={styles.theRestore}>
            13, Mc Ewen street, Sabo, Yaba, Lagos State.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
