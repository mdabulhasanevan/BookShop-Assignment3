import React from 'react'
import Navbar from './../Components/Shared/Navbar';
import Footer from './../Components/Shared/Footer';

export default function FAQ() {
    return (

        <div className='mx-auto w-3/4'>
            <Navbar />

            <h1>FAQ</h1>
            
            <hr></hr>
            <br></br>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is React.js and Explain the concept of "components" in React.</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is JSX in React, and how does it work?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is the Virtual DOM, and how does React use it to optimize performance?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">Explain the concept of "props" in React and how they are used.</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">What is "state" in React, and how does it differ from props?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
            <br></br><br></br>
            <Footer />
        </div>
    )
}
