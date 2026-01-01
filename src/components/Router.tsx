import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { WixServicesProvider, rootRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Page components
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ReturnPolicyPage from '@/components/pages/ReturnPolicyPage';
import DeliveryPage from '@/components/pages/DeliveryPage';
import PaymentMethodsPage from '@/components/pages/PaymentMethodsPage';

// Layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Main layout with header and footer
function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Layout component that includes ScrollToTop and WixServicesProvider
function MainLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <SiteLayout />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "return-policy",
        element: <ReturnPolicyPage />,
      },
      {
        path: "delivery",
        element: <DeliveryPage />,
      },
      {
        path: "payment-methods",
        element: <PaymentMethodsPage />,
      },
      {
        path: "store",
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
        index: true,
      },
      {
        path: "store/:categorySlug",
        element: (
          <div className="w-full bg-background py-8">
            <div className="mx-auto max-w-[120rem] px-4">
              <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-8">
                Shop Our Collection
              </h1>
              <StoreCollectionRoute productPageRoute="/products" />
            </div>
          </div>
        ),
        loader: storeCollectionRouteLoader,
      },
      {
        path: "products/:slug",
        element: (
          <div className="w-full bg-background py-8">
            <div className="mx-auto max-w-[120rem] px-4">
              <ProductDetailsRoute />
            </div>
          </div>
        ),
        loader: productRouteLoader,
      },
      {
        path: "cart",
        element: (
          <div className="w-full bg-background py-8">
            <div className="mx-auto max-w-[120rem] px-4">
              <h1 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-8">
                Shopping Cart
              </h1>
              <Cart />
            </div>
          </div>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
