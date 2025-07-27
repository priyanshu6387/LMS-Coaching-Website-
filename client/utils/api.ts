export const fetchSalesByYear = async (year: number) => {
  const res = await fetch(`http://localhost:5000/api/sales/${year}`);
  const data = await res.json();
  return data;
};
