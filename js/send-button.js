document.getElementById('chat-content').addEventListener('input', function() {
    var input = this.value.trim();
    var icon = document.getElementById('icon');
    
    if (input.length > 0) {
      icon.classList.remove('bi-hand-thumbs-up');
      icon.classList.add('bi-send');
    } else {
      icon.classList.remove('bi-send');
      icon.classList.add('bi-hand-thumbs-up');
    }
  });
  