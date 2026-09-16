import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Spin, theme } from 'antd';

import Navbar from './components/TopBar/Navbar';
import { ROUTES } from './constant/Link';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem(
      'theme',
      isDarkMode ? 'dark' : 'light'
    );

    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light'
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode
          ? theme.darkAlgorithm
          : theme.defaultAlgorithm,

        token: {
          colorPrimary: '#1677ff',
          borderRadius: 12,
        },

        components: {
          Layout: {
            headerBg: 'transparent',
            bodyBg: 'transparent',
            footerBg: 'transparent',
          },

          Card: {
            borderRadiusLG: 20,
          },

          Button: {
            borderRadius: 10,
          },

          Tag: {
            borderRadiusSM: 20,
          },
        },
      }}
    >
      <BrowserRouter>
        <Navbar
          isDarkMode={isDarkMode}
          onToggleTheme={toggleTheme}
        />

        <Suspense
          fallback={
            <div
              style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Spin size="large" />
            </div>
          }
        >
          <Routes>
            {ROUTES.map((route) => {
              const Component = route.component;

              return (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;