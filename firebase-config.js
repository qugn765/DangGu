// ─────────────────────────────────────────────────────────────
// Firebase 설정
//  1) https://console.firebase.google.com 에서 프로젝트 생성
//  2) 빌드 > Firestore Database > 데이터베이스 만들기
//  3) 프로젝트 설정(톱니) > 내 앱 > 웹(</>) 앱 추가 > firebaseConfig 복사
//  4) 아래 null 자리에 붙여넣기
//
//  null 그대로 두면 "이 기기에만 저장" 모드로 동작합니다.
// ─────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBtSRSey9MymkfwasVSYAn8Bs0qp_fIK20",
  authDomain: "danggu-dfc92.firebaseapp.com",
  projectId: "danggu-dfc92",
  storageBucket: "danggu-dfc92.firebasestorage.app",
  messagingSenderId: "734585957418",
  appId: "1:734585957418:web:d4acd757aeb96750e36753"
};
/* 예시)
window.FIREBASE_CONFIG = {
  apiKey: "AIza....",
  authDomain: "danggu-xxxx.firebaseapp.com",
  projectId: "danggu-xxxx",
  storageBucket: "danggu-xxxx.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};
*/

// 같은 Firebase 프로젝트를 여러 모임이 나눠 쓸 때 구분용 이름
window.ROOM_ID = "friends";
