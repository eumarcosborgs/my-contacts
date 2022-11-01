class ContactMapper {
  toPersistence(domainContact) {
    return {
      id: domainContact.id,
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(pesistenceContact) {
    return {
      id: pesistenceContact.id,
      name: pesistenceContact.name,
      email: pesistenceContact.email,
      phone: pesistenceContact.phone,
      category: {
        id: pesistenceContact.category_id,
        name: pesistenceContact.category_name,
      },
    };
  }
}

export default new ContactMapper();
