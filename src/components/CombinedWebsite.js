import React from "react";
import "../App.css";
import "antd/dist/antd.css";
import "../fonts/montserrat.css";
import { Row, Icon, PageHeader, Button } from "antd";
import { MenuData } from "../data/Links";
import { A } from "./Link";
import ResizeableComponent from "./ResizeableBase";

const ALink = (props) => {
  return (
    <A className="secondary-color" href={props.link}>
      {" "}
      {props.children}{" "}
    </A>
  );
};

const Description = () => (
  <div className="white-color xlarge-font">
    <div>Hi, I'm James Brady.</div>
    <br />
    <div>
      I will be working as a Software Engineer at
      <ALink link={"https://www.capitalone.com/"}> Capital One. </ALink>
    </div>
    <br />
    <div>
      I previously worked as a Software Engineer Intern at
      <ALink link={"https://wearedoubleline.com/"}> Double Line. </ALink>
    </div>
    <br />
    <div>
      Check out the
      <ALink
        link={
          "https://scholar.google.com/citations?user=P9t4UugAAAAJ&hl=en&oi=ao"
        }
      >
        academic publications
      </ALink>
      that I contributed to while working at the
      <ALink link={"http://heracleia.uta.edu"}> Heracleia Lab. </ALink>
    </div>
    <br />
    <div>
      I will be graduating, in May 2021, from the
      <ALink link={"https://uta.edu/"}>
        {" "}
        University of Texas at Arlington{" "}
      </ALink>
      with a Bachelor's of Science in Computer Science.
    </div>
    <br />
    <div>
      Need to prepare for an interview or a competitive programming competition?
      Check out
      <ALink link={"https://blazeoj.com"}> BlazeJudge. </ALink>
    </div>

    <br />
    <div>
      I love attending
      <ALink link={"https://devpost.com/jbd95"}> hackathons </ALink>
      and won first place at
      <ALink link={"https://devpost.com/software/edunate-l7k3bs"}>
        {" "}
        HackHouston 2019{" "}
      </ALink>
      and{" "}
      <ALink link={"https://devpost.com/software/meme-royale-9cdr5q"}>
        {" "}
        HackSMU 2019.{" "}
      </ALink>
    </div>
    <div>
      Check out all of my projects on my
      <ALink link={"https://github.com/jbd95"}> Github profile. </ALink>
    </div>
  </div>
);

export class CombinedWebsite extends ResizeableComponent {
  render() {
    return (
      <div>
        <div className="primary-background fill-screen">
          <div
            style={{
              paddingLeft: "max(2vw, 18px)",
              paddingRight: "max(2vw, 18px)",
              paddingTop: "8vh",
              paddingBottom: "2vh",
            }}
          >
            <Description justify="center" />
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ marginTop: "24px" }}
            >
              {MenuData.map((cur, i) => (
                <Button
                  className="primary-color"
                  style={{ marginRight: "8px" }}
                  href={cur.link}
                  target="_blank"
                  key={i}
                >
                  {cur.icon && (
                    <Icon
                      style={{ fontSize: "20px", marginTop: "5px" }}
                      type={cur.icon}
                    />
                  )}
                  {cur.text && (
                    <div style={{ fontSize: "20px" }}> {cur.text} </div>
                  )}
                </Button>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
