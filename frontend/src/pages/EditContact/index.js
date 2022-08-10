import { ContactForm } from '../../components/ContactForm';
import { PageHeader } from '../../components/PageHeader';

export function EditContact() {
  return (
    <>
      <PageHeader
        title="Editar Marcos Paulo"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
