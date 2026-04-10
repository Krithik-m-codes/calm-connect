import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import RootLayout from "./components/layout/RootLayout";

const Home = lazy(() => import("./pages/Home"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Support = lazy(() => import("./pages/Support"));
const NotFound = lazy(() => import("./pages/NotFound"));
const FreeResources = lazy(() => import("./pages/FreeResources"));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] flex items-center justify-center text-brand-dark">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="support" element={<Support />} />
          <Route path="free-resources" element={<FreeResources />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
