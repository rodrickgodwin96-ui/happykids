const numberContainer = document.getElementById('numberContainer');

for (let i = 1; i <= 10; i++) {
  const numDiv = document.createElement('div');
  numDiv.classList.add('number', `number-${i}`);
  numDiv.textContent = i;

  numDiv.addEventListener('click', () => {
    alert(`You clicked: ${i}`);
    const audio = new Audio(`audio/${i}.mp3`);
    audio.play().catch(err => console.error(err));
  });

  numberContainer.appendChild(numDiv);
}
