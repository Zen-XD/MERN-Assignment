import React from "react";
import Card from "./components/Card";

const App = () => {
  return <div>
    <nav>
      <a href="https://sipalaya.com/" className="nav">Home</a>
      <a href="https://sipalaya.com/all-courses-2/" className="nav">All Courses</a>
      <a href="https://sipalaya.com/design-courses/" className="nav">Code Your Future</a>
      <a href="https://sipalaya.com/certificate-verification/" className="nav">Verify Certificates</a>
      <a href="https://sipalaya.com/about-us/" className="nav">About Us</a>
      <a href="https://sipalaya.com/success-stories/" className="nav">Success Stories</a>
      <a href="https://sipalaya.com/achievements-honors/" className="nav">Achievements & Honors</a>
      <a href="https://sipalaya.com/all-courses/" className="nav">Blogs</a>
      <a href="https://sipalaya.com/contact/" className="nav">Contact</a>
    </nav>

    <div className="courses-grid">
      <Card
        title="CodeYourFuture: The IT Mentorship Revolution"
        duration="4h"
        price={999}
        original={9999}
        category="CodeYourFuture"
      />

      <Card
        title="UI / UX Design | 2.5 Months"
        duration="100h"
        price={14999}
        original={19999}
        category="Design"
      />

      <Card
        title="Python With Data Science | (3–6) Months"
        duration="100h"
        price={19999}
        original={24999}
        category="Development"
      />

      <Card
        title="Web Design | HTML, CSS & JS | 2 Months"
        duration="100h"
        price={9999}
        original={14999}
        category="Development"
      />

      <Card
        title="App Development with Flutter | 2.5 Months"
        duration="100h"
        price={14999}
        original={19999}
        category="App Development"
      />

      <Card
        title="Java with Spring & Hibernate | 3 Months"
        duration="100h"
        price={19999}
        original={24999}
        category="Development"
      />

      <Card
        title="PHP with Laravel | 2.5 Months"
        duration="100h"
        price={9999}
        original={14999}
        category="Development"
      />

      <Card
        title="Artificial Intelligence: Shape Future Innovations | 2.5 Months"
        duration="100h"
        price={14999}
        original={19999}
        category="Development"
      />

      <Card
        title="Graphic Design | 2.5 Months"
        duration="100h"
        price={14999}
        original={19999}
        category="Design"
      />

      <Card
        title="Frontend Development with React JS | 2.5 Months"
        duration="97h"
        price={14999}
        original={19999}
        category="Development"
      />

      <Card
        title="MERN Stack | 3 Months"
        duration="100h"
        price={19999}
        original={29999}
        category="Development"
      />

      <Card
        title="Full Stack Web Development in Python With Django | 3 Months"
        duration="100h"
        price={14999}
        original={19999}
        category="Development"
      />

      <Card
        title="Physical / Online Digital Marketing Training | 2.5 Months"
        duration="100h"
        price={14999}
        original={19999}
        category="Digital Marketing"
      />
    </div>
  </div>
};

export default App;
