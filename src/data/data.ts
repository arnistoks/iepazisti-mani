export type Question = {
    id: number;
    question: string;
    answers: Answer[];
    correctAnswer: number;
}

type Answer = {
    id: number;
    name: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Kurā datumā man ir dzimšanas diena?',
    answers: [
      {
        id: 1,
        name: '21. janvārī',
      },
      {
        id: 2,
        name: '14. februārī',
      },
      {
        id: 3,
        name: '6. jūnijā',
      },
      {
        id: 4,
        name: '11. decembrī',
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'Kādā specialitātē es ieguvu bakalaura un maģistra grādu?',
    answers: [
      {
        id: 1,
        name: 'informācijas tehnoloģijās',
      },
      {
        id: 2,
        name: 'enerģētikā',
      },
      {
        id: 3,
        name: 'autotransportā',
      },
      {
        id: 4,
        name: 'lauksaimniecībā',
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 3,
    question: 'Kādu pārvietošanās veidu pēdējo 12 mēnešu laikā es izmantoju visbiežāk?',
    answers: [
      {
        id: 1,
        name: 'sabiedrisko transportu',
      },
      {
        id: 2,
        name: 'velosipēdu',
      },
      {
        id: 3,
        name: 'elektrisko skrejriteni',
      },
      {
        id: 4,
        name: 'automašīnu',
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 4,
    question: 'Kādi ir mani hobiji?',
    answers: [
      {
        id: 1,
        name: 'volejbols un dejošana',
      },
      {
        id: 2,
        name: 'riteņbraukšana un makšķerēšana',
      },
      {
        id: 3,
        name: 'basketbols un medības',
      },
      {
        id: 4,
        name: 'hokejs un futbols',
      },
    ],
    correctAnswer: 4,
  },
  {
    id: 5,
    question: 'Kādu pasākumu es neesmu izlaidis pēdējos 10 gadus pēc kārtas?',
    answers: [
      {
        id: 1,
        name: 'Pozitivus festivālu',
      },
      {
        id: 2,
        name: 'Tehniskās apskates nakti',
      },
      {
        id: 3,
        name: 'Riteņbraucēju vienības braucienu',
      },
      {
        id: 4,
        name: 'Rīgas pilsētas svētkus',
      },
    ],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: 'Kāda bija mana pirmā personīgā automašīna?',
    answers: [
      {
        id: 1,
        name: 'Opel Astra',
      },
      {
        id: 2,
        name: 'Volkswagen Golf',
      },
      {
        id: 3,
        name: 'Audi A2',
      },
      {
        id: 4,
        name: 'Škoda Octavia',
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: 'Kurā valstī es neesmu bijis?',
    answers: [
      {
        id: 1,
        name: 'Somija',
      },
      {
        id: 2,
        name: 'Zviedrija',
      },
      {
        id: 3,
        name: 'Grieķija',
      },
      {
        id: 4,
        name: 'Īrija',
      },
    ],
    correctAnswer: 1,
  },
  {
    id: 8,
    question: 'Ar kādu transportlīdzekli pirmo savā mūžā braucu patstāvīgi?',
    answers: [
      {
        id: 1,
        name: 'mopēdu',
      },
      {
        id: 2,
        name: 'traktoru',
      },
      {
        id: 3,
        name: 'automašīnu',
      },
      {
        id: 4,
        name: 'kvadraciklu',
      },
    ],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: 'Kāda ir mana datora marka?',
    answers: [
      {
        id: 1,
        name: 'Lenovo',
      },
      {
        id: 2,
        name: 'Hewlett Packard',
      },
      {
        id: 3,
        name: 'Asus',
      },
      {
        id: 4,
        name: 'Apple iMac',
      },
    ],
    correctAnswer: 4,
  },
  {
    id: 10,
    question: 'Kāds transportlīdzeklis man nepieder?',
    answers: [
      {
        id: 1,
        name: 'traktors',
      },
      {
        id: 2,
        name: 'piekabe',
      },
      {
        id: 3,
        name: 'vienritenis',
      },
      {
        id: 4,
        name: 'motocikls',
      },
    ],
    correctAnswer: 1,
  },
];

export default questions;
