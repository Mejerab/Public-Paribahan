const seats = document.getElementById('seat-number');
const totalPrice = document.getElementById('total-price');
function A1(){
    const select = document.getElementById('A1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">A1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function A2(){
    const select = document.getElementById('A2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="pl-12">A2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function A3(){
    const select = document.getElementById('A3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">A3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function A4(){
    const select = document.getElementById('A4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">A4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function B1(){
    const select = document.getElementById('B1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">B1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function B2(){
    const select = document.getElementById('B2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">B2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function B3(){
    const select = document.getElementById('B3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">B3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function B4(){
    const select = document.getElementById('B4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">B4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function C1(){
    const select = document.getElementById('C1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">C1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function C2(){
    const select = document.getElementById('C2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">C2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function C3(){
    const select = document.getElementById('C3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">C3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function C4(){
    const select = document.getElementById('C4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">C4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function D1(){
    const select = document.getElementById('D1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">D1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function D2(){
    const select = document.getElementById('D2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">D2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function D3(){
    const select = document.getElementById('D3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">D3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function D4(){
    const select = document.getElementById('D4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">D4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function E1(){
    const select = document.getElementById('E1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">E1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function E2(){
    const select = document.getElementById('E2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">E2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function E3(){
    const select = document.getElementById('E3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">E3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function E4(){
    const select = document.getElementById('E4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">E4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function F1(){
    const select = document.getElementById('F1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">F1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function F2(){
    const select = document.getElementById('F2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">F2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function F3(){
    const select = document.getElementById('F3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">F3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function F4(){
    const select = document.getElementById('F4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">F4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function G1(){
    const select = document.getElementById('G1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">G1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function G2(){
    const select = document.getElementById('G2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">G2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function G3(){
    const select = document.getElementById('G3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">G3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function G4(){
    const select = document.getElementById('G4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">G4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function H1(){
    const select = document.getElementById('H1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">H1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function H2(){
    const select = document.getElementById('H2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">H2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function H3(){
    const select = document.getElementById('H3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">H3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function H4(){
    const select = document.getElementById('H4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">H4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function I1(){
    const select = document.getElementById('I1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">I1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function I2(){
    const select = document.getElementById('I2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">I2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function I3(){
    const select = document.getElementById('I3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">I3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function I4(){
    const select = document.getElementById('I4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">I4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function J1(){
    const select = document.getElementById('J1')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">J1</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function J2(){
    const select = document.getElementById('J2')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">J2</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function J3(){
    const select = document.getElementById('J3')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">J3</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    console.log(typeof money);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}
function J4(){
    const select = document.getElementById('J4')
    select.classList.add('bg-[#1DD100]')
    select.classList.add('text-white')
    const tBody = document.getElementById('t-body');
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td class="pl-12">J4</td>
    <td class="text-center">Economy</td>
    `;
    const td = document.createElement('td');
    td.innerText = 550;
    td.classList.add('text-right');
    td.classList.add('pr-12');
    tr.appendChild(td);
    tBody.appendChild(tr);
    const money = parseInt(td.innerText);
    const conSeat = seats.innerText - 1;
    seats.innerText = conSeat;
    const numberPrice = parseFloat(totalPrice.innerText) + 550;
    totalPrice.innerText = numberPrice;
}