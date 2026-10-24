import "./App.css";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);
  const themeToggle = useThemeStore((state) => state.themeToggle);

  return (
    <div className="theme-demo" data-theme={darkMode ? "dark" : "light"}>
      <div className="page-shell">
        <header className="site-header">
          <a className="wordmark" href="#home">
            ◐ shade.
          </a>
          <button className="theme-toggle" type="button" onClick={themeToggle}>
            ◐ 테마 전환
          </button>
        </header>
        <main id="home">
          <section className="intro" aria-labelledby="page-title">
            <p className="eyebrow">A LITTLE CHANGE OF MOOD</p>
            <h1 id="page-title">
              같은 공간,
              <br />
              다른 분위기<span>.</span>
            </h1>
            <p className="intro-description">
              밝은 낮에도, 조용한 밤에도.
              <br />
              나에게 편안한 화면을 만나보세요.
            </p>
          </section>
          <section className="profile-card" aria-labelledby="profile-title">
            <div className="card-art" aria-hidden="true">
              <span className="art-number">01 / 02</span>
              <div className="art-orbit" />
              <div className="art-sun" />
              <span className="art-caption">
                a fresh
                <br />
                perspective
              </span>
            </div>
            <div className="card-body">
              <div className="profile-meta">
                <span className="avatar" aria-hidden="true">
                  S
                </span>
                <div>
                  <p className="profile-name">작은 것을 만드는 개발자</p>
                  <p className="profile-role">Frontend Developer</p>
                </div>
              </div>
              <h2 id="profile-title">
                보기 좋은 화면에
                <br />
                편안한 경험을 더해요.
              </h2>
              <p className="card-description">
                작은 디테일이 만드는 차이를 좋아합니다.
                <br />
                오늘도 하나씩 배우고, 직접 만들어 갑니다.
              </p>
              <div className="tag-list" aria-label="관심 기술">
                <span>React</span>
                <span>TypeScript</span>
                <span>Zustand</span>
              </div>
              <a className="project-link" href="#about-demo">
                이 데모 소개 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
          <aside className="demo-note" id="about-demo">
            <span className="note-symbol" aria-hidden="true">
              ✳
            </span>
            <p>
              작은 전환, 새로운 느낌.
              <br />
              <span>테마에 따라 달라지는 색과 분위기를 살펴보세요.</span>
            </p>
          </aside>
        </main>
        <footer className="site-footer">
          <span>SHADE — THEME PLAYGROUND</span>
          <span>Made for your comfort.</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
