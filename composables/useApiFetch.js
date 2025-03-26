export const useApiFetch = () => {
    const data = ref(null);
    const error = ref(null);

    const fetchData = async (url, fields = '') => {
        try {
            const response = await fetch(`${url}?_fields=${fields}&acf_format=standard&per_page=${100}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            data.value = await response.json();
            return { data: data.value, error: null }; // Return the response
        } catch (err) {
            error.value = err.message;
            return { data: null, error: error.value }; // Return error as well
        }
    };

    return {
        fetchData
    };
};
