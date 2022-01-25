import React from 'react';

function Home(props) {
    return (
        <div>
            <p>Using router in App.js (it´s version 6!!! so replaced 'Switch' with 'Routes' and 'history' is 'navigate')</p>
            <p>Using my context hook "UserContext" to send my dispatch to child components where thy can trigger login/logout changes</p>
        </div>
    );
}

export default Home;