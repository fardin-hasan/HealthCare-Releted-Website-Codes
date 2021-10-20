import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Information = () => {
    const { serviceid } = useParams();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = `https://fardin-hasan.github.io/API-for-assignment/ourServices.JSON`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])


    const setUsersId = users.find(user => user.id === parseInt(serviceid));


    return (
        <div>
            <div id="services" className='mb-5' >
                <h1 className='text-light mx-5 my-5 text-center '>Detailed Information of <span>{setUsersId?.name}</span> </h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
                    <div className="col m-auto ">
                        <div className="card ">
                            <img src={setUsersId?.img} className="card-img-top  " alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name : {setUsersId?.name}</h5>
                                <p><b>Designeation : {setUsersId?.Designation}</b></p>
                                <p><b>Rating : {setUsersId?.rating}</b></p>


                            </div>
                        </div>
                    </div>

                </div>


            </div>




        </div>
    );
};

export default Information;