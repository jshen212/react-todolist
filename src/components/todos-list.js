import React from 'react';
import TodosListHeader from './todos-list-header';

export default class TodosList extends React.Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index), todo => <TodosListItem key= {index} {...todo} />)
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tr>
          {this.renderItems()}
        </tr>
      </table>
    );
  }
}
