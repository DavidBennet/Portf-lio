import '../styles/componets/MainContent.sass'
import { AboutContainer } from './AboutContainer'
import { ProjectsContainer } from './ProjectsContainer'
import { TechnologisContainer } from './TechnologisContainer'


export function MainContent() {
    return(
        <main id='main-content'>
            <AboutContainer/>
            <TechnologisContainer/>
            <ProjectsContainer/>
        </main>
    )
}