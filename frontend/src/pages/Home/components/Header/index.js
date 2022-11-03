import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Header({ hasError, quantityOfContacts, quantityOfFilteredContacts }) {
  /* eslint-disable no-nested-ternary */
  const alignment = hasError
    ? 'flex-end'
    : (
      quantityOfContacts.length > 0
        ? 'space-between'
        : 'center'
    );

  return (
    <Container
      justifyContent={alignment}
    >
      {(!hasError && quantityOfContacts.length > 0) && (
        <strong>
          {quantityOfFilteredContacts.length}
          {quantityOfFilteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  quantityOfContacts: PropTypes.number.isRequired,
  quantityOfFilteredContacts: PropTypes.number.isRequired,
};
