const key = '71hxVyyr9sBdVKFsktTj';
const mapTag = document.getElementById("map");
const map = L.map('map').setView([59.51224061318297, 36.56994581222535], 3);

console.log(theme)
const mtLayer = L.maptiler.maptilerLayer({
    apiKey: key,
    style: L.maptiler[theme === "gzhel" ? "019900ab-eb56-7f85-b100-33c889e75051" : "0199007a-b1b4-7d33-956b-c7bf80c57a5c"]
}).addTo(map);

const Icon = L.divIcon({
    className: "marker",
    html: "<div></div>"
})

