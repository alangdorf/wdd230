const dateElement = document.querySelector(".updateTime");
const dateUpdated = new Date(document.lastModified);
const options = { hour12: false };

dateElement.textContent = `Last updated: ${dateUpdated.toLocaleDateString("en-US")} ${dateUpdated.toLocaleTimeString("en-US", options)}`;