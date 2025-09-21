import api from "./axios";

// Get all transactions (accepts query params for server-side pagination/filtering if backend supports)
export const fetchAllTransactions = async (params = {}) => {
  const { data } = await api.get("/transactions", { params });
  return data;
};

export const fetchTransactionsBySchool = async (schoolId, params = {}) => {
  const { data } = await api.get(`/transactions/school/${schoolId}`, { params });
  return data;
};

export const checkTransactionStatus = async (customOrderId) => {
  const { data } = await api.get(`/transactions/status/${customOrderId}`);
  return data;
};
