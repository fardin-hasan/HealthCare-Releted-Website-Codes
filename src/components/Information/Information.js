import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Information = () => {
    const { serviceid } = useParams();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = `https://fardin-hasan.github.io/API-for-assignment/ourServices.JSON`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])





    return (
        <div>
            <h1 className='text-center'> Hey : {serviceid}</h1>



        </div>
    );
};

export default Information;