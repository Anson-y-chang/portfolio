function sortUp(items, sortBy) {
  switch (sortBy) {
    case 'price-ascending':
      return items.sort((a,b) => {return a.price-b.price});
    case 'price-descending':
      return items.sort((a,b) => {return b.price-a.price});
    default:
      return items.sort((a,b) => {return a.id-b.id});
  }
}

export default sortUp;