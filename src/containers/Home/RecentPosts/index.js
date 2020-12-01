import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1165985423832813568%2Fx3RD-3gw.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fbarizali2&tbnid=fP9q0XDZlrfxQM&vet=12ahUKEwi7wLrw2KrtAhVh7OAKHVVSC6AQMygBegQIARAw..i&docid=ey16zJu-4Vl6BM&w=400&h=400&itg=1&q=bariz%20ali%20images&hl=en&ved=2ahUKEwi7wLrw2KrtAhVh7OAKHVVSC6AQMygBegQIARAw"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Fitness Mantra To Live Fit Life</h2>
                <span>posted onJuly 21, 2016 bySora Blogging Tips</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts;