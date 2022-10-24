import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast';

import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

export function NewContact() {
  async function handleSubmit({
    name, email, phone, categoryId,
  }) {
    try {
      const newContact = {
        name,
        email,
        phone,
        category_id: categoryId,
      };

      await ContactsService.createContact(newContact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o usario!',
      });
    }
  }

  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
