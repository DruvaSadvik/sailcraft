import React from 'react'

import DangerousHTML from 'dangerous-html/react'

import projectStyles from './style.css'
import styles from './style.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <section className={styles['hero']}>
        <div className={styles['background']}>
          <img
            alt="image"
            src="/circle-background.svg"
            className={styles['image']}
          />
          <img
            alt="image"
            src="/line-background.svg"
            className={styles['image01']}
          />
        </div>
        <header data-thq="thq-navbar" className={styles['navbar']}>
          <h2 className={styles['text']}>SC</h2>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className={styles['desktop-menu']}
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className={styles['nav']}
            >
              <span className={projectStyles['nav-link']}>Home</span>
              <span className={projectStyles['nav-link']}>Contact</span>
              <span className={projectStyles['nav-link']}>Office Space</span>
              <span className={projectStyles['nav-link']}>
                <span>Locations</span>
                <br></br>
              </span>
              <span className={projectStyles['nav-link']}>Careers</span>
              <span className={projectStyles['nav-link']}>About Us</span>
            </nav>
            <button className={projectStyles['button']}>
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className={styles['burger-menu']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className={styles['nav1']}
            >
              <div className={styles['container1']}>
                <h2 className={styles['text04']}>OnConf</h2>
                <div data-thq="thq-close-menu" className={styles['menu-close']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className={styles['nav2']}
              >
                <span
                  className={` ${projectStyles['nav-link']} ${styles['text05']} `}
                >
                  About
                </span>
                <span
                  className={` ${projectStyles['nav-link']} ${styles['text06']} `}
                >
                  Features
                </span>
                <span
                  className={` ${projectStyles['nav-link']} ${styles['text07']} `}
                >
                  Pricing
                </span>
                <span
                  className={` ${projectStyles['nav-link']} ${styles['text08']} `}
                >
                  Team
                </span>
                <span
                  className={` ${projectStyles['nav-link']} ${styles['text09']} `}
                >
                  Blog
                </span>
              </nav>
              <div className={styles['button-container']}>
                <button
                  className={` ${styles['login']} ${projectStyles['button']} `}
                >
                  Login
                </button>
                <button
                  className={` ${projectStyles['button']} ${styles['register1']} `}
                >
                  Register
                </button>
              </div>
              <div className={styles['icon-group']}>
                <div className={styles['icons']}>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className={styles['icon06']}
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon08']}
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className={styles['icon10']}
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/quote-background.svg"
              className={styles['background1']}
            />
          </div>
        </header>
        <div className={styles['hero-content']}>
          <h1 className={styles['text10']}>     Welcome to SailCraft</h1>
          <div className={styles['caption']}>
            <button
              className={` ${projectStyles['button-style-1']} ${projectStyles['button']} ${styles['register2']} `}
            >
              <span className={styles['text11']}>Learn More</span>
            </button>
            <p className={styles['caption1']}>Lorem om nisty ahdsp ajbsu</p>
          </div>
        </div>
      </section>
      <section className={styles['notes']}>
        <div className={styles['first']}>
          <div data-aos="fade-up-right" className={styles['content']}>
            <h2 className={styles['header']}>About Us</h2>
            <div className={styles['list']}>
              <div className={styles['note']}>
                <div className={styles['point']}></div>
                <p className={styles['text12']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className={styles['note1']}>
                <div className={styles['point1']}></div>
                <p className={styles['text13']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHdvcmt8ZW58MHx8fHwxNjg0OTg0MTA1fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
            className={` ${styles['image02']} ${projectStyles['image-notes']} `}
          />
        </div>
        <div className={styles['second']}>
          <div data-aos="fade-up-left" className={styles['content1']}>
            <h2 className={styles['header1']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <button
              className={` ${projectStyles['button']} ${projectStyles['button-style-2']} ${styles['register3']} `}
            >
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img
            alt="image"
            src="/notes-2-1400w.png"
            className={projectStyles['image-notes']}
          />
        </div>
      </section>
      <section className={styles['quote']}>
        <div className={styles['content2']}>
          <h2 className={styles['quoted']}>
            “I love lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliquaation
            ullamco 100%.”
          </h2>
          <div className={styles['author']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1607957159143-de3859adca2d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxwb3RyYWl0fGVufDB8fHx8MTY3MTE5ODQwMQ&amp;ixlib=rb-4.0.3&amp;w=200"
              className={styles['icon14']}
            />
            <div className={styles['details']}>
              <span className={styles['name']}>Andy Smith</span>
              <span className={styles['from']}>(Founder OnConf)</span>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/quote-background.svg"
          className={styles['background2']}
        />
        <img
          alt="image"
          src="/quote-background.svg"
          className={styles['background3']}
        />
      </section>
      <section className={styles['sponsors']}>
        <div className={styles['header2']}>
          <div className={styles['section-numeral']}>
            <div className={styles['divide']}></div>
            <p className={styles['text15']}>03</p>
          </div>
          <div data-aos="fade-right" className={styles['heading']}>
            <h2 className={styles['title']}>Amenities</h2>
            <p className={styles['caption2']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className={styles['brands']}>
          <div className={projectStyles['brand']}>
            <img alt="image" src="/brand-1.svg" className={styles['image04']} />
          </div>
          <div className={` ${projectStyles['brand']} ${styles['brand1']} `}>
            <img alt="image" src="/brand-2.svg" className={styles['image05']} />
          </div>
          <div className={` ${projectStyles['brand']} ${styles['brand2']} `}>
            <img alt="image" src="/brand-3.svg" className={styles['image06']} />
          </div>
          <div className={` ${styles['brand3']} ${projectStyles['brand']} `}>
            <img alt="image" src="/brand-4.svg" className={styles['image07']} />
          </div>
          <div className={` ${styles['brand4']} ${projectStyles['brand']} `}>
            <img alt="image" src="/brand-5.svg" className={styles['image08']} />
          </div>
          <div className={` ${styles['brand5']} ${projectStyles['brand']} `}>
            <img alt="image" src="/brand-6.svg" className={styles['image09']} />
          </div>
          <div className={` ${styles['brand6']} ${projectStyles['brand']} `}>
            <img alt="image" src="/brand-7.svg" className={styles['image10']} />
          </div>
          <div className={` ${styles['brand7']} ${projectStyles['brand']} `}>
            <img alt="image" src="/brand-8.svg" className={styles['image11']} />
          </div>
        </div>
      </section>
      <section className={styles['why']}>
        <div className={styles['header3']}>
          <div className={styles['section-numeral1']}>
            <div className={styles['divide1']}></div>
            <p className={styles['text16']}>04</p>
          </div>
          <div data-aos="fade-right" className={styles['heading1']}>
            <h2 className={styles['title1']}>Why SailCraft</h2>
            <p className={styles['caption3']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className={styles['brands1']}>
          <div className={styles['row']}>
            <div className={styles['item']}>
              <img alt="image" src="/why-1.svg" className={styles['image12']} />
              <div className={styles['details1']}>
                <h3 className={styles['title2']}>Networking</h3>
                <p className={styles['description']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className={styles['item1']}>
              <img alt="image" src="/why-2.svg" className={styles['image13']} />
              <div className={styles['details2']}>
                <h3 className={styles['title3']}>Learning</h3>
                <p className={styles['description1']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className={styles['item2']}>
              <img alt="image" src="/why-3.svg" className={styles['image14']} />
              <div className={styles['details3']}>
                <h3 className={styles['title4']}>Developing</h3>
                <p className={styles['description2']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['subscribe']}>
        <div className={styles['main']}>
          <h2 className={styles['header4']}>Drop your queirs</h2>
          <div className={styles['content3']}>
            <div className={styles['inputs']}>
              <input
                type="text"
                required
                placeholder="Name *"
                autoComplete="name"
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <input
                type="email"
                required
                placeholder="Email *"
                autoComplete="email"
                className={` ${styles['textinput1']} ${projectStyles['input']} `}
              />
            </div>
            <span>Message</span>
            <input
              type="text"
              className={` ${styles['textinput2']} ${projectStyles['input']} `}
            />
            <span className={styles['text18']}>
              By submitting, you agree to receive email communications from
              OnConf, including upcoming promotions and discounted tickets,
              news, and access to exclusive invite-only events.
            </span>
            <button
              className={` ${styles['button']} ${projectStyles['button']} `}
            >
              <span>
                <span>Send</span>
                <br></br>
              </span>
            </button>
          </div>
        </div>
      </section>
      <footer className={styles['footer']}>
        <h1 className={styles['text22']}>Get in Touch</h1>
        <div className={styles['content4']}>
          <div className={styles['details4']}>
            <h2 className={styles['title5']}>OnConf</h2>
            <p className={styles['description3']}>
              Product Calgary brings professionals together to connect, learn
              from each other, find opportunities, and find talent. We started
              as a meetup and have grown to be Alberta’s largest Product
              Management community.
            </p>
          </div>
          <span className={styles['text23']}>Sailcraft.com</span>
          <div className={styles['socials']}>
            <img
              alt="image"
              src="/linkedin.svg"
              className={projectStyles['social']}
            />
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link6']}
            >
              <img
                alt="image"
                src="/instagram.svg"
                className={` ${styles['image16']} ${projectStyles['social']} `}
              />
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className={styles['link7']}
            >
              <img
                alt="image"
                src="/twitter.svg"
                className={` ${styles['image17']} ${projectStyles['social']} `}
              />
            </a>
          </div>
          <span className={styles['text24']}>
            <span>           +91  9999999999</span>
            <br></br>
            <br></br>
          </span>
          <span className={styles['text28']}>
            <span>
                                                                               
                                   
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text30']}>
              Copyright © 2022 Novel Office. All rights reserved.Privacy-Policy,
              T&amp;C
            </span>
            <br></br>
            <br></br>
            <span>
                                                                               
                               
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text34']}> </span>
            <span className={styles['text35']}>
              Vibgyor Net Connections | For any complaints please write to
              legal@noveloffice.in
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span>
              Novel Office does not make any representation regarding the
              suitability of the opportunities that appear on the Website.
              Nothing on the Website should be construed as investment,
              business, legal or tax advice or constitutes an offer for service
              or assistance with investment in real estate assets. Listing of
              details relating to the opportunities on the Website or any
              content contained on the Website does not constitute an offer by
              Novel Office to sell, solicit or make an offer to participate in
              the opportunities. No information or content available on the
              Website should be construed as a solicitation of an offer to buy
              or sell any property. Any decision to make direct or indirect
              investments in real estate assets involves significant risks
              including risk of loss of capital, and all such decisions should
              be made only after seeking independent legal, business and tax
              advice. No Governmental Agency nor Novel Office guarantee or
              assure any returns to any person using the Website.
            </span>
            <br></br>
            <br></br>
          </span>
          <svg viewBox="0 0 1024 1024" className={styles['icon15']}>
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className={styles['icon17']}>
            <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className={styles['icon19']}>
            <path d="M854 656q18 0 30 12t12 30v148q0 50-42 50-298 0-512-214t-214-512q0-42 50-42h148q18 0 30 12t12 30q0 78 24 150 8 26-10 44l-82 72q92 192 294 290l66-84q12-12 30-12 10 0 14 2 72 24 150 24z"></path>
          </svg>
          <span className={styles['text42']}>sailcarft.gmail.com</span>
        </div>
      </footer>
      <div>
        <DangerousHTML
          html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
        ></DangerousHTML>
      </div>
      <div>
        <DangerousHTML
          html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
