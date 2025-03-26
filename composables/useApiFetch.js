// composables/useApiFetch.js
import { ref } from 'vue';

export const useApiFetch = () => {
    const data = ref(null);
    const error = ref(null);

    const fetchData = async (url, fields = '') => {
        try {
            const response = await fetch(`${url}?_fields=${fields}&acf_format=standard`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            data.value = await response.json();
        } catch (err) {
            error.value = err.message;
        }
    };

    return {
        data,
        error,
        fetchData
    };
};
