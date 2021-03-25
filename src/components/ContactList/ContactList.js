import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/action';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.contactListItem}>
            {name}: {number}
            <button onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const handleFilter = (allContacts, filter) => {
  const normalizedfilter = filter.toLocaleLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedfilter),
  );
};

// const mapStateToProps = state => {
//   const { filter, items } = state.contacts;
//   const visibleTodos = handleFilter(filter, items);
//   return { contacts: visibleTodos };
// };
const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: handleFilter(items, filter),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
