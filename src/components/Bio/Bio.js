import React from 'react';

import classes from './Bio.module.css';

const Bio = (props) => (
    <div className={classes.Bio}>
        <h2>Welcome to centralvalleyfoods.net!</h2>
        <h3>About the Falslev Farm.</h3>
        <hr />
        <p>The Falslev farm is a generational family farm that has been in business for over 80 years! Located in almost the very center of Cache Valley Utah, the Falslev farm is surrounded by beautiful mountains, as the Bear River meanders through the area.</p>
        <p>The farm is now owned and operated by Michael and Kurtis Falslev, father and son, who have worked on the family farm since they learned to walk. The farm has acres of pasture land grazed by the hogs and sheep of the farm in the summer, then the grass hay is harvested for winter feed. Michael and Kurtis love the land and the animals, spending many hours each day caring for what they love.</p>
        <p>For Michael and Kurtis, the farm is not a mere occupation, but rather a way of life.</p>
    </div>
);

export default Bio;