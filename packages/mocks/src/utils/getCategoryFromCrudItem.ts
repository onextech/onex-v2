const getCategoryFromCrudItem = (item, categorys) => {
  return categorys.find(({ id }) => item.category_id === id)
}

export default getCategoryFromCrudItem
