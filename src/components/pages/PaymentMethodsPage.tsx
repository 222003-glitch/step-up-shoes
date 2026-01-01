import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { PaymentMethods } from '@/entities';
import { CreditCard, Banknote, Building2, Smartphone } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethods[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const { items } = await BaseCrudService.getAll<PaymentMethods>('paymentmethods');
      const activeItems = items.filter(item => item.isActive);
      setPaymentMethods(activeItems);
      setIsLoading(false);
    };

    fetchPaymentMethods();
  }, []);

  const getIcon = (methodName: string) => {
    const name = methodName.toLowerCase();
    if (name.includes('cash') || name.includes('cod')) return Banknote;
    if (name.includes('bank') || name.includes('transfer')) return Building2;
    if (name.includes('mobile') || name.includes('wallet')) return Smartphone;
    return CreditCard;
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-primary py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground mb-6">
              Payment Methods
            </h1>
            <p className="font-paragraph text-xl md:text-2xl text-primary-foreground">
              Choose from multiple secure payment options for your convenience
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods Grid */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl text-primary-foreground text-center mb-12">
              Available Payment Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {paymentMethods.map((method, index) => {
                const Icon = getIcon(method.methodName || '');
                const bgColors = ['bg-sweetbackground', 'bg-sourbackground', 'bg-primary', 'bg-secondary'];
                const bgColor = bgColors[index % bgColors.length];
                const textColor = bgColor === 'bg-sourbackground' || bgColor === 'bg-secondary' 
                  ? 'text-secondary-foreground' 
                  : 'text-primary-foreground';

                return (
                  <div 
                    key={method._id} 
                    className={`${bgColor} rounded-3xl p-8`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                        {method.logo ? (
                          <Image 
                            src={method.logo} 
                            alt={`${method.methodName} logo`}
                            width={40}
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <Icon className="w-7 h-7 text-brandaccent" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-heading text-2xl ${textColor} mb-2`}>
                          {method.methodName}
                        </h3>
                        {method.processingFee !== undefined && method.processingFee > 0 && (
                          <p className={`font-paragraph text-sm ${textColor} opacity-90`}>
                            Processing Fee: PKR {method.processingFee}
                          </p>
                        )}
                      </div>
                    </div>

                    {method.description && (
                      <p className={`font-paragraph text-base ${textColor} mb-4`}>
                        {method.description}
                      </p>
                    )}

                    {method.instructions && (
                      <div className="bg-background bg-opacity-50 rounded-2xl p-4 mt-4">
                        <h4 className="font-heading text-lg text-primary-foreground mb-2">
                          How to Pay:
                        </h4>
                        <p className="font-paragraph text-sm text-foreground whitespace-pre-line">
                          {method.instructions}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Security Information */}
      <section className="w-full bg-sweetbackground py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl text-primary-foreground text-center mb-8">
              Secure Payments
            </h2>
            
            <div className="bg-background rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="font-heading text-2xl text-primary-foreground mb-3">
                  Your Security is Our Priority
                </h3>
                <p className="font-paragraph text-lg text-foreground">
                  All payment transactions on Step Up Shoes are processed securely. We use industry-standard encryption to protect your financial information.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading text-xl text-primary-foreground mb-2">
                    Safe Transactions
                  </h4>
                  <p className="font-paragraph text-base text-foreground">
                    We never store your complete payment details on our servers. All sensitive data is encrypted and processed through secure payment gateways.
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xl text-primary-foreground mb-2">
                    Verified Partners
                  </h4>
                  <p className="font-paragraph text-base text-foreground">
                    We work only with trusted and verified payment service providers to ensure your transactions are safe and reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Process */}
      <section className="w-full bg-background py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl text-primary-foreground text-center mb-12">
              How Payment Works
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    Add Items to Cart
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Browse our collection and add your favorite shoes to the shopping cart.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    Proceed to Checkout
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Review your order, enter your delivery address, and select your preferred payment method.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    Complete Payment
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    Follow the instructions for your chosen payment method. You'll receive an order confirmation once payment is successful.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-xl text-primary-foreground">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-primary-foreground mb-2">
                    Order Processing
                  </h3>
                  <p className="font-paragraph text-base text-foreground">
                    We'll process your order and ship it to you. Track your delivery using the tracking number provided.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-sourbackground py-16 md:py-24">
        <div className="mx-auto max-w-[120rem] px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl text-secondary-foreground text-center mb-12">
              Payment FAQs
            </h2>

            <div className="space-y-6">
              <div className="bg-background rounded-3xl p-6">
                <h3 className="font-heading text-xl text-primary-foreground mb-3">
                  Is it safe to pay online?
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  Yes, absolutely! We use secure payment gateways with SSL encryption to protect your information. Your payment details are never stored on our servers.
                </p>
              </div>

              <div className="bg-background rounded-3xl p-6">
                <h3 className="font-heading text-xl text-primary-foreground mb-3">
                  Can I pay cash on delivery?
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  Yes, cash on delivery is available for most locations across Pakistan. Simply select this option at checkout.
                </p>
              </div>

              <div className="bg-background rounded-3xl p-6">
                <h3 className="font-heading text-xl text-primary-foreground mb-3">
                  What if my payment fails?
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  If your payment fails, please try again or contact your bank. You can also choose a different payment method. Contact our support team if you need assistance.
                </p>
              </div>

              <div className="bg-background rounded-3xl p-6">
                <h3 className="font-heading text-xl text-primary-foreground mb-3">
                  When will I be charged?
                </h3>
                <p className="font-paragraph text-base text-foreground">
                  For online payments, you'll be charged immediately upon order confirmation. For cash on delivery, payment is collected when your order is delivered.
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
              Need Help with Payment?
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground">
              Our customer service team is here to assist you with any payment-related questions or issues. Contact us anytime!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
