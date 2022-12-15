const lastUpdated = document.getElementById("updateTime");
const updateTime = new Date(document.lastModified);
lastUpdated.innerHTML = `${updateTime.toLocaleDateString("en-US")} ${updateTime.toLocaleTimeString("en-US")}`;