import { IbanModel } from "../models/Iban";
import { getBankCode } from "../services/getBankCode";
import { IbanApiService } from "../services/IbanApi.Service";

const getByIban = async (req, res) => {
  try {
    const { iban } = req.params;

    const bankCode = getBankCode(iban);
    const bank = await IbanModel.findOne({ bank_code: bankCode });

    if (!bank) {
      const newData = await IbanApiService.getBankData(iban);
      if (!newData) {
        throw new Error("error");
      }

      const newBankData = new IbanModel({ ...newData.data, bank_code: bankCode });
      await newBankData.save();
      return res.json({ ...newData.data, bank_code: bankCode });
    }

    res.json(bank);
  } catch (e) {
    console.log(e, "error");
    res.send({ message: "error" });
  }
};

export const IbanController = {
  getByIban,
};
