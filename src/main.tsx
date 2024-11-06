import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import SinglePriceGridComponent from "./challenges/single-price-grid-component";
import RecipePage from "./challenges/recipe-page";
import FaqAccordion from "./challenges/faq-accordion";
import StatsPreviewCardComponent from "./challenges/stats-preview-card-component";
import PricingComponentWithToggle from "./challenges/pricing-component-with-toggle";
import BentoGrid from "./challenges/bento-grid";
import TodoApp from "./challenges/todo-app";
import ChatAppCssIllustration from "./challenges/chat-app-css-illustration";
import RockPaperScissorsGame from "./challenges/rock-paper-scissors-game";
import RestCountriesApiWithColorThemeSwitcher from "./challenges/rest-countries-api-with-color-theme-switcher";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "challenges/single-price-grid-component",
    element: <SinglePriceGridComponent />,
  },
  {
    path: "challenges/recipe-page",
    element: <RecipePage />,
  },
  {
    path: "challenges/faq-accordion",
    element: <FaqAccordion />,
  },
  {
    path: "challenges/stats-preview-card-component",
    element: <StatsPreviewCardComponent />,
  },
  {
    path: "challenges/pricing-component-with-toggle",
    element: <PricingComponentWithToggle />,
  },
  {
    path: "challenges/bento-grid",
    element: <BentoGrid />,
  },
  {
    path: "challenges/todo-app",
    element: <TodoApp />,
  },
  {
    path: "challenges/chat-app-css-illustration",
    element: <ChatAppCssIllustration />,
  },
  {
    path: "challenges/rock-paper-scissors-game",
    element: <RockPaperScissorsGame />,
  },
  {
    path: "challenges/rest-countries-api-with-color-theme-switcher",
    element: <RestCountriesApiWithColorThemeSwitcher />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
