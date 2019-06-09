/** @format */

export const formatCurrency = (value: string) => {
  return `${Number.parseFloat(value).toLocaleString('de-DE', {
    minimumFractionDigits: 2,
  })}`
}
