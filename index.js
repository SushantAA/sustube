// alert('index');

const searchInput = document.getElementById('searchInput');
const inputSuggestions = document.getElementById('inputSuggestions')
const resultBox = document.getElementById('resultBox');

const searchIcon = `<svg enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path></svg>`;

inputSuggestions.style = "display: none";

const searchInputChecker = () => {
    let debounceText = searchInput.value; 

    if(debounceText != ""){
        const resultItem = `<div class="resultList" > <div class="resultIcon" > ${searchIcon} </div> <div class="resultText"> ${debounceText} </div> </div>`;
        let resultItems = "";
    
        for(let item = 0; item<5; item++){
            resultItems = resultItems + resultItem;
        }
        
        resultBox.innerHTML = resultItems;
        inputSuggestions.style = "display: visible";
    } else {
        inputSuggestions.style = "display: none";
    }

    console.log(debounceText);
}

setInterval(searchInputChecker, 1000);