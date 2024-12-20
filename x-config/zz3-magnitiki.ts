import { TCommonConfig } from '@/w-types/cardsTypes';


export const magnitiki: TCommonConfig = {
	rus: 'Магнитики',
    mandatory:
    [
		{
			label: 'Ширина',
			pH: 'миллиметры', // Ширина
			name: 'width',
			defaultValue: 1000,
			},
			{
			label: 'Высота',
			pH: 'миллиметры', // Ширина
			name: 'height',
			defaultValue: 1000,
			},
		{
			label: 'Толщина:', // Плотность
			pH: 'Толщина:',
			name: 'depth',
			defaultValue: 0,
			arrValues: [
			{ value: 0, label: '0,3 мм' },
			{ value: 1, label: '0,5 мм' },
			{ value: 2, label: '0,75 мм' },
			{ value: 3, label: '2 мм' },
			],
		},
    ],

    numbersMarks: {
      1: "1 шт",
      50: "Кол-во:",
      100: "100",
    },
    image: false,
	metaData: {
		title: "Печать Магнитиков в Волгограде | Низкие цены, высокое качество!",
		description: "Печать Магнитиков любых размеров, форм и содержания! Лучшие магнитики у нас!",
		h1: "Печать Магнитиков",
		text: "Печать магнитиков — это процесс создания небольших рекламных или сувенирных магнитов с изображениями, логотипами или текстами. Для этого используются специальные принтеры, которые наносят яркие и четкие изображения на магнитные поверхности. Магнитики часто используются как сувениры, корпоративные подарки или рекламные материалы. Они могут быть различных форм и размеров, что позволяет создать уникальные и привлекательные изделия, которые привлекают внимание и оставляют долговечное впечатление."
	},
  };
 
  