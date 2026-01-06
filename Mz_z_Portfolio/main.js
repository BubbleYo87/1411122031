// --- 變數宣告區 ---
const videoModalElement = document.getElementById('videoModal');
const iframeElement = document.getElementById('youtubeFrame');

// 新增：取得標題與描述的 DOM 元素
const titleElement = document.getElementById('modalTitle');
const descElement = document.getElementById('modalDesc');

// --- 函式定義區 ---

/**
 * @function openVideoModal
 * @description 開啟彈窗，並載入影片、標題與描述
 * @param {string} url - YouTube 嵌入連結
 * @param {string} title - 作品標題
 * @param {string} description - 作品詳細介紹 (支援 HTML 標籤如 <br>)
 */
function openVideoModal(url, title, description) {
    if (!url) return;

    // 1. 設定影片
    iframeElement.src = url + "?autoplay=1";

    // 2. 設定文字內容
    // 如果沒有傳入標題，就顯示預設文字
    titleElement.innerText = title || "作品展示";
    // 使用 innerHTML 允許你在描述中換行 (使用 <br>)
    descElement.innerHTML = description || "暫無描述";

    // 3. 顯示視窗
    const modalInstance = new bootstrap.Modal(videoModalElement);
    modalInstance.show();
}

// --- 事件監聽區 (保持不變) ---
videoModalElement.addEventListener('hidden.bs.modal', function () {
    iframeElement.src = ""; 
});