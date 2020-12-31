import { allUserApi } from "../Services/allUserApi";

export const allUserAction = async () => {
  const details = await allUserApi();
  return details.data;
};
