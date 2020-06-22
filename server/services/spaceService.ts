import { Space } from "../gateways";
export const getIssPosition = async () => {
  let issResponse = await Space.getIssPosition();
  //if not successful.
  if (issResponse.status !== 200) return;
  //if successful.
  return await issResponse.json();
};
