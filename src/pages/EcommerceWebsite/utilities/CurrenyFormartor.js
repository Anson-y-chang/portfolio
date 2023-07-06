const CurrenyFortmator = new Intl.NumberFormat(undefined, {
  currency: 'CNY',
  style: 'currency'
})

const formatCurrency = (number) => {
  return CurrenyFortmator.format(number).replace('¥', '¥ ')
}

export default formatCurrency 