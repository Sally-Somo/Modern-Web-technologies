const API_BASE = "http://localhost:8000"; // Backend URL

export async function fetchEducation() {
    const response = await fetch(`${API_BASE}/getEdu`);
    return response.json();
}

export async function fetchExperience() {
    const response = await fetch(`${API_BASE}/getExp`);
    return response.json();
}

export async function fetchOverview() {
    const response = await fetch(`${API_BASE}/getOverview`);
    return response.json();
}
