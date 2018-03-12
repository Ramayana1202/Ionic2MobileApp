import { LoginPage } from './login/login';
import { ReportCompletePage} from './report-complete/report-complete';
import { TaskManagementPage } from './task-management/task-management';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = LoginPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TaskManagementPage;
