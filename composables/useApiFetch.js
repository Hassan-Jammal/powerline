export const useApiFetch = () => {
    const data = ref(null);
    const error = ref(null);
    
    const fetchData = async (url, fields = '', perPage = 100, currentPage = 1, search = '') => {
        let totalItems = 0;
        let totalPages = 0;

        try {
            const response = await fetch(`${url}?_fields=${fields}&acf_format=standard&per_page=${perPage}&page=${currentPage}&search=${search}`);
            
            // Assuming fetchData returns an object like { data, headers }
            totalItems = response.headers.get('x-wp-total');
            totalPages = response.headers.get('x-wp-totalpages');
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            data.value = await response.json();
            return { data: data.value, error: null, totalItems: totalItems, totalPages: totalPages}; // Return the response
        } catch (err) {
            error.value = err.message;
            return { data: null, error: error.value, totalItems: totalItems, totalPages: totalPages }; // Return error as well
        }
    };

    return {
        fetchData
    };
};
