import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}) {
    // deps : 의존값이 들어있는 배열
    // 만약 deps 배열을 비우게 된다면 컴포넌트가 처음 나타날때에만
    // useEffect에 등록한 함수가 호출됨
    // useEffect에서는 함수를 반환 할 수 있는데 cleanup 함수라고 부름.
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>

            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;