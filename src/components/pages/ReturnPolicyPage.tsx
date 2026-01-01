import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export default function ReturnPolicyPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">
              Return Policy
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-primary-foreground">
              Your satisfaction is our priority. Read our return and exchange policy below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Return Window */}
            <div className="bg-sweetbackground rounded-3xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-brandaccent rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-buttontextprimary" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl text-primary-foreground mb-4">
                    7-Day Return Window
                  </h2>
                  <p className="font-paragraph text-lg text-foreground mb-3">
                    We offer a 7-day return policy from the date of delivery. If you're not completely satisfied with your purchase, you can return or exchange your shoes within this timeframe.
                  </p>
                  <p className="font-paragraph text-base text-foreground">
                    To be eligible for a return, items must be unused, in their original condition, and in the original packaging with all tags attached.
                  </p>
                </div>
              </div>
            </div>

            {/* What Can Be Returned */}
            <div>
              <h2 className="font-heading text-3xl text-primary-foreground mb-6">
                What Can Be Returned
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brandaccent flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-foreground">
                    Unworn shoes with original tags and packaging intact
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brandaccent flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-foreground">
                    Items with manufacturing defects or damage during shipping
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brandaccent flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-foreground">
                    Wrong size or color received (different from what you ordered)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brandaccent flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-lg text-foreground">
                    Products that don't match the description on our website
                  </p>
                </div>
              </div>
            </div>

            {/* What Cannot Be Returned */}
            <div className="bg-sourbackground rounded-3xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6 text-destructiveforeground" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl text-secondary-foreground mb-4">
                    What Cannot Be Returned
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <p className="font-paragraph text-base text-secondary-foreground">
                        Shoes that have been worn outdoors or show signs of use
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <p className="font-paragraph text-base text-secondary-foreground">
                        Items without original packaging, tags, or labels
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <p className="font-paragraph text-base text-secondary-foreground">
                        Products returned after the 7-day return window
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                      <p className="font-paragraph text-base text-secondary-foreground">
                        Sale or clearance items (unless defective)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Process */}
            <div>
              <h2 className="font-heading text-3xl text-primary-foreground mb-6">
                How to Return Your Order
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl text-primary-foreground">1</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary-foreground mb-2">
                      Contact Us
                    </h3>
                    <p className="font-paragraph text-base text-foreground">
                      Email us with your order number and reason for return. We'll provide you with return instructions and a return authorization number.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl text-primary-foreground">2</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary-foreground mb-2">
                      Package Your Return
                    </h3>
                    <p className="font-paragraph text-base text-foreground">
                      Carefully pack the shoes in their original box with all tags and accessories. Include the return authorization number in the package.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl text-primary-foreground">3</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary-foreground mb-2">
                      Ship It Back
                    </h3>
                    <p className="font-paragraph text-base text-foreground">
                      Send the package to our return address. We recommend using a trackable shipping method. Return shipping costs are the customer's responsibility unless the item is defective.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl text-primary-foreground">4</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-primary-foreground mb-2">
                      Receive Your Refund
                    </h3>
                    <p className="font-paragraph text-base text-foreground">
                      Once we receive and inspect your return, we'll process your refund within 5-7 business days. Refunds will be issued to your original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchanges */}
            <div className="bg-sweetbackground rounded-3xl p-8">
              <h2 className="font-heading text-3xl text-primary-foreground mb-4">
                Exchanges
              </h2>
              <p className="font-paragraph text-lg text-foreground mb-4">
                If you need a different size or color, we're happy to help! Contact us to arrange an exchange. We'll send you the replacement item once we receive your return.
              </p>
              <p className="font-paragraph text-base text-foreground">
                Exchanges are subject to product availability. If your preferred size or color is out of stock, we'll issue a full refund instead.
              </p>
            </div>

            {/* Important Notes */}
            <div className="border-l-4 border-brandaccent bg-background pl-6 py-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-brandaccent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-xl text-primary-foreground mb-3">
                    Important Notes
                  </h3>
                  <ul className="space-y-2 font-paragraph text-base text-foreground">
                    <li>• Refunds may take 7-10 business days to appear in your account after processing</li>
                    <li>• Return shipping fees are non-refundable unless the return is due to our error</li>
                    <li>• We reserve the right to refuse returns that don't meet our policy requirements</li>
                    <li>• For defective items, we'll cover return shipping costs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-primary rounded-3xl p-8 text-center">
              <h2 className="font-heading text-3xl text-primary-foreground mb-4">
                Questions About Returns?
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground mb-6">
                Our customer service team is here to help with any questions or concerns about your return.
              </p>
              <p className="font-paragraph text-base text-primary-foreground">
                Contact us and we'll respond within 24 hours.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
