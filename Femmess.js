$(document).ready(function(){
    $('.carousel').carousel();
  });


  const storyForm = document.getElementById('storyForm');
    const storiesDiv = document.getElementById('stories');

    storyForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(storyForm);
      const story = {
        title: formData.get('storyTitle'),
        content: formData.get('storyContent'),
        name: formData.get('name') || 'Anonymous'
      };
      displayStory(story);
      storyForm.reset();
    });

    function displayStory(story) {
      const storyDiv = document.createElement('div');
      storyDiv.classList.add('story');
      storyDiv.innerHTML = `
        <h3>${story.title}</h3>
        <p><strong>Submitted by:</strong> ${story.name}</p>
        <p>${story.content}</p>
      `;
      storiesDiv.prepend(storyDiv);
