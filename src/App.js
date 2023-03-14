import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import './App.css';

const App = () => {
    return(
        <ChatEngine 
            height="100vh"
            projectID="5b3b478b-73a9-4b67-8961-4d36b7f568a7"
            userName="Askar"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}

        />
    )
}

export default App; 