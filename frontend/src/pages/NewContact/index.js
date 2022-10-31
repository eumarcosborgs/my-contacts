import { useRef } from 'react';
import ContactsService from '../../services/ContactsService';
import { toast } from '../../utils/toast';

import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

export function NewContact() {
  const contactFormRef = useRef(null);

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

      contactFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000,
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!',
      });
    }
  }

  return (
    <>
      <PageHeader
        title="Novo contato"
      />
      <ContactForm
        ref={contactFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
