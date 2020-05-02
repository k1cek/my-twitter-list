import React from 'react';
import './Root.css';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import { twitterAccounts } from '../../data/twitterAccounts';
import FormComponent from '../../components/Form/FormComponent';
import ArticleView from '../ArticelsView/ArticleView';
import { BrowserRouter, Route } from 'react-router-dom';
import TwitterView from '../TwitterView/TwitterView';
import NotesView from '../NotesView/NotesView';
import Navigation from '../../components/Navigation/Navigation';

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
      <BrowserRouter>
        <>
          <Navigation />
          <h1>Hello world</h1>
          <Route exact path="/" component={TwitterView} />
          <Route path="/articles" component={ArticleView} />
          <Route path="/notes" component={NotesView} />
          {/* Jesli jestesmy na sciezce głównej to wyswittlamy TwitterView */}
          {/* exact sprawia, że bedzie wyswietlana tylko jedna strona dokladnie ta któ®ą wpisujemy */}
          {/* zostanie przekazane z inputComponent w formie tablicy */}
          {/* <ListWrapper items={this.state.item} /> */}
          {/* <FormComponent submitFN={this.addNew} /> */}
        </>
      </BrowserRouter>
    )
  }
}

export default Root;
