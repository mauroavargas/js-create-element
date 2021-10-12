const hanaCreate = (tag, el, text) => {

    el = (typeof el !== 'undefined') ? el : null
    text = (typeof text !== 'undefined') ? text : null

    const x = document.createElement(tag);
    console.log(x);
    console.log(el)
    console.log(text)

    for (const val in el) {

        typeof val !== 'object' ? x.setAttribute(el, "") : x.setAttribute(val, el[val])

    }

    x.innerText = text;

    document.body.appendChild(x);
}

hanaCreate("img", {"alt":"image"});
hanaCreate("h2", "attrwovalue", "text");
hanaCreate("div", {"class":"square"});