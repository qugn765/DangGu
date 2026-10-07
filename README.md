# 🎱 당구 기록

친구들 당구 다마 지정 · 게임 타이머 · 승률/낸 돈 통계 페이지 (GitHub Pages용 정적 사이트)

## 기능
- **게임**: 4구/3구 · 개인전/팀전, 선수별(팀별) 다마 지정 → 타이머 시작 → 칠 때마다 `−` → 종료 시 소요시간 자동 기록
- **결과 바로 입력**: 끝난 게임을 나중에 남은 다마/분 단위로 입력
- **정산**: 꼴찌(남은 다마 비율이 가장 큰 사람, 팀전은 진 팀)가 게임비 전액 — 수동 변경 가능
- **통계**: 게임 수, 승률, 꼴찌 횟수, 낸 돈, 다마 소화율, 평균/최단/최장 게임시간 (종목·기간 필터)
- **선수**: 기본 다마(4구/3구) 관리, JSON 백업/복원

## 1. Firebase 설정 (친구들과 기록 공유)
1. https://console.firebase.google.com → 프로젝트 추가 (애널리틱스 꺼도 됨)
2. **빌드 > Firestore Database > 데이터베이스 만들기** → 위치 `asia-northeast3 (서울)` → 프로덕션 모드
3. **규칙** 탭에 아래 붙여넣고 게시
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /rooms/{room}/{document=**} {
         allow read, write: if true;
       }
     }
   }
   ```
   > 링크를 아는 사람은 누구나 수정 가능한 구조입니다. 친구끼리 쓰는 용도로는 충분하지만 링크는 단톡방에만 공유하세요.
4. **프로젝트 설정(톱니) > 내 앱 > 웹(</>)** 앱 등록 → 나오는 `firebaseConfig` 값을 `firebase-config.js`의 `window.FIREBASE_CONFIG = null;` 자리에 붙여넣기

설정 안 하면 "이 기기에만 저장" 모드로 그냥 동작합니다.

## 2. GitHub Pages 배포
1. GitHub에서 새 저장소 생성 (예: `DangGu`, Public)
2. 이 폴더 파일(`index.html`, `firebase-config.js`) 업로드 → Commit
3. 저장소 **Settings > Pages** → Source: `Deploy from a branch`, Branch: `main` / `(root)` → Save
4. 1~2분 뒤 `https://<아이디>.github.io/DangGu/` 접속

폰에서 열고 **홈 화면에 추가**하면 앱처럼 쓸 수 있어요.
