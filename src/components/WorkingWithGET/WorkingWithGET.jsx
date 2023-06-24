import React, { useState } from 'react';
import './WorkingWithGET.css';
import User from '../User/User.jsx';

// const url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6';

const usersFromServer = {
  "success": true,
  "total_pages": 8,
  "total_users": 46,
  "count": 6,
  "page": 1,
  "links": {
      "next_url": "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=6",
      "prev_url": null
  },
  "users": [
      {
          "id": 16581,
          "name": "Denys Shkarupa",
          "email": "shkarupadenys@gmail.com",
          "phone": "380232000072",
          "position": "Lawyer",
          "position_id": 1,
          "registration_timestamp": 1687589885,
          "photo": "https://frontend-test-assignment-api.abz.agency/images/users/649693fda277516581.JPEG"
      },
      {
          "id": 1,
          "name": "Leanne West",
          "email": "onie34@lubowitz.com",
          "phone": "+380936050764",
          "position": "Content manager",
          "position_id": 2,
          "registration_timestamp": 1604494937,
          "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596d3bb1.jpeg"
      },
      {
          "id": 2,
          "name": "Ahmad Rodriguez",
          "email": "isadore08@zulauf.biz",
          "phone": "+380993215621",
          "position": "Security",
          "position_id": 3,
          "registration_timestamp": 1604494937,
          "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596f0072.jpeg"
      },
      {
          "id": 3,
          "name": "Jeromy Schultz",
          "email": "gladys74@emmerich.com",
          "phone": "+380957332233",
          "position": "Security",
          "position_id": 3,
          "registration_timestamp": 1604494937,
          "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a659709143.jpeg"
      },
      {
          "id": 4,
          "name": "Lorine Hoppe",
          "email": "ozella.block@wiza.com",
          "phone": "+380996727011",
          "position": "Designer",
          "position_id": 4,
          "registration_timestamp": 1604494937,
          "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a65971a714.jpeg"
      },
      {
          "id": 5,
          "name": "Peaches-Honeyblossom-Michelle-Charlotte-Angel-Vanessa",
          "email": "peaches.honeyblossom.michelle.charlotte.angel.vanessa@gmail.com",
          "phone": "+380672278518",
          "position": "Designer",
          "position_id": 4,
          "registration_timestamp": 1604494937,
          "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a65972a8f5.jpeg"
      }
  ]
};

const WorkingWithGET = () => {
  const [
    fetchedUsers,
    // setFetchedUsers,
  ] = useState(usersFromServer.users);

  return (
    <div className='section users-flex'>
      <p className="h1">
        Working with GET request
      </p>
      <div className="users-grid">
        {fetchedUsers.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default WorkingWithGET;