import React from "react";
import YouTube from "react-youtube";
import "./sports.css";
import "../components/HomeFeed/style.css";
import "../components/HomeFeed/w3.css";

const SportsPage = () => {
  const opts = {
    height: "550",
    width: "1000",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <div className="rightcolumn">
        <div className="card">
          <h2>Top Stories</h2>
          <div className="w3-display-container w3-text-white">
            <img
              src={require("../images/uvzct5amalrwq0dpwbxa.webp")}
              alt="Lights"
              style={{ width: "100%" }}
            />
            {/* <div class="w3-display-bottommiddle w3-container"><p>Bottom Middle</p></div> */}
          </div>
          <p style={{ fontSize: "25px" }}>
            <b>
              Ye, Lil Uzi Vert, and Steve Lacy Show Off New Matching Tattoos{" "}
            </b>
          </p>
        </div>
        <div className="card">
          <div className="w3-display-container w3-text-white">
            <img
              src={require("../images/breakfast-club-hosts.jpg")}
              alt="Lights"
              style={{ width: "100%" }}
            />
            {/* <div class="w3-display-bottommiddle w3-container"><p>Bottom Middle</p></div> */}
          </div>
          <p style={{ fontSize: "25px" }}>
            <b>
              Angela Yee Leaving ‘The Breakfast Club’ to Host Her Own Show,
              Charlamagne tha God and DJ Envy Will Remain (UPDATE)
            </b>
          </p>
        </div>
        <div className="card">
          <div className="w3-display-container w3-text-white">
            <img
              src={require("../images/asenjislzhyhq1diqwjw.webp")}
              alt="Lights"
              style={{ width: "100%" }}
            />
            {/* <div class="w3-display-bottommiddle w3-container"><p>Bottom Middle</p></div> */}
          </div>
          <p style={{ fontSize: "25px" }}>
            <b>
              Jim Carrey Told The Weeknd He Didn’t Want to Collaborate on ‘Dawn
              FM’ at First
            </b>
          </p>
        </div>
        <div className="card">
          <h3>Popular Articles</h3>
          <div className="fakeimg">
            <a href="*">
              <p>
                <b>
                  Fans Share Their Favorite ‘Breakfast Club’ Memories Amid Word
                  of Angela Yee Leaving Show
                </b>
              </p>
            </a>
          </div>
          <div className="fakeimg">
            <a href="">
              <p>
                <b>
                  {" "}
                  Skincare Advisor Michelle Castro Found Her Tribe While Finding
                  Her Regimen
                </b>
              </p>
            </a>
          </div>
          <div className="fakeimg">
            <a href="">
              <p>
                <b>
                  {" "}
                  Royce Da 5′9 Reflects on Falling Out With Lupe Fiasco, Says He
                  Doesn’t ‘Feel Good About’ Calling Him ‘a B*tch’{" "}
                </b>
              </p>
            </a>
          </div>
        </div>
      </div>
      <section className="row">
        <div className="leftcolumn">
          <div className="card">
            <h1 className="MainHeader">
              Trevon Diggs on His Critics: ‘They Don’t Know What They’re Talking
              About’
            </h1>

            <div className="author-name">
              <b>SPORTS</b> |{" "}
              <a href="https://twitter.com/Kameron_Hay">
                <span className="type">By Kameron Hay</span>
              </a>
              <time className="datetime">Aug 10,2022</time>
            </div>
            <div className="author-bio"></div>

            <div className="header-img">
              <img
                src="https://images.complex.com/complex/images/c_crop,h_2214,w_3936,x_0,y_60/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/adu8d5e9lq7ws074npcv/trevon-diggs-nfl?fimg-ssr-default"
                alt="trevon diggs"
              />
            </div>
            <figcaption className="header-caption">
              Image via Getty/Cooper Neill
            </figcaption>
            <div className="article-body-main">
              <div className="article-copy clearfix">
                <p>
                  Playing for the Dallas Cowboys comes with heightened
                  expectations, being under the microscope of the national media
                  and drawing the ire of opposing fans due to how large the
                  brand of “America’s Team” is. For Pro Bowl cornerback Trevon
                  Diggs, that pressure doesn’t faze him.&nbsp;
                </p>
                <p>
                  Diggs put together a dominant 2021 campaign that saw him
                  record 11 interceptions, the most in a single season since
                  Champ Bailey tallied 10 in the 2006 NFL season. With a
                  historic season in 2021 comes more eyes in 2022 and people are
                  ready to see whether he can duplicate a record-setting year.
                  Even with his numbers in 2021, there was some criticism for
                  Diggs on his ability to cover but Diggs will not even
                  entertain that banter.
                </p>
                <p>
                  “I don’t pay them any attention,” Diggs says. “They don’t know
                  what they are talking about. Literally, what are you talking
                  about?”
                </p>
                <p>
                  Regardless of the outcome this season, the Cowboys crown jewel
                  of their secondary appears ready for whatever comes his
                  way.&nbsp;He is trusting the work and preparation in the
                  offseason will continue to push him up the list of elite
                  cornerbacks in the NFL. In an interview with Complex for his
                  recent collaboration with LIDS, Diggs discussed his success in
                  the league thus far, tuning out the noise of his naysayers,
                  his relationship with All-Pro sibling Stefon Diggs, as well as
                  what he looks for in a dominant cornerback and more.
                </p>
              </div>
            </div>
            <section></section>
            <div className="header-img">
              <img
                src="https://images.complex.com/complex/images/c_crop,h_1688,w_3000,x_0,y_0/c_fill,dpr_2.0,f_auto,q_auto,w_680/fl_lossy,pg_1/dcebuymtsifnud0ky3x6/trevon-diggs-interception?fimg-client"
                alt="catchshot"
              />
            </div>
            <figcaption className="header-caption">
              Image via Getty/Cooper Neill
            </figcaption>
            <div className="article-body-main">
              <div className="article-copy clearfix">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>

            <video loop autoPlay>
              <source
                url=""
                // type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <p>
        <em>(This interview has been edited and condensed for clarity.)</em>
      </p>
      <p></p>
      <section className="section">
        <div className="box-main">
          <div className="firstHalf">
            <h1 className="text-big">
              Brian Windhorst's update on Kevin Durant's trade demands & the
              Brooklyn Nets' future | Get Up
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="box-main">
          <div className="secondHalf">
            <h1 className="text-big" id="program">
              Clippers are CLEARLY the best in the West with a healthy Kawhi
              Leonard and Paul George?!
            </h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="box-main">
          <div></div>
        </div>
      </section>
      <section className="section">
        <div className="box-main">
          <div className="thirdHalf">
            <div className="youtube-video">
              <h1 className="video-header">Complex Shows</h1>
              <YouTube
                videoId="yT8czc1SvYY"
                opts={opts} /*onReady={this._onReady}*/
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportsPage;
