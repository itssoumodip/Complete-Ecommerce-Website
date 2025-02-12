import { popularProducts, superQuality, services, specialOffer, customerReviews, subscribe, footer, hero } from './sections';

const App = () => (
  <main className="relative">
      {/* Nav */}
    <section className="xl:padding-1 wide:padding-r padding-b">
      <hero />
    </section>
    <section className="padding">
      <popularProducts />
    </section>
    <section className="padding">
      <superQuality />
    </section>
    <section className="padding-x py-10">
      <services />
    </section>
    <section className="padding">
      <specialOffer />
    </section>
    <section className="bg-blue-100 padding">
      <customerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <footer />
    </section>
  </main>
);

export default App 
