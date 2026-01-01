import { Truck, MapPin, Clock, Package } from 'lucide-react';

export default function DeliveryPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">
              Delivery Information
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-primary-foreground">
              Fast, reliable shipping across Pakistan with transparent pricing
            </p>
          </div>
        </div>
      </section>

      {/* Delivery Charges Section */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground text-center mb-12">
              Delivery Charges
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Standard Delivery */}
              <div className="bg-sweetbackground rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brandaccent rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-buttontextprimary" />
                  </div>
                  <h3 className="font-heading text-2xl text-primary-foreground">
                    Standard Delivery
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-base text-foreground">Orders under PKR 5000:</span>
                    <span className="font-heading text-xl text-brandaccent">PKR 250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-base text-foreground">Orders PKR 5000+:</span>
                    <span className="font-heading text-xl text-brandaccent">FREE</span>
                  </div>
                  <p className="font-paragraph text-sm text-foreground pt-3 border-t border-foreground border-opacity-20">
                    Delivery within 3-5 business days
                  </p>
                </div>
              </div>

              {/* Express Delivery */}
              <div className="bg-sourbackground rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl text-secondary-foreground">
                    Express Delivery
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-base text-secondary-foreground">All orders:</span>
                    <span className="font-heading text-xl text-primary">PKR 500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-paragraph text-base text-secondary-foreground">Major cities only:</span>
                    <span className="font-heading text-xl text-primary">PKR 400</span>
                  </div>
                  <p className="font-paragraph text-sm text-secondary-foreground pt-3 border-t border-secondary-foreground border-opacity-20">
                    Delivery within 1-2 business days
                  </p>
                </div>
              </div>
            </div>

            {/* Free Shipping Banner */}
            <div className="bg-primary rounded-3xl p-8 text-center">
              <h3 className="font-heading text-3xl text-primary-foreground mb-3">
                Free Shipping Available!
              </h3>
              <p className="font-paragraph text-lg text-primary-foreground">
                Enjoy free standard delivery on all orders over PKR 5000. Shop more, save more!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="w-full bg-sweetbackground py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-brandaccent" />
              <h2 className="font-heading text-4xl text-primary-foreground">
                Delivery Coverage
              </h2>
            </div>

            <div className="bg-background rounded-3xl p-8 mb-8">
              <h3 className="font-heading text-2xl text-primary-foreground mb-4">
                We Deliver Nationwide
              </h3>
              <p className="font-paragraph text-lg text-foreground mb-6">
                Step Up Shoes delivers to all major cities and towns across Pakistan. Our delivery network covers:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-heading text-xl text-primary-foreground mb-3">Major Cities</h4>
                  <ul className="space-y-2 font-paragraph text-base text-foreground">
                    <li>• Karachi</li>
                    <li>• Lahore</li>
                    <li>• Islamabad</li>
                    <li>• Rawalpindi</li>
                    <li>• Faisalabad</li>
                    <li>• Multan</li>
                    <li>• Peshawar</li>
                    <li>• Quetta</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-xl text-primary-foreground mb-3">Other Areas</h4>
                  <ul className="space-y-2 font-paragraph text-base text-foreground">
                    <li>• Sialkot</li>
                    <li>• Gujranwala</li>
                    <li>• Hyderabad</li>
                    <li>• Bahawalpur</li>
                    <li>• Sargodha</li>
                    <li>• Sukkur</li>
                    <li>• And many more...</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-6">
              <p className="font-paragraph text-base text-foreground text-center">
                Don't see your city listed? Contact us to confirm delivery availability in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Clock className="w-8 h-8 text-brandaccent" />
              <h2 className="font-heading text-4xl text-primary-foreground">
                Delivery Timeline
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    Order Processing
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Orders are processed within 24 hours of confirmation. You'll receive an email with tracking information once your order ships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    In Transit
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Standard delivery takes 3-5 business days. Express delivery takes 1-2 business days to major cities. Track your order using the provided tracking number.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    Delivery Attempt
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Our courier will contact you before delivery. Please ensure someone is available to receive the package. If delivery fails, the courier will attempt redelivery.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    Successful Delivery
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Sign for your package and inspect it immediately. If there are any issues, contact us within 24 hours of delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="w-full bg-sourbackground py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl text-secondary-foreground text-center mb-8">
              Important Information
            </h2>

            <div className="bg-background rounded-3xl p-8 space-y-4">
              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">
                  Delivery Times
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  Delivery times are estimates and may vary due to weather conditions, public holidays, or courier delays. We'll keep you updated on any changes.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">
                  Address Accuracy
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  Please ensure your delivery address is complete and accurate. We're not responsible for delays or failed deliveries due to incorrect addresses.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">
                  Order Tracking
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  Track your order anytime using the tracking number provided in your shipping confirmation email.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-primary-foreground mb-2">
                  Packaging
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  All orders are carefully packaged to ensure your shoes arrive in perfect condition. If you notice any damage, please contact us immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="bg-primary rounded-3xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-4">
              Questions About Delivery?
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground">
              Our customer service team is ready to help with any delivery-related questions or concerns. Contact us anytime!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
