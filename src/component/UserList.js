import React from 'react';

function User({ user, onRemove }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove}/>
                // 각 고유 원소에 key가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 된다.
            ))}
        </div>
    );
}

export default UserList;