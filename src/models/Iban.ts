import mongoose from "mongoose";

const sepaSchema = new mongoose.Schema({
  sepa_credit_transfer: String,
  sepa_direct_debit: String,
  sepa_sdd_core: String,
  sepa_b2b: String,
  sepa_card_clearing: String,
});

const bankSchema = new mongoose.Schema({
  bank_name: String,
  phone: String,
  address: String,
  bic: String,
  city: String,
  state: String,
  zip: String,
});

const ibanSchema = new mongoose.Schema({
  country_code: String,
  iso_alpha3: String,
  country_name: String,
  currency_code: String,
  sepa_member: String,
  sepa: sepaSchema,
  bban: String,
  bank_code: String,
  bank_account: String,
  bank: bankSchema,
});

const IbanModel = mongoose.model("Iban", ibanSchema);

export { IbanModel };
