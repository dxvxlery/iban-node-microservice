import * as IBAN from "iban";

const validateIban = (req, res, next) => {
  try {
    const { iban } = req.params;
    if (!iban) {
      throw new Error("iban is required");
    }
    const valid = IBAN.isValid(iban);

    if (!valid) {
      throw new Error("iban is invalid");
    }

    next();
  } catch (e) {
    res.send({ message: e.message });
  }
};

export const ValidateService = {
  validateIban,
};
