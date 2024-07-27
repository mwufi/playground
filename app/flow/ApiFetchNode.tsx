import React, { useState, useEffect } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const ApiFetchNode = ({ data }) => {
    const [apiData, setApiData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/hello');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setApiData(data);
        } catch (error) {
            setError('Failed to fetch data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (data.autoFetch) {
            fetchData();
        }
    }, []);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md w-[330px]">
            <Handle type="target" position={Position.Top} />
            <h3 className="text-lg font-semibold mb-4">API Fetch Node</h3>

            <Button
                onClick={fetchData}
                disabled={isLoading}
                className="w-full mb-4"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Fetching...
                    </>
                ) : (
                    'Fetch Data'
                )}
            </Button>

            {error && (
                <div className="text-red-500 mb-4">{error}</div>
            )}

            {apiData && (
                <div className="bg-gray-100 p-2 rounded">
                    <pre className="whitespace-pre-wrap">
                        {JSON.stringify(apiData, null, 2)}
                    </pre>
                </div>
            )}

            <Handle type="source" position={Position.Bottom} />
        </div>
    );
};

export default ApiFetchNode;