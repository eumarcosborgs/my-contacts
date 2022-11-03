/* eslint-disable react/jsx-one-expression-per-line */
import { useHome } from './useHome';

import { Loader } from '../../components/Loader';
import { Modal } from '../../components/Modal';
import { InputSearch } from './components/InputSearch';
import { Header } from './components/Header';
import { ErrorStatus } from './components/ErrorStatus';
import { EmptyList } from './components/EmptyList';
import { SearchNotFound } from './components/SearchNotFound';
import { ContactsList } from './components/ContactsList';

import { Container } from './styles';

export function Home() {
  const {
    isLoading,
    isModalVisible,
    isLoadingDelete,
    contactBeingDeleted,
    handleCloseDeleteContactModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    handleTryAgain,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleOpenDeleteContactModal,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {(hasContacts) && (
        <InputSearch value={searchTerm} onChange={handleChangeSearchTerm} />
      )}

      <Header
        hasError={hasError}
        quantityOfContacts={contacts.length}
        quantityOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} /> }
      {isListEmpty && <EmptyList /> }
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} /> }

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onOpenDeleteContactModal={handleOpenDeleteContactModal}
          />

          <Modal
            visible={isModalVisible}
            danger
            isLoading={isLoadingDelete}
            title={`Tem certeza que deseja remover o contato ”${contactBeingDeleted?.name}”?`}
            confirmLabel="Deletar"
            onCancel={handleCloseDeleteContactModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}

    </Container>
  );
}

/**
 * SOP -> Same Origin Policy -> Politica de mesma origem
 * CORS -> Cross-Origin Resource Sharing -> Compartilhamento de recursos entre
 *         origens diferentes.
 * Origem -> protocolo://dominio:porta
 *
 *   Saida: http://localhost:3000
 * Destino: http://localhost:3001
 */
