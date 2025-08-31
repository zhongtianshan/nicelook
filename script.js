document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar');
  const content = document.getElementById('content');
  let progress = 0;

  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      document.getElementById('progress-container').style.display = 'none';
      content.style.display = 'flex';
      content.style.flexDirection = 'column';
      content.style.alignItems = 'center';
      content.style.justifyContent = 'center';

      // 3秒后跳转到指定链接
      setTimeout(() => {
        window.location.href = 'https://b23.tv/iL4WH0K';
      }, 3000);
    }
  }, 1000);
});