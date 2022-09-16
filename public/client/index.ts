//Button event -- Displays invitation
invitationBtn.addEventListener('click', () => {
    envelopeBody.classList.add('inactive');
    invitationTemplate.classList.remove('inactive');
    surveyTemplate.classList.add('inactive');
});

//Button event -- Displays survey
openSurvey.addEventListener('click', () => {
    surveyTemplate.classList.remove('inactive');
    envelopeBody.classList.add('inactive');
    invitationTemplate.classList.add('inactive');
});

//Button event -- Hide survey
closeSurvey.addEventListener('click', () => {
    surveyTemplate.classList.add('inactive');
    envelopeBody.classList.add('inactive');
    invitationTemplate.classList.remove('inactive');
});

window.addEventListener('DOMContentLoaded', () => {
    console.log('Entra al cargar')
    setTimeout(() => {
        lidClosed.style.transform = "rotateX(90deg)";
        lidClosed.style.transitionDelay = "0s";
        lidOpened.style.transform = "rotateX(180deg)";
        lidOpened.style.transitionDelay = "0.25s";
        letter.style.transform = "translateY(-50px)";
        letter.style.transitionDelay = "0.5s";
    }, 2000);
});

//Close modal window after sending response
modalButton.addEventListener('click', () => {
    surveyTemplate.classList.add('inactive');
    envelopeBody.classList.add('inactive');
    invitationTemplate.classList.remove('inactive');
    modal.close();
});