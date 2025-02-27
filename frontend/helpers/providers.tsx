import { AuthProvider } from "./auth"

/**
 * Wraps components in application providers, which set up contexts to provide
 * services to components.
 */
export const Providers: React.FC = ({ children }) => <AuthProvider>{children}</AuthProvider>
