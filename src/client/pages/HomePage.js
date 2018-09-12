import React from 'react';

const Home = () => (
  <div>
    <h1>Home Component</h1>
    <div>My first server side rendered Javascript Component</div>
    <button type="submit" onClick={() => console.log('Hello!')}>
      Press Me!
    </button>
  </div>
);

export default { component: Home };
