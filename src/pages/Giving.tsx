import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Giving.module.css";

const Giving: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/rcctv");
  }, [navigate]);

  const onHomeText2Click = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.giving}>
      <div className={styles.givingChild} />
      <div className={styles.frame}>
        <img className={styles.frameChild} alt="" src="/rectangle-583@2x.png" />
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.whoWeAre}>Who we are</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame4}>
          <div className={styles.whoWeAre}>What we do</div>
        </div>
      </div>
      <div className={styles.frame5}>
        <div className={styles.frame6}>
          <div className={styles.whoWeAre}>Giving</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame8}>
          <div className={styles.whoWeAre}>Media</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame10}>
          <div className={styles.whoWeAre}>Resources</div>
        </div>
      </div>
      <div className={styles.givingItem} />
      <div className={styles.frame11}>
        <div className={styles.frame12}>
          <b className={styles.rcc}>RCC</b>
        </div>
      </div>
      <div className={styles.frame13}>
        <div className={styles.frame14}>
          <div className={styles.contacts}>Contacts</div>
        </div>
      </div>
      <div className={styles.frame13}>
        <div className={styles.frame16}>
          <div className={styles.contacts}>Navigations</div>
        </div>
      </div>
      <div className={styles.frame13}>
        <div className={styles.frame18}>
          <div className={styles.contacts}>Socials</div>
        </div>
      </div>
      <div className={styles.frame19}>
        <div className={styles.frame18}>
          <div className={styles.contacts}>Service Times</div>
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame22}>
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame24}>
          <img className={styles.image29Icon} alt="" src="/image-30@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame26}>
          <img className={styles.image29Icon} alt="" src="/image-31@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame28}>
          <img className={styles.image29Icon} alt="" src="/image-32@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame30}>
          <img className={styles.image29Icon} alt="" src="/image-33@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame32}>
          <img className={styles.image29Icon} alt="" src="/image-34@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame34}>
          <img className={styles.image29Icon} alt="" src="/image-35@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame36}>
          <img className={styles.image29Icon} alt="" src="/image-36@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame38}>
          <img className={styles.image29Icon} alt="" src="/image-37@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame40}>
          <img className={styles.image29Icon} alt="" src="/image-38@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame42}>
          <img className={styles.image29Icon} alt="" src="/image-39@2x.png" />
        </div>
      </div>
      <div className={styles.frame21}>
        <div className={styles.frame44}>
          <img className={styles.image29Icon} alt="" src="/image-40@2x.png" />
        </div>
      </div>
      <img className={styles.frameIcon} alt="" src="/frame1.svg" />
      <div className={styles.frame45}>
        <div className={styles.frame46}>
          <div className={styles.phone234803}>Phone: +234 803 723 1711</div>
        </div>
      </div>
      <div className={styles.frame45}>
        <div className={styles.frame16}>
          <div className={styles.home}>Home</div>
        </div>
      </div>
      <div className={styles.frame49}>
        <div className={styles.frame16}>
          <div className={styles.whoWeAre1}>Who we are</div>
        </div>
      </div>
      <div className={styles.frame51}>
        <div className={styles.frame52}>
          <div className={styles.sunday10Am}>Sunday: 10 am</div>
        </div>
      </div>
      <div className={styles.frame53}>
        <div className={styles.frame52}>
          <div className={styles.tuesday530Pm}>Tuesday: 5:30 pm</div>
        </div>
      </div>
      <div className={styles.frame55}>
        <div className={styles.frame56}>
          <div className={styles.thursday530Pm}>Thursday: 5:30 pm</div>
        </div>
      </div>
      <div className={styles.frame57}>
        <div className={styles.frame58}>
          <div className={styles.whatWeDo1}>What we do</div>
        </div>
      </div>
      <div className={styles.frame59}>
        <div className={styles.frame16}>
          <div className={styles.giving2}>{`Giving `}</div>
        </div>
      </div>
      <div className={styles.frame61}>
        <div className={styles.frame62}>
          <div className={styles.giving2}>Media</div>
        </div>
      </div>
      <div className={styles.frame63}>
        <div className={styles.frame64}>
          <div className={styles.resource}>Resource</div>
        </div>
      </div>
      <div className={styles.frame65}>
        <div className={styles.frame66}>
          <div className={styles.emailRestoreministriesgmail}>
            Email: restoreministries@gmail.com
          </div>
        </div>
      </div>
      <div className={styles.frame67}>
        <div className={styles.frame66}>
          <div className={styles.emailRestoreministriesgmail}>
            <p className={styles.address}>Address:</p>
            <p className={styles.address}>
              13, Mc Ewen street, Sabo, Yaba, Lagos State.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frame69}>
        <div className={styles.frame70}>
          <b className={styles.forGodLoves}>For God loves a cheerful giver</b>
        </div>
      </div>
      <div className={styles.frame71}>
        <div className={styles.frame72}>
          <div className={styles.giveAndItContainer}>
            <p className={styles.address}>
              Give, and it will be given to you. A good measure, pressed down,
              shaken together, and running over will be poured into your lap.
              For with the measure you use, it will be measured back to you.”
            </p>
            <p className={styles.address}>Luke 6:38</p>
          </div>
        </div>
      </div>
      <div className={styles.frame73}>
        <div className={styles.frame74}>
          <Link className={styles.btn} to="/home">
            <div className={styles.home1}>Home</div>
          </Link>
        </div>
      </div>
      <div className={styles.frame75}>
        <div className={styles.frame76}>
          <div className={styles.frameItem} />
        </div>
      </div>
      <div className={styles.givingInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.givingChild1} />
      <div className={styles.givingChild2} />
      <div className={styles.frame77}>
        <div className={styles.frame78}>
          <img className={styles.image41Icon} alt="" src="/image-41@2x.png" />
        </div>
      </div>
      <div className={styles.frame79}>
        <div className={styles.frame80}>
          <b className={styles.restoreMinistries}>Restore Ministries</b>
        </div>
      </div>
      <div className={styles.frame79}>
        <div className={styles.frame82}>
          <div className={styles.name}>Name:</div>
        </div>
      </div>
      <div className={styles.frame83}>
        <div className={styles.frame80}>
          <b className={styles.b}>0123456789</b>
        </div>
      </div>
      <div className={styles.frame85}>
        <div className={styles.frame80}>
          <div className={styles.multiCurrencyAccount}>
            Multi currency account
          </div>
        </div>
      </div>
      <div className={styles.frame87}>
        <div className={styles.frame88}>
          <button
            className={styles.liveWrapper}
            autoFocus={true}
            onClick={onFrameButtonClick}
          >
            <div className={styles.live}>Live</div>
          </button>
        </div>
      </div>
      <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
      <div className={styles.home2} onClick={onHomeText2Click}>
        Home
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
      <div className={styles.frame89}>
        <b className={styles.rcc1}>RCC</b>
      </div>
    </div>
  );
};

export default Giving;
