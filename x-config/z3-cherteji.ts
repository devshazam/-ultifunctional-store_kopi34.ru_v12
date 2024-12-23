import { TCommonConfig } from '@/w-types/cardsTypes';


export const cherteji: TCommonConfig = {
	rus: 'Чертежи',
    mandatory:
    [
      {
        label: 'Формат печати:', // Плотность
        pH: 'Формат печати:',
        name: 'aformat',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'A4' },
          { value: 1, label: 'A3' },
          { value: 2, label: 'A2' },
          { value: 3, label: 'A1' },
          { value: 4, label: 'A0' },
          { value: 5, label: 'B0' },
        ],
      },
      {
        label: 'Цветность:', // Плотность
        pH: 'Цветность:',
        name: 'color',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Черно/белый' },
          { value: 1, label: 'Цветной' },
        ],
      },
    ],
    optional:
    [
      {
        label: 'Фальцовка:', // Плотность
        pH: 'Фальцовка:',
        name: 'falc',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Без фальцовки' },
          { value: 1, label: 'Фальцевать чертеж' },
        ],
      },
    ],
    numbersMarks: {
      1: "1шт",
      200: "Кол-во:",
      400: "400шт",
    },
    image: false,
	metaData: {
		title: "Печать Чертежей в Волгограде | Низкие цены, высокое качество!",
		description: "Печатаем Чертежи любых размеров, форм и содержания! Лучшие чертежи у нас!",
		h1: "Печать Чертежей",
		text: "Печать чертежей — это процесс переноса проектной документации из цифрового формата на бумагу с высоким уровнем детализации. Для этого используются специализированные устройства, такие как плоттеры, которые обеспечивают точную передачу линий, масштабов и текстовых элементов. Такая печать необходима в строительстве, архитектуре и инженерии, где важно иметь физические копии чертежей для работы на объекте или согласования проектов."
	},
  };
 
  