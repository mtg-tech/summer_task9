function sync() {
    let selectInputValue = document.getElementById("searchBox").value;
    console.log(selectInputValue);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.30.177/cgi-bin/doc_cmd.py?var=" + selectInputValue, true);
    xhr.send();
    xhr.onload = function() {
        let output = xhr.responseText;
        document.getElementById("container").innerHTML = output;
    }
}