export const getBankCode = (iban) => {
  if (!iban) return null;
  return iban.slice(4, 8);
};
