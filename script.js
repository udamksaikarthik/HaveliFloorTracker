const guest_name_table_id_1 = document.getElementById('guest_name_table_id_1')
const drink_table_id_1 = document.getElementById('drink_table_id_1')
const starter_table_id_1 = document.getElementById('starter_table_id_1')
const main_table_id_1 = document.getElementById('main_table_id_1')
const dessert_table_id_1 = document.getElementById('dessert_table_id_1')
const tea_table_id_1 = document.getElementById('tea_table_id_1')
const notes_table_id_1 = document.getElementById('notes_table_id_1')
const check_table_id_1 = document.getElementById('check_table_id_1')
let table1_interval
const btn_start_table_id_1 = document.getElementById('btn_start_table_id_1')

let table_status_1 = ''
let table_seconds_1 = 0
let table_minutes_1 = 0


function btn_start_table_1(){
    table1_interval = setInterval(elapsed_time, 1000)
    if(table_status_1 === '')
    {
        table_seconds_1 = 0
        table_minutes_1 = 0
        table_status_1 = 'drinks'
    }
    else if(table_status_1 === 'drinks')
    {
        clearInterval(table1_interval)
        table_seconds_1 = 0
        table_minutes_1 = 0
        table_status_1 = 'starters'
    }
    else if(table_status_1 === 'starters')
    {
        clearInterval(table1_interval)
        table_seconds_1 = 0
        table_minutes_1 = 0
        table_status_1 = 'mains'
    }
    else if(table_status_1 === 'mains')
    {
        clearInterval(table1_interval)
        table_seconds_1 = 0
        table_minutes_1 = 0
        table_status_1 = 'desserts'
    }
    else if(table_status_1 === 'desserts')
    {
        clearInterval(table1_interval)
        table_seconds_1 = 0
        table_minutes_1 = 0
        table_status_1 = 'tea'
    }
    else if(table_status_1 === 'tea')
    {
        clearInterval(table1_interval)
        table_seconds_1 = 0
        table_minutes_1 = 0
        table_status_1 = 'check'
    }
    else if(table_status_1 === 'check')
    {
        clearInterval(table1_interval)
        table_seconds_1 = 0
        table_minutes_1 = 0
        table_status_1 = 'done'
    }
    else if(table_status_1 === 'done')
    {
        clearInterval(table1_interval)
        table_seconds_1 = 0
        table_minutes_1 = 0
    }else{
        clearInterval(table1_interval)
    }
}


function btn_clear_table_1(){
    drink_table_id_1.innerText = ''
    starter_table_id_1.innerText = ''
    main_table_id_1.innerText = ''
    dessert_table_id_1.innerText = ''
    tea_table_id_1.innerText = ''
    check_table_id_1.innerText = ''
    notes_table_id_1.value = ''
    guest_name_table_id_1.value = ''
    table_status_1 = ''
    clearInterval(table1_interval)
}

