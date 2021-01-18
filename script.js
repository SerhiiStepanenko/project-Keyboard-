// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(event) {
    let button = document.querySelectorAll('button');

    let l1 = document.querySelector('.l1');
    let l2 = document.querySelector('.l2');
    let l3 = document.querySelector('.l3');
    let l4 = document.querySelector('.l4');
    let l5 = document.querySelector('.l5');
    let l6 = document.querySelector('.l6');
    let l7 = document.querySelector('.l7');
    let l8 = document.querySelector('.l8');
    let l9 = document.querySelector('.l9');
    let l0 = document.querySelector('.l0');

    let q = document.querySelector('.q');
    let w = document.querySelector('.w');
    let e = document.querySelector('.e');
    let r = document.querySelector('.r');
    let t = document.querySelector('.t');
    let y = document.querySelector('.y');
    let u = document.querySelector('.u');
    let i = document.querySelector('.i');
    let o = document.querySelector('.o');
    let p = document.querySelector('.p');

    let shift = document.querySelector('.shift');
    let ctrl = document.querySelector('.ctrl');
    let alt = document.querySelector('.alt');
    let enter = document.querySelector('.enter');
    let space = document.querySelector('.space');

    for(let name of button){
        if(event.keyCode == 81){
            name.classList.remove('active');
    
            q.classList.add('active');
        }else if(event.keyCode == 87){
            name.classList.remove('active');
    
            w.classList.add('active');
        }else if(event.keyCode == 69){
            name.classList.remove('active');
    
            e.classList.add('active')
        }else if(event.keyCode == 82){
            name.classList.remove('active');
    
            r.classList.add('active');
        }else if(event.keyCode == 84){
            name.classList.remove('active');

            t.classList.add('active');
        }else if(event.keyCode == 89){
            name.classList.remove('active');

            y.classList.add('active');
        }else if(event.keyCode == 85){
            name.classList.remove('active');

            u.classList.add('active');
        }else if(event.keyCode == 73){
            name.classList.remove('active');

            i.classList.add('active');
        }else if(event.keyCode == 79){
            name.classList.remove('active');

            o.classList.add('active');
        }else if(event.keyCode == 80){
            name.classList.remove('active');

            p.classList.add('active');
        }else if(event.keyCode == 49){
            name.classList.remove('active');

            l1.classList.add('active');
        }else if(event.keyCode == 50){
            name.classList.remove('active');

            l2.classList.add('active');
        }else if(event.keyCode == 51){
            name.classList.remove('active');

            l3.classList.add('active');
        }else if(event.keyCode == 52){
            name.classList.remove('active');

            l4.classList.add('active');
        }else if(event.keyCode == 53){
            name.classList.remove('active');

            l5.classList.add('active');
        }else if(event.keyCode == 54){
            name.classList.remove('active');

            l6.classList.add('active');
        }else if(event.keyCode == 55){
            name.classList.remove('active');

            l7.classList.add('active');
        }else if(event.keyCode == 56){
            name.classList.remove('active');

            l8.classList.add('active');
        }else if(event.keyCode == 57){
            name.classList.remove('active');

            l9.classList.add('active');
        }else if(event.keyCode == 48){
            name.classList.remove('active');

            l0.classList.add('active');
        }else if(event.keyCode == 16){
            name.classList.remove('active');

            shift.classList.add('active');
        }else if(event.keyCode == 17){
            name.classList.remove('active');

            ctrl.classList.add('active');
        }else if(event.keyCode == 18){
            name.classList.remove('active');

            alt.classList.add('active');
        }else if(event.keyCode == 13){
            name.classList.remove('active');

            enter.classList.add('active');
        }else if(event.keyCode == 32){
            name.classList.remove('active');

            space.classList.add('active');
        }
    }

    console.log(event)
}
document.querySelector('.i-11').onkeydown = t11;
// ваше событие здесь!!!

