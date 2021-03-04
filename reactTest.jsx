import React from 'react';

class Haha extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 1,
    };
  }

  haha = () => {
    console.log('666')
  }

  test() {
    console.log(this);
  }

  render() {
    const { id } = this.state;
    return (
      <div>
        134
        {id}
      </div>
    );
  }
}

export default Haha;
