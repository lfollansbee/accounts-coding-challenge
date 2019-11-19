export const phoneNumberFormatter = (str) => {
    //Filter out anything that's not a number
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input.length === 10
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ')-' + match[2] + '-' + match[3]
    };
    return null
}

export const currencyFormatter = (number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}