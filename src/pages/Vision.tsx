import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Vision.module.css";

const Vision: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

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

  return (
    <div className={styles.vision}>
      <div className={styles.vectorParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-36.svg" />
        <b className={styles.rcc}>RCC</b>
      </div>
      <div className={styles.homeParent} onClick={onFrameContainer1Click}>
        <div className={styles.home}>Home</div>
        <img className={styles.frameItem} alt="" src="/vector-11.svg" />
      </div>
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
      <img className={styles.visionChild} alt="" src="/rectangle-584@2x.png" />
      <div className={styles.visionItem} />
      <b className={styles.rcc1}>RCC</b>
      <div className={styles.contacts}>Contacts</div>
      <div className={styles.navigations}>Navigations</div>
      <div className={styles.socials}>Socials</div>
      <div className={styles.serviceTimes}>Service Times</div>
      <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
      <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
      <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
      <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
      <img className={styles.image33Icon} alt="" src="/image-33@2x.png" />
      <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
      <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
      <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
      <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
      <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
      <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
      <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
      <img className={styles.visionInner} alt="" src="/rectangle-591.svg" />
      <div className={styles.phone234803}>Phone: +234 803 723 1711</div>
      <div className={styles.home1}>Home</div>
      <div className={styles.whoWeAre1}>Who we are</div>
      <div className={styles.sunday10Am}>Sunday: 10 am</div>
      <div className={styles.tuesday530Pm}>Tuesday: 5:30 pm</div>
      <div className={styles.thursday530Pm}>Thursday: 5:30 pm</div>
      <div className={styles.whatWeDo1}>What we do</div>
      <div className={styles.giving1}>{`Giving `}</div>
      <div className={styles.media1}>Media</div>
      <div className={styles.resource}>Resource</div>
      <div className={styles.emailRestoreministriesgmail}>
        Email: restoreministries@gmail.com
      </div>
      <div className={styles.address13McContainer}>
        <p className={styles.address}>Address:</p>
        <p className={styles.address}>
          13, Mc Ewen street, Sabo, Yaba, Lagos State.
        </p>
      </div>
      <b className={styles.ourVision}>Our Vision</b>
      <div className={styles.restoreChurchOfContainer}>
        <p className={styles.address}>
          Restore church of Christ, believes in the Lordship of the Lord Jesus
          Christ. We believe in the saving grace of the Lord Jesus Christ. We
          believe in the Trinity, Baptism by immersion, living a righteous life,
          making Jesus Christ our standard and looking forward to the second
          coming of Christ
        </p>
      </div>
      <div className={styles.btn}>
        <div className={styles.home}>Home</div>
      </div>
      <button
        className={styles.liveWrapper}
        autoFocus={true}
        onClick={onFrameButtonClick}
      >
        <div className={styles.live}>Live</div>
      </button>
    </div>
  );
};

export default Vision;
