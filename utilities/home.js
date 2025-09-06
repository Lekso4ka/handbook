

const mapData = Object.entries(data).filter(el => el[1].type === "place")

const createPopup = (data, home = false) => {
    const popup = document.createElement("div")
    popup.className = "popup"
    const mainBlock = document.createElement("div")
    mainBlock.className = "popup_main"
    const caption = document.createElement("h2")
    caption.innerText = data.name;
    if (data.name.split(" ").length > 2) {
        caption.style.fontSize = "16px"
    }
    
    const link = document.createElement("a")
    link.className = "custom_btn"
    link.innerText = "Read more";
    link.href = data.wiki;
    link.target = "_blank";
    mainBlock.append(caption, link)
    popup.append(mainBlock)
    if (data.articles.length) {
        const artBlock = document.createElement("div")
        artBlock.className = "popup_art"
        const listCaption = document.createElement("h3")
        listCaption.innerText = "Appears in:";
        const list = document.createElement("ul")
        data.articles.forEach((el) => {
            const line = document.createElement("li")
            const text = document.createElement("a")
            text.innerText = articles[el].title
            text.href = (home ? "." : "..") + articles[el].link
            line.append(text)
            list.appendChild(line)
        })
        artBlock.append(listCaption, list)
        popup.append(artBlock)
    }
    return popup.outerHTML
}

mapData.forEach(el => {
    L.marker(el[1].coords, {icon: Icon}).addTo(map).bindPopup(createPopup(el[1], true))
})





home = [
    "main",
    "section",
    "h1",
    "span",
    "h2",
    "p",
    "button",
    "div",
    "article",
    "img",
    "h3",
    "a"
]
homec = [
    "home",
    "home_title",
    "custom_btn",
    "home_design",
    "home_design_top",
    "home_issue",
    "map"
]
i1 = [
    "div",
    "section",
    "p",
    "h1",
    "ul",
    "li",
    "strong",
    "span",
    "a",
    "figure",
    "img",
    "figcaption",
    "aside",
    "article",
    "h2",
    "svg",
    "path",
    "main",
    "video"
]
i2 = [
    "div",
    "section",
    "p",
    "h1",
    "ul",
    "li",
    "strong",
    "span",
    "a",
    "figure",
    "img",
    "figcaption",
    "aside",
    "article",
    "h2",
    "svg",
    "path",
    "main"
]
i3 = [
    "div",
    "section",
    "h1",
    "ul",
    "li",
    "strong",
    "span",
    "a",
    "p",
    "figure",
    "img",
    "figcaption",
    "aside",
    "article",
    "h2",
    "svg",
    "path",
    "main"
]
i1c = [
    "content",
    "section_1_1",
    "caption",
    "no-letter",
    "show",
    "p1_1",
    "style1",
    "meta_block",
    "meta-names",
    "active",
    "meta-content",
    "meta-line",
    "meta-text",
    "link",
    "sup-content",
    "map_block",
    "map-container",
    "map",
    "marker",
    "issue_1",
    "mark",
    "section_1_2",
    "p1_2",
    "style4",
    "p1_3",
    "section_1_3",
    "p1_4",
    "style3",
    "p1_5",
    "section_1_4",
    "p1_6",
    "section_1_5",
    "p1_7",
    "finish",
    "finish_left",
    "finish_right"
]
i2c = [
    "content",
    "section_2_1",
    "caption",
    "no-letter",
    "letter",
    "letter_o",
    "show",
    "p2_1",
    "style2",
    "meta_block",
    "meta-names",
    "active",
    "meta-content",
    "meta-line",
    "meta-text",
    "link",
    "sup-content",
    "map_block",
    "map-container",
    "map",
    "marker",
    "issue_2",
    "mark",
    "section_2_2",
    "section_2_3",
    "p2_2",
    "style1",
    "section_2_4",
    "section_2_5",
    "p2_3",
    "style3",
    "section_2_6",
    "finish",
    "finish_left",
    "finish_right"
]
i3c = [
    "content",
    "section_3_1",
    "caption",
    "show",
    "p3_1",
    "style4",
    "meta_block",
    "meta-names",
    "active",
    "meta-content",
    "meta-line",
    "meta-text",
    "link",
    "sup-content",
    "map_block",
    "map-container",
    "map",
    "marker",
    "issue_3",
    "mark",
    "section_3_2",
    "section_3_3",
    "section_3_4",
    "section_3_5",
    "section_3_6",
    "section_3_7",
    "section_3_8",
    "section_3_9",
    "finish",
    "no-letter",
    "finish_left",
    "finish_right"
]