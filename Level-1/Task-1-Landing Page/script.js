function enterAdoptionPage() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('adoption-page').classList.remove('hidden');
}

function adoptPet(petName, petImage) {
    alert(`🎉 Congratulations! You have adopted ${petName}. Your virtual pet is now yours!`);


    let existingMessage = document.getElementById('adopted-message');
    if (existingMessage) {
        existingMessage.remove();
    }


    const petAdoptedMessage = document.createElement('div');
    petAdoptedMessage.id = 'adopted-message';
    petAdoptedMessage.style.textAlign = 'center';
    petAdoptedMessage.style.marginTop = '20px';

    petAdoptedMessage.innerHTML = `
        <h2>You have adopted ${petName}!</h2>
        <img src="${petImage}" alt="${petName}" style="width: 300px; border-radius: 15px; margin-top: 20px;">
        <br><br>
        <button onclick="goBackToAdoptionPage()" style="padding: 10px 20px; font-size: 16px; border: none; background: #4CAF50; color: white; border-radius: 10px; cursor: pointer;">
            Back to Adoption Page
        </button>
    `;

    document.body.appendChild(petAdoptedMessage);
}

function goBackToAdoptionPage() {
    document.getElementById('adopted-message').remove();
}
