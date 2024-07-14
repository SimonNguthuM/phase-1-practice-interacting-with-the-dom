document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    let count = 0;
    let timer = setInterval(incrementCounter, 1000);
    let paused = false;
  
    function incrementCounter() {
      if (!paused) {
        count++;
        counter.textContent = count;
      }
    }
  
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const buttonsToDisable = [plusButton, minusButton, likeButton];
  
    plusButton.addEventListener('click', function() {
      count++;
      counter.textContent = count;
    });
  
    minusButton.addEventListener('click', function() {
      if (count > 0) {
        count--;
        counter.textContent = count;
      }
    });
  
    const likes = {};
  
    likeButton.addEventListener('click', function() {
      if (count in likes) {
        likes[count]++;
      } else {
        likes[count] = 1;
      }
      renderLikes();
    });
  
    function renderLikes() {
      const likesList = document.querySelector('.likes');
      likesList.innerHTML = '';
      for (let number in likes) {
        const likeItem = document.createElement('li');
        likeItem.textContent = `${number} has been liked ${likes[number]} time(s)`;
        likesList.appendChild(likeItem);
      }
    }
  
    pauseButton.addEventListener('click', function() {
      paused = !paused;
      if (paused) {
        clearInterval(timer);
        buttonsToDisable.forEach(button => button.disabled = true);
        pauseButton.textContent = 'resume';
      } else {
        timer = setInterval(incrementCounter, 1000);
        buttonsToDisable.forEach(button => button.disabled = false);
        pauseButton.textContent = 'pause';
      }
    });
  
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');
  
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const commentText = commentInput.value.trim();
  
      if (commentText !== '') {
        const commentItem = document.createElement('div');
        commentItem.classList.add('comment');
        commentItem.textContent = commentText;
        commentsList.appendChild(commentItem);
        commentInput.value = '';
      }
    });
  });




































// document.addEventListener('DOMContentLoaded', () => {
//     const counter = document.querySelector('#counter')
//     let count = 0
//     let timer = setInterval(add, 1000)

//     function add (){
//         count ++
//         counter.textContent = count
//     }

//     const plusButton = document.getElementById('plus');
//     const minusButton = document.getElementById('minus');
//     const likeButton = document.getElementById('heart');
//     const pauseButton = document.getElementById('pause');

//     plusButton.addEventListener('click', () => {
//         count ++
//         counter.textContent = count
//     })

//     minusButton.addEventListener('click', () => {
//         count --
//         counter.textContent = count
//     })

//     let likes = {}

//     likeButton.addEventListener('click', () => {
//         if (count in likes){
//             likes[count]++
//         }
//         else{
//             likes[count] = 0
//         }
//         printLikes()
//     })

//     function printLikes() {
//         const likesList = document.querySelector('.likes')
//         likesList.innerHTML = ''
//         for (let number in likes) {
//           const likeItem = document.createElement('li')
//           likeItem.textContent = `${number} has been liked ${likes[number]} time(s)`
//           likesList.appendChild(likeItem)
//         }
//       }
    
//     //   pauseButton.addEventListener('click', () => {
//     //     if (pauseButton.textContent === 'pause') {
//     //         clearInterval(timer);
//     //         pauseButton.textContent = 'resume';
    
//     //         // Disable all buttons except pauseButton
//     //         plusButton.disabled = true;
//     //         minusButton.disabled = true;
//     //         likeButton.disabled = true;
//     //         // Disable resume button if present
//     //         if (resumeButton) {
//     //             resumeButton.disabled = true;
//     //         }
    
//     //     } else { // resume
//     //         timer = setInterval(add, 1000);
//     //         pauseButton.textContent = 'pause';
    
//     //         // Enable all buttons
//     //         plusButton.disabled = false;
//     //         minusButton.disabled = false;
//     //         likeButton.disabled = false;
//     //         // Enable resume button if present
//     //         if (resumeButton) {
//     //             resumeButton.disabled = false;
//     //         }
//     //     }
//     // })
    
//     commentForm.addEventListener('submit', (e) => {
//         e.preventDefault()
//         const commentText = commentInput.value
//         if (commentText !== '') {
//         let par = document.createElement('p')
//         par.textContent = commentText
//         commentsList.appendChild(par)
//         commentInput.value = ''
//         }
//     })
// })
        

