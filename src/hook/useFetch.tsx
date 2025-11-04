import { useState, useEffect } from 'react';

function useFetch<T>(url: string): T[] {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [url]);

    return data;
}

export default useFetch;