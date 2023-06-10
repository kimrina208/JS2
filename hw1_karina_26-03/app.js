const smallBlock = document.getElementById('small-block');
let position = 0;

function moveSmallBlock() {
  smallBlock.style.left = position + 'px';
  position++;

  if (position > 450) {
    return;
  }

  setTimeout(moveSmallBlock, 10);
}

moveSmallBlock();