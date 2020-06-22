import { RemoteSpaceData } from "../typings/SpaceData";

export const spaceModel = (data: RemoteSpaceData) => {
  return {
    lon: data.iss_position.longitude,
    lat: data.iss_position.latitude,
    timestamp: data.timestamp,
  };
};
