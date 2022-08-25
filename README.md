# kitayana

<!--
Два вида анимированных кнопок:
	1) Анимированная кнопка с выбором количества товара(внутри две кнопки: «в корзину» и с выбором количества товара)
	2) Простая анимированная кнопка.


1)	Анимированная кнопка с выбором количества товара;
Имеет два цвета: красный(red), серый(grey).
Чтобы поменять красный цвет на серый нужно в классе buttons-anim__button—red, поменять red на grey, чтобы получился класс buttons-anim__button—grey. Также внутри тега button c классом buttons-anim__button—black есть span с классом button-show-cancel-inner—red «Отмена», в котором тоже можно поменять цвет таким же способ как указано выше.


2)	Простая анимированная кнопка.
Имеет два цвета: красный(red), белый(white).
Чтобы поменять красный цвет на белый нужно в классе button-anim--red, поменять red на white, чтобы получился класс button-anim--white.

Также внутри этой кнопки можно анимировать текст добавив внутрь кнопки два span с классами button-anim__span-show и button-anim__span-hide. Изначально будет показываться текст только внутри span с классом button-anim__span-show, затем кликнув на кнопку произойдет анимация и на короткое время текст с классом button-anim__span-show исчезнет, а текст с классом button-anim__span-hide появится.


Кнопкам не заданы размеры. Чтобы задать размеры нужно добавить класс и ему задавать.
-->
