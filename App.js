import React, { lazy, Suspense } from "react";
import './App.css';
import { ThemeContext } from "./components/Themes";
import { LangContext } from "./components/LangObject";

export default function App() {

  const Language = lazy( ()=> import( './components/Language' ) );

  return (
    <main className="container">
      <section>
          <ThemeContext.Provider value={"light"}>
            <LangContext.Provider value={"ger"}>
              <Suspense>
                <Language />
              </Suspense>
            </LangContext.Provider>
          </ThemeContext.Provider>
      </section>
    </main>
  );
}
