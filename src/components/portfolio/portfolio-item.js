import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {
     // Data that we'll need:
      // - background
      // - logo
      // - description: desrcription
      // - id: id
    const { id, description, thumb_image_url, logo } = props.item;
    return (
        <div>
            <div>
                {description}
            </div>

            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>
    );
}
