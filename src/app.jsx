// Imarra — App root + router
function App() {
  const route = useHashRoute();
  const [lang] = useLang();

  let page;
  switch (route.page) {
    case 'home':
    case '':
      page = <HomePage />; break;
    case 'produits':
      page = route.sub ? <ProduitDetail id={route.sub} /> : <ProduitsOverview />; break;
    case 'catalogue':
      page = <CataloguePage />; break;
    case 'usages':
      page = <UsagesPage />; break;
    case 'partenaires':
      page = <PartenairesPage />; break;
    case 'about':
      page = <AboutPage />; break;
    case 'contact':
      page = <ContactPage />; break;
    case 'legal':
      page = <LegalPage />; break;
    default:
      page = <NotFound />; break;
  }

  return (
    <div data-screen-label={`Imarra — ${route.page || 'home'}${route.sub ? '/' + route.sub : ''}`}>
      <Nav route={route} />
      <main key={`${route.page}-${route.sub || ''}`}>{page}</main>
      <Footer />
      <DemoModal />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
