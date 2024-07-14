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