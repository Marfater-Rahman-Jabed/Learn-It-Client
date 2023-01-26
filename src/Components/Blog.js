import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className='m-5 ' style={{ border: '5px solid green', borderRadius: '10px' }}>
                <div className='p-3'>
                    <h1 className='text-danger'>What is cors ?</h1>
                    <h3 className='text-success'>Sol:</h3>
                    <p className=''>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div className='m-5 ' style={{ border: '5px solid blue', borderRadius: '10px' }}>
                <div className='p-3'>
                    <h1 className='text-danger'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <h3 className='text-success'>Sol:</h3>
                    <p className=''>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Accelerate Development. Backed by Google. <br />Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more</p>
                </div>
            </div>
            <div className='m-5 ' style={{ border: '5px solid purple', borderRadius: '10px' }}>
                <div className='p-3'>
                    <h1 className='text-danger'>How does the private route work?</h1>
                    <h3 className='text-success'>Sol:</h3>
                    <p className=''>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div className='m-5 ' style={{ border: '5px solid pink', borderRadius: '10px' }}>
                <div className='p-3'>
                    <h1 className='text-danger'>What is Node? How does Node work?</h1>
                    <h3 className='text-success'>Sol:</h3>
                    <p className=''>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;