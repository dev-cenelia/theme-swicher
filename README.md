# Shade — Theme Switcher

React와 TypeScript로 만든 라이트·다크 테마 전환 데모입니다.
Zustand로 테마 상태를 관리하고, 선택한 테마를 브라우저에 저장합니다.

## 주요 기능

- 버튼으로 라이트·다크 테마 전환
- Zustand `persist`를 통한 테마 저장 및 새로고침 시 복원
- CSS 변수와 `data-theme` 속성을 활용한 색상 변경
- 모바일 화면에 맞춘 반응형 레이아웃
- 키보드 탐색 시 포커스 표시

## 기술 스택

React, TypeScript, Zustand, Vite, CSS

## 실행 방법

Node.js와 npm이 설치된 환경에서 실행합니다.

```sh
npm ci
npm run dev
```

## 검증 및 빌드

```sh
npm run lint
npm run build
npm run preview
```

`npm run preview`는 빌드 결과를 로컬에서 확인하는 명령입니다.

## 테마 상태 관리

`src/store/useThemeStore.ts`에서 `darkMode` 상태와 `themeToggle` 함수를 관리합니다.
`App.tsx`는 필요한 상태와 함수를 구독하고, `data-theme` 값으로 테마를 적용합니다.
선택한 테마는 localStorage의 `theme-storage` 키에 저장됩니다.

## 동작 확인

1. 테마 전환 버튼을 눌러 배경과 글자 색상이 바뀌는지 확인합니다.
2. 새로고침 후 선택한 테마가 유지되는지 확인합니다.
3. 모바일 화면 너비에서 카드와 텍스트 배치를 확인합니다.
4. Tab 키로 링크와 버튼에 접근하고, 버튼에 포커스를 둔 상태에서 Enter 또는 Space 키로 테마를 전환합니다.
