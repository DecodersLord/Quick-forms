import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function useGetFields(formId) {
    const [loading, setLoading] = useState(false);

    const [fields, setFields] = useState([]);

    useEffect(() => {
        const getFields = async () => {
            try {
                setLoading(true);
                const res = await fetch(`/api/fields/getFields`, {
                    method: "GET",
                    headers: { "content-type": "application/json" },
                });
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setFields(data);
            } catch (error) {
                toast.error(error);
            } finally {
                setLoading(false);
            }
        };
        getFields();
    }, [formId]);

    return { loading, fields };
}

export default useGetFields;
