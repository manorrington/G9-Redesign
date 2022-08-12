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
              
            <hr className="line"></hr>
             <br/>
            <hr className="line"></hr>
            
              <p>
        <em>(This interview has been edited and condensed for clarity.)</em>
              </p>
              <p>
                <strong>You had a strong rookie season with three interceptions, but last year you took a leap and had 11 picks and a historic season. What do you think allowed you to take that type of leap and become one of the top playmakers in the NFL?</strong><br/>Just work honestly. Looking back on your tape and fixing what you need to fix and just doing the things you need to do. I took my rookie year as a learning experience and said let me fix this and now I just took last season and went back to the tape and said let me fix this so I can do this. Just elevating your game and working to become a better DB every year.
              </p> 
              <p>
                <strong>Last season it seemed like it was a six or seven-week stretch where you were getting an interception every game. What is it that allows you make plays on the ball like that? Is it the fact that you played wide receiver growing up, or is it just one of those things that you just have and you can’t really explain?</strong><br/>
                Yeah I can’t really explain it. I really can’t.
              </p>
              <p>
                <strong>Last season you became an All-Pro and a Pro Bowler, there are still some people out there who find ways to nitpick at your game. They say things like you aren’t a great cover corner, or that you get burned or that only gamble. Do you pay attention to those things or do you just ignore them?</strong><br />
                I don’t pay them any attention. They don’t know what they are talking about. Literally, what are you talking about?</p>
              <p>
                <strong>One of the guys that was one of the great ball hawks in NFL history, Asante Samuel, recently said on the I Am Athlete podcast that he values what a corner does when the ball is thrown their way more than them not being targeted at all. Do you share that same mentality seeing as how you are elite at generating takeaways yourself? Is that something you value when looking at other corners across the league?</strong><br/>
                That’s one of the things that I look at but you can’t take anything away from Darrelle Revis as well because not a lot of people can do what he does. Not a lot of people can do what Asante Samuel did or people who have a lot of interceptions. So you can’t discredit anybody or take anything away from them, they are both great players. My favorite cornerback is Champ Bailey, how he goes and gets the ball, his athleticism, everything. He is somebody that if I was making a corner, that’s how I would want my corner to be. A little bit of Champ and a little bit of Deion [Sanders].</p>
              <hr className="line"></hr>
            </div>
          </div>
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
                <p>
                  <strong>We already know with the Cowboys, guys who get the headlines are Dak Prescott because he’s the face of the franchise, and Ezekiel Elliot because of his track record and what he has accomplished in the league. But it’s been a while since the Cowboys have had two cornerstone pieces on defense like yourself and Micah Parsons, both making First-Team All-Pro in the same season. Can you speak to the impact you both have on one another on the field and how you’re able to make each other’s lives easier?</strong><br />
                  He made my life so much easier because he is getting to the quarterback. We don’t have to cover as long. But I try to make his life easier as well, get him off the field faster. It goes hand in hand, without the rush we probably wouldn’t have gotten all of the interceptions that we got. I need them just as much as they need me, and I feel like they go hand in hand with each other. In the locker room, I just try to push everybody and make everybody better. As far as Micah, I just try to look out for him and he is just trying to look out for me.
                </p>
                <hr className="line"></hr>
                <p>
                  <strong>When you all drafted him last year it was a big deal because it was a surprise he was still available when it was time for the Cowboys to pick. How early was it when you realized he was special?</strong><br/>
                  I knew during training camp. I can tell if somebody is good, really good and has that dog in them just by how they move, how they talk, the way they carry themselves.
                </p>
                <p>
                  <strong>There have been some great sibling tandems in NFL history, whether it was Ronde and Tiki Barber or even Nick and Joey Bosa currently in the NFL. Yourself and your brother Stefon were both named First-Team All-Pro in consecutive seasons, can you speak to the impact he has had on you as a player and just seeing your own brother reach the top of the mountaintop in the NFL. What is that like?</strong><br />
                  I feel like with him he has been a huge help to my career, just showing me how far I can go with it after seeing how far he took it, and what it takes to be at the top. Coming after him, it’s been special, and it’s been very positive for me.
                </p>
                <br />
                <hr className="line"></hr>
                <p>
                  <strong>You have a collaboration with LIDS that you’re working on. What was it about this company in particular that made you want to partner with them, and what was it about this particular time that made the timing perfect?</strong><br />
                  Honestly it was perfect, because I have always been a hat person. I always wear hats, my dad was a hat person, everybody in my family wears hats so it just made a lot of sense.
                </p>
                <p>
                  <strong>Can you tell us anything special about the collaboration? Anything special about these designs that are personal to you?</strong><br />
                  I took the old logos and added them to these new styles of hats that have been coming out. Mine are going to be a trucker fit, different than the typical hats because that’s the style I like to wear. So it’s pretty unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <h2 className="more-header">Latest In Sports</h2>
        <hr className="more-header-line"></hr>
    <section className="section">
        <div className="card">
          <div className="firstHalf">
            <h1 className="text-big">
              Brian Windhorst's update on Kevin Durant's trade demands & the
              Brooklyn Nets' future | Get Up
            </h1>
             <div className="youtube-video">
              <div className="yt-video">
                <YouTube 
                  videoId="yT8czc1SvYY"
                  opts={opts} /*onReady={this._onReady}*/
                />
              
              </div>
            </div>
          </div>
        </div>
        <hr className="line"></hr>
      </section>
      <section className="section">
        <div className="card">
          <div className="firstHalf"> 
          <h1 className="text-big">
          The Miz on LeBron James, the NBA’s flopping problem & Dwight Howard’s WWE audition | NBA Today
          </h1>
          <div className="youtube-video">
            <div className="yt-video">
                <YouTube 
                  videoId="NXbpIItbrq4"
                  opts={opts} /*onReady={this._onReady}*/
                />
              </div>
          </div>
         </div>
        </div>
      </section>
      <hr className="line"></hr>
    
    <section className="section">
        <div className="card">
          <div className="firstHalf"> 
          <h1 className="text-big">
          Sparks travel issues, new WNBA playoff format & the GREATNESS of Sylvia Fowles | Around The Rim
          </h1>
          <div className="youtube-video">
            <div className="yt-video">
                <YouTube 
                  videoId="XDQA6vhYA8s"
                  opts={opts} /*onReady={this._onReady}*/
                />
              </div>
          </div>
         </div>
        </div>
      </section>
</div>
  );
};

export default SportsPage;
