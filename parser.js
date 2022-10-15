const markdownParser = (text) => {
    const toHTML = text
        .replace(/^###### (.*$)/gim, '<h6>$1</h6>') // h6 tag
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>') // h5 tag
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>') // h4 tag
        .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
        .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
        .replace(/^# (.*$)/gim, '<h1>$1</h1>') // h1 tag
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
        .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
        .replace(/^@(.*$)/gim, '<mark>$1</mark>'); // marquage du texte
    return toHTML.trim(); // using trim method to remove whitespace
}

function converter(event) {
    event.preventDefault();
    var texterea_content = document.getElementById("originalText").value;
    var result = document.getElementById("div_result");
    result.innerHTML = markdownParser(texterea_content);
}

//