// App.tsx
import { BrowserRouter as Router } from "react-router-dom";
// import AppRoutes from "./routes";
import AppRoutes from "./router/AppRoutes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <AppRoutes />
    </Router>
    </QueryClientProvider>
  );
}

export default App;
