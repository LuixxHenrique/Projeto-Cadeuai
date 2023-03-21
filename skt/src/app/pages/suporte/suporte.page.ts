export interface Item {
  question: string;
  answer: string;
  isOpen: boolean;
}
// Lembre de pegar o código que modificou ontem aqui nessa parte do export senõr 🗿🍷
export class AccordionComponent {
  items: Item[] = [

    {question: 'Como utilizar o App?',
    answer: 'acho que tem que baixar e usar com os dedos né po.', isOpen: false},

    {question: 'Como escanerar o QrCode?',
    answer: 'Nao sei, mas e o uatisap cadê ? 🗿🍷', isOpen: false},

    {question: 'Para que serve a lista?',
    answer: 'ué pra listar as coisas.', isOpen: false},

    {question: 'Para que serve as novidades?',
    answer: 'pra mostrar coisas antigas.', isOpen: false},

    {question: 'Como adicionar o meu próprio mapa?',
    answer: 'nao sei ai cê ve.', isOpen: false},
  ];

  toggleAccordion(item: Item) {
    item.isOpen = !item.isOpen;
  }
}


// import { Component } from '@angular/core';

// interface FaqItem {
//   question: string;
//   answer: string;
//   showAnswer: boolean;
// }

// @Component({
//   selector: 'suporte',
//   templateUrl: './suporte.page.html',
//   styleUrls: ['./suporte.page.scss']
// })
// export class FaqAccordionComponent {

//   faqItems: FaqItem[] = [
//     {
//       question: 'Pergunta',
//       answer: 'Resposta',
//       showAnswer: false
//     },
//     {
//       question: 'Casada?',
//       answer: 'Resposta 🗿🍷',
//       showAnswer: false
//     },
//     {
//       question: 'Quando o produto será entregue?',
//       answer: 'Ate acabar o curso 🗿🍷 Fino',
//       showAnswer: false
//     }
//   ];

//   toggleAnswer(item: FaqItem) {
//     item.showAnswer = !item.showAnswer;
//   }

// }
// ============ Esse aqui seria uma outra alternativa =========
