chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: changeBackgroundColor
  });
});

function changeBackgroundColor() {
  document.body.style.backgroundColor = '#fff9c4'; // Đổi nền sang màu vàng nhạt
}