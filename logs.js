window.jotLogs = [
    {
        timestamp: '2025-11-15 00:00',
        type: 'meeting',
        description: '모임 공지\n일시: 2025년 11월 15일 (토)\n펜션명: 통영바다펜션\n동: 다이아몬드동\n호수: 301호, 302호'
    }
];

function logActivity(type, description) {
    const timestamp = new Date().toLocaleString('ko-KR');
    const logEntry = { timestamp, type, description };
    
    if (typeof window.jotLogs === 'undefined') {
        window.jotLogs = [];
    }
    window.jotLogs.unshift(logEntry); // 최신 로그가 위로 오도록

    // 선택적으로 localStorage에 저장 (필요시)
    // saveToLocalStorage('activityLogs', window.jotLogs);

    console.log(`[LOG] ${timestamp} - ${type}: ${description}`);
}