import React from 'react'
import Footer from '../components/Footer'
import FooterHeader from '../components/FooterHeader'
import Header from '../components/Header'
import PrivateRouteSlider from '../components/PrivateRouteSlider'

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <FooterHeader />

      <div className='container-fluid my-5 py-3'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <section className='orders'>
              <div className='row'>
                <div className='col-10 mx-auto'>
                  <p
                    className='dark-text my-3 text-center'
                    style={{ fontWeight: 'bold' }}
                  >
                    All information and tools on this website are strictly for
                    members only. Use of any of the information given on this
                    website by a non-member is strictly prohibited. Yah’ki
                    Awakened Eye of Lotus Botanical Club owns and operates this
                    website.
                  </p>
                </div>
                <div className='col-12 text-center mt-5'>
                  <h4>Last Updated November 1, 2020</h4>
                </div>
              </div>
              {/* ORDERS */}
              <div className='row my-5'>
                <div className='col-12 my-3'>
                  <p>
                    Yahki Awakened Office respects the privacy needs and
                    concerns of our customers. That is why we handle any
                    personal information, such as your name, address, email
                    address or phone number (“Personal Information”) that you
                    provide to us with utmost care.
                  </p>
                </div>
                <div className='col-12 text-left mt-5'>
                  <h3>What Information We Collect About You</h3>
                </div>
                <div className='col-12 mt-5'>
                  <p>
                    Yah’ki Awakened Eye of Lotus Botanical Club and its
                    employees and volunteers may ask You to provide Us with
                    certain personally identifiable information that can be used
                    to contact or identify You. Personally identifiable
                    information may include, but is not limited to:
                  </p>
                  <ul className='policy-list ml-4 my-3 mt-5'>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Usage Data</li>
                  </ul>
                  <p className='mt-5'>
                    Usage Data is collected automatically when using the
                    Service.
                  </p>
                  <p className='my-3 mt-5'>
                    Usage Data may include information such as Your Device’s
                    Internet Protocol address (e.g. IP address), browser type,
                    browser version, the pages of our Service that You visit,
                    the time and date of Your visit, the time spent on those
                    pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p className='my-3 mt-5'>
                    When You access the Service by or through a mobile device,
                    We may collect certain information automatically, including,
                    but not limited to, the type of mobile device You use, Your
                    mobile device unique ID, the IP address of Your mobile
                    device, Your mobile operating system, the type of mobile
                    Internet browser You use, unique device identifiers and
                    other diagnostic data.
                  </p>
                  <p className='mt-5'>
                    We may also collect information that Your browser sends
                    whenever You visit our Service or when You access the
                    Service by or through a mobile device.
                  </p>
                </div>
                {/* Tracking Technologies and Cookies */}
                <div className='col-12 mt-5'>
                  <h4>Tracking Technologies and Cookies</h4>
                  <p className='mt-5'>
                    We use Cookies and similar tracking technologies to track
                    the activity on Our Service and store certain information
                    such as the product in your shopping cart and making
                    purchases.
                  </p>
                  <p className='mt-5'>
                    For more information about the cookies we use and your
                    choices regarding cookies, please visit our Cookies Policy.
                  </p>
                </div>
                {/* How We Collect Information About You */}
                <div className='col-12 mt-5'>
                  <h3>How We Collect Information About You</h3>
                  <h4></h4>
                  <p className='mt-5'>
                    Yah’ki Awakened Eye of Lotus Botanical Club and its
                    employees and volunteers collect data through a variety of
                    means including but not necessarily limited to letters,
                    phone calls, emails, voicemails, and from the submission of
                    applications that are either required by law or necessary to
                    process applications or other requests for assistance
                    through our organization.
                  </p>
                </div>
                {/* What We Do Not Do With Your Information */}
                <div className='col-12 mt-5'>
                  <h3>What We Do Not Do With Your Information</h3>
                  <h4 className='mt-5'>
                    Yah’ki Awakened Eye of Lotus Botanical Club
                  </h4>
                  <p className='mt-5'>
                    may use Personal Data for the following purposes:
                  </p>
                  <p className='mt-5'>
                    Information about your financial situation and medical
                    conditions and care that you provide to us in writing, via
                    email, on the phone (including information left on
                    voicemails), contained in or attached to applications, or
                    directly or indirectly given to us, is held in strictest
                    confidence.
                  </p>
                  <p className='mt-5'>
                    We do not give out, exchange, barter, rent, sell, lend, or
                    disseminate any information about applicants or clients who
                    apply for or actually receive our services that are
                    considered patient confidential, is restricted by law, or
                    has been specifically restricted by a patient/client in a
                    signed HIPAA consent form.
                  </p>
                </div>
                {/* How We Do Use Your Information */}
                <div className='col-12 mt-5'>
                  <h3>How We Do Use Your Information</h3>
                  <h4 className='mt-5'>
                    Yah’ki Awakened Eye of Lotus Botanical Club
                  </h4>
                  <p className='mt-5'>
                    is a Private Health club and refuses all services to
                    non-members.
                  </p>
                  <p className='mt-5'>
                    Information is only used as is reasonably necessary to
                    process your application or to provide you with health or
                    counseling services which may require communication between
                    YAH’KI and his employees, herbal product or service
                    providers, and other providers necessary to: verify your
                    medical information is accurate; determine the type of
                    medical supplies or any health care services you need, etc.
                  </p>
                  <p className='mt-5'>
                    If you apply or attempt to apply to receive assistance
                    through us and provide information with the intent or
                    purpose of fraud or that results in either an actual crime
                    of fraud for any reason including willful or un-willful acts
                    of negligence whether intended or not, or in any way
                    demonstrates or indicates attempted fraud, your non-medical
                    information can be given to legal authorities including
                    police, investigators, courts, and/or attorneys or other
                    legal professionals, as well as any other information as
                    permitted by law.
                  </p>
                  <p className='mt-5'>
                    In addition, information is used internally to provide
                    needed information to our staff and faculty so they can
                    properly maintain client safety, implement the treatment
                    plan and otherwise perform their duties. With the exception
                    of information disclosed during individual and group
                    counseling sessions, Yah’ki Awakened Eye of Lotus Botanical
                    Health Club operates on the assumption that all staff and
                    faculty are entitled to a full disclosure of information,
                    including diagnosis, past and current behaviors, risk
                    factors, current and prior assessments, and other similar or
                    pertinent information.
                  </p>
                  <h4 className='my-3'>
                    Yah’ki Awakened Eye of Lotus Botanical Health Club
                  </h4>
                  <p className='mt-5'>
                    may use Personal Data for the following purposes:
                  </p>
                  <ul className='policy-list ml-4 my-3'>
                    <li className='mt-5'>
                      <span className='glossary-word'>
                        To provide and maintain our Service:
                      </span>{' '}
                      including to monitor the usage of our Service.{' '}
                    </li>
                    <li className='mt-5'>
                      <span className='glossary-word'>
                        To manage Your Account:
                      </span>{' '}
                      to manage Your registration as a user of the Service. The
                      Personal Data You provide can give You access to different
                      functionalities of the Service that are available to You
                      as a registered user.
                    </li>
                    <li className='mt-5'>
                      <span className='glossary-word'>
                        For the performance of a contract:{' '}
                      </span>{' '}
                      The development, compliance and undertaking of the
                      purchase contract for the products, items or services You
                      have purchased or of any other contract with Us through
                      the Service.
                    </li>
                    <li className='mt-5'>
                      <span className='glossary-word'>To contact You: </span> To
                      contact You by email, telephone calls, SMS, or other
                      equivalent forms of electronic communication, such as a
                      mobile application’s push notifications regarding updates
                      or informative communications related to the
                      functionalities, products or contracted services,
                      including the security updates, when necessary or
                      reasonable for their implementation.
                    </li>
                    <li className='mt-5'>
                      <span className='glossary-word'>To provide You: </span>{' '}
                      with news, special offers and general information about
                      other goods, services and events which we offer that are
                      similar to those that you have already purchased or
                      inquired about unless You have opted not to receive such
                      information.
                    </li>
                    <li className='mt-5'>
                      <span className='glossary-word'>
                        To manage Your requests:{' '}
                      </span>{' '}
                      To attend and manage Your requests to Us.
                    </li>
                  </ul>
                  <p className='mt-5'>
                    We may share your personal information in the following
                    situations:
                  </p>
                  <ul className='policy-list ml-4 my-3'>
                    <li className='mt-5'>
                      <span className='glossary-word'>
                        With Service Providers:
                      </span>{' '}
                      We use Your personal information with Service Providers
                      for payment processing.
                    </li>
                    <li className='mt-5'>
                      <span className='glossary-word'>With other users:</span>{' '}
                      when You share personal information or otherwise interact
                      in the public areas such as leaving comments, reviews,
                      etc. such information may be viewed by all users.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='row my-3'>
                <div className='col-12 mt-5'>
                  <h4>
                    Limit Right To Use Non-Identifying Personal Information From
                    Biographies, Letters, Notes, And Other Sources:
                  </h4>
                  <p className='mt-5'>
                    Any pictures, stories, letters, biographies, correspondence,
                    or thank you notes sent to us become the exclusive property
                    of Yah’ki Awakened Eye of Lotus Botanical Health Club. We
                    reserve the right to use non-identifying information about
                    our clients (those who receive services or goods from or
                    through us) for fundraising and promotional purposes that
                    are directly related to our mission.
                  </p>
                  <p className='mt-5'>
                    Clients will not be compensated for use of this information
                    and no identifying information (photos, addresses, phone
                    numbers, contact information, last names or uniquely
                    identifiable names) will be used without client’s express
                    advance permission.
                  </p>
                  <p className='mt-5'>
                    You may specifically request that NO information be used
                    whatsoever for promotional purposes, but you must identify
                    any requested restrictions in writing. We respect your right
                    to privacy and assure you no identifying information or
                    photos that you send to us will ever be publicly used
                    without your direct or indirect consent.
                  </p>
                  <h4 className='mt-5'>Payments &amp; Payment Proessing</h4>
                  <p className='mt-5'>
                    We may provide paid products and/or services within the
                    Service. In that case, we may use third-party services for
                    payment processing (e.g. payment processors). We will not
                    store or collect Your payment card details. That information
                    is provided directly to Our third-party payment processors
                    whose use of Your personal information is governed by their
                    Privacy Policy. These payment processors adhere to the
                    standards set by PCI-DSS as managed by the PCI Security
                    Standards Council, which is a joint effort of brands like
                    Visa, Mastercard, American Express and Discover. PCI-DSS
                    requirements help ensure the secure handling of payment
                    information.
                  </p>
                  <h4 className='mt-5'>Stripe</h4>
                  <p className='mt-5'>
                    Their Privacy Policy can be viewed at{' '}
                    <a
                      className='dark-text'
                      href='https://stripe.com/us/privacy'
                    >
                      https://stripe.com/us/privacy
                    </a>
                  </p>
                  <h4 className='mt-5'>PayPal</h4>
                  <p className='mt-5'>
                    Their Privacy Policy can be viewed at{' '}
                    <a
                      className='dark-text'
                      href='https://www.paypal.com/webapps/mpp/ua/privacy-full'
                    >
                      https://www.paypal.com/webapps/mpp/ua/privacy-full
                    </a>
                  </p>
                  <h4 className='mt-5'>Square</h4>
                  <p className='mt-5'>
                    Their Privacy Policy can be viewed at{' '}
                    <a
                      className='dark-text'
                      href='https://squareup.com/legal/privacy-no-account'
                    >
                      https://squareup.com/legal/privacy-no-account
                    </a>
                  </p>
                  <h4 className='mt-5'>Children's Privacy</h4>
                  <p className='mt-5'>
                    Our Service does not address anyone under the age of 13. We
                    do not knowingly collect personally identifiable information
                    from anyone under the age of 13. If You are a parent or
                    guardian and You are aware that Your child has provided Us
                    with Personal Data, please contact Us. If We become aware
                    that We have collected Personal Data from anyone under the
                    age of 13 without verification of parental consent, We take
                    steps to remove that information from Our servers.
                  </p>
                  <p>
                    If We need to rely on consent as a legal basis for
                    processing Your information and Your country requires
                    consent from a parent, We may require Your parent’s consent
                    before We collect and use that information.
                  </p>
                  <h4 className='mt-5'>
                    California Privacy Rights For Minor Users( California
                    Business &amp; Professions Code Section 22581)
                  </h4>
                  <p className='mt-5'>
                    California Business and Professions Code section 22581 allow
                    California residents under the age of 18 who are registered
                    users of online sites, services or applications to request
                    and obtain removal of content or information they have
                    publicly posted.
                  </p>
                  <p>
                    To request removal of such data, and if you are a California
                    resident, You can contact Us using the contact information
                    provided below, and include the email address associated
                    with Your account. Be aware that Your request does not
                    guarantee complete or comprehensive removal of content or
                    information posted online and that the law may not permit or
                    require removal in certain circumstances.
                  </p>
                  <h4 className='mt-5'>Testimonials, Feedback, And Comments</h4>
                  <p className='mt-5'>
                    If at any time you send testimonies, ideas, and other
                    materials by email, chat, or by mail you agree that we may
                    edit, copy, publish, distribute and use any material that is
                    sent to us. We are not obligated to pay compensation for any
                    comments or respond to any comments. We may remove any
                    content that we feel is inappropriate an or violates the
                    terms of this agreement. You are responsible for your own
                    comments and we will assume no liability for your comments.
                  </p>
                  <h4 className='mt-5'>Changes To This Privacy Policy</h4>
                  <p className='mt-5'>
                    We may update our Privacy Policy from time to time. We will
                    notify You of any changes by posting the new Privacy Policy
                    on this page.
                  </p>
                  <p>
                    We will let You know via email and/or a prominent notice on
                    Our Service, prior to the change becoming effective and
                    update the “Last updated” date at the top of this Privacy
                    Policy.
                  </p>
                  <p>
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </p>
                </div>
              </div>
              <div className='row mt-5'>
                <div className='col-12 text-center'>
                  <div className='about-bottom-banner'>
                    <h3>
                      All Herbs Are Organic Alkaline and Are Naturally
                      Wildcrafted from the Land of their Origin
                    </h3>
                    <p>
                      All herbs used in our products are 100% naturally organic
                      and are selectively picked and tested by a laboratory
                      before use. Each herbal compound is personally prepared
                      with gratification for the purpose of restoring health to
                      our clients.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
