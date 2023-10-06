// // MAGIC CARD

// const card = document.getElementById('card');

// let click = false;
// let clientX = 0;
// let totalRotation = 0;
// let rotationScale = 0.1; // Adjust this value to control rotation speed

// document.addEventListener('mousedown', (e) => {
//   clientX = e.clientX;
//   click = true;
// });

// document.addEventListener('mouseup', (e) => {
//   click = false;
//   totalRotation = totalRotation % 360;
// });
// document.addEventListener('mousemove', (e) => {
//   if (click) {
//     const rotateY = (e.clientX - clientX) * rotationScale;

//     totalRotation += rotateY;

//     console.log(totalRotation);

//     card.style.transform = `perspective(50rem) rotateX(20deg) rotateY(${totalRotation}deg)`;
//   }
// });

// document.addEventListener('touchstart', (e) => {
//   clientX = e.targetTouches[0].clientX;
//   click = true;
// });
// document.addEventListener('touchend', (e) => {
//   click = false;
// });
// document.addEventListener('touchmove', (e) => {
//   if (click) {
//     const rotateY = e.targetTouches[0].clientX - clientX;

//     card.style.transform = `perspective(50rem) rotateX(20deg) rotateY(${rotateY}deg)`;
//   }
// });

const card = document.getElementById('card');

// let click = false;
// let clientX = 0;
// let initialRotation = 0;
// let totalRotation = 0;

// document.addEventListener('touchstart', (e) => {
//   clientX = e.targetTouches[0].clientX;
//   click = true;
//   initialRotation = totalRotation; // Record the initial rotation when click starts
// });

// document.addEventListener('touchend', (e) => {
//   click = false;
// });

// document.addEventListener('touchmove', (e) => {
//   if (click) {
//     const rotateY = (e.targetTouches[0].clientX - clientX) * 1;

//     totalRotation = initialRotation + rotateY; // Apply the accumulated rotation

//     totalRotation %= 360; // Ensure totalRotation is within 0-360 degrees

//     card.style.transform = `perspective(50rem) rotateX(20deg) rotateY(${totalRotation}deg)`;
//   }
// });

// document.addEventListener('mousedown', (e) => {
//   clientX = e.clientX;
//   click = true;
//   initialRotation = totalRotation; // Record the initial rotation when click starts
// });

// document.addEventListener('mouseup', (e) => {
//   click = false;
// });

// document.addEventListener('mousemove', (e) => {
//   if (click) {
//     const rotateY = (e.clientX - clientX) * 0.5; // Adjust the sensitivity if needed

//     totalRotation = initialRotation + rotateY; // Apply the accumulated rotation

//     totalRotation %= 360; // Ensure totalRotation is within 0-360 degrees

//     card.style.transform = `perspective(50rem) rotateX(20deg) rotateY(${totalRotation}deg)`;
//   }
// });

let isDragging = false;
let startX, startY, currentX, currentY, deltaX, deltaY;

card.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  currentX = e.clientX;
  currentY = e.clientY;

  deltaX = currentX - startX;
  deltaY = currentY - startY;

  card.style.transform = `rotateX(${deltaY * -0.2}deg) rotateY(${
    deltaX * 0.2
  }deg)`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;

  isDragging = false;

  card.style.transform = '';
});
