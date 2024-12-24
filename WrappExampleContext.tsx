import ContextHome from './ContextHome'
import { ThemeProvider } from './ThemeContext'

const WrappExampleContext = () => {
    return (
        <ThemeProvider>
            <ContextHome />
        </ThemeProvider>
    )
}

export default WrappExampleContext;