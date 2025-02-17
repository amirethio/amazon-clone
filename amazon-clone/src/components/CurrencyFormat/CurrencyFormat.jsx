import numeral from 'numeral'

function CurrencyFormat({children}) {
  const formmatd = numeral(children).format("$0,0.00");
  return formmatd
}

export default CurrencyFormat