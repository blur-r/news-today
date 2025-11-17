import { format } from "date-fns";

export const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return format(date, "MMM d, yyyy");
    } catch {
        return "Invalid date";
    }
};

export const generateId = (url: string): string => {
    return btoa(url).replace(/[=+/]/g, "").slice(0, 16);
};

export const trimContent = (text: string) => {
    if (!text) return "";
    return text.replace(/\[\+\d+\schars\]/, "").trim();
};