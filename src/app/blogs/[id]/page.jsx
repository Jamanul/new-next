import React from 'react';

const SingleBlogPage = ({params}) => {
    const singleBlog =blogs.find(blog=>blog.id== params.id)
    return (
        <div>
            <h2>{singleBlog.title}</h2>
            <h2>{singleBlog.content}</h2>
        </div>
    );
};
const blogs =[
    {
      "id": 1,
      "title": "The Future of Web Development: Trends to Watch",
      "author": "Jane Doe",
      "date": "2024-07-25",
      "content": "As technology evolves, web development continues to advance at a rapid pace. In this blog, we explore the latest trends that are shaping the future of web development, including AI integration, Progressive Web Apps (PWAs), and the rise of JAMstack architecture.",
      "tags": ["Web Development", "Technology", "Trends"]
    },
    {
      "id": 2,
      "title": "Mastering CSS Grid: A Comprehensive Guide",
      "author": "John Smith",
      "date": "2024-07-20",
      "content": "CSS Grid Layout is a powerful tool for creating complex web layouts with ease. This guide covers everything you need to know about CSS Grid, from basic concepts to advanced techniques, with plenty of examples and practical tips.",
      "tags": ["CSS", "Web Design", "Tutorial"]
    },
    {
      "id": 3,
      "title": "Building RESTful APIs with Node.js and Express",
      "author": "Alice Johnson",
      "date": "2024-07-15",
      "content": "In this blog, we dive into the process of building RESTful APIs using Node.js and Express. We'll cover setting up a Node.js server, creating routes, handling requests and responses, and integrating with a MongoDB database.",
      "tags": ["Node.js", "Express", "API"]
    },
    {
      "id": 4,
      "title": "JavaScript ES6 Features You Should Know",
      "author": "Michael Brown",
      "date": "2024-07-10",
      "content": "ES6 introduced several new features to JavaScript that make coding more efficient and enjoyable. This blog highlights some of the most important ES6 features, including arrow functions, template literals, destructuring, and the spread operator.",
      "tags": ["JavaScript", "ES6", "Programming"]
    },
    {
      "id": 5,
      "title": "A Beginner's Guide to MongoDB",
      "author": "Emily Davis",
      "date": "2024-07-05",
      "content": "MongoDB is a popular NoSQL database that's easy to get started with. In this beginner's guide, we'll cover the basics of MongoDB, including how to set up a database, perform CRUD operations, and work with collections and documents.",
      "tags": ["MongoDB", "Database", "Beginner"]
    }
  ]
export default SingleBlogPage;