import bcrypt from "bcrypt";

export const handleHash = async (password, saltRounds) => {
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  return encryptedPassword;
};

export const handleCompare = async (password, passwordDb) => {
  const comparasion = await bcrypt.compare(password, passwordDb);
  return comparasion;
};
