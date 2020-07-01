import React, { useState } from 'react';
function Home() {
    const [name, setName] = useState('Christian');
    return (
        <div>
            Home {name}
        </div>
    )
}
export default Home;
