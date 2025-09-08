function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
    // 創建提示訊息
    const toast = document.createElement('div');
    toast.innerHTML = '✅ 已複製到剪貼簿';
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.3s ease-out;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
        style.remove();
    }, 3000);
    }).catch(function(err) {
    console.error('複製失敗: ', err);
    });
}

// 將 data-emoji 的元素自動填入對應 emoji
document.querySelectorAll("[data-emoji]").forEach(el => {
  const key = el.getAttribute("data-emoji");
  if (Emoji[key]) {
    el.textContent = Emoji[key];
  }
});
