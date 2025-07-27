'use client';
import { useEffect, useState } from 'react';
import { fetchSalesByYear } from '../../../utils/api'; // Make sure this path is correct

interface Sale {
  item: string;
  price: number;
  date: string;
}

export default function SalesPage() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSales = async () => {
      const data = await fetchSalesByYear(2014); // Change year if needed
      setSales(data.data);
      setLoading(false);
    };
    getSales();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sales in 2014</h1>
      {loading ? (
        <p>Loading...</p>
      ) : sales.length === 0 ? (
        <p>No sales found for 2014.</p>
      ) : (
        <ul className="space-y-2">
          {sales.map((sale, idx) => (
            <li key={idx} className="bg-gray-100 p-3 rounded">
              {sale.item} — ₹{sale.price} <br />
              <span className="text-sm text-gray-500">
                {new Date(sale.date).toDateString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
