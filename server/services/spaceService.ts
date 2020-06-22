import { Space } from "../gateways";
import { Models } from "../models";

export const getIssPosition = async () => {
  let issResponse = await Space.getIssPosition();
  //if not successful.
  if (issResponse.status !== 200) return;
  //if successful.
  return Models.spaceModel(await issResponse.json());
};