function calculate1() {
    table_seconds_1 = table_seconds_1 + 1;
    let table_elapsed_time = table_minutes_1 + ':' + Math.round(table_seconds_1)
    if(table_seconds_1 === 60){
        table_seconds_1 = 0;
        table_minutes_1++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time(){
    if(table_status_1 === 'drinks')
    {
        table_elapsed_time = calculate1()
        drink_table_id_1.innerText = table_elapsed_time
    }
    else if(table_status_1 === 'starters')
    {
        table_elapsed_time = calculate1()
        starter_table_id_1.innerText = table_elapsed_time
    }
    else if(table_status_1 === 'mains')
    {
        table_elapsed_time = calculate1()
        main_table_id_1.innerText = table_elapsed_time
    }
    else if(table_status_1 === 'desserts')
    {
        table_elapsed_time = calculate1()
        dessert_table_id_1.innerText = table_elapsed_time
    }
    else if(table_status_1 === 'tea')
    {
        table_elapsed_time = calculate1()
        tea_table_id_1.innerText = table_elapsed_time
    }
    else if(table_status_1 === 'check')
    {
        table_elapsed_time = calculate1()
        check_table_id_1.innerText = table_elapsed_time
    }
    else{
        clearInterval(table1_interval)
    }
}

const guest_name_table_id_2 = document.getElementById('guest_name_table_id_2')
const drink_table_id_2 = document.getElementById('drink_table_id_2')
const starter_table_id_2 = document.getElementById('starter_table_id_2')
const main_table_id_2 = document.getElementById('main_table_id_2')
const dessert_table_id_2 = document.getElementById('dessert_table_id_2')
const tea_table_id_2 = document.getElementById('tea_table_id_2')
const notes_table_id_2 = document.getElementById('notes_table_id_2')
const check_table_id_2 = document.getElementById('check_table_id_2')
let table2_interval
const btn_start_table_id_2 = document.getElementById('btn_start_table_id_2')

let table_status_2 = ''
let table_seconds_2 = 0
let table_minutes_2 = 0


function btn_start_table_2(){
    table2_interval = setInterval(elapsed_time2, 1000)
    if(table_status_2 === '')
    {
        table_seconds_2 = 0
        table_minutes_2 = 0
        table_status_2 = 'drinks'
    }
    else if(table_status_2 === 'drinks')
    {
        clearInterval(table2_interval)
        table_seconds_2 = 0
        table_minutes_2 = 0
        table_status_2 = 'starters'
    }
    else if(table_status_2 === 'starters')
    {
        clearInterval(table2_interval)
        table_seconds_2 = 0
        table_minutes_2 = 0
        table_status_2 = 'mains'
    }
    else if(table_status_2 === 'mains')
    {
        clearInterval(table2_interval)
        table_seconds_2 = 0
        table_minutes_2 = 0
        table_status_2 = 'desserts'
    }
    else if(table_status_2 === 'desserts')
    {
        clearInterval(table2_interval)
        table_seconds_2 = 0
        table_minutes_2 = 0
        table_status_2 = 'tea'
    }
    else if(table_status_2 === 'tea')
    {
        clearInterval(table2_interval)
        table_seconds_2 = 0
        table_minutes_2 = 0
        table_status_2 = 'check'
    }
    else if(table_status_2 === 'check')
    {
        clearInterval(table2_interval)
        table_seconds_2 = 0
        table_minutes_2 = 0
        table_status_2 = 'done'
    }
    else if(table_status_2 === 'done')
    {
        clearInterval(table2_interval)
        table_seconds_2 = 0
        table_minutes_2 = 0
    }else{
        clearInterval(table2_interval)
    }
}


function btn_clear_table_2(){
    drink_table_id_2.innerText = ''
    starter_table_id_2.innerText = ''
    main_table_id_2.innerText = ''
    dessert_table_id_2.innerText = ''
    tea_table_id_2.innerText = ''
    check_table_id_2.innerText = ''
    notes_table_id_2.value = ''
    guest_name_table_id_2.value = ''
    table_status_2 = ''
    clearInterval(table2_interval)
}

function calculate2() {
    table_seconds_2 = table_seconds_2 + 1;
    let table_elapsed_time = table_minutes_2 + ':' + Math.round(table_seconds_2)
    if(table_seconds_2 === 60){
        table_seconds_2 = 0;
        table_minutes_2++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time2(){
    if(table_status_2 === 'drinks')
    {
        table_elapsed_time = calculate2()
        drink_table_id_2.innerText = table_elapsed_time
    }
    else if(table_status_2 === 'starters')
    {
        table_elapsed_time = calculate2()
        starter_table_id_2.innerText = table_elapsed_time
    }
    else if(table_status_2 === 'mains')
    {
        table_elapsed_time = calculate2()
        main_table_id_2.innerText = table_elapsed_time
    }
    else if(table_status_2 === 'desserts')
    {
        table_elapsed_time = calculate2()
        dessert_table_id_2.innerText = table_elapsed_time
    }
    else if(table_status_2 === 'tea')
    {
        table_elapsed_time = calculate2()
        tea_table_id_2.innerText = table_elapsed_time
    }
    else if(table_status_2 === 'check')
    {
        table_elapsed_time = calculate2()
        check_table_id_2.innerText = table_elapsed_time
    }
    else{
        clearInterval(table2_interval)
    }
}


const guest_name_table_id_3 = document.getElementById('guest_name_table_id_3')
const drink_table_id_3 = document.getElementById('drink_table_id_3')
const starter_table_id_3 = document.getElementById('starter_table_id_3')
const main_table_id_3 = document.getElementById('main_table_id_3')
const dessert_table_id_3 = document.getElementById('dessert_table_id_3')
const tea_table_id_3 = document.getElementById('tea_table_id_3')
const notes_table_id_3 = document.getElementById('notes_table_id_3')
const check_table_id_3 = document.getElementById('check_table_id_3')
let table3_interval
const btn_start_table_id_3 = document.getElementById('btn_start_table_id_3')

let table_status_3 = ''
let table_seconds_3 = 0
let table_minutes_3 = 0


function btn_start_table_3(){
    table3_interval = setInterval(elapsed_time3, 1000)
    if(table_status_3 === '')
    {
        table_seconds_3 = 0
        table_minutes_3 = 0
        table_status_3 = 'drinks'
    }
    else if(table_status_3 === 'drinks')
    {
        clearInterval(table3_interval)
        table_seconds_3 = 0
        table_minutes_3 = 0
        table_status_3 = 'starters'
    }
    else if(table_status_3 === 'starters')
    {
        clearInterval(table3_interval)
        table_seconds_3 = 0
        table_minutes_3 = 0
        table_status_3 = 'mains'
    }
    else if(table_status_3 === 'mains')
    {
        clearInterval(table3_interval)
        table_seconds_3 = 0
        table_minutes_3 = 0
        table_status_3 = 'desserts'
    }
    else if(table_status_3 === 'desserts')
    {
        clearInterval(table3_interval)
        table_seconds_3 = 0
        table_minutes_3 = 0
        table_status_3 = 'tea'
    }
    else if(table_status_3 === 'tea')
    {
        clearInterval(table3_interval)
        table_seconds_3 = 0
        table_minutes_3 = 0
        table_status_3 = 'check'
    }
    else if(table_status_3 === 'check')
    {
        clearInterval(table3_interval)
        table_seconds_3 = 0
        table_minutes_3 = 0
        table_status_3 = 'done'
    }
    else if(table_status_3 === 'done')
    {
        clearInterval(table3_interval)
        table_seconds_3 = 0
        table_minutes_3 = 0
    }else{
        clearInterval(table3_interval)
    }
}


function btn_clear_table_3(){
    drink_table_id_3.innerText = ''
    starter_table_id_3.innerText = ''
    main_table_id_3.innerText = ''
    dessert_table_id_3.innerText = ''
    tea_table_id_3.innerText = ''
    check_table_id_3.innerText = ''
    notes_table_id_3.value = ''
    guest_name_table_id_3.value = ''
    table_status_3 = ''
    clearInterval(table3_interval)
}

function calculate3() {
    table_seconds_3 = table_seconds_3 + 1;
    let table_elapsed_time = table_minutes_3 + ':' + Math.round(table_seconds_3)
    if(table_seconds_3 === 60){
        table_seconds_3 = 0;
        table_minutes_3++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time3(){
    if(table_status_3 === 'drinks')
    {
        table_elapsed_time = calculate3()
        drink_table_id_3.innerText = table_elapsed_time
    }
    else if(table_status_3 === 'starters')
    {
        table_elapsed_time = calculate3()
        starter_table_id_3.innerText = table_elapsed_time
    }
    else if(table_status_3 === 'mains')
    {
        table_elapsed_time = calculate3()
        main_table_id_3.innerText = table_elapsed_time
    }
    else if(table_status_3 === 'desserts')
    {
        table_elapsed_time = calculate3()
        dessert_table_id_3.innerText = table_elapsed_time
    }
    else if(table_status_3 === 'tea')
    {
        table_elapsed_time = calculate3()
        tea_table_id_3.innerText = table_elapsed_time
    }
    else if(table_status_3 === 'check')
    {
        table_elapsed_time = calculate3()
        check_table_id_3.innerText = table_elapsed_time
    }
    else{
        clearInterval(table3_interval)
    }
}


const guest_name_table_id_4 = document.getElementById('guest_name_table_id_4')
const drink_table_id_4 = document.getElementById('drink_table_id_4')
const starter_table_id_4 = document.getElementById('starter_table_id_4')
const main_table_id_4 = document.getElementById('main_table_id_4')
const dessert_table_id_4 = document.getElementById('dessert_table_id_4')
const tea_table_id_4 = document.getElementById('tea_table_id_4')
const notes_table_id_4 = document.getElementById('notes_table_id_4')
const check_table_id_4 = document.getElementById('check_table_id_4')
let table4_interval
const btn_start_table_id_4 = document.getElementById('btn_start_table_id_4')

let table_status_4 = ''
let table_seconds_4 = 0
let table_minutes_4 = 0


function btn_start_table_4(){
    table4_interval = setInterval(elapsed_time4, 1000)
    if(table_status_4 === '')
    {
        table_seconds_4 = 0
        table_minutes_4 = 0
        table_status_4 = 'drinks'
    }
    else if(table_status_4 === 'drinks')
    {
        clearInterval(table4_interval)
        table_seconds_4 = 0
        table_minutes_4 = 0
        table_status_4 = 'starters'
    }
    else if(table_status_4 === 'starters')
    {
        clearInterval(table4_interval)
        table_seconds_4 = 0
        table_minutes_4 = 0
        table_status_4 = 'mains'
    }
    else if(table_status_4 === 'mains')
    {
        clearInterval(table4_interval)
        table_seconds_4 = 0
        table_minutes_4 = 0
        table_status_4 = 'desserts'
    }
    else if(table_status_4 === 'desserts')
    {
        clearInterval(table4_interval)
        table_seconds_4 = 0
        table_minutes_4 = 0
        table_status_4 = 'tea'
    }
    else if(table_status_4 === 'tea')
    {
        clearInterval(table4_interval)
        table_seconds_4 = 0
        table_minutes_4 = 0
        table_status_4 = 'check'
    }
    else if(table_status_4 === 'check')
    {
        clearInterval(table4_interval)
        table_seconds_4 = 0
        table_minutes_4 = 0
        table_status_4 = 'done'
    }
    else if(table_status_4 === 'done')
    {
        clearInterval(table4_interval)
        table_seconds_4 = 0
        table_minutes_4 = 0
    }else{
        clearInterval(table4_interval)
    }
}


function btn_clear_table_4(){
    drink_table_id_4.innerText = ''
    starter_table_id_4.innerText = ''
    main_table_id_4.innerText = ''
    dessert_table_id_4.innerText = ''
    tea_table_id_4.innerText = ''
    check_table_id_4.innerText = ''
    notes_table_id_4.value = ''
    guest_name_table_id_4.value = ''
    table_status_4 = ''
    clearInterval(table4_interval)
}

function calculate4() {
    table_seconds_4 = table_seconds_4 + 1;
    let table_elapsed_time = table_minutes_4 + ':' + Math.round(table_seconds_4)
    if(table_seconds_4 === 60){
        table_seconds_4 = 0;
        table_minutes_4++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time4(){
    if(table_status_4 === 'drinks')
    {
        table_elapsed_time = calculate4()
        drink_table_id_4.innerText = table_elapsed_time
    }
    else if(table_status_4 === 'starters')
    {
        table_elapsed_time = calculate4()
        starter_table_id_4.innerText = table_elapsed_time
    }
    else if(table_status_4 === 'mains')
    {
        table_elapsed_time = calculate4()
        main_table_id_4.innerText = table_elapsed_time
    }
    else if(table_status_4 === 'desserts')
    {
        table_elapsed_time = calculate4()
        dessert_table_id_4.innerText = table_elapsed_time
    }
    else if(table_status_4 === 'tea')
    {
        table_elapsed_time = calculate4()
        tea_table_id_4.innerText = table_elapsed_time
    }
    else if(table_status_4 === 'check')
    {
        table_elapsed_time = calculate4()
        check_table_id_4.innerText = table_elapsed_time
    }
    else{
        clearInterval(table4_interval)
    }
}


const guest_name_table_id_5 = document.getElementById('guest_name_table_id_5')
const drink_table_id_5 = document.getElementById('drink_table_id_5')
const starter_table_id_5 = document.getElementById('starter_table_id_5')
const main_table_id_5 = document.getElementById('main_table_id_5')
const dessert_table_id_5 = document.getElementById('dessert_table_id_5')
const tea_table_id_5 = document.getElementById('tea_table_id_5')
const notes_table_id_5 = document.getElementById('notes_table_id_5')
const check_table_id_5 = document.getElementById('check_table_id_5')
let table5_interval
const btn_start_table_id_5 = document.getElementById('btn_start_table_id_5')

let table_status_5 = ''
let table_seconds_5 = 0
let table_minutes_5 = 0


function btn_start_table_5(){
    table5_interval = setInterval(elapsed_time5, 1000)
    if(table_status_5 === '')
    {
        table_seconds_5 = 0
        table_minutes_5 = 0
        table_status_5 = 'drinks'
    }
    else if(table_status_5 === 'drinks')
    {
        clearInterval(table5_interval)
        table_seconds_5 = 0
        table_minutes_5 = 0
        table_status_5 = 'starters'
    }
    else if(table_status_5 === 'starters')
    {
        clearInterval(table5_interval)
        table_seconds_5 = 0
        table_minutes_5 = 0
        table_status_5 = 'mains'
    }
    else if(table_status_5 === 'mains')
    {
        clearInterval(table5_interval)
        table_seconds_5 = 0
        table_minutes_5 = 0
        table_status_5 = 'desserts'
    }
    else if(table_status_5 === 'desserts')
    {
        clearInterval(table5_interval)
        table_seconds_5 = 0
        table_minutes_5 = 0
        table_status_5 = 'tea'
    }
    else if(table_status_5 === 'tea')
    {
        clearInterval(table5_interval)
        table_seconds_5 = 0
        table_minutes_5 = 0
        table_status_5 = 'check'
    }
    else if(table_status_5 === 'check')
    {
        clearInterval(table5_interval)
        table_seconds_5 = 0
        table_minutes_5 = 0
        table_status_5 = 'done'
    }
    else if(table_status_5 === 'done')
    {
        clearInterval(table5_interval)
        table_seconds_5 = 0
        table_minutes_5 = 0
    }else{
        clearInterval(table5_interval)
    }
}


function btn_clear_table_5(){
    drink_table_id_5.innerText = ''
    starter_table_id_5.innerText = ''
    main_table_id_5.innerText = ''
    dessert_table_id_5.innerText = ''
    tea_table_id_5.innerText = ''
    check_table_id_5.innerText = ''
    notes_table_id_5.value = ''
    guest_name_table_id_5.value = ''
    table_status_5 = ''
    clearInterval(table5_interval)
}

function calculate5() {
    table_seconds_5 = table_seconds_5 + 1;
    let table_elapsed_time = table_minutes_5 + ':' + Math.round(table_seconds_5)
    if(table_seconds_5 === 60){
        table_seconds_5 = 0;
        table_minutes_5++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time5(){
    if(table_status_5 === 'drinks')
    {
        table_elapsed_time = calculate5()
        drink_table_id_5.innerText = table_elapsed_time
    }
    else if(table_status_5 === 'starters')
    {
        table_elapsed_time = calculate5()
        starter_table_id_5.innerText = table_elapsed_time
    }
    else if(table_status_5 === 'mains')
    {
        table_elapsed_time = calculate5()
        main_table_id_5.innerText = table_elapsed_time
    }
    else if(table_status_5 === 'desserts')
    {
        table_elapsed_time = calculate5()
        dessert_table_id_5.innerText = table_elapsed_time
    }
    else if(table_status_5 === 'tea')
    {
        table_elapsed_time = calculate5()
        tea_table_id_5.innerText = table_elapsed_time
    }
    else if(table_status_5 === 'check')
    {
        table_elapsed_time = calculate5()
        check_table_id_5.innerText = table_elapsed_time
    }
    else{
        clearInterval(table5_interval)
    }
}


const guest_name_table_id_6 = document.getElementById('guest_name_table_id_6')
const drink_table_id_6 = document.getElementById('drink_table_id_6')
const starter_table_id_6 = document.getElementById('starter_table_id_6')
const main_table_id_6 = document.getElementById('main_table_id_6')
const dessert_table_id_6 = document.getElementById('dessert_table_id_6')
const tea_table_id_6 = document.getElementById('tea_table_id_6')
const notes_table_id_6 = document.getElementById('notes_table_id_6')
const check_table_id_6 = document.getElementById('check_table_id_6')
let table6_interval
const btn_start_table_id_6 = document.getElementById('btn_start_table_id_6')

let table_status_6 = ''
let table_seconds_6 = 0
let table_minutes_6 = 0


function btn_start_table_6(){
    table6_interval = setInterval(elapsed_time6, 1000)
    if(table_status_6 === '')
    {
        table_seconds_6 = 0
        table_minutes_6 = 0
        table_status_6 = 'drinks'
    }
    else if(table_status_6 === 'drinks')
    {
        clearInterval(table6_interval)
        table_seconds_6 = 0
        table_minutes_6 = 0
        table_status_6 = 'starters'
    }
    else if(table_status_6 === 'starters')
    {
        clearInterval(table6_interval)
        table_seconds_6 = 0
        table_minutes_6 = 0
        table_status_6 = 'mains'
    }
    else if(table_status_6 === 'mains')
    {
        clearInterval(table6_interval)
        table_seconds_6 = 0
        table_minutes_6 = 0
        table_status_6 = 'desserts'
    }
    else if(table_status_6 === 'desserts')
    {
        clearInterval(table6_interval)
        table_seconds_6 = 0
        table_minutes_6 = 0
        table_status_6 = 'tea'
    }
    else if(table_status_6 === 'tea')
    {
        clearInterval(table6_interval)
        table_seconds_6 = 0
        table_minutes_6 = 0
        table_status_6 = 'check'
    }
    else if(table_status_6 === 'check')
    {
        clearInterval(table6_interval)
        table_seconds_6 = 0
        table_minutes_6 = 0
        table_status_6 = 'done'
    }
    else if(table_status_6 === 'done')
    {
        clearInterval(table6_interval)
        table_seconds_6 = 0
        table_minutes_6 = 0
    }else{
        clearInterval(table6_interval)
    }
}


function btn_clear_table_6(){
    drink_table_id_6.innerText = ''
    starter_table_id_6.innerText = ''
    main_table_id_6.innerText = ''
    dessert_table_id_6.innerText = ''
    tea_table_id_6.innerText = ''
    check_table_id_6.innerText = ''
    notes_table_id_6.value = ''
    guest_name_table_id_6.value = ''
    table_status_6 = ''
    clearInterval(table6_interval)
}

function calculate6() {
    table_seconds_6 = table_seconds_6 + 1;
    let table_elapsed_time = table_minutes_6 + ':' + Math.round(table_seconds_6)
    if(table_seconds_6 === 60){
        table_seconds_6 = 0;
        table_minutes_6++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time6(){
    if(table_status_6 === 'drinks')
    {
        table_elapsed_time = calculate6()
        drink_table_id_6.innerText = table_elapsed_time
    }
    else if(table_status_6 === 'starters')
    {
        table_elapsed_time = calculate6()
        starter_table_id_6.innerText = table_elapsed_time
    }
    else if(table_status_6 === 'mains')
    {
        table_elapsed_time = calculate6()
        main_table_id_6.innerText = table_elapsed_time
    }
    else if(table_status_6 === 'desserts')
    {
        table_elapsed_time = calculate6()
        dessert_table_id_6.innerText = table_elapsed_time
    }
    else if(table_status_6 === 'tea')
    {
        table_elapsed_time = calculate6()
        tea_table_id_6.innerText = table_elapsed_time
    }
    else if(table_status_6 === 'check')
    {
        table_elapsed_time = calculate6()
        check_table_id_6.innerText = table_elapsed_time
    }
    else{
        clearInterval(table6_interval)
    }
}


const guest_name_table_id_7 = document.getElementById('guest_name_table_id_7')
const drink_table_id_7 = document.getElementById('drink_table_id_7')
const starter_table_id_7 = document.getElementById('starter_table_id_7')
const main_table_id_7 = document.getElementById('main_table_id_7')
const dessert_table_id_7 = document.getElementById('dessert_table_id_7')
const tea_table_id_7 = document.getElementById('tea_table_id_7')
const notes_table_id_7 = document.getElementById('notes_table_id_7')
const check_table_id_7 = document.getElementById('check_table_id_7')
let table7_interval
const btn_start_table_id_7 = document.getElementById('btn_start_table_id_7')

let table_status_7 = ''
let table_seconds_7 = 0
let table_minutes_7 = 0


function btn_start_table_7(){
    table7_interval = setInterval(elapsed_time7, 1000)
    if(table_status_7 === '')
    {
        table_seconds_7 = 0
        table_minutes_7 = 0
        table_status_7 = 'drinks'
    }
    else if(table_status_7 === 'drinks')
    {
        clearInterval(table7_interval)
        table_seconds_7 = 0
        table_minutes_7 = 0
        table_status_7 = 'starters'
    }
    else if(table_status_7 === 'starters')
    {
        clearInterval(table7_interval)
        table_seconds_7 = 0
        table_minutes_7 = 0
        table_status_7 = 'mains'
    }
    else if(table_status_7 === 'mains')
    {
        clearInterval(table7_interval)
        table_seconds_7 = 0
        table_minutes_7 = 0
        table_status_7 = 'desserts'
    }
    else if(table_status_7 === 'desserts')
    {
        clearInterval(table7_interval)
        table_seconds_7 = 0
        table_minutes_7 = 0
        table_status_7 = 'tea'
    }
    else if(table_status_7 === 'tea')
    {
        clearInterval(table7_interval)
        table_seconds_7 = 0
        table_minutes_7 = 0
        table_status_7 = 'check'
    }
    else if(table_status_7 === 'check')
    {
        clearInterval(table7_interval)
        table_seconds_7 = 0
        table_minutes_7 = 0
        table_status_7 = 'done'
    }
    else if(table_status_7 === 'done')
    {
        clearInterval(table7_interval)
        table_seconds_7 = 0
        table_minutes_7 = 0
    }else{
        clearInterval(table7_interval)
    }
}


function btn_clear_table_7(){
    drink_table_id_7.innerText = ''
    starter_table_id_7.innerText = ''
    main_table_id_7.innerText = ''
    dessert_table_id_7.innerText = ''
    tea_table_id_7.innerText = ''
    check_table_id_7.innerText = ''
    notes_table_id_7.value = ''
    guest_name_table_id_7.value = ''
    table_status_7 = ''
    clearInterval(table7_interval)
}

function calculate7() {
    table_seconds_7 = table_seconds_7 + 1;
    let table_elapsed_time = table_minutes_7 + ':' + Math.round(table_seconds_7)
    if(table_seconds_7 === 60){
        table_seconds_7 = 0;
        table_minutes_7++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time7(){
    if(table_status_7 === 'drinks')
    {
        table_elapsed_time = calculate7()
        drink_table_id_7.innerText = table_elapsed_time
    }
    else if(table_status_7 === 'starters')
    {
        table_elapsed_time = calculate7()
        starter_table_id_7.innerText = table_elapsed_time
    }
    else if(table_status_7 === 'mains')
    {
        table_elapsed_time = calculate7()
        main_table_id_7.innerText = table_elapsed_time
    }
    else if(table_status_7 === 'desserts')
    {
        table_elapsed_time = calculate7()
        dessert_table_id_7.innerText = table_elapsed_time
    }
    else if(table_status_7 === 'tea')
    {
        table_elapsed_time = calculate7()
        tea_table_id_7.innerText = table_elapsed_time
    }
    else if(table_status_7 === 'check')
    {
        table_elapsed_time = calculate7()
        check_table_id_7.innerText = table_elapsed_time
    }
    else{
        clearInterval(table7_interval)
    }
}


const guest_name_table_id_8 = document.getElementById('guest_name_table_id_8')
const drink_table_id_8 = document.getElementById('drink_table_id_8')
const starter_table_id_8 = document.getElementById('starter_table_id_8')
const main_table_id_8 = document.getElementById('main_table_id_8')
const dessert_table_id_8 = document.getElementById('dessert_table_id_8')
const tea_table_id_8 = document.getElementById('tea_table_id_8')
const notes_table_id_8 = document.getElementById('notes_table_id_8')
const check_table_id_8 = document.getElementById('check_table_id_8')
let table8_interval
const btn_start_table_id_8 = document.getElementById('btn_start_table_id_8')

let table_status_8 = ''
let table_seconds_8 = 0
let table_minutes_8 = 0


function btn_start_table_8(){
    table8_interval = setInterval(elapsed_time8, 1000)
    if(table_status_8 === '')
    {
        table_seconds_8 = 0
        table_minutes_8 = 0
        table_status_8 = 'drinks'
    }
    else if(table_status_8 === 'drinks')
    {
        clearInterval(table8_interval)
        table_seconds_8 = 0
        table_minutes_8 = 0
        table_status_8 = 'starters'
    }
    else if(table_status_8 === 'starters')
    {
        clearInterval(table8_interval)
        table_seconds_8 = 0
        table_minutes_8 = 0
        table_status_8 = 'mains'
    }
    else if(table_status_8 === 'mains')
    {
        clearInterval(table8_interval)
        table_seconds_8 = 0
        table_minutes_8 = 0
        table_status_8 = 'desserts'
    }
    else if(table_status_8 === 'desserts')
    {
        clearInterval(table8_interval)
        table_seconds_8 = 0
        table_minutes_8 = 0
        table_status_8 = 'tea'
    }
    else if(table_status_8 === 'tea')
    {
        clearInterval(table8_interval)
        table_seconds_8 = 0
        table_minutes_8 = 0
        table_status_8 = 'check'
    }
    else if(table_status_8 === 'check')
    {
        clearInterval(table8_interval)
        table_seconds_8 = 0
        table_minutes_8 = 0
        table_status_8 = 'done'
    }
    else if(table_status_8 === 'done')
    {
        clearInterval(table8_interval)
        table_seconds_8 = 0
        table_minutes_8 = 0
    }else{
        clearInterval(table8_interval)
    }
}


function btn_clear_table_8(){
    drink_table_id_8.innerText = ''
    starter_table_id_8.innerText = ''
    main_table_id_8.innerText = ''
    dessert_table_id_8.innerText = ''
    tea_table_id_8.innerText = ''
    check_table_id_8.innerText = ''
    notes_table_id_8.value = ''
    guest_name_table_id_8.value = ''
    table_status_8 = ''
    clearInterval(table8_interval)
}

function calculate8() {
    table_seconds_8 = table_seconds_8 + 1;
    let table_elapsed_time = table_minutes_8 + ':' + Math.round(table_seconds_8)
    if(table_seconds_8 === 60){
        table_seconds_8 = 0;
        table_minutes_8++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time8(){
    if(table_status_8 === 'drinks')
    {
        table_elapsed_time = calculate8()
        drink_table_id_8.innerText = table_elapsed_time
    }
    else if(table_status_8 === 'starters')
    {
        table_elapsed_time = calculate8()
        starter_table_id_8.innerText = table_elapsed_time
    }
    else if(table_status_8 === 'mains')
    {
        table_elapsed_time = calculate8()
        main_table_id_8.innerText = table_elapsed_time
    }
    else if(table_status_8 === 'desserts')
    {
        table_elapsed_time = calculate8()
        dessert_table_id_8.innerText = table_elapsed_time
    }
    else if(table_status_8 === 'tea')
    {
        table_elapsed_time = calculate8()
        tea_table_id_8.innerText = table_elapsed_time
    }
    else if(table_status_8 === 'check')
    {
        table_elapsed_time = calculate8()
        check_table_id_8.innerText = table_elapsed_time
    }
    else{
        clearInterval(table8_interval)
    }
}


const guest_name_table_id_9 = document.getElementById('guest_name_table_id_9')
const drink_table_id_9 = document.getElementById('drink_table_id_9')
const starter_table_id_9 = document.getElementById('starter_table_id_9')
const main_table_id_9 = document.getElementById('main_table_id_9')
const dessert_table_id_9 = document.getElementById('dessert_table_id_9')
const tea_table_id_9 = document.getElementById('tea_table_id_9')
const notes_table_id_9 = document.getElementById('notes_table_id_9')
const check_table_id_9 = document.getElementById('check_table_id_9')
let table9_interval
const btn_start_table_id_9 = document.getElementById('btn_start_table_id_9')

let table_status_9 = ''
let table_seconds_9 = 0
let table_minutes_9 = 0


function btn_start_table_9(){
    table9_interval = setInterval(elapsed_time9, 1000)
    if(table_status_9 === '')
    {
        table_seconds_9 = 0
        table_minutes_9 = 0
        table_status_9 = 'drinks'
    }
    else if(table_status_9 === 'drinks')
    {
        clearInterval(table9_interval)
        table_seconds_9 = 0
        table_minutes_9 = 0
        table_status_9 = 'starters'
    }
    else if(table_status_9 === 'starters')
    {
        clearInterval(table9_interval)
        table_seconds_9 = 0
        table_minutes_9 = 0
        table_status_9 = 'mains'
    }
    else if(table_status_9 === 'mains')
    {
        clearInterval(table9_interval)
        table_seconds_9 = 0
        table_minutes_9 = 0
        table_status_9 = 'desserts'
    }
    else if(table_status_9 === 'desserts')
    {
        clearInterval(table9_interval)
        table_seconds_9 = 0
        table_minutes_9 = 0
        table_status_9 = 'tea'
    }
    else if(table_status_9 === 'tea')
    {
        clearInterval(table9_interval)
        table_seconds_9 = 0
        table_minutes_9 = 0
        table_status_9 = 'check'
    }
    else if(table_status_9 === 'check')
    {
        clearInterval(table9_interval)
        table_seconds_9 = 0
        table_minutes_9 = 0
        table_status_9 = 'done'
    }
    else if(table_status_9 === 'done')
    {
        clearInterval(table9_interval)
        table_seconds_9 = 0
        table_minutes_9 = 0
    }else{
        clearInterval(table9_interval)
    }
}


function btn_clear_table_9(){
    drink_table_id_9.innerText = ''
    starter_table_id_9.innerText = ''
    main_table_id_9.innerText = ''
    dessert_table_id_9.innerText = ''
    tea_table_id_9.innerText = ''
    check_table_id_9.innerText = ''
    notes_table_id_9.value = ''
    guest_name_table_id_9.value = ''
    table_status_9 = ''
    clearInterval(table9_interval)
}

function calculate9() {
    table_seconds_9 = table_seconds_9 + 1;
    let table_elapsed_time = table_minutes_9 + ':' + Math.round(table_seconds_9)
    if(table_seconds_9 === 60){
        table_seconds_9 = 0;
        table_minutes_9++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time9(){
    if(table_status_9 === 'drinks')
    {
        table_elapsed_time = calculate9()
        drink_table_id_9.innerText = table_elapsed_time
    }
    else if(table_status_9 === 'starters')
    {
        table_elapsed_time = calculate9()
        starter_table_id_9.innerText = table_elapsed_time
    }
    else if(table_status_9 === 'mains')
    {
        table_elapsed_time = calculate9()
        main_table_id_9.innerText = table_elapsed_time
    }
    else if(table_status_9 === 'desserts')
    {
        table_elapsed_time = calculate9()
        dessert_table_id_9.innerText = table_elapsed_time
    }
    else if(table_status_9 === 'tea')
    {
        table_elapsed_time = calculate9()
        tea_table_id_9.innerText = table_elapsed_time
    }
    else if(table_status_9 === 'check')
    {
        table_elapsed_time = calculate9()
        check_table_id_9.innerText = table_elapsed_time
    }
    else{
        clearInterval(table9_interval)
    }
}

const guest_name_table_id_10 = document.getElementById('guest_name_table_id_10')
const drink_table_id_10 = document.getElementById('drink_table_id_10')
const starter_table_id_10 = document.getElementById('starter_table_id_10')
const main_table_id_10 = document.getElementById('main_table_id_10')
const dessert_table_id_10 = document.getElementById('dessert_table_id_10')
const tea_table_id_10 = document.getElementById('tea_table_id_10')
const notes_table_id_10 = document.getElementById('notes_table_id_10')
const check_table_id_10 = document.getElementById('check_table_id_10')
let table10_interval
const btn_start_table_id_10 = document.getElementById('btn_start_table_id_10')

let table_status_10 = ''
let table_seconds_10 = 0
let table_minutes_10 = 0


function btn_start_table_10(){
    table10_interval = setInterval(elapsed_time10, 1000)
    if(table_status_10 === '')
    {
        table_seconds_10 = 0
        table_minutes_10 = 0
        table_status_10 = 'drinks'
    }
    else if(table_status_10 === 'drinks')
    {
        clearInterval(table10_interval)
        table_seconds_10 = 0
        table_minutes_10 = 0
        table_status_10 = 'starters'
    }
    else if(table_status_10 === 'starters')
    {
        clearInterval(table10_interval)
        table_seconds_10 = 0
        table_minutes_10 = 0
        table_status_10 = 'mains'
    }
    else if(table_status_10 === 'mains')
    {
        clearInterval(table10_interval)
        table_seconds_10 = 0
        table_minutes_10 = 0
        table_status_10 = 'desserts'
    }
    else if(table_status_10 === 'desserts')
    {
        clearInterval(table10_interval)
        table_seconds_10 = 0
        table_minutes_10 = 0
        table_status_10 = 'tea'
    }
    else if(table_status_10 === 'tea')
    {
        clearInterval(table10_interval)
        table_seconds_10 = 0
        table_minutes_10 = 0
        table_status_10 = 'check'
    }
    else if(table_status_10 === 'check')
    {
        clearInterval(table10_interval)
        table_seconds_10 = 0
        table_minutes_10 = 0
        table_status_10 = 'done'
    }
    else if(table_status_10 === 'done')
    {
        clearInterval(table10_interval)
        table_seconds_10 = 0
        table_minutes_10 = 0
    }else{
        clearInterval(table10_interval)
    }
}


function btn_clear_table_10(){
    drink_table_id_10.innerText = ''
    starter_table_id_10.innerText = ''
    main_table_id_10.innerText = ''
    dessert_table_id_10.innerText = ''
    tea_table_id_10.innerText = ''
    check_table_id_10.innerText = ''
    notes_table_id_10.value = ''
    guest_name_table_id_10.value = ''
    table_status_10 = ''
    clearInterval(table10_interval)
}

function calculate10() {
    table_seconds_10 = table_seconds_10 + 1;
    let table_elapsed_time = table_minutes_10 + ':' + Math.round(table_seconds_10)
    if(table_seconds_10 === 60){
        table_seconds_10 = 0;
        table_minutes_10++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time10(){
    if(table_status_10 === 'drinks')
    {
        table_elapsed_time = calculate10()
        drink_table_id_10.innerText = table_elapsed_time
    }
    else if(table_status_10 === 'starters')
    {
        table_elapsed_time = calculate10()
        starter_table_id_10.innerText = table_elapsed_time
    }
    else if(table_status_10 === 'mains')
    {
        table_elapsed_time = calculate10()
        main_table_id_10.innerText = table_elapsed_time
    }
    else if(table_status_10 === 'desserts')
    {
        table_elapsed_time = calculate10()
        dessert_table_id_10.innerText = table_elapsed_time
    }
    else if(table_status_10 === 'tea')
    {
        table_elapsed_time = calculate10()
        tea_table_id_10.innerText = table_elapsed_time
    }
    else if(table_status_10 === 'check')
    {
        table_elapsed_time = calculate10()
        check_table_id_10.innerText = table_elapsed_time
    }
    else{
        clearInterval(table10_interval)
    }
}


const guest_name_table_id_11 = document.getElementById('guest_name_table_id_11')
const drink_table_id_11 = document.getElementById('drink_table_id_11')
const starter_table_id_11 = document.getElementById('starter_table_id_11')
const main_table_id_11 = document.getElementById('main_table_id_11')
const dessert_table_id_11 = document.getElementById('dessert_table_id_11')
const tea_table_id_11 = document.getElementById('tea_table_id_11')
const notes_table_id_11 = document.getElementById('notes_table_id_11')
const check_table_id_11 = document.getElementById('check_table_id_11')
let table11_interval
const btn_start_table_id_11 = document.getElementById('btn_start_table_id_11')

let table_status_11 = ''
let table_seconds_11 = 0
let table_minutes_11 = 0


function btn_start_table_11(){
    table11_interval = setInterval(elapsed_time11, 1000)
    if(table_status_11 === '')
    {
        table_seconds_11 = 0
        table_minutes_11 = 0
        table_status_11 = 'drinks'
    }
    else if(table_status_11 === 'drinks')
    {
        clearInterval(table11_interval)
        table_seconds_11 = 0
        table_minutes_11 = 0
        table_status_11 = 'starters'
    }
    else if(table_status_11 === 'starters')
    {
        clearInterval(table11_interval)
        table_seconds_11 = 0
        table_minutes_11 = 0
        table_status_11 = 'mains'
    }
    else if(table_status_11 === 'mains')
    {
        clearInterval(table11_interval)
        table_seconds_11 = 0
        table_minutes_11 = 0
        table_status_11 = 'desserts'
    }
    else if(table_status_11 === 'desserts')
    {
        clearInterval(table11_interval)
        table_seconds_11 = 0
        table_minutes_11 = 0
        table_status_11 = 'tea'
    }
    else if(table_status_11 === 'tea')
    {
        clearInterval(table11_interval)
        table_seconds_11 = 0
        table_minutes_11 = 0
        table_status_11 = 'check'
    }
    else if(table_status_11 === 'check')
    {
        clearInterval(table11_interval)
        table_seconds_11 = 0
        table_minutes_11 = 0
        table_status_11 = 'done'
    }
    else if(table_status_11 === 'done')
    {
        clearInterval(table11_interval)
        table_seconds_11 = 0
        table_minutes_11 = 0
    }else{
        clearInterval(table11_interval)
    }
}


function btn_clear_table_11(){
    drink_table_id_11.innerText = ''
    starter_table_id_11.innerText = ''
    main_table_id_11.innerText = ''
    dessert_table_id_11.innerText = ''
    tea_table_id_11.innerText = ''
    check_table_id_11.innerText = ''
    notes_table_id_11.value = ''
    guest_name_table_id_11.value = ''
    table_status_11 = ''
    clearInterval(table11_interval)
}

function calculate11() {
    table_seconds_11 = table_seconds_11 + 1;
    let table_elapsed_time = table_minutes_11 + ':' + Math.round(table_seconds_11)
    if(table_seconds_11 === 60){
        table_seconds_11 = 0;
        table_minutes_11++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time11(){
    if(table_status_11 === 'drinks')
    {
        table_elapsed_time = calculate11()
        drink_table_id_11.innerText = table_elapsed_time
    }
    else if(table_status_11 === 'starters')
    {
        table_elapsed_time = calculate11()
        starter_table_id_11.innerText = table_elapsed_time
    }
    else if(table_status_11 === 'mains')
    {
        table_elapsed_time = calculate11()
        main_table_id_11.innerText = table_elapsed_time
    }
    else if(table_status_11 === 'desserts')
    {
        table_elapsed_time = calculate11()
        dessert_table_id_11.innerText = table_elapsed_time
    }
    else if(table_status_11 === 'tea')
    {
        table_elapsed_time = calculate11()
        tea_table_id_11.innerText = table_elapsed_time
    }
    else if(table_status_11 === 'check')
    {
        table_elapsed_time = calculate11()
        check_table_id_11.innerText = table_elapsed_time
    }
    else{
        clearInterval(table11_interval)
    }
}


const guest_name_table_id_12 = document.getElementById('guest_name_table_id_12')
const drink_table_id_12 = document.getElementById('drink_table_id_12')
const starter_table_id_12 = document.getElementById('starter_table_id_12')
const main_table_id_12 = document.getElementById('main_table_id_12')
const dessert_table_id_12 = document.getElementById('dessert_table_id_12')
const tea_table_id_12 = document.getElementById('tea_table_id_12')
const notes_table_id_12 = document.getElementById('notes_table_id_12')
const check_table_id_12 = document.getElementById('check_table_id_12')
let table12_interval
const btn_start_table_id_12 = document.getElementById('btn_start_table_id_12')

let table_status_12 = ''
let table_seconds_12 = 0
let table_minutes_12 = 0


function btn_start_table_12(){
    table12_interval = setInterval(elapsed_time12, 1000)
    if(table_status_12 === '')
    {
        table_seconds_12 = 0
        table_minutes_12 = 0
        table_status_12 = 'drinks'
    }
    else if(table_status_12 === 'drinks')
    {
        clearInterval(table12_interval)
        table_seconds_12 = 0
        table_minutes_12 = 0
        table_status_12 = 'starters'
    }
    else if(table_status_12 === 'starters')
    {
        clearInterval(table12_interval)
        table_seconds_12 = 0
        table_minutes_12 = 0
        table_status_12 = 'mains'
    }
    else if(table_status_12 === 'mains')
    {
        clearInterval(table12_interval)
        table_seconds_12 = 0
        table_minutes_12 = 0
        table_status_12 = 'desserts'
    }
    else if(table_status_12 === 'desserts')
    {
        clearInterval(table12_interval)
        table_seconds_12 = 0
        table_minutes_12 = 0
        table_status_12 = 'tea'
    }
    else if(table_status_12 === 'tea')
    {
        clearInterval(table12_interval)
        table_seconds_12 = 0
        table_minutes_12 = 0
        table_status_12 = 'check'
    }
    else if(table_status_12 === 'check')
    {
        clearInterval(table12_interval)
        table_seconds_12 = 0
        table_minutes_12 = 0
        table_status_12 = 'done'
    }
    else if(table_status_12 === 'done')
    {
        clearInterval(table12_interval)
        table_seconds_12 = 0
        table_minutes_12 = 0
    }else{
        clearInterval(table12_interval)
    }
}


function btn_clear_table_12(){
    drink_table_id_12.innerText = ''
    starter_table_id_12.innerText = ''
    main_table_id_12.innerText = ''
    dessert_table_id_12.innerText = ''
    tea_table_id_12.innerText = ''
    check_table_id_12.innerText = ''
    notes_table_id_12.value = ''
    guest_name_table_id_12.value = ''
    table_status_12 = ''
    clearInterval(table12_interval)
}

function calculate12() {
    table_seconds_12 = table_seconds_12 + 1;
    let table_elapsed_time = table_minutes_12 + ':' + Math.round(table_seconds_12)
    if(table_seconds_12 === 60){
        table_seconds_12 = 0;
        table_minutes_12++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time12(){
    if(table_status_12 === 'drinks')
    {
        table_elapsed_time = calculate12()
        drink_table_id_12.innerText = table_elapsed_time
    }
    else if(table_status_12 === 'starters')
    {
        table_elapsed_time = calculate12()
        starter_table_id_12.innerText = table_elapsed_time
    }
    else if(table_status_12 === 'mains')
    {
        table_elapsed_time = calculate12()
        main_table_id_12.innerText = table_elapsed_time
    }
    else if(table_status_12 === 'desserts')
    {
        table_elapsed_time = calculate12()
        dessert_table_id_12.innerText = table_elapsed_time
    }
    else if(table_status_12 === 'tea')
    {
        table_elapsed_time = calculate12()
        tea_table_id_12.innerText = table_elapsed_time
    }
    else if(table_status_12 === 'check')
    {
        table_elapsed_time = calculate12()
        check_table_id_12.innerText = table_elapsed_time
    }
    else{
        clearInterval(table12_interval)
    }
}


const guest_name_table_id_13 = document.getElementById('guest_name_table_id_13')
const drink_table_id_13 = document.getElementById('drink_table_id_13')
const starter_table_id_13 = document.getElementById('starter_table_id_13')
const main_table_id_13 = document.getElementById('main_table_id_13')
const dessert_table_id_13 = document.getElementById('dessert_table_id_13')
const tea_table_id_13 = document.getElementById('tea_table_id_13')
const notes_table_id_13 = document.getElementById('notes_table_id_13')
const check_table_id_13 = document.getElementById('check_table_id_13')
let table13_interval
const btn_start_table_id_13 = document.getElementById('btn_start_table_id_13')

let table_status_13 = ''
let table_seconds_13 = 0
let table_minutes_13 = 0


function btn_start_table_13(){
    table13_interval = setInterval(elapsed_time13, 1000)
    if(table_status_13 === '')
    {
        table_seconds_13 = 0
        table_minutes_13 = 0
        table_status_13 = 'drinks'
    }
    else if(table_status_13 === 'drinks')
    {
        clearInterval(table13_interval)
        table_seconds_13 = 0
        table_minutes_13 = 0
        table_status_13 = 'starters'
    }
    else if(table_status_13 === 'starters')
    {
        clearInterval(table13_interval)
        table_seconds_13 = 0
        table_minutes_13 = 0
        table_status_13 = 'mains'
    }
    else if(table_status_13 === 'mains')
    {
        clearInterval(table13_interval)
        table_seconds_13 = 0
        table_minutes_13 = 0
        table_status_13 = 'desserts'
    }
    else if(table_status_13 === 'desserts')
    {
        clearInterval(table13_interval)
        table_seconds_13 = 0
        table_minutes_13 = 0
        table_status_13 = 'tea'
    }
    else if(table_status_13 === 'tea')
    {
        clearInterval(table13_interval)
        table_seconds_13 = 0
        table_minutes_13 = 0
        table_status_13 = 'check'
    }
    else if(table_status_13 === 'check')
    {
        clearInterval(table13_interval)
        table_seconds_13 = 0
        table_minutes_13 = 0
        table_status_13 = 'done'
    }
    else if(table_status_13 === 'done')
    {
        clearInterval(table13_interval)
        table_seconds_13 = 0
        table_minutes_13 = 0
    }else{
        clearInterval(table13_interval)
    }
}


function btn_clear_table_13(){
    drink_table_id_13.innerText = ''
    starter_table_id_13.innerText = ''
    main_table_id_13.innerText = ''
    dessert_table_id_13.innerText = ''
    tea_table_id_13.innerText = ''
    check_table_id_13.innerText = ''
    notes_table_id_13.value = ''
    guest_name_table_id_13.value = ''
    table_status_13 = ''
    clearInterval(table13_interval)
}

function calculate13() {
    table_seconds_13 = table_seconds_13 + 1;
    let table_elapsed_time = table_minutes_13 + ':' + Math.round(table_seconds_13)
    if(table_seconds_13 === 60){
        table_seconds_13 = 0;
        table_minutes_13++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time13(){
    if(table_status_13 === 'drinks')
    {
        table_elapsed_time = calculate13()
        drink_table_id_13.innerText = table_elapsed_time
    }
    else if(table_status_13 === 'starters')
    {
        table_elapsed_time = calculate13()
        starter_table_id_13.innerText = table_elapsed_time
    }
    else if(table_status_13 === 'mains')
    {
        table_elapsed_time = calculate13()
        main_table_id_13.innerText = table_elapsed_time
    }
    else if(table_status_13 === 'desserts')
    {
        table_elapsed_time = calculate13()
        dessert_table_id_13.innerText = table_elapsed_time
    }
    else if(table_status_13 === 'tea')
    {
        table_elapsed_time = calculate13()
        tea_table_id_13.innerText = table_elapsed_time
    }
    else if(table_status_13 === 'check')
    {
        table_elapsed_time = calculate13()
        check_table_id_13.innerText = table_elapsed_time
    }
    else{
        clearInterval(table13_interval)
    }
}


const guest_name_table_id_14 = document.getElementById('guest_name_table_id_14')
const drink_table_id_14 = document.getElementById('drink_table_id_14')
const starter_table_id_14 = document.getElementById('starter_table_id_14')
const main_table_id_14 = document.getElementById('main_table_id_14')
const dessert_table_id_14 = document.getElementById('dessert_table_id_14')
const tea_table_id_14 = document.getElementById('tea_table_id_14')
const notes_table_id_14 = document.getElementById('notes_table_id_14')
const check_table_id_14 = document.getElementById('check_table_id_14')
let table14_interval
const btn_start_table_id_14 = document.getElementById('btn_start_table_id_14')

let table_status_14 = ''
let table_seconds_14 = 0
let table_minutes_14 = 0


function btn_start_table_14(){
    table14_interval = setInterval(elapsed_time14, 1000)
    if(table_status_14 === '')
    {
        table_seconds_14 = 0
        table_minutes_14 = 0
        table_status_14 = 'drinks'
    }
    else if(table_status_14 === 'drinks')
    {
        clearInterval(table14_interval)
        table_seconds_14 = 0
        table_minutes_14 = 0
        table_status_14 = 'starters'
    }
    else if(table_status_14 === 'starters')
    {
        clearInterval(table14_interval)
        table_seconds_14 = 0
        table_minutes_14 = 0
        table_status_14 = 'mains'
    }
    else if(table_status_14 === 'mains')
    {
        clearInterval(table14_interval)
        table_seconds_14 = 0
        table_minutes_14 = 0
        table_status_14 = 'desserts'
    }
    else if(table_status_14 === 'desserts')
    {
        clearInterval(table14_interval)
        table_seconds_14 = 0
        table_minutes_14 = 0
        table_status_14 = 'tea'
    }
    else if(table_status_14 === 'tea')
    {
        clearInterval(table14_interval)
        table_seconds_14 = 0
        table_minutes_14 = 0
        table_status_14 = 'check'
    }
    else if(table_status_14 === 'check')
    {
        clearInterval(table14_interval)
        table_seconds_14 = 0
        table_minutes_14 = 0
        table_status_14 = 'done'
    }
    else if(table_status_14 === 'done')
    {
        clearInterval(table14_interval)
        table_seconds_14 = 0
        table_minutes_14 = 0
    }else{
        clearInterval(table14_interval)
    }
}


function btn_clear_table_14(){
    drink_table_id_14.innerText = ''
    starter_table_id_14.innerText = ''
    main_table_id_14.innerText = ''
    dessert_table_id_14.innerText = ''
    tea_table_id_14.innerText = ''
    check_table_id_14.innerText = ''
    notes_table_id_14.value = ''
    guest_name_table_id_14.value = ''
    table_status_14 = ''
    clearInterval(table14_interval)
}

function calculate14() {
    table_seconds_14 = table_seconds_14 + 1;
    let table_elapsed_time = table_minutes_14 + ':' + Math.round(table_seconds_14)
    if(table_seconds_14 === 60){
        table_seconds_14 = 0;
        table_minutes_14++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time14(){
    if(table_status_14 === 'drinks')
    {
        table_elapsed_time = calculate14()
        drink_table_id_14.innerText = table_elapsed_time
    }
    else if(table_status_14 === 'starters')
    {
        table_elapsed_time = calculate14()
        starter_table_id_14.innerText = table_elapsed_time
    }
    else if(table_status_14 === 'mains')
    {
        table_elapsed_time = calculate14()
        main_table_id_14.innerText = table_elapsed_time
    }
    else if(table_status_14 === 'desserts')
    {
        table_elapsed_time = calculate14()
        dessert_table_id_14.innerText = table_elapsed_time
    }
    else if(table_status_14 === 'tea')
    {
        table_elapsed_time = calculate14()
        tea_table_id_14.innerText = table_elapsed_time
    }
    else if(table_status_14 === 'check')
    {
        table_elapsed_time = calculate14()
        check_table_id_14.innerText = table_elapsed_time
    }
    else{
        clearInterval(table14_interval)
    }
}


const guest_name_table_id_15 = document.getElementById('guest_name_table_id_15')
const drink_table_id_15 = document.getElementById('drink_table_id_15')
const starter_table_id_15 = document.getElementById('starter_table_id_15')
const main_table_id_15 = document.getElementById('main_table_id_15')
const dessert_table_id_15 = document.getElementById('dessert_table_id_15')
const tea_table_id_15 = document.getElementById('tea_table_id_15')
const notes_table_id_15 = document.getElementById('notes_table_id_15')
const check_table_id_15 = document.getElementById('check_table_id_15')
let table15_interval
const btn_start_table_id_15 = document.getElementById('btn_start_table_id_15')

let table_status_15 = ''
let table_seconds_15 = 0
let table_minutes_15 = 0


function btn_start_table_15(){
    table15_interval = setInterval(elapsed_time15, 1000)
    if(table_status_15 === '')
    {
        table_seconds_15 = 0
        table_minutes_15 = 0
        table_status_15 = 'drinks'
    }
    else if(table_status_15 === 'drinks')
    {
        clearInterval(table15_interval)
        table_seconds_15 = 0
        table_minutes_15 = 0
        table_status_15 = 'starters'
    }
    else if(table_status_15 === 'starters')
    {
        clearInterval(table15_interval)
        table_seconds_15 = 0
        table_minutes_15 = 0
        table_status_15 = 'mains'
    }
    else if(table_status_15 === 'mains')
    {
        clearInterval(table15_interval)
        table_seconds_15 = 0
        table_minutes_15 = 0
        table_status_15 = 'desserts'
    }
    else if(table_status_15 === 'desserts')
    {
        clearInterval(table15_interval)
        table_seconds_15 = 0
        table_minutes_15 = 0
        table_status_15 = 'tea'
    }
    else if(table_status_15 === 'tea')
    {
        clearInterval(table15_interval)
        table_seconds_15 = 0
        table_minutes_15 = 0
        table_status_15 = 'check'
    }
    else if(table_status_15 === 'check')
    {
        clearInterval(table15_interval)
        table_seconds_15 = 0
        table_minutes_15 = 0
        table_status_15 = 'done'
    }
    else if(table_status_15 === 'done')
    {
        clearInterval(table15_interval)
        table_seconds_15 = 0
        table_minutes_15 = 0
    }else{
        clearInterval(table15_interval)
    }
}


function btn_clear_table_15(){
    drink_table_id_15.innerText = ''
    starter_table_id_15.innerText = ''
    main_table_id_15.innerText = ''
    dessert_table_id_15.innerText = ''
    tea_table_id_15.innerText = ''
    check_table_id_15.innerText = ''
    notes_table_id_15.value = ''
    guest_name_table_id_15.value = ''
    table_status_15 = ''
    clearInterval(table15_interval)
}

function calculate15() {
    table_seconds_15 = table_seconds_15 + 1;
    let table_elapsed_time = table_minutes_15 + ':' + Math.round(table_seconds_15)
    if(table_seconds_15 === 60){
        table_seconds_15 = 0;
        table_minutes_15++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time15(){
    if(table_status_15 === 'drinks')
    {
        table_elapsed_time = calculate15()
        drink_table_id_15.innerText = table_elapsed_time
    }
    else if(table_status_15 === 'starters')
    {
        table_elapsed_time = calculate15()
        starter_table_id_15.innerText = table_elapsed_time
    }
    else if(table_status_15 === 'mains')
    {
        table_elapsed_time = calculate15()
        main_table_id_15.innerText = table_elapsed_time
    }
    else if(table_status_15 === 'desserts')
    {
        table_elapsed_time = calculate15()
        dessert_table_id_15.innerText = table_elapsed_time
    }
    else if(table_status_15 === 'tea')
    {
        table_elapsed_time = calculate15()
        tea_table_id_15.innerText = table_elapsed_time
    }
    else if(table_status_15 === 'check')
    {
        table_elapsed_time = calculate15()
        check_table_id_15.innerText = table_elapsed_time
    }
    else{
        clearInterval(table15_interval)
    }
}


const guest_name_table_id_16 = document.getElementById('guest_name_table_id_16')
const drink_table_id_16 = document.getElementById('drink_table_id_16')
const starter_table_id_16 = document.getElementById('starter_table_id_16')
const main_table_id_16 = document.getElementById('main_table_id_16')
const dessert_table_id_16 = document.getElementById('dessert_table_id_16')
const tea_table_id_16 = document.getElementById('tea_table_id_16')
const notes_table_id_16 = document.getElementById('notes_table_id_16')
const check_table_id_16 = document.getElementById('check_table_id_16')
let table16_interval
const btn_start_table_id_16 = document.getElementById('btn_start_table_id_16')

let table_status_16 = ''
let table_seconds_16 = 0
let table_minutes_16 = 0


function btn_start_table_16(){
    table16_interval = setInterval(elapsed_time16, 1000)
    if(table_status_16 === '')
    {
        table_seconds_16 = 0
        table_minutes_16 = 0
        table_status_16 = 'drinks'
    }
    else if(table_status_16 === 'drinks')
    {
        clearInterval(table16_interval)
        table_seconds_16 = 0
        table_minutes_16 = 0
        table_status_16 = 'starters'
    }
    else if(table_status_16 === 'starters')
    {
        clearInterval(table16_interval)
        table_seconds_16 = 0
        table_minutes_16 = 0
        table_status_16 = 'mains'
    }
    else if(table_status_16 === 'mains')
    {
        clearInterval(table16_interval)
        table_seconds_16 = 0
        table_minutes_16 = 0
        table_status_16 = 'desserts'
    }
    else if(table_status_16 === 'desserts')
    {
        clearInterval(table16_interval)
        table_seconds_16 = 0
        table_minutes_16 = 0
        table_status_16 = 'tea'
    }
    else if(table_status_16 === 'tea')
    {
        clearInterval(table16_interval)
        table_seconds_16 = 0
        table_minutes_16 = 0
        table_status_16 = 'check'
    }
    else if(table_status_16 === 'check')
    {
        clearInterval(table16_interval)
        table_seconds_16 = 0
        table_minutes_16 = 0
        table_status_16 = 'done'
    }
    else if(table_status_16 === 'done')
    {
        clearInterval(table16_interval)
        table_seconds_16 = 0
        table_minutes_16 = 0
    }else{
        clearInterval(table16_interval)
    }
}


function btn_clear_table_16(){
    drink_table_id_16.innerText = ''
    starter_table_id_16.innerText = ''
    main_table_id_16.innerText = ''
    dessert_table_id_16.innerText = ''
    tea_table_id_16.innerText = ''
    check_table_id_16.innerText = ''
    notes_table_id_16.value = ''
    guest_name_table_id_16.value = ''
    table_status_16 = ''
    clearInterval(table16_interval)
}

function calculate16() {
    table_seconds_16 = table_seconds_16 + 1;
    let table_elapsed_time = table_minutes_16 + ':' + Math.round(table_seconds_16)
    if(table_seconds_16 === 60){
        table_seconds_16 = 0;
        table_minutes_16++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time16(){
    if(table_status_16 === 'drinks')
    {
        table_elapsed_time = calculate16()
        drink_table_id_16.innerText = table_elapsed_time
    }
    else if(table_status_16 === 'starters')
    {
        table_elapsed_time = calculate16()
        starter_table_id_16.innerText = table_elapsed_time
    }
    else if(table_status_16 === 'mains')
    {
        table_elapsed_time = calculate16()
        main_table_id_16.innerText = table_elapsed_time
    }
    else if(table_status_16 === 'desserts')
    {
        table_elapsed_time = calculate16()
        dessert_table_id_16.innerText = table_elapsed_time
    }
    else if(table_status_16 === 'tea')
    {
        table_elapsed_time = calculate16()
        tea_table_id_16.innerText = table_elapsed_time
    }
    else if(table_status_16 === 'check')
    {
        table_elapsed_time = calculate16()
        check_table_id_16.innerText = table_elapsed_time
    }
    else{
        clearInterval(table16_interval)
    }
}


const guest_name_table_id_17 = document.getElementById('guest_name_table_id_17')
const drink_table_id_17 = document.getElementById('drink_table_id_17')
const starter_table_id_17 = document.getElementById('starter_table_id_17')
const main_table_id_17 = document.getElementById('main_table_id_17')
const dessert_table_id_17 = document.getElementById('dessert_table_id_17')
const tea_table_id_17 = document.getElementById('tea_table_id_17')
const notes_table_id_17 = document.getElementById('notes_table_id_17')
const check_table_id_17 = document.getElementById('check_table_id_17')
let table17_interval
const btn_start_table_id_17 = document.getElementById('btn_start_table_id_17')

let table_status_17 = ''
let table_seconds_17 = 0
let table_minutes_17 = 0


function btn_start_table_17(){
    table17_interval = setInterval(elapsed_time17, 1000)
    if(table_status_17 === '')
    {
        table_seconds_17 = 0
        table_minutes_17 = 0
        table_status_17 = 'drinks'
    }
    else if(table_status_17 === 'drinks')
    {
        clearInterval(table17_interval)
        table_seconds_17 = 0
        table_minutes_17 = 0
        table_status_17 = 'starters'
    }
    else if(table_status_17 === 'starters')
    {
        clearInterval(table17_interval)
        table_seconds_17 = 0
        table_minutes_17 = 0
        table_status_17 = 'mains'
    }
    else if(table_status_17 === 'mains')
    {
        clearInterval(table17_interval)
        table_seconds_17 = 0
        table_minutes_17 = 0
        table_status_17 = 'desserts'
    }
    else if(table_status_17 === 'desserts')
    {
        clearInterval(table17_interval)
        table_seconds_17 = 0
        table_minutes_17 = 0
        table_status_17 = 'tea'
    }
    else if(table_status_17 === 'tea')
    {
        clearInterval(table17_interval)
        table_seconds_17 = 0
        table_minutes_17 = 0
        table_status_17 = 'check'
    }
    else if(table_status_17 === 'check')
    {
        clearInterval(table17_interval)
        table_seconds_17 = 0
        table_minutes_17 = 0
        table_status_17 = 'done'
    }
    else if(table_status_17 === 'done')
    {
        clearInterval(table17_interval)
        table_seconds_17 = 0
        table_minutes_17 = 0
    }else{
        clearInterval(table17_interval)
    }
}


function btn_clear_table_17(){
    drink_table_id_17.innerText = ''
    starter_table_id_17.innerText = ''
    main_table_id_17.innerText = ''
    dessert_table_id_17.innerText = ''
    tea_table_id_17.innerText = ''
    check_table_id_17.innerText = ''
    notes_table_id_17.value = ''
    guest_name_table_id_17.value = ''
    table_status_17 = ''
    clearInterval(table17_interval)
}

function calculate17() {
    table_seconds_17 = table_seconds_17 + 1;
    let table_elapsed_time = table_minutes_17 + ':' + Math.round(table_seconds_17)
    if(table_seconds_17 === 60){
        table_seconds_17 = 0;
        table_minutes_17++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time17(){
    if(table_status_17 === 'drinks')
    {
        table_elapsed_time = calculate17()
        drink_table_id_17.innerText = table_elapsed_time
    }
    else if(table_status_17 === 'starters')
    {
        table_elapsed_time = calculate17()
        starter_table_id_17.innerText = table_elapsed_time
    }
    else if(table_status_17 === 'mains')
    {
        table_elapsed_time = calculate17()
        main_table_id_17.innerText = table_elapsed_time
    }
    else if(table_status_17 === 'desserts')
    {
        table_elapsed_time = calculate17()
        dessert_table_id_17.innerText = table_elapsed_time
    }
    else if(table_status_17 === 'tea')
    {
        table_elapsed_time = calculate17()
        tea_table_id_17.innerText = table_elapsed_time
    }
    else if(table_status_17 === 'check')
    {
        table_elapsed_time = calculate17()
        check_table_id_17.innerText = table_elapsed_time
    }
    else{
        clearInterval(table17_interval)
    }
}


const guest_name_table_id_18 = document.getElementById('guest_name_table_id_18')
const drink_table_id_18 = document.getElementById('drink_table_id_18')
const starter_table_id_18 = document.getElementById('starter_table_id_18')
const main_table_id_18 = document.getElementById('main_table_id_18')
const dessert_table_id_18 = document.getElementById('dessert_table_id_18')
const tea_table_id_18 = document.getElementById('tea_table_id_18')
const notes_table_id_18 = document.getElementById('notes_table_id_18')
const check_table_id_18 = document.getElementById('check_table_id_18')
let table18_interval
const btn_start_table_id_18 = document.getElementById('btn_start_table_id_18')

let table_status_18 = ''
let table_seconds_18 = 0
let table_minutes_18 = 0


function btn_start_table_18(){
    table18_interval = setInterval(elapsed_time18, 1000)
    if(table_status_18 === '')
    {
        table_seconds_18 = 0
        table_minutes_18 = 0
        table_status_18 = 'drinks'
    }
    else if(table_status_18 === 'drinks')
    {
        clearInterval(table18_interval)
        table_seconds_18 = 0
        table_minutes_18 = 0
        table_status_18 = 'starters'
    }
    else if(table_status_18 === 'starters')
    {
        clearInterval(table18_interval)
        table_seconds_18 = 0
        table_minutes_18 = 0
        table_status_18 = 'mains'
    }
    else if(table_status_18 === 'mains')
    {
        clearInterval(table18_interval)
        table_seconds_18 = 0
        table_minutes_18 = 0
        table_status_18 = 'desserts'
    }
    else if(table_status_18 === 'desserts')
    {
        clearInterval(table18_interval)
        table_seconds_18 = 0
        table_minutes_18 = 0
        table_status_18 = 'tea'
    }
    else if(table_status_18 === 'tea')
    {
        clearInterval(table18_interval)
        table_seconds_18 = 0
        table_minutes_18 = 0
        table_status_18 = 'check'
    }
    else if(table_status_18 === 'check')
    {
        clearInterval(table18_interval)
        table_seconds_18 = 0
        table_minutes_18 = 0
        table_status_18 = 'done'
    }
    else if(table_status_18 === 'done')
    {
        clearInterval(table18_interval)
        table_seconds_18 = 0
        table_minutes_18 = 0
    }else{
        clearInterval(table18_interval)
    }
}


function btn_clear_table_18(){
    drink_table_id_18.innerText = ''
    starter_table_id_18.innerText = ''
    main_table_id_18.innerText = ''
    dessert_table_id_18.innerText = ''
    tea_table_id_18.innerText = ''
    check_table_id_18.innerText = ''
    notes_table_id_18.value = ''
    guest_name_table_id_18.value = ''
    table_status_18 = ''
    clearInterval(table18_interval)
}

function calculate18() {
    table_seconds_18 = table_seconds_18 + 1;
    let table_elapsed_time = table_minutes_18 + ':' + Math.round(table_seconds_18)
    if(table_seconds_18 === 60){
        table_seconds_18 = 0;
        table_minutes_18++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time18(){
    if(table_status_18 === 'drinks')
    {
        table_elapsed_time = calculate18()
        drink_table_id_18.innerText = table_elapsed_time
    }
    else if(table_status_18 === 'starters')
    {
        table_elapsed_time = calculate18()
        starter_table_id_18.innerText = table_elapsed_time
    }
    else if(table_status_18 === 'mains')
    {
        table_elapsed_time = calculate18()
        main_table_id_18.innerText = table_elapsed_time
    }
    else if(table_status_18 === 'desserts')
    {
        table_elapsed_time = calculate18()
        dessert_table_id_18.innerText = table_elapsed_time
    }
    else if(table_status_18 === 'tea')
    {
        table_elapsed_time = calculate18()
        tea_table_id_18.innerText = table_elapsed_time
    }
    else if(table_status_18 === 'check')
    {
        table_elapsed_time = calculate18()
        check_table_id_18.innerText = table_elapsed_time
    }
    else{
        clearInterval(table18_interval)
    }
}


const guest_name_table_id_19 = document.getElementById('guest_name_table_id_19')
const drink_table_id_19 = document.getElementById('drink_table_id_19')
const starter_table_id_19 = document.getElementById('starter_table_id_19')
const main_table_id_19 = document.getElementById('main_table_id_19')
const dessert_table_id_19 = document.getElementById('dessert_table_id_19')
const tea_table_id_19 = document.getElementById('tea_table_id_19')
const notes_table_id_19 = document.getElementById('notes_table_id_19')
const check_table_id_19 = document.getElementById('check_table_id_19')
let table19_interval
const btn_start_table_id_19 = document.getElementById('btn_start_table_id_19')

let table_status_19 = ''
let table_seconds_19 = 0
let table_minutes_19 = 0


function btn_start_table_19(){
    table19_interval = setInterval(elapsed_time19, 1000)
    if(table_status_19 === '')
    {
        table_seconds_19 = 0
        table_minutes_19 = 0
        table_status_19 = 'drinks'
    }
    else if(table_status_19 === 'drinks')
    {
        clearInterval(table19_interval)
        table_seconds_19 = 0
        table_minutes_19 = 0
        table_status_19 = 'starters'
    }
    else if(table_status_19 === 'starters')
    {
        clearInterval(table19_interval)
        table_seconds_19 = 0
        table_minutes_19 = 0
        table_status_19 = 'mains'
    }
    else if(table_status_19 === 'mains')
    {
        clearInterval(table19_interval)
        table_seconds_19 = 0
        table_minutes_19 = 0
        table_status_19 = 'desserts'
    }
    else if(table_status_19 === 'desserts')
    {
        clearInterval(table19_interval)
        table_seconds_19 = 0
        table_minutes_19 = 0
        table_status_19 = 'tea'
    }
    else if(table_status_19 === 'tea')
    {
        clearInterval(table19_interval)
        table_seconds_19 = 0
        table_minutes_19 = 0
        table_status_19 = 'check'
    }
    else if(table_status_19 === 'check')
    {
        clearInterval(table19_interval)
        table_seconds_19 = 0
        table_minutes_19 = 0
        table_status_19 = 'done'
    }
    else if(table_status_19 === 'done')
    {
        clearInterval(table19_interval)
        table_seconds_19 = 0
        table_minutes_19 = 0
    }else{
        clearInterval(table19_interval)
    }
}


function btn_clear_table_19(){
    drink_table_id_19.innerText = ''
    starter_table_id_19.innerText = ''
    main_table_id_19.innerText = ''
    dessert_table_id_19.innerText = ''
    tea_table_id_19.innerText = ''
    check_table_id_19.innerText = ''
    notes_table_id_19.value = ''
    guest_name_table_id_19.value = ''
    table_status_19 = ''
    clearInterval(table19_interval)
}

function calculate19() {
    table_seconds_19 = table_seconds_19 + 1;
    let table_elapsed_time = table_minutes_19 + ':' + Math.round(table_seconds_19)
    if(table_seconds_19 === 60){
        table_seconds_19 = 0;
        table_minutes_19++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time19(){
    if(table_status_19 === 'drinks')
    {
        table_elapsed_time = calculate19()
        drink_table_id_19.innerText = table_elapsed_time
    }
    else if(table_status_19 === 'starters')
    {
        table_elapsed_time = calculate19()
        starter_table_id_19.innerText = table_elapsed_time
    }
    else if(table_status_19 === 'mains')
    {
        table_elapsed_time = calculate19()
        main_table_id_19.innerText = table_elapsed_time
    }
    else if(table_status_19 === 'desserts')
    {
        table_elapsed_time = calculate19()
        dessert_table_id_19.innerText = table_elapsed_time
    }
    else if(table_status_19 === 'tea')
    {
        table_elapsed_time = calculate19()
        tea_table_id_19.innerText = table_elapsed_time
    }
    else if(table_status_19 === 'check')
    {
        table_elapsed_time = calculate19()
        check_table_id_19.innerText = table_elapsed_time
    }
    else{
        clearInterval(table19_interval)
    }
}


const guest_name_table_id_20 = document.getElementById('guest_name_table_id_20')
const drink_table_id_20 = document.getElementById('drink_table_id_20')
const starter_table_id_20 = document.getElementById('starter_table_id_20')
const main_table_id_20 = document.getElementById('main_table_id_20')
const dessert_table_id_20 = document.getElementById('dessert_table_id_20')
const tea_table_id_20 = document.getElementById('tea_table_id_20')
const notes_table_id_20 = document.getElementById('notes_table_id_20')
const check_table_id_20 = document.getElementById('check_table_id_20')
let table20_interval
const btn_start_table_id_20 = document.getElementById('btn_start_table_id_20')

let table_status_20 = ''
let table_seconds_20 = 0
let table_minutes_20 = 0


function btn_start_table_20(){
    table20_interval = setInterval(elapsed_time20, 1000)
    if(table_status_20 === '')
    {
        table_seconds_20 = 0
        table_minutes_20 = 0
        table_status_20 = 'drinks'
    }
    else if(table_status_20 === 'drinks')
    {
        clearInterval(table20_interval)
        table_seconds_20 = 0
        table_minutes_20 = 0
        table_status_20 = 'starters'
    }
    else if(table_status_20 === 'starters')
    {
        clearInterval(table20_interval)
        table_seconds_20 = 0
        table_minutes_20 = 0
        table_status_20 = 'mains'
    }
    else if(table_status_20 === 'mains')
    {
        clearInterval(table20_interval)
        table_seconds_20 = 0
        table_minutes_20 = 0
        table_status_20 = 'desserts'
    }
    else if(table_status_20 === 'desserts')
    {
        clearInterval(table20_interval)
        table_seconds_20 = 0
        table_minutes_20 = 0
        table_status_20 = 'tea'
    }
    else if(table_status_20 === 'tea')
    {
        clearInterval(table20_interval)
        table_seconds_20 = 0
        table_minutes_20 = 0
        table_status_20 = 'check'
    }
    else if(table_status_20 === 'check')
    {
        clearInterval(table20_interval)
        table_seconds_20 = 0
        table_minutes_20 = 0
        table_status_20 = 'done'
    }
    else if(table_status_20 === 'done')
    {
        clearInterval(table20_interval)
        table_seconds_20 = 0
        table_minutes_20 = 0
    }else{
        clearInterval(table20_interval)
    }
}


function btn_clear_table_20(){
    drink_table_id_20.innerText = ''
    starter_table_id_20.innerText = ''
    main_table_id_20.innerText = ''
    dessert_table_id_20.innerText = ''
    tea_table_id_20.innerText = ''
    check_table_id_20.innerText = ''
    notes_table_id_20.value = ''
    guest_name_table_id_20.value = ''
    table_status_20 = ''
    clearInterval(table20_interval)
}

function calculate20() {
    table_seconds_20 = table_seconds_20 + 1;
    let table_elapsed_time = table_minutes_20 + ':' + Math.round(table_seconds_20)
    if(table_seconds_20 === 60){
        table_seconds_20 = 0;
        table_minutes_20++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time20(){
    if(table_status_20 === 'drinks')
    {
        table_elapsed_time = calculate20()
        drink_table_id_20.innerText = table_elapsed_time
    }
    else if(table_status_20 === 'starters')
    {
        table_elapsed_time = calculate20()
        starter_table_id_20.innerText = table_elapsed_time
    }
    else if(table_status_20 === 'mains')
    {
        table_elapsed_time = calculate20()
        main_table_id_20.innerText = table_elapsed_time
    }
    else if(table_status_20 === 'desserts')
    {
        table_elapsed_time = calculate20()
        dessert_table_id_20.innerText = table_elapsed_time
    }
    else if(table_status_20 === 'tea')
    {
        table_elapsed_time = calculate20()
        tea_table_id_20.innerText = table_elapsed_time
    }
    else if(table_status_20 === 'check')
    {
        table_elapsed_time = calculate20()
        check_table_id_20.innerText = table_elapsed_time
    }
    else{
        clearInterval(table20_interval)
    }
}


const guest_name_table_id_21 = document.getElementById('guest_name_table_id_21')
const drink_table_id_21 = document.getElementById('drink_table_id_21')
const starter_table_id_21 = document.getElementById('starter_table_id_21')
const main_table_id_21 = document.getElementById('main_table_id_21')
const dessert_table_id_21 = document.getElementById('dessert_table_id_21')
const tea_table_id_21 = document.getElementById('tea_table_id_21')
const notes_table_id_21 = document.getElementById('notes_table_id_21')
const check_table_id_21 = document.getElementById('check_table_id_21')
let table21_interval
const btn_start_table_id_21 = document.getElementById('btn_start_table_id_21')

let table_status_21 = ''
let table_seconds_21 = 0
let table_minutes_21 = 0


function btn_start_table_21(){
    table21_interval = setInterval(elapsed_time21, 1000)
    if(table_status_21 === '')
    {
        table_seconds_21 = 0
        table_minutes_21 = 0
        table_status_21 = 'drinks'
    }
    else if(table_status_21 === 'drinks')
    {
        clearInterval(table21_interval)
        table_seconds_21 = 0
        table_minutes_21 = 0
        table_status_21 = 'starters'
    }
    else if(table_status_21 === 'starters')
    {
        clearInterval(table21_interval)
        table_seconds_21 = 0
        table_minutes_21 = 0
        table_status_21 = 'mains'
    }
    else if(table_status_21 === 'mains')
    {
        clearInterval(table21_interval)
        table_seconds_21 = 0
        table_minutes_21 = 0
        table_status_21 = 'desserts'
    }
    else if(table_status_21 === 'desserts')
    {
        clearInterval(table21_interval)
        table_seconds_21 = 0
        table_minutes_21 = 0
        table_status_21 = 'tea'
    }
    else if(table_status_21 === 'tea')
    {
        clearInterval(table21_interval)
        table_seconds_21 = 0
        table_minutes_21 = 0
        table_status_21 = 'check'
    }
    else if(table_status_21 === 'check')
    {
        clearInterval(table21_interval)
        table_seconds_21 = 0
        table_minutes_21 = 0
        table_status_21 = 'done'
    }
    else if(table_status_21 === 'done')
    {
        clearInterval(table21_interval)
        table_seconds_21 = 0
        table_minutes_21 = 0
    }else{
        clearInterval(table21_interval)
    }
}


function btn_clear_table_21(){
    drink_table_id_21.innerText = ''
    starter_table_id_21.innerText = ''
    main_table_id_21.innerText = ''
    dessert_table_id_21.innerText = ''
    tea_table_id_21.innerText = ''
    check_table_id_21.innerText = ''
    notes_table_id_21.value = ''
    guest_name_table_id_21.value = ''
    table_status_21 = ''
    clearInterval(table21_interval)
}

function calculate21() {
    table_seconds_21 = table_seconds_21 + 1;
    let table_elapsed_time = table_minutes_21 + ':' + Math.round(table_seconds_21)
    if(table_seconds_21 === 60){
        table_seconds_21 = 0;
        table_minutes_21++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time21(){
    if(table_status_21 === 'drinks')
    {
        table_elapsed_time = calculate21()
        drink_table_id_21.innerText = table_elapsed_time
    }
    else if(table_status_21 === 'starters')
    {
        table_elapsed_time = calculate21()
        starter_table_id_21.innerText = table_elapsed_time
    }
    else if(table_status_21 === 'mains')
    {
        table_elapsed_time = calculate21()
        main_table_id_21.innerText = table_elapsed_time
    }
    else if(table_status_21 === 'desserts')
    {
        table_elapsed_time = calculate21()
        dessert_table_id_21.innerText = table_elapsed_time
    }
    else if(table_status_21 === 'tea')
    {
        table_elapsed_time = calculate21()
        tea_table_id_21.innerText = table_elapsed_time
    }
    else if(table_status_21 === 'check')
    {
        table_elapsed_time = calculate21()
        check_table_id_21.innerText = table_elapsed_time
    }
    else{
        clearInterval(table21_interval)
    }
}


const guest_name_table_id_22 = document.getElementById('guest_name_table_id_22')
const drink_table_id_22 = document.getElementById('drink_table_id_22')
const starter_table_id_22 = document.getElementById('starter_table_id_22')
const main_table_id_22 = document.getElementById('main_table_id_22')
const dessert_table_id_22 = document.getElementById('dessert_table_id_22')
const tea_table_id_22 = document.getElementById('tea_table_id_22')
const notes_table_id_22 = document.getElementById('notes_table_id_22')
const check_table_id_22 = document.getElementById('check_table_id_22')
let table22_interval
const btn_start_table_id_22 = document.getElementById('btn_start_table_id_22')

let table_status_22 = ''
let table_seconds_22 = 0
let table_minutes_22 = 0


function btn_start_table_22(){
    table22_interval = setInterval(elapsed_time22, 1000)
    if(table_status_22 === '')
    {
        table_seconds_22 = 0
        table_minutes_22 = 0
        table_status_22 = 'drinks'
    }
    else if(table_status_22 === 'drinks')
    {
        clearInterval(table22_interval)
        table_seconds_22 = 0
        table_minutes_22 = 0
        table_status_22 = 'starters'
    }
    else if(table_status_22 === 'starters')
    {
        clearInterval(table22_interval)
        table_seconds_22 = 0
        table_minutes_22 = 0
        table_status_22 = 'mains'
    }
    else if(table_status_22 === 'mains')
    {
        clearInterval(table22_interval)
        table_seconds_22 = 0
        table_minutes_22 = 0
        table_status_22 = 'desserts'
    }
    else if(table_status_22 === 'desserts')
    {
        clearInterval(table22_interval)
        table_seconds_22 = 0
        table_minutes_22 = 0
        table_status_22 = 'tea'
    }
    else if(table_status_22 === 'tea')
    {
        clearInterval(table22_interval)
        table_seconds_22 = 0
        table_minutes_22 = 0
        table_status_22 = 'check'
    }
    else if(table_status_22 === 'check')
    {
        clearInterval(table22_interval)
        table_seconds_22 = 0
        table_minutes_22 = 0
        table_status_22 = 'done'
    }
    else if(table_status_22 === 'done')
    {
        clearInterval(table22_interval)
        table_seconds_22 = 0
        table_minutes_22 = 0
    }else{
        clearInterval(table22_interval)
    }
}


function btn_clear_table_22(){
    drink_table_id_22.innerText = ''
    starter_table_id_22.innerText = ''
    main_table_id_22.innerText = ''
    dessert_table_id_22.innerText = ''
    tea_table_id_22.innerText = ''
    check_table_id_22.innerText = ''
    notes_table_id_22.value = ''
    guest_name_table_id_22.value = ''
    table_status_22 = ''
    clearInterval(table22_interval)
}

function calculate22() {
    table_seconds_22 = table_seconds_22 + 1;
    let table_elapsed_time = table_minutes_22 + ':' + Math.round(table_seconds_22)
    if(table_seconds_22 === 60){
        table_seconds_22 = 0;
        table_minutes_22++;
    }
    console.log('table_elapsed_time: '+table_elapsed_time)
    return table_elapsed_time
  }


function elapsed_time22(){
    if(table_status_22 === 'drinks')
    {
        table_elapsed_time = calculate22()
        drink_table_id_22.innerText = table_elapsed_time
    }
    else if(table_status_22 === 'starters')
    {
        table_elapsed_time = calculate22()
        starter_table_id_22.innerText = table_elapsed_time
    }
    else if(table_status_22 === 'mains')
    {
        table_elapsed_time = calculate22()
        main_table_id_22.innerText = table_elapsed_time
    }
    else if(table_status_22 === 'desserts')
    {
        table_elapsed_time = calculate22()
        dessert_table_id_22.innerText = table_elapsed_time
    }
    else if(table_status_22 === 'tea')
    {
        table_elapsed_time = calculate22()
        tea_table_id_22.innerText = table_elapsed_time
    }
    else if(table_status_22 === 'check')
    {
        table_elapsed_time = calculate22()
        check_table_id_22.innerText = table_elapsed_time
    }
    else{
        clearInterval(table22_interval)
    }
}