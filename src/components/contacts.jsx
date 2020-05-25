import React, { Component } from "react";

import Contact from "./contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        imageUrl: "../images/jarett.jpeg",
        imageCaption: "The only good photo of Jarett Malouf",
        bio: {
          name: "Jarett Malouf",
          hometown: "Los Angeles, CA",
          skills: "Can increment any number by 1",
        },
      },
      {
        imageUrl: "../images/benji.jpg",
        imageCaption: "A classically good photo of Benji Bear",
        bio: {
          name: "Benji Bear",
          hometown: "Rockford, IL",
          skills: "Can do basically anything",
        },
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="contact-page">
          {this.state.contacts.map((c) => (
            <Contact
              imageUrl={c.imageUrl}
              imageCaption={c.imageCaption}
              bio={c.bio}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
