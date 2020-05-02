import React from 'react';
import './Root.css';
import ListWrapper from '../../ListWrapper/ListWrapper';
import { twitterAccounts } from '../../../data/twitterAccounts';
import FormComponent from '../../Form/FormComponent';

class Root extends React.Component {
  state = {
    item: [...twitterAccounts], // spread operator oraz initial State
  }

  addNew = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value,
    }

    this.setState(prevState => ({
      item: [...prevState.item, newItem],
    }));
    e.target.reset(); // czyszczenie pól po wpisaniu w formularzu
  }


  render() {
    return (
      <>
        {/* zostanie przekazane z inputComponent w formie tablicy */}
        <ListWrapper items={this.state.item} />
        <FormComponent submitFN={this.addNew} />
      </>
    )
  }
}

export default Root;
