// Shared, public details used on the home and contact pages.
export const jobSearch = {
    email: "tsoler.hayitian.syne25lin@edu.tucsweden.se",
    personalEmail: "tsoler.hayitian@gmail.com",
    startDate: "2026-12-14",
    endDate: "2027-05-28",
    locationPreference: "Främst på plats i Linköping eller Norrköping",
};

const dateFormat = new Intl.DateTimeFormat("sv-SE", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
});
export const startLabel = dateFormat.format(new Date(`${jobSearch.startDate}T00:00:00Z`));
export const endLabel = dateFormat.format(new Date(`${jobSearch.endDate}T00:00:00Z`));
export const periodLabel = `${startLabel}–${endLabel}`;
