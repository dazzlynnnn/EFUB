import React from "react";
import "./Content.css";

function Content() {
    return (
        <div>
            <div className="container">
                <div className="section section-1">
                    <h1>Desert</h1>
                </div>
                <div className="section section-2">
                    <h1>Forest</h1>
                </div>
                <div className="section">
                    <h1>scroll!</h1>
                </div>
            </div>
            <div className="typo">
                <span className="t1">E</span>
                <span className="t2">F</span>
                <span className="t3">U</span>
                <span className="t4">B</span>
                <span className="t5">:)</span>
                <div className="bg" />
            </div>
        </div>
    );
};

export default Content;