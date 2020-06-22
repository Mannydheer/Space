import { currentIssPositionGateway } from './spaceGateway';

export const currentIssPositionService = async () => {
    let issResponse = await currentIssPositionGateway();
    //if not successful.
    if (issResponse.status !== 200) return
    //if successful.
    return await issResponse.json();

}