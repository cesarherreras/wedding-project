// Initial section - Envelope
console.log('Hola')
const envelopeBody: HTMLElement = document.querySelector('.envelope-body')!; 

// Invitation
const invitationTemplate: HTMLElement = document.querySelector('.invitation-complete')!;

//Survey
const surveyTemplate: HTMLElement = document.querySelector('.wedding-survey')!;

//Elements
const invitationBtn: HTMLElement = document.querySelector('.btn-invitation')!;
const lidClosed: HTMLElement = document.querySelector('.lid.closed')!;
const lidOpened: HTMLElement = document.querySelector('.lid.opened')!;
const letter: HTMLElement = document.getElementById('letter')!;
const openSurvey: HTMLElement = document.getElementById('open-survey')!;
const closeSurvey: HTMLElement = document.querySelector('.survey-arrow')!;


//Form elements
const formName: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
const formLastName: HTMLInputElement = document.getElementById('lastname') as HTMLInputElement;
const personsNumber: HTMLInputElement = document.querySelector('.input-number') as HTMLInputElement;
const confirmAssistance: HTMLInputElement = document.getElementById('s1') as HTMLInputElement;
const denyAssistance: HTMLInputElement = document.getElementById('s2') as HTMLInputElement;
const comments: HTMLInputElement = document.querySelector('.form-three') as HTMLInputElement;
const formButton: HTMLElement = document.querySelector('.form-btn')!;
const modal: HTMLDialogElement = document.getElementById('modal') as HTMLDialogElement;
const modalButton: HTMLElement = document.querySelector('.modal-btn')!;