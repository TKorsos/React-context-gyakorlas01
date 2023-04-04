import { lazy, Suspense, useContext } from "react"
import { ThemeContext, themes } from "./Themes";

export default function Language() {

    const Sprache = lazy( ()=> import( './Sprache' ) );

    const theme = useContext(ThemeContext);

    return <article lang="en" style={themes[theme]} >
        <strong>
            Hello, it's really a pain to be followed. Do they often want the pleasures of the truth that they provide an option? From, he hates the open opening, from the accusers themselves, the elders present and the smallest and none!
        </strong>
            <ThemeContext.Provider value={"dark"}>
                <Suspense>
                    <Sprache/>
                </Suspense>
            </ThemeContext.Provider>
    </article>
}