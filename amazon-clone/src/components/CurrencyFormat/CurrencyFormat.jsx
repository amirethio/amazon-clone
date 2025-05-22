import numeral from 'numeral'

function CurrencyFormat({children}) {
  const formatted = numeral(children).format("$0,0.00");
  return formatted;
}

export default CurrencyFormat