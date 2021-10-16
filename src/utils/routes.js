import Login from '../screens/Login';
import Journey from '../screens/Journey';
import Test from '../screens/ReactionTest';
import SyncScreen from '../screens/SyncScreen';
import TestCalculate from '../screens/TestCalculate';
import FinalJourneyResult from '../screens/FinalJourneyResult';
import Questionnaire from '../screens/Questionnaire';
import TestStatus from '../screens/ReactionTestStatus';
import SendDataLoading from '../screens/SendDataLoading';
import QuestionnaireStatus from '../screens/QuestionnaireStatus';
import TestInstructions from '../screens/ReactionTestInstructions';
import TestInstructionsSteps from '../screens/ReactionTestInstructionsSteps';
import QuestionnaireInstructions from '../screens/QuestionnaireInstructions';

export default [
  { name: 'Test', component: Test, options: { gestureEnabled: true } },
  { name: 'Login', component: Login, options: { gestureEnabled: true } },
  { name: 'Journey', component: Journey, options: { gestureEnabled: true } },
  {
    name: 'SyncScreen',
    component: SyncScreen,
    options: { gestureEnabled: true },
  },
  {
    name: 'TestStatus',
    component: TestStatus,
    options: { gestureEnabled: true },
  },
  {
    name: 'TestCalculate',
    component: TestCalculate,
    options: { gestureEnabled: false },
  },
  {
    name: 'Questionnaire',
    component: Questionnaire,
    options: { gestureEnabled: true },
  },
  {
    name: 'SendDataLoading',
    component: SendDataLoading,
    options: { gestureEnabled: false },
  },
  {
    name: 'TestInstructions',
    component: TestInstructions,
    options: { gestureEnabled: true },
  },
  {
    name: 'FinalJourneyResult',
    component: FinalJourneyResult,
    options: { gestureEnabled: false },
  },
  {
    name: 'QuestionnaireStatus',
    component: QuestionnaireStatus,
    options: { gestureEnabled: true },
  },
  {
    name: 'TestInstructionsSteps',
    component: TestInstructionsSteps,
    options: { gestureEnabled: true },
  },
  {
    name: 'QuestionnaireInstructions',
    component: QuestionnaireInstructions,
    options: { gestureEnabled: false },
  },
];
