import React from 'react';
import {Link} from 'react-router-dom'

const OtherPage = () => {
    return (
        <div>
          I am the other page
          <Link to="/">Go Back to Main Page</Link>
        </div>
    );
};

export default OtherPage;