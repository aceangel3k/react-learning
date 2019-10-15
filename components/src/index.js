import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App  = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div><h4>Warning</h4>Are you sure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard><CommentDetail author="Sam" timeAgo="Today at 4:54 PM" avatarSrc={faker.image.avatar()} content="Nice Post!!"/></ApprovalCard>
            <ApprovalCard><CommentDetail author="Sam" timeAgo="Today at 4:54 PM" avatarSrc={faker.image.avatar()} content="Nice Post!!"/></ApprovalCard>
            <ApprovalCard> <CommentDetail author="Alex" timeAgo="Today at 2:00 AM" avatarSrc={faker.image.avatar()} content="That was cool!"/></ApprovalCard>
            <ApprovalCard><CommentDetail author="Jane" timeAgo="Yesterday at 5:00 PM" avatarSrc={faker.image.avatar()} content="First" /></ApprovalCard>
        </div> 
    );
};

ReactDOM.render(<App/>,document.querySelector('#root'));