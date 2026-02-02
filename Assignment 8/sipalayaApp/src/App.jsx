import React from 'react'
import Card from './components/Card';

const App = () => {
    return (
        <div>
            <nav>
                <a href="https://sipalaya.com/" className="nav">Home</a>
                <a href="https://sipalaya.com/all-courses-2/" className="nav">All Courses</a>
                <a href="https://sipalaya.com/design-courses/" className="nav">Code Your Future</a>
                <a href="https://sipalaya.com/certificate-verification/" className="nav">Verify Certificates</a>
                <a href="https://sipalaya.com/about-us/" className="nav">About US</a>
                <a href="https://sipalaya.com/success-stories/" className="nav">Sucess Stories</a>
                <a href="https://sipalaya.com/achievements-honors/" className="nav">Achievements & Honors</a>
                <a href="https://sipalaya.com/all-courses/" className="nav">Blogs</a>
                <a href="https://sipalaya.com/contact/" className="nav">Contact</a>
            </nav>

            <div className="courses-grid">
                <Card
                    img=""
                    title="CodeYourFuture: The IT Mentorship Revolution"
                    duration="4h"
                    price={999}
                    original={9999}
                    category="CodeYourFuture"
                    link=""
                />

                <Card
                    img=""
                    title="UI / UX Design | 2.5 Months"
                    duration="100h"
                    price={14999}
                    original={19999}
                    category="Design"
                    link=""
                />

                <Card
                    img=""
                    title="Python With Data Science | (3–6) Months"
                    duration="100h"
                    price={19999}
                    original={24999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="Web Design | HTML, CSS & JS | 2 Months"
                    duration="100h"
                    price={9999}
                    original={14999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="App Development with Flutter | 2.5 Months"
                    duration="100h"
                    price={14999}
                    original={19999}
                    category="App Development"
                    link=""
                />

                <Card
                    img=""
                    title="Java with Spring & Hibernate | 3 Months"
                    duration="100h"
                    price={19999}
                    original={24999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="PHP with Laravel | 2.5 Months"
                    duration="100h"
                    price={9999}
                    original={14999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="Artificial Intelligence: Shape Future Innovations | 2.5 Months"
                    duration="100h"
                    price={14999}
                    original={19999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="Graphic Design | 2.5 Months"
                    duration="100h"
                    price={14999}
                    original={19999}
                    category="Design"
                    link=""
                />

                <Card
                    img=""
                    title="Frontend Development with React JS | 2.5 Months"
                    duration="97h"
                    price={14999}
                    original={19999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="MERN Stack | 3 Months"
                    duration="100h"
                    price={19999}
                    original={29999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="Full Stack Web Development in Python With Django | 3 Months"
                    duration="100h"
                    price={14999}
                    original={19999}
                    category="Development"
                    link=""
                />

                <Card
                    img=""
                    title="Physical / Online Digital Marketing Training | 2.5 Months |"
                    duration="100h"
                    price={14999}
                    original={19999}
                    category="Digital Marketing"
                    link=""
                />
            </div>
        </div>
    )
};

export default App