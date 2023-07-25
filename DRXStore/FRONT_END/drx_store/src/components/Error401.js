import React from 'react';
import {Link} from 'react-router-dom';

const Error401 = () => {
    return (
        <div>
            <h1>401 - Unauthorized</h1>
            <p>Sorry, you are not authorized to access this page.</p>
            <p>Please log in or contact support if you believe this is a mistake.</p>
            <Link to="/">Back to Home</Link>
            {/* Bạn có thể thêm liên kết liên hệ hỗ trợ khác hoặc các tùy chọn bổ sung khác */}
        </div>
    );
};

export default Error401;

