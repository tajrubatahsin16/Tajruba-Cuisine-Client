import React from "react";
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="text-warning">
            <h2 className="text-center fw-bold fs-2 my-3">Welcome To The Blogs</h2>
            <div className="blogs mx-3">
                <div className="border border-warning p-3 rounded">
                    <h3 className="fw-bold fs-4">What are the differences between controlled and uncontrolled components in react?</h3>
                    <p className="fst-italic">
                        In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.
                    </p>
                </div>
                <div className="border border-warning p-3 rounded">
                    <h3 className="fw-bold fs-4">How to validate React props using PropTypes?</h3>
                    <ul className="fst-italic">
                        <li>PropTypes.any: The prop can be of any data type</li>
                        <li>PropTypes.bool: The prop should be a Boolean</li>
                        <li>PropTypes.number: The prop should be a number</li>
                        <li>PropTypes.string: The prop should be a string</li>
                        <li>PropTypes.func: The prop should be a function</li>
                        <li>PropTypes.array: The prop should be an array</li>
                        <li>PropTypes.object: The prop should be an object</li>
                        <li>PropTypes.symbol: The prop should be a symbol</li>
                    </ul>
                </div>
                <div className="border border-warning p-3 rounded">
                    <h3 className="fw-bold fs-4">What is the difference between express.js and node.js?</h3>
                    <p className="fst-italic">
                        js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                    </p>
                </div>
                <div className="border border-warning p-3 rounded">
                    <h3 className="fw-bold fs-4">What is a custom hook, and why will you create a custom hook?</h3>
                    <p className="fst-italic">
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code . It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Blogs;