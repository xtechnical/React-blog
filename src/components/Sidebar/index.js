import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';

import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1165985423832813568%2Fx3RD-3gw.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fbarizali2&tbnid=fP9q0XDZlrfxQM&vet=12ahUKEwi7wLrw2KrtAhVh7OAKHVVSC6AQMygBegQIARAw..i&docid=ey16zJu-4Vl6BM&w=400&h=400&itg=1&q=bariz%20ali%20images&hl=en&ved=2ahUKEwi7wLrw2KrtAhVh7OAKHVVSC6AQMygBegQIARAw" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Ali Arif and i am Django and React Web Developer.)</p>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>

            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar;