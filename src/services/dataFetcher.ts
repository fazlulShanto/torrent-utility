import AxiosClient from "../lib/AxiosClient";
import ApiEndpoints from "../configs/apis";
export const getCourseMetaData = async ({url,signal}) => {
    try {
        return  await AxiosClient.get(`${ApiEndpoints.courseMetadata}?url=${url}`, {signal});
        
    } catch (error) {
        throw error as Error;
    }
  
}
