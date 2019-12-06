import React from 'react'


const PetHungry = ({ list })=> {
  if (!list) {
    return null;
  }
  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return (
      <div>
        {list.map(item => <ListItem item={item} />)}
      </div>
    );
  }
}
export default PetHungry
