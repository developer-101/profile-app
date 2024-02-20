
import { useEffect, useState } from 'react'
import './styles.scss'
import User from './user';

export default function ProfileFinder() {

    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null);
    const [loadedForUserName, setLoadedForUserName] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSubmit() {
        fetchGithubUserData();
    }

    async function fetchGithubUserData() {

        if (userName == '' || loadedForUserName == userName)
            return;

        setLoading(true);
        setLoadedForUserName(userName);

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        console.log(userName);
        console.log(data);

        if (data)
            setUserData(data);

        setLoading(false);
    }

    useEffect(() => {
        //fetchGithubUserData();
    });

    return (
        <div className='profile-wrapper'>

            {loading == true && <div className='loading'>loading</div>}

            <div className='input-wrapper'>
                <input type='text'
                    name='search-by-username'
                    placeholder='Search Github username..'
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)} />
                <button onClick={handleSubmit}>Search</button>
            </div>

            {userData !== null && <User user={userData} />}
        </div>
    )
}