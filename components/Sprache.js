import React, { useContext } from 'react';
import { ThemeContext, themes } from "./Themes";
import { LangContext, langs } from './LangObject';

export default function Sprache() {

    const theme = useContext(ThemeContext);

    const lang = useContext(LangContext);

    return <article lang={langs[lang]} style={themes[theme]} >
                    <strong>
                        Hallo, es ist wirklich ein Schmerz zu folgen. Wollen sie oft die Freuden der Wahrheit, die sie anbieten? Von, er hasst die offene Öffnung, von den Anklägern selbst, den anwesenden Ältesten und den Kleinsten und keinen!
                    </strong>
                </article>
}