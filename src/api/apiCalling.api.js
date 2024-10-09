import axios from "axios";
import {
  resetApiStatus,
  setApiStatus,
} from "../store/slices/apiResonseHandler.slice";
export const apiCalling =
  ({ method, url, contentType, formData }) =>
  async (dispatch) => {
    const options = {
      method,
      url,
      data: formData,
      withCredentials: true,
    };
    try {
      dispatch(setApiStatus());
      const response = await axios(options);
      dispatch(resetApiStatus());
      return response.data;
    } catch (err) {
      dispatch(resetApiStatus());
      return err?.response?.data;
    }
  };
