import React from 'react';
import './Root.css';
import ListWrapper from '../../components/ListWrapper/ListWrapper';
import { twitterAccounts } from '../../data/twitterAccounts';
import ArticleView from '../ArticelsView/ArticleView';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TwitterView from '../TwitterView/TwitterView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {
  state = {
    item: [...twitterAccounts], // spread operator oraz initial State
    isModalOpen: true,
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

  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  };


  render() {
    const { isModalOpen } = this.state;
    return (
      // Browser router = odpowiada za prawidłowe nawigowanie, wazne by miał jedno dziecko <>
      <BrowserRouter>
        <>
          <Header open={this.openModal} />
          <h1>Hello world</h1>
          {/* Switch ma byc i juz ;) */}
          <Switch>
            <Route exact path="/" component={TwitterView} />
            <Route path="/articles" component={ArticleView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {/* Jesli jestesmy na sciezce głównej to wyswittlamy TwitterView */}
          {/* exact sprawia, że bedzie wyswietlana tylko jedna strona dokladnie ta któ®ą wpisujemy */}
          {/* zostanie przekazane z inputComponent w formie tablicy */}
          <ListWrapper items={this.state.item} />
          {isModalOpen && <Modal addElement={this.addNew} close={this.closeModal} />}
        </>
      </BrowserRouter>

    )
  }
}

export default Root;
