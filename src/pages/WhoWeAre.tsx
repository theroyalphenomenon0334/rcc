import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WhoWeAre.module.css";

const WhoWeAre: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
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
    <div className={styles.whoWeAre}>
      <div className={styles.frame}>
        <img className={styles.frameChild} alt="" src="/rectangle-59.svg" />
        <b className={styles.rcc}>RCC</b>
      </div>
      <div className={styles.whoWeAreChild} />
      <div className={styles.whoWeAreItem} />
      <div className={styles.frame1}>
        <b className={styles.ourPastor}>Our Pastor</b>
      </div>
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.vectorParent}>
            <img className={styles.frameItem} alt="" src="/rectangle-36.svg" />
            <b className={styles.rcc}>RCC</b>
          </div>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <img className={styles.frameInner} alt="" src="/vector-1.svg" />
          <div className={styles.whoWeAre1}>Who we are</div>
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
      </div>
      <div className={styles.frame4}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-70@2x.png"
        />
        <b className={styles.aboutUs}>About us</b>
        <div className={styles.restoreChurchWasContainer}>
          <p className={styles.restoreChurchWas}>
            Restore Church was founded by Late Pastor Yele Braithwaite on the
            4th of July 2015. This ministry came out of Victory Outreach which
            was pioneered in Nigeria by late Pastor Tele Braithwaite. The
            ministry preaches the world of God undiluted to both the saved and
            the unsaved. The ministry emphasizes on righteous living and
            holiness in every area of our lives
          </p>
          <p className={styles.restoreChurchWas}>
            5 The ministry believes totally in the Lordship of our Lord Jesus
            Christ,the death and resurrection of our Lord Jesus Christ and the
            second coming of Christ
          </p>
          <p className={styles.restoreChurchWas}>
            6 The ministry has organised outreaches to the drug addicts and
            ladies of the night in these areas
          </p>
          <p className={styles.restoreChurchWas}>
            O"Jezz club in Victoria Island
          </p>
          <p className={styles.restoreChurchWas}>
            The Bar beach in Victoria Island
          </p>
          <p className={styles.restoreChurchWas}>
            Shitta in the heart of Suru- lere
          </p>
          <p className={styles.restoreChurchWas}>Akala area in Mushin</p>
          <p className={styles.restoreChurchWas}>
            Outreach for the Hausa community in Sabo
          </p>
          <p className={styles.restoreChurchWas}>
            In all these outreaches,there were free medical consultations,
            distribution of palliatives and financial empowerment
          </p>
        </div>
        <div className={styles.btn}>
          <div className={styles.v}>v</div>
        </div>
      </div>
      <b className={styles.revYemisiAkande}>Rev Yemisi Akande</b>
      <div className={styles.heresAPeepContainer}>
        <p className={styles.restoreChurchWas}>
          Here's a peep into her background:
        </p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p className={styles.restoreChurchWas}>
          She studied Chemistry at the University of Lagos(B.Sc 1988). To
          broaden her scope, she took this further and bagged Diplomas in
          Computer Science (1992), Business Management (1998) and Theology
          (2001).
        </p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p className={styles.restoreChurchWas}>
          As a young lady with a bright future ahead Yemisi worked in various
          companies in the private sector for 9years. During her working career,
          she earned positions that exposed her to leading people, customer
          service and marketing.
        </p>
      </div>
      <div className={styles.in2001SheContainer}>
        <p className={styles.restoreChurchWas}>
          In 2001, she took the bull by the horn and left paid employment to
          establish her business-Aries Enterprises ; a marketing and general
          supplies company.
        </p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p className={styles.restoreChurchWas}>
          Yemisi Akande currently excels as an entrepreneur, where she provides
          a range of services such as supplies of essential commodities, events
          management services.
        </p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p
          className={styles.restoreChurchWas}
        >{`Following her passion to succeed at whatever she is doing, the business has continued to grow exponentially and it currently serves the large corporates, public sector and some private companies. `}</p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p className={styles.restoreChurchWas}>
          Presently Yemisi Akande is the :
        </p>
        <p className={styles.restoreChurchWas}>
          1. Interministerial Director Penticostal Fellowship of Nigeria Lagos
          Mainland women's wing
        </p>
        <p className={styles.restoreChurchWas}>
          2. The Vice President2 ELOVAS Foundation an international NGO
        </p>
        <p className={styles.restoreChurchWas}>
          3. The Assistant coordinator Penticostal fellowship of Nigeria Yaba
          Chapter women's wing
        </p>
        <p className={styles.restoreChurchWas}>
          4. The welfare officer Penticostal fellowship of Nigeria Yaba Chapter
        </p>
        <p className={styles.restoreChurchWas}>
          5. The APC coordinator in Sabo Yaba
        </p>
        <p className={styles.restoreChurchWas}>
          6. General Secretary MGHS 1975-1980 set.
        </p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p className={styles.restoreChurchWas}>
          She is the Lead Pastor of Restore Ministries and committed to
          Restoring hope to the hopeless.
        </p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p className={styles.restoreChurchWas}>
          Yemis Akande is devoted to charitable contributions and has displayed
          this at every opportunity . Here are some of her many contributions:
        </p>
        <p className={styles.restoreChurchWas}>&nbsp;</p>
        <p className={styles.restoreChurchWas}>
          • She has organised Medical outreaches for the less privileged and has
          rehabilitated some drug addicts in the shitta/ surulere environs in
          Lagos.
        </p>
        <p className={styles.restoreChurchWas}>
          • She is highly involved in the empowerment of women and the Youths
          around her
        </p>
        <p className={styles.restoreChurchWas}>
          • During covid 19 lockdown,she single handedly fed about 30women at
          least once a day during this period
        </p>
        <p className={styles.restoreChurchWas}>
          • She was able to empower about ten youths and some women financially
          during this period.
        </p>
      </div>
      <div className={styles.frame5}>
        <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
        <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
        <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
        <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
        <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
        <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
        <div className={styles.frame6}>
          <img className={styles.frameItem} alt="" src="/rectangle-591.svg" />
          <b className={styles.rcc}>RCC</b>
        </div>
        <div className={styles.frame7}>
          <div className={styles.contacts}>Contacts</div>
          <div className={styles.phone234803}>Phone: +234 803 723 1711</div>
          <div className={styles.emailRestoreministriesgmail}>
            Email: restoreministries@gmail.com
          </div>
          <div className={styles.address13McContainer}>
            <p className={styles.restoreChurchWas}>Address:</p>
            <p className={styles.restoreChurchWas}>
              13, Mc Ewen street, Sabo, Yaba, Lagos State.
            </p>
          </div>
        </div>
        <div className={styles.frame8}>
          <div className={styles.media1}>Media</div>
          <div className={styles.whatWeDo1}>What we do</div>
          <div className={styles.navigations}>Navigations</div>
          <div className={styles.home1}>Home</div>
          <div className={styles.whoWeAre2}>Who we are</div>
          <div className={styles.resource}>Resource</div>
          <div className={styles.giving1}>{`Giving `}</div>
        </div>
        <div className={styles.frame9}>
          <div className={styles.socials}>Socials</div>
          <div className={styles.serviceTimes}>Service Times</div>
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
          <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
          <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
          <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
          <img className={styles.image33Icon} alt="" src="/image-33@2x.png" />
          <img className={styles.image34Icon} alt="" src="/image-34@2x.png" />
          <div className={styles.sunday10Am}>Sunday: 10 am</div>
          <div className={styles.tuesday530Pm}>Tuesday: 5:30 pm</div>
          <div className={styles.thursday530Pm}>Thursday: 5:30 pm</div>
        </div>
      </div>
      <img className={styles.image42Icon} alt="" src="/image-42@2x.png" />
    </div>
  );
};

export default WhoWeAre;
