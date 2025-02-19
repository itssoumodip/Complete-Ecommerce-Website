import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
function Services() {
  return (
    <section className="border-4 max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services