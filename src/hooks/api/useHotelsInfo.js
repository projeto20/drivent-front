import useAsync from '../useAsync';
import useToken from '../useToken';

import { getHotelInfos } from '../../services/hotelApi';

export default function useHotelsInfos(id) {
  const token = useToken();
  const {
    data: hotelInfo,
    loading: hotelInfoLoading,
    error: hotelInfoError,
    act: getHotelInfo
  } = useAsync(() => getHotelInfos(id, token));

  return {
    hotelInfo,
    hotelInfoLoading,
    hotelInfoError,
    getHotelInfo
  };
};
