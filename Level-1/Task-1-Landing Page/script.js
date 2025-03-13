function enterAdoptionPage() {
    // Hide the landing page and show the adoption page
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('adoption-page').classList.remove('hidden');
}

function adoptPet(petName, petImage) {
    alert(`🎉 Congratulations! You have adopted ${petName}. Your virtual pet is now yours! 🐾`);
    
    // Display adopted pet image
    const petAdoptedMessage = document.createElement('div');
    petAdoptedMessage.innerHTML = `
        <h2>You have adopted ${petName}!</h2>
        <img src="${petImage}" alt="${petName}" style="width: 300px; border-radius: 15px; margin-top: 20px;">
    `;
    document.body.appendChild(petAdoptedMessage);
}
