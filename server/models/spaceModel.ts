import { Typings } from "../typings";

export const spaceModel = (data: Typings.RemoteSpaceData) => {
  return {
    lon: data.iss_position.longitude,
    lat: data.iss_position.latitude,
    timestamp: data.timestamp,
  };
};
