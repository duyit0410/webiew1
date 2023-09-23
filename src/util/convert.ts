export const hiddenPassword = (password: string) => {
  const length = password.length;
  return "*".repeat(length);
};
