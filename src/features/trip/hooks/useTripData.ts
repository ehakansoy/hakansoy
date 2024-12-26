import { useState, useEffect } from 'react';

const useTripData = (tripId: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                console.log(`Getting trip with id ${tripId}`);
                const response = await fetch(`/trip_data/${tripId}/itinerary.json`);

                const contentType = response.headers.get("Content-Type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("Invalid content type");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred.");
            } finally {
                setLoading(false);
            }
        };

        if (tripId) {
            loadData();
        }
    }, [tripId]);

    return { data, loading, error };
};

export default useTripData;
