import React, { Component } from 'react';
import Card from '../components/componentsForBlog/Card';
import Post from '../components/componentsForBlog/Post';
import Paragraph from '../components/componentsForBlog/Paragraph';
import Footer from '../components/componentsForBlog/Footer';

class Blog extends Component {
    render() {
        return (
         <>
         <Card />
         <Post />
         <Paragraph />
         <Footer />
         </>
        );
    }
}

export default Blog;