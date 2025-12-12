export interface EnrollmentData {
    name: string;
    age: string;
    gender: string;
    grade: string;
    parentName: string;
    email: string;
    address: string;
    phoneNumber: string;
    hometown: string;
    interestedInArt: string;
    previousArtClass: string;
    photoPermission: string;
    language: string;
    zelleTransactionId: string;
    submissionDate: string;
    timeZone: string;
}

const BASE_URL = import.meta.env.VITE_STRAPI_API_URL || "http://localhost:1337/api";
const STRAPI_URL = `${BASE_URL}/enrollments`;
const API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

export const submitEnrollment = async (data: EnrollmentData) => {
    try {
        const headers: Record<string, string> = {
            "Content-Type": "application/json",
        };

        if (API_TOKEN) {
            headers["Authorization"] = `Bearer ${API_TOKEN}`;
        }

        const response = await fetch(STRAPI_URL, {
            method: "POST",
            headers,
            body: JSON.stringify({ data }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to submit enrollment:", error);
        throw error;
    }
};
