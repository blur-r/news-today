import { format } from "date-fns";

// function for transforming date strings into a more readable format
export const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return format(date, "MMM d, yyyy");
    } catch {
        return "Invalid date";
    }
};

// function for generating IDs from URLs
export const generateId = (url: string): string => {
    return btoa(url).replace(/[=+/]/g, "").slice(0, 16);
};

// function for trimming content previews
export const trimContent = (text: string) => {
    if (!text) return "";
    return text.replace(/\[\+\d+\schars\]/, "").trim();
};

