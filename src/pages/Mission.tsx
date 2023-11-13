import { FunctionComponent, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Mission.module.css";

const Mission: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWhoWeAreClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onWhatWeDoClick = useCallback(() => {
    navigate("/what-we-do");
  }, [navigate]);

  const onGivingClick = useCallback(() => {
    navigate("/giving");
  }, [navigate]);

  const onBtnClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  return (
    <div className={styles.mission}>
      <Link className={styles.vectorParent} to="/home">
        <img className={styles.frameChild} alt="" src="/rectangle-36.svg" />
        <b className={styles.rcc}>RCC</b>
      </Link>
      <div className={styles.homeParent} onClick={onFrameContainerClick}>
        <div className={styles.home}>Home</div>
        <img className={styles.frameItem} alt="" src="/vector-11.svg" />
      </div>
      <div className={styles.whoWeAre} onClick={onWhoWeAreClick}>
        Who we are
      </div>
      <div className={styles.whatWeDo} onClick={onWhatWeDoClick}>
        What we do
      </div>
      <Link className={styles.giving} to="/giving" onClick={onGivingClick}>
        Giving
      </Link>
      <div className={styles.media}>Media</div>
      <div className={styles.resources}>Resources</div>
      <img className={styles.missionChild} alt="" src="/rectangle-585@2x.png" />
      <div className={styles.missionItem} />
      <div className={styles.contacts}>Contacts</div>
      <div className={styles.navigations}>Navigations</div>
      <div className={styles.socials}>Socials</div>
      <div className={styles.serviceTimes}>Service Times</div>
      <a
        className={styles.image29}
        href="https://www.facebook.com"
        target="_blank"
      />
      <a
        className={styles.image30}
        href="https://twitter.com"
        target="_blank"
      />
      <a
        className={styles.image31}
        href="https://www.instagram.com"
        target="_blank"
      />
      <a
        className={styles.image32}
        href="https://www.youtube.com"
        target="_blank"
      />
      <a className={styles.image33} />
      <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
      <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
      <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
      <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <Link className={styles.vectorGroup} to="/home">
        <img className={styles.frameChild} alt="" src="/rectangle-591.svg" />
        <b className={styles.rcc}>RCC</b>
      </Link>
      <a className={styles.phone234803} href="tel:+2348037231711">
        Phone: +234 803 723 1711
      </a>
      <Link className={styles.home1} to="/home">
        Home
      </Link>
      <div className={styles.whoWeAre1}>Who we are</div>
      <div className={styles.sunday10Am}>Sunday: 10 am</div>
      <div className={styles.tuesday530Pm}>Tuesday: 5:30 pm</div>
      <div className={styles.thursday530Pm}>Thursday: 5:30 pm</div>
      <div className={styles.whatWeDo1}>What we do</div>
      <Link className={styles.giving1} to="/giving">{`Giving `}</Link>
      <div className={styles.media1}>Media</div>
      <div className={styles.resource}>Resource</div>
      <a
        className={styles.emailRestoreministriesgmail}
        href="mailto:restoreministries.com?subject=welcome, God bless you richly."
      >
        Email: restoreministries@gmail.com
      </a>
      <a
        className={styles.address13McContainer}
        href="https://map.google.com"
        target="_blank"
      >
        <p className={styles.address}>Address:</p>
        <p className={styles.address}>
          13, Mc Ewen street, Sabo, Yaba, Lagos State.
        </p>
      </a>
      <b className={styles.ourMission}>Our Mission</b>
      <blockquote className={styles.theMissionIsContainer}>
        <p className={styles.address}>
          The mission is to reach out to as many that are into drug addiction,
          prostitution and the souls that the enemy has held down. To depopulate
          the kingdom of hell and populate the kingdom of heaven
        </p>
      </blockquote>
      <button className={styles.btn} onClick={onBtnClick}>
        <div className={styles.home2}>Home</div>
      </button>
      <button
        className={styles.liveWrapper}
        autoFocus={true}
        onClick={onFrameButtonClick}
        data-animate-on-scroll
      >
        <div className={styles.live}>Live</div>
      </button>
    </div>
  );
};

export default Mission;
