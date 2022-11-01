class CategoryMapper {
  toDomain(pesistenceCategory) {
    return {
      id: pesistenceCategory.id,
      name: pesistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
