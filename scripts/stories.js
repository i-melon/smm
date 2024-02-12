document.addEventListener("DOMContentLoaded", function () {
    function closeStorie(){
        document.getElementById('storiesZolotoe').style.display = 'none';
        for (i=0; i<array.length; i++){
            document.getElementById(color+(i+1)).style.left = -100 +'%';
            console.log('color remoove ' + i)
        }
    }

    document.getElementById('closeStories').addEventListener("click", closeStorie)



    var inner = `<div class="flex flex-col gap-2 rgFont mx-4 mt-12">
                    <p class="mt-6 text-sm">Кейс</p>
                    <p class="text-4xl">Золотое Яблоко</p>
                </div>
                <p class="text-base mx-4">С 2014 года компания выросла и трансформировалась, прежний сайт перестал отражать стиль бренда, поэтому команда Dantone обратилась к нам за аудитом, редизайном и техническим обновлением интернет-магазина и дочерних сайтов бренда.</p>
                <p class="mx-4">Было сделано:</p>
                <div class="flex justify-between mx-4">
                    <div class="flex flex-col gap-2">
                        <p class="fs32 rgFont">120</p>
                        <p class="text-sm">Reels</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="fs32 rgFont">268</p>
                        <p class="text-sm">Креативов</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="fs32 rgFont">10 000+</p>
                        <p class="text-sm">Лидов привели</p>
                    </div>
                </div>`
    var inner2 = `<div class="flex flex-col justify-center items-center gap-2 rgFont h-full mx-4">
                    <p class="rgFont text-4xl text-center">Оформление профиля: до и после</p>
                    <p class="text-base text-center">Нашими дизайнерами был проведен полный ребендинг не только страницы профиля клиента, но и в целом бренда.</p>
                </div>`
    var inner3 = `<div class="h-full w-full flex items-end bg-white"><img class="" src="./assets/imgs/storie3.png"></div>`
    var inner4 = `<div class="h-full w-full flex items-end bg-white"><img class="" src="./assets/imgs/storie4.png"></div>`
    var inner5 = `<div class="h-full w-full flex items-end bg-white"><img class="object-cover h-full" src="./assets/imgs/storie5.png"></div>`
    var inner6 = `<div class="flex flex-col justify-center items-center gap-2 rgFont h-full mx-4">
                    <p class="rgFont text-4xl text-left">Отзыв клиента</p>
                    <p class="text-base mt-8">Искренне благодарим команду агенства Estetika за проделанную работу и профессионализм во всех аспектах. Ребята вывели наш аккаунт в топы среди конкурентов, дали множество полезных советов и всегда шли на встречу в разрешении всех возникших вопросов.</p>
                    <p class="text-sm mt-8 text-left"><span class="rgFont text-base">Руслан Баталгазиев</span><br>Коммерческий директор Gold Apple</p>
                </div>`
    var array = [inner, inner2, inner3, inner4, inner5, inner6]

    var color = 'colorChange'
    document.getElementById('openZolotoe').addEventListener("click", function () {
        for (i=0; i<array.length; i++){
            setTimeout(function (i) {
                return function () {
                    document.getElementById('leftS').addEventListener("click", function () {
                        console.log(i-1)
                    })
                    document.getElementById('rightS').addEventListener("click", function () {
                        console.log(i+1)
                    })
                    document.getElementById('storie1').innerHTML = array[i];
                    document.getElementById('storiesZolotoe').style.display = 'flex';
                    console.log(color+i);
                    setTimeout(function () {
                        document.getElementById(color+(i+1)).style.left = 0;
                    }, 5);
                    if (i === array.length - 1) { // Проверяем, если это последний элемент массива
                        setTimeout(function () {
                            closeStorie() // Скрываем элемент
                        },  (i*13000)+13000 ); // Добавляем время последней задержки
                    }
                };

            }(i), i * 13000);

        }



    })
})