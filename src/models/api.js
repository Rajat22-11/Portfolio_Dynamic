const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Function to fetch "About" data
export const fetchAboutData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/about`);
    if (!response.ok) throw new Error("Failed to fetch about data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching about data:", error);
  }
};

// Function to fetch "Hero" data
export const fetchHeroData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/hero`);
    if (!response.ok) throw new Error("Failed to fetch hero data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching hero data:", error);
  }
};

// Function to fetch "Experiences" data
export const fetchExperiences = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/experiences`);
    if (!response.ok) throw new Error("Failed to fetch experiences");
    return await response.json();
  } catch (error) {
    console.error("Error fetching experiences:", error);
  }
};

// Function to fetch "Projects" data
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`);
    if (!response.ok) throw new Error("Failed to fetch projects");
    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

// Function to fetch "Resume" link
export const fetchResumeLink = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/resume`);
    if (!response.ok) throw new Error("Failed to fetch resume link");
    const data = await response.json();
    return data.resumeLink;
  } catch (error) {
    console.error("Error fetching resume link:", error);
  }
};
