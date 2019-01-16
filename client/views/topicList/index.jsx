import React from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { AppState } from '../../store/appState';

@inject('appState')
@observer
class TopicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // do somethings
  }

  changeName = (e) => {
    const { appState } = this.props;
    appState.changeName(e.target.value);
  };

  render() {
    const { appState } = this.props;
    const { msg } = appState;
    return (
      <div>
        <input type="text" onChange={this.changeName} />
        <span>{msg}</span>
      </div>
    );
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
};

export default TopicList;
