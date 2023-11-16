import React from 'react';

const BGComponent = ({page}) => {
  console.log(page)
    return (
        <div id="team-view" className="pt-5 p-2">
        <h1>{page}</h1>

        <p>Home  &gt; <span> {page}</span></p>
      </div>
    );
};

export default BGComponent;