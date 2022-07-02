import React, { useState, useEffect }  from 'react';

function Loop() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/tools-tx?acf_format=standard")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setTools(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul className="filter-container">
                {/* {tools.map(tool => (
                    

                ))} */}

                {/* {users.map(user => (
                    <div key={user.id} className={`filter-item ${user.title.rendered}`}>
                        <p>{user.title.rendered} {user.id} {user.slug}</p>
                    </div>
                ))} */}
            </ul>
        );
    }
}
export default Loop