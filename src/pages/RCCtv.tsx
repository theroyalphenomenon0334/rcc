import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RCCtv.module.css";

const RCCtv: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onWhoWeAreClick = useCallback(() => {
    navigate("/what-we-do");
  }, [navigate]);

  const onWhatWeDoClick = useCallback(() => {
    navigate("/what-we-do");
  }, [navigate]);

  const onGivingTextClick = useCallback(() => {
    navigate("/giving");
  }, [navigate]);

  return (
    <div className={styles.rcctv}>
      <img className={styles.rcctvChild} alt="" src="/rectangle-581@2x.png" />
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
      <div className={styles.rcctvItem} />
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
      <img className={styles.rcctvInner} alt="" src="/rectangle-591.svg" />
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
      <div className={styles.btn}>
        <div className={styles.home}>Get a reminder</div>
      </div>
      <button className={styles.liveWrapper} autoFocus={true}>
        <div className={styles.live}>Live</div>
      </button>
      <b className={styles.keysToRecovering}>
        Keys To recovering from your Enemies
      </b>
      <b className={styles.ourRecentSermons}>our recent sermons</b>
      <div className={styles.nextServiceComesContainer}>
        <p className={styles.address}>Next service comes up</p>
        <p className={styles.address}>2 Days: 23HRS: 24 MINS: 12 SECS</p>
      </div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-582@2x.png"
      />
      <div className={styles.pastorYemisiAkande}>
        Pastor Yemisi Akande is a vessel God is using in the end time to teach
        people about God’s Kingdom and how to remain fervent for christ till he
        comes.
      </div>
      <div className={styles.seeMore}>See more</div>
      <div className={styles.btn1}>
        <div className={styles.home}>Download</div>
      </div>
      <div className={styles.btn2}>
        <div className={styles.home}>Share</div>
      </div>
      <img className={styles.polygonIcon} alt="" src="/polygon-1.svg" />
      <img className={styles.rcctvChild1} alt="" src="/polygon-2.svg" />
    </div>
  );
};

export default RCCtv;
