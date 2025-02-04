import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function useGetForms() {
    const [loading, setLoading] = useState(false);

    const [forms, setForms] = useState([]);

    useEffect(() => {
        const getForms = async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/forms/getForms", {
                    method: "GET",
                    headers: { "content-type": "application/json" },
                });
                const data = await res.json();
                console.log(data);
                if (data.error) {
                    throw new Error(data.error);
                }
                setForms(data);
            } catch (error) {
                toast.error(error);
            } finally {
                setLoading(false);
            }
        };
        getForms();
    }, []);

    return { loading, forms };
}

export default useGetForms;
