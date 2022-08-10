import React from "react";
import "./style.css";
import "./script.js";
import "./w3.css";

export default function HomeFeed() {
  return (
    <>
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2 className="MainHeader">
              Kodak Black Talks Collaborative Relationship With Kendrick Lamar:
              ‘I Appreciate Him for Trusting Me With His Album’
            </h2>
            <h5>
              From <b>Pop Culture</b> by John Doe
            </h5>
            <img
              className="headImage"
              alt="mainimg"
              src={require("../../images/kodak.webp")}
              style={{ height: "585px" }}
            />
            <p>
              <em>Photo by Photography Man</em>
            </p>
            <p>
              Kendrick Lamar surprised hip-hop fans by making Kodak Black a
              prominent guest on his latest album Mr. Morale & The Big Steppers,
              as the controversial Florida rapper delivered one guest verse and
              three additional appearances across four tracks—“Worldwide
              Steppers,” “Rich (Interlude),” “Silent Hill,” and “Mirror.” In a
              new interview with Spotify’s RapCaviar, Kodak opened up about his
              relationship with Kendrick, revealing his bond with Lamar extends
              beyond music.
            </p>
            <p>
              “Me and Kendrick got a lot of little things in common that people
              won’t probably understand,” Kodak told Speedy Morman. “Both of us,
              we Geminis. Both of us, you know, we Hebrew Israelite. Me and him,
              we could talk and he understand me beyond than what the internet
              theories; it’s like he got a different perception of me, and he
              ain’t cap. Like, he say we going to do something, and we do it.
              You know, Kendrick from the streets for real, too. I fuck with
              that boy. I got a lot of love for him.”
            </p>
            <p>
              “He put me on game,” Kodak shared. “He genuinely trying to see
              a..."
              <a href="*">Read More</a>
            </p>
          </div>
          <div className="card">
            <h2>
              <b>COMPLEX</b> Shows
            </h2>
            <iframe
              width="100%"
              height="585px"
              src="https://www.youtube.com/embed/LOPASETBvN4"
              title="Should Kanye Be Mad at Adidas? How Should Sneakers Fit? | The Complex Sneakers Podcast"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              <b>Watch our podcast!</b>
            </p>
            <p>
              The Complex Sneakers Podcast is co-hosted by Joe La Puma, Brendan
              Dunne, and Matt Welty. This week, the co-hosts discuss the fallout
              around Yeezy Day, which Ye challenged Adidas over and claimed
              happened without his approval. They also talk about how to figure
              out your appropriate sneaker size and make a shocking discovery
              about one of the cohosts’ footwear. Elsewhere, the trio reacts to
              the latest in the Zadeh Kicks sneaker reselling saga. Also, Welty
              influences Rihanna’s sneakers, Joe has some more dyed pairs coming
              up, and Brendan goes golfing.
              <p>
                Looking for the Complex Sneakers
              Podcast Dad Hats? Shop on <a href="*">Complex Shop</a>  now!</p> 
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>Top Stories</h2>
            <div class="w3-display-container w3-text-white">
              <img
                src={require("../../images/uvzct5amalrwq0dpwbxa.webp")}
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
            <div class="w3-display-container w3-text-white">
              <img
                src={require("../../images/breakfast-club-hosts.jpg")}
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
            <div class="w3-display-container w3-text-white">
              <img
                src={require("../../images/asenjislzhyhq1diqwjw.webp")}
                alt="Lights"
                style={{ width: "100%" }}
              />
              {/* <div class="w3-display-bottommiddle w3-container"><p>Bottom Middle</p></div> */}
            </div>
            <p style={{ fontSize: "25px" }}>
              <b>
                Jim Carrey Told The Weeknd He Didn’t Want to Collaborate on
                ‘Dawn FM’ at First
              </b>
            </p>
          </div>
          <div className="card">
            <h3>Popular Articles</h3>
            <div className="fakeimg">
              <a href="*"><p><b>Fans Share Their Favorite ‘Breakfast Club’ Memories Amid Word of Angela Yee Leaving Show</b></p></a>
              
            </div>
            <div className="fakeimg">
              <a href=""><p><b> Skincare Advisor Michelle Castro Found Her Tribe While Finding Her Regimen</b></p></a>
            </div>
            <div className="fakeimg">
              <a href=""><p><b> Royce Da 5′9 Reflects on Falling Out With Lupe Fiasco, Says He Doesn’t ‘Feel Good About’ Calling Him ‘a B*tch’ </b></p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
