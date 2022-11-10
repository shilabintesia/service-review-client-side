import React from "react";
import blog1 from "../../assets/blogs/blog1.jpg";
import blog2 from "../../assets/blogs/blog2.png";
import blog3 from "../../assets/blogs/blog3.png";
import blog4 from "../../assets/blogs/blog4.png";

import bg from "../../assets/blogs/blogs.jpg";

const Blogs = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-5 text-white"
      >

    
        <div className="lg:ml-28 py-10 ml-10">
          <h1 className="font-libreBasker font-medium text-6xl">Blogs</h1>
          <h5 className="font-openSans text-xl font-medium py-5">
            Home{" "}
            <span className="font-montserrat font-light text-xl">/ Blogs</span>
          </h5>
        </div>
      </div>

      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-5">
         Difference between SQL and NoSQL?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt=""
              src={blog1}
              className="w-96 rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-5">
              <p className="text-base font-montserrat">
                <strong>SQL:</strong> SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it's particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
              </p>
              <p className="text-base font-montserrat pt-6">
                <strong>NoSQL:</strong> NoSQL is a class of DBMs that are non-relational and generally do not use SQL.The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-4">
        What is JWT, and how does it work?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt=""
              src={blog2}
              className="w-96 rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-5">
              <p className="text-base font-montserrat">
                
JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
<br/>

Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender's identity. The important distinction here is lack of meaning within the characters themselves. 
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-4">
        What is the difference between javascript and NodeJS?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <img
              alt=""
              src={blog3}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-5">
              <p className="text-base font-montserrat">
                <strong>NodeJS:</strong> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. 
              </p>
              <p className="text-base font-montserrat pt-6">
                <strong> JavaScript:</strong> Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. 
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-10">
        <h1 className="text-center font-libreBasker text-4xl lg:my-16 my-10 mx-4">
        How does NodeJS handle multiple requests at the same time?
        </h1>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              alt=""
              src={blog4}
              className="w-full rounded-lg drop-shadow-2xl lg:mb-0 mb-10"
            />
            <div className="mx-4">
              <p className="text-base font-montserrat">
              A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.

The cluster module allows easy creation of child processes that all share the same server ports.

<br/>
Explanation: If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly. 

They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.


              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Blogs;