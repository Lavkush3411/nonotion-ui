import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export function api() {
  const getData = async (url: string) => {
    const apiUrl = `${BASE_URL}${url}`;
    try {
      const res = await axios.get(apiUrl);
      return { data: res.data, status: res.status, error: null };
    } catch (e) {
      return { data: null, status: 500, error: e };
    }
  };

  const postData = async (url: string, data: object) => {
    const apiUrl = `${BASE_URL}${url}`;

    try {
      const res = await axios.post(apiUrl, data);
      return { data: res.data, status: res.status, error: null };
    } catch (e) {
      return { data: null, status: 500, error: e };
    }
  };

  const putData = async (url: string, data: object) => {
    const apiUrl = `${BASE_URL}${url}`;
    try {
      const res = await axios.put(apiUrl, data);
      return { data: res.data, status: res.status, error: null };
    } catch (e) {
      return { data: null, status: 500, error: e };
    }
  };

  const patchData = async (url: string, data: object) => {
    const apiUrl = `${BASE_URL}${url}`;
    try {
      const res = await axios.patch(apiUrl, data);
      return { data: res.data, status: res.status, error: null };
    } catch (e) {
      return { data: null, status: 500, error: e };
    }
  };

  const deleteData = async (url: string) => {
    const apiUrl = `${BASE_URL}${url}`;
    try {
      const res = await axios.delete(apiUrl);
      return { data: res.data, status: res.status, error: null };
    } catch (e) {
      return { data: null, status: 500, error: e };
    }
  };

  const putFile = async (url: string, data: FormData) => {
    const apiUrl = `${BASE_URL}${url}`;
    try {
      const res = await axios.put(apiUrl, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return { data: res.data, status: res.status, error: null };
    } catch (e) {
      return { data: null, status: 500, error: e };
    }
  };

  return { getData, postData, putData, patchData, deleteData, putFile };
}
