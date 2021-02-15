import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "./App.css";

const IconAndTitle: React.FC<{ link: string; title: string }> = (props) => {
  return (
    <IconButton href={props.link} style={{ color: "white" }}>
      {props.children}
      <div style={{ margin: 10 }}></div>
      <p style={{ fontSize: "0.75em" }}>{props.title}</p>
    </IconButton>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: "3em" }}>
          English Class <strong style={{ color: "green" }}>is Coming!</strong>
        </p>
        <Grid container justify="center" style={{ width: "100%" }}>
          <Grid item xs={12} md={6} lg={3}>
            <IconAndTitle
              link="https://www.instagram.com/englishclassonline9/"
              title="@englishclassonline9"
            >
              <InstagramIcon
                style={{ fontSize: "45px" }}
                aria-label="@englishclassonline9"
              />
            </IconAndTitle>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <IconAndTitle
              link="mailto://contatoenglishclass9@gmail.com"
              title="contatoenglishclass9"
            >
              <EmailIcon
                style={{ fontSize: "45px" }}
                aria-label="contatoenglishclass9"
              />
            </IconAndTitle>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <IconAndTitle
              link="https://www.linkedin.com/in/igormcsouza/"
              title="igormcsouza"
            >
              <LinkedInIcon
                style={{ fontSize: "45px" }}
                aria-label="igormcsouza"
              />
            </IconAndTitle>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
