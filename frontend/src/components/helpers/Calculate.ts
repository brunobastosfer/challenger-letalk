interface Debit {
  saldoDevedor: number;
  cota: number;
  valorParcela: number;
}

const calculate = ({ cota, saldoDevedor, valorParcela }: Debit ) => {
  let valorAjustado = saldoDevedor;
  let cliente = {
    juros: [],
    devedor: [saldoDevedor],
    devedorAjustado: [],
    parcela: valorParcela,
    mes: saldoDevedor / valorParcela,
    totalJuros: 0,
  } as any;

  for(let index = 1; index <= cliente.mes+1; index+= 1) {
    let jurosCalc = (cota / 100) * valorAjustado
    cliente.totalJuros+= jurosCalc 
    if(valorAjustado >= valorParcela) {
      cliente.juros.push(jurosCalc.toFixed(2))
      cliente.devedorAjustado.push(valorAjustado + jurosCalc)
      valorAjustado += jurosCalc
      cliente.devedor.push(valorAjustado - valorParcela)
      valorAjustado -= valorParcela
    } else {
      cliente.juros.push(jurosCalc.toFixed(2));
      cliente.devedorAjustado.push(valorAjustado + jurosCalc);
    }
  }
  cliente.juros.splice(0,1)
  return [cliente]
}

export { calculate }