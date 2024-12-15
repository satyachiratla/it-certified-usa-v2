"use client";

import EnquiryForm from "@/components/EnquiryForm";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

export default function ContactUs() {
  return (
    <section className="my-10 mx-20 flex gap-20">
      <div className="w-2/3">
        <div className="flex flex-wrap gap-4">
          <Tabs aria-label="contact us" color="primary" isVertical>
            <Tab key="corporate-office" title="Corporate Office">
              <Card className="w-64">
                <CardBody className="space-y-3 text-center">
                  <span>24543 Indoplex Circle</span>

                  <span>Suite 220, Farmington Hills</span>

                  <span>Michigan – 48335</span>

                  <span>Phone : (248) 473-0720</span>

                  <span>Fax : (248) 473-0721</span>

                  <h2 className="text-cyan-500 text-lg font-semibold">
                    For further queries
                  </h2>

                  <span>Contact: hr@itcertifiedusa.com</span>

                  <span>Email: info@itcertifiedusa.com</span>

                  <span>Sales: sales@itcertifiedusa.com</span>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="other-locations" title="Other Locations">
              <div className="flex gap-5">
                <Card className="w-64">
                  <CardBody className="space-y-3 text-center">
                    <span>10151 Deerwood Park Boulevard</span>

                    <span>Building 200,Suite 250,</span>

                    <span>Jacksonville</span>

                    <span>Florida – 32256</span>

                    <span>Phone : (904) 371-3256</span>

                    <span>Fax : (904) 642-7734</span>
                  </CardBody>
                </Card>
                <Card className="w-64">
                  <CardBody className="space-y-3 text-center">
                    <span>6455 East Johns Crossing,</span>

                    <span>Suite 115,</span>

                    <span>Johns Creek,</span>

                    <span>Georgia – 30097</span>

                    <span>Phone : (770) 674-2444</span>
                  </CardBody>
                </Card>
              </div>
            </Tab>
            <Tab key="overseas-offices" title="Overseas Offices">
              <div className="flex gap-5">
                <Card className="w-64">
                  <CardBody className="space-y-3 text-center">
                    <h2 className="text-cyan-500 text-lg font-semibold">
                      USA:
                    </h2>
                    <span>1 Dundas Street West,</span>

                    <span>Suite 2500</span>

                    <span>Toronto, ON, M5G 1Z3</span>

                    <span>Phone : (437) 836-3075</span>

                    <span>Fax : (437) 836-3101</span>
                  </CardBody>
                </Card>
                <Card className="w-64">
                  <CardBody className="space-y-3 text-center">
                    <h2 className="text-cyan-500 text-lg font-semibold">
                      India:
                    </h2>
                    <span>Jain Sadguru Image’s Capital</span>

                    <span>Park,</span>

                    <span>8th Floor, #805,</span>

                    <span>Image Garden Road,</span>

                    <span>Madhapur,</span>

                    <span>Hyderabad-500081</span>

                    <span>Phone : +91-40-2370 6869</span>
                  </CardBody>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="w-1/3 space-y-5">
        <EnquiryForm heading="Quick Enquiry" />
      </div>
    </section>
  );
}
