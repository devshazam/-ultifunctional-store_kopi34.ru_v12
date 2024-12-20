import { TCommonConfig } from '@/w-types/cardsTypes';


export const shtenderi: TCommonConfig = {
	rus: 'Штендеры',
    mandatory:
    [
      {
        label: 'Форма штендера:', // Плотность
        pH: 'Форма штендера:',
        name: 'aformat',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Info-Sain' },
          { value: 1, label: 'City-Sain' },
          { value: 2, label: 'View-Point' },
        ],
      },
      {
        label: 'Цвет бумаги:', // Плотность
        pH: 'Цвет бумаги:',
        name: 'color',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Белая' },
          { value: 1, label: 'Синий' },
          { value: 2, label: 'Красный' },
          { value: 3, label: 'Черный' },
          { value: 4, label: 'Желтый' },
          { value: 5, label: 'Зеленый' },
        ],
      },
    ],

    numbersMarks: {
      1: "1 шт",
      5: "Кол-во:",
      10: "10 шт",
    },
    image: true,
	metaData: {
		title: "Изготовление штендеров в Волгограде | Низкие цены, высокое качество!",
		description: "Изготовление штендеров любых размеров, форм и содержания! Лучшие штендеры у нас!",
		h1: "Изготовление штендеров",
		text: "Изготовление штендеров — это процесс создания переносных рекламных конструкций, используемых для привлечения внимания к товарам, услугам или акциям. Штендеры изготавливаются из прочных материалов, таких как металл или пластик, и покрываются устойчивыми к погодным условиям изображениями и текстом. Благодаря своей мобильности и визуальной заметности, они эффективно привлекают клиентов и широко применяются для рекламы магазинов, кафе и мероприятий."
	},
  };
 
  