const asetricParser = (arg) => {
    arg = arg.replace('*', '×');
    return arg.includes('*') ? asetricParser(arg) : arg;
}
let value = '',
    result = '',
    prev = "",
    historyArr = !!window.localStorage.getItem("history") ? [...JSON.parse(window.localStorage.getItem("history"))] : [];
window.addEventListener('load', () => {
    document.forms.display.value = result;
})
const one = document.getElementById('one');
const historyDetails = document.getElementById('historyDetails');
const historyContent = document.getElementById('historyContent');
const label = document.getElementById("label");
const addDetails = (value) => {
    if (!value) return;
    const p = document.createElement('p');
    p.innerHTML = `${value.includes('*') ? asetricParser(value) : value} = ${eval(value)}`;
    historyContent.appendChild(p);
}
if (!!historyArr[0]) {
    historyArr.forEach((item) => addDetails(item));
}
one.addEventListener('click', (event) => {
    value += 1;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const two = document.getElementById('two');
two.addEventListener('click', (event) => {
    value += 2;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const three = document.getElementById('three');
three.addEventListener('click', (event) => {
    value += 3;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const four = document.getElementById('four');
four.addEventListener('click', (event) => {
    value += 4;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const five = document.getElementById('five');
five.addEventListener('click', (event) => {
    value += 5;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const six = document.getElementById('six');
six.addEventListener('click', (event) => {
    value += 6;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const seven = document.getElementById('seven');
seven.addEventListener('click', (event) => {
    value += 7;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const eight = document.getElementById('eight');
eight.addEventListener('click', (event) => {
    value += 8;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const nine = document.getElementById('nine');
nine.addEventListener('click', (event) => {
    value += 9;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const zero = document.getElementById('zero');
zero.addEventListener('click', (event) => {
    value += 0;
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const dot = document.getElementById('dot');
dot.addEventListener('click', (event) => {
    if (value[value.length - 1] === '+' || value[value.length - 1] === '-' || value[value.length - 1] === '*' || value[value.length - 1] === '/' || value[value.length - 1] === '.' || value[value.length - 1] === '') return;
    value += '.';
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const slash = document.getElementById('divide');
slash.addEventListener('click', (event) => {
    if (value[value.length - 1] === '+' || value[value.length - 1] === '-' || value[value.length - 1] === '*' || value[value.length - 1] === '/' || value[value.length - 1] === '.' || value[value.length - 1] === '') return;
    value += '/';
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const reset = document.getElementById('reset');
reset.addEventListener('click', (event) => {
    value = '';
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const del = document.getElementById('del');
del.addEventListener('click', (event) => {
    value = value.substring(0, value.length - 2);
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const plus = document.getElementById('plus');
plus.addEventListener('click', (event) => {
    if (value[value.length - 1] === '+' || value[value.length - 1] === '-' || value[value.length - 1] === '*' || value[value.length - 1] === '/' || value[value.length - 1] === '.' || value[value.length - 1] === '') return;
    value += "+";
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
    document.getElementById("second").setAttribute("data-prev", prev);
    
})
const times = document.getElementById('times');
times.addEventListener('click', (event) => {
    if (value[value.length - 1] === '+' || value[value.length - 1] === '-' || value[value.length - 1] === '*' || value[value.length - 1] === '/' || value[value.length - 1] === '.' || value[value.length - 1] === '') return;
    value += "*";
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})
const minus = document.getElementById('minus');
minus.addEventListener('click', (event) => {
    if (value[value.length - 1] === '+' || value[value.length - 1] === '-' || value[value.length - 1] === '*' || value[value.length - 1] === '/' || value[value.length - 1] === '.' || value[value.length - 1] === '') return;
    value += "-";
    result = value.includes('*') ? asetricParser(value) : value;
    document.forms.display.value = result;
})

const equal = document.getElementById('equal');
equal.addEventListener('click', (event) => {
    if (value[value.length - 1] === '+' || value[value.length - 1] === '-' || value[value.length - 1] === '*' || value[value.length - 1] === '/' || value[value.length - 1] === '.' || value[value.length - 1] === '') return;
    if (value === prev) return
    historyArr = [...historyArr, value];
    label.setAttribute("data-prev", historyArr[historyArr.length - 1])
    value = value !== prev ? eval(value) : value;
    prev = value;
    result = String(value);
    document.forms.display.value = result;
    historyArr.forEach((item) => addDetails(item));
    window.localStorage.setItem("history", JSON.stringify(historyArr));
})
const history = document.getElementById('history');
history.addEventListener('click', (event) => {
    historyDetails.classList.toggle('hidden');
})
const close = document.getElementById('close');
close.addEventListener('click', (event) => {
    historyDetails.classList.toggle('hidden');
});
const clear = document.getElementById('clear');
clear.addEventListener('click', (event) => {
    historyArr = [];
    const pTags = document.querySelectorAll("#historyContent p");
    pTags.forEach((item) => item.remove());
    window.localStorage.removeItem("history");
});
// functions
//changes the background on the click of the first toggle button
const classChanger1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('bac1');
    Element.classList.remove('bac2');
    Element.classList.remove('bac3');
}
//changes the background on the click of the second toggle button
const classChanger2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('bac1');
    Element.classList.add('bac2');
    Element.classList.remove('bac3');
}
//changes the background on the click of the third toggle button
const classChanger3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('bac1');
    Element.classList.remove('bac2');
    Element.classList.add('bac3');
}
//changes some of the buttons properties on the click of the first toggle button
const buttonChanger1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('button1');
    Element.classList.remove('button2');
    Element.classList.remove('button3');
}
//changes some of the buttons properties on the click of the second toggle button
const buttonChanger2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('button1');
    Element.classList.add('button2');
    Element.classList.remove('button3');
}
//changes some ofthe buttons properties on the click of the three toggle button
const buttonChanger3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('button1');
    Element.classList.remove('button2');
    Element.classList.add('button3');
}
//changes the top property of the document on the click of the first toggle button I.e the toggle div
const topChanger1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('top1');
    Element.classList.remove('top2');
    Element.classList.remove('top3');
}
//changes the top property of the document on the click of the second toggle button I.e the toggle div
const topChanger2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('top1');
    Element.classList.add('top2');
    Element.classList.remove('top3');
}
//changes the top property of the document on the click of the third toggle button I.e the toggle div
const topChanger3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('top1');
    Element.classList.remove('top2');
    Element.classList.add('top3');
}
//changes the screen property of the document on the click of the first toggle button I.e the screen div
const screenChanger1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('screen1');
    Element.classList.remove('screen2');
    Element.classList.remove('screen3');
}
//changes the screen property of the document on the click of the second toggle button I.e the screen div
const screenChanger2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('screen1');
    Element.classList.add('screen2');
    Element.classList.remove('screen3');
}
//changes the screen property of the document on the click of the third toggle button I.e the screen div
const screenChanger3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('screen1');
    Element.classList.remove('screen2');
    Element.classList.add('screen3');
}
//changes the key's background property of the document on the click of the first toggle button
const keyBackgroundChanger1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('keybac1');
    Element.classList.remove('keybac2');
    Element.classList.remove('keybac3');
}
//changes the key's background property of the document on the click of the second toggle button
const keyBackgroundChanger2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('keybac1');
    Element.classList.add('keybac2');
    Element.classList.remove('keybac3');
}
//changes the key's background property of the document on the click of the third toggle button I.e the toggle div
const keyBackgroundChanger3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('keybac1');
    Element.classList.remove('keybac2');
    Element.classList.add('keybac3');
}
//changes some of the buttons properties on the click of the first toggle button
const buttonType1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('buttontype1');
    Element.classList.remove('buttontype2');
    Element.classList.remove('buttontype3');
}
//changes some of the buttons properties on the click of the second toggle button
const buttonType2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('buttontype1');
    Element.classList.add('buttontype2');
    Element.classList.remove('buttontype3');
}
//changes some of the buttons properties on the click of the third toggle button
const buttonType3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('buttontype1');
    Element.classList.remove('buttontype2');
    Element.classList.add('buttontype3');
}
//changes some of the buttons properties on the click of the first toggle button
const buttonEqual1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('buttonequal1');
    Element.classList.remove('buttonequal2');
    Element.classList.remove('buttonequal3');
}
//changes some of the buttons properties on the click of the second toggle button
const buttonEqual2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('buttonequal1');
    Element.classList.add('buttonequal2');
    Element.classList.remove('buttonequal3');
}
//changes some of the buttons properties on the click of the third toggle button
const buttonEqual3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('buttonequal1');
    Element.classList.remove('buttonequal2');
    Element.classList.add('buttonequal3');
}
const footer1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('footer1');
    Element.classList.remove('footer2');
    Element.classList.remove('footer3');
}
const footer2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('footer1');
    Element.classList.add('footer2');
    Element.classList.remove('footer3');
}
const footer3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('footer1');
    Element.classList.remove('footer2');
    Element.classList.add('footer3');
}
const svg1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('svgBac');
    Element.classList.remove('svgBac2');
    Element.classList.remove('svgBac3');
}
const svg2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('svgBac');
    Element.classList.add('svgBac2');
    Element.classList.remove('svgBac3');
}
const svg3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('svgBac');
    Element.classList.remove('svgBac2');
    Element.classList.add('svgBac3');
}
const floatToggle = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('float1');
    Element.classList.remove('float2');
    Element.classList.remove('float3');
}
const floatToggle2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('float1');
    Element.classList.add('float2');
    Element.classList.remove('float3');
}
const floatToggle3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('float1');
    Element.classList.remove('float2');
    Element.classList.add('float3');
}
const labelToggle1 = (DomElement) => {
    const Element = DomElement;
    Element.classList.add('label1');
    Element.classList.remove('label2');
    Element.classList.remove('label3');
}
const labelToggle2 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('label1');
    Element.classList.add('label2');
    Element.classList.remove('label3');
}
const labelToggle3 = (DomElement) => {
    const Element = DomElement;
    Element.classList.remove('label1');
    Element.classList.remove('label2');
    Element.classList.add('label3');
}
const footer = document.getElementById('footer');
const theme1 = document.getElementById('a');
const theme2 = document.getElementById('b');
const theme3 = document.getElementById('c');
const float = document.getElementById('float');
const svgIcon = document.querySelectorAll('.icons');
const svg = document.getElementById('svg');
theme1.addEventListener('click', (event) => {
    classChanger1(document.body);
    buttonChanger1(one);
    buttonChanger1(two);
    buttonChanger1(three);
    buttonChanger1(four);
    buttonChanger1(five);
    buttonChanger1(six);
    buttonChanger1(seven);
    buttonChanger1(eight);
    buttonChanger1(nine);
    buttonChanger1(zero);
    buttonChanger1(dot);
    buttonChanger1(slash);
    buttonChanger1(minus);
    buttonChanger1(plus);
    buttonChanger1(times);
    topChanger1(first);
    screenChanger1(second);
    keyBackgroundChanger1(historyDetails);
    keyBackgroundChanger1(third);
    keyBackgroundChanger1(svg);
    buttonType1(reset);
    buttonType1(del);
    buttonEqual1(float);
    buttonEqual1(equal);
    footer1(footer);
    labelToggle1(label);
    svgIcon.forEach((icon) => svg1(icon));
    floatToggle(float)
})
theme2.addEventListener('click', (event) => {
    classChanger2(document.body);
    buttonChanger2(one);
    buttonChanger2(two);
    buttonChanger2(three);
    buttonChanger2(four);
    buttonChanger2(five);
    buttonChanger2(six);
    buttonChanger2(seven);
    buttonChanger2(eight);
    buttonChanger2(nine);
    buttonChanger2(zero);
    buttonChanger2(dot);
    buttonChanger2(slash);
    buttonChanger2(minus);
    buttonChanger2(plus);
    buttonChanger2(times);
    topChanger2(first);
    screenChanger2(second);
    keyBackgroundChanger2(historyDetails);
    keyBackgroundChanger2(third);
    keyBackgroundChanger2(svg);
    buttonType2(reset);
    buttonType2(del);
    buttonEqual2(float);
    buttonEqual2(equal);
    footer2(footer);
    labelToggle2(label);
    svgIcon.forEach((icon) => svg2(icon));
    floatToggle2(float)
})
theme3.addEventListener('click', (event) => {
    classChanger3(document.body);
    buttonChanger3(one);
    buttonChanger3(two);
    buttonChanger3(three);
    buttonChanger3(four);
    buttonChanger3(five);
    buttonChanger3(six);
    buttonChanger3(seven);
    buttonChanger3(eight);
    buttonChanger3(nine);
    buttonChanger3(zero);
    buttonChanger3(dot);
    buttonChanger3(slash);
    buttonChanger3(minus);
    buttonChanger3(plus);
    buttonChanger3(times);
    topChanger3(first);
    screenChanger3(second);
    keyBackgroundChanger3(historyDetails);
    keyBackgroundChanger3(third);
    keyBackgroundChanger3(svg);
    buttonType3(reset);
    buttonType3(del);
    buttonEqual3(float);
    buttonEqual3(equal);
    footer3(footer);
    labelToggle3(label);
    svgIcon.forEach((icon) => svg3(icon));
    floatToggle3(float)
})
