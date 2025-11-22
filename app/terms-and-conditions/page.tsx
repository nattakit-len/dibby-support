export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            These terms and conditions apply to the Dibby app (hereby referred
            to as "Application") for mobile devices that was created by Nattakit
            Lensin (hereby referred to as "Service Provider") as a Freemium
            service.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Upon downloading or utilizing the Application, you are automatically
            agreeing to the following terms. It is strongly advised that you
            thoroughly read and understand these terms prior to using the
            Application.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Unauthorized copying, modification of the Application, any part of
              the Application, or our trademarks is strictly prohibited. Any
              attempts to extract the source code of the Application, translate
              the Application into other languages, or create derivative
              versions are not permitted. All trademarks, copyrights, database
              rights, and other intellectual property rights related to the
              Application remain the property of the Service Provider.
            </p>
          </section>

          {/* Service Modifications and Charges */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Service Modifications and Charges
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Service Provider is dedicated to ensuring that the Application
              is as beneficial and efficient as possible. As such, they reserve
              the right to modify the Application or charge for their services
              at any time and for any reason. The Service Provider assures you
              that any charges for the Application or its services will be
              clearly communicated to you.
            </p>
          </section>

          {/* User Accounts and Authentication */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              User Accounts and Authentication
            </h2>

            {/* Google Sign-In */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Google Sign-In
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                The Application uses Google Sign-In as the primary method for
                user authentication. By using the Application, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>
                  Provide accurate and complete information from your Google
                  account
                </li>
                <li>
                  Maintain the security and confidentiality of your Google
                  account credentials
                </li>
                <li>
                  Be responsible for all activities that occur under your
                  account
                </li>
                <li>
                  Notify the Service Provider immediately of any unauthorized
                  use of your account
                </li>
              </ul>

              <p className="text-gray-600 mb-2 leading-relaxed">
                You acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  The Application accesses only basic profile information from
                  your Google account (name, email, profile picture, and user
                  ID)
                </li>
                <li>
                  You can revoke the Application's access to your Google account
                  at any time through your Google Account Settings
                </li>
                <li>
                  Revoking access may limit or prevent your ability to use
                  certain features of the Application
                </li>
                <li>
                  The Service Provider is not responsible for any issues arising
                  from your Google account, including account suspension or
                  termination by Google
                </li>
              </ul>
            </div>

            {/* Apple Sign-In */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Apple Sign-In
              </h3>
              <p className="text-gray-600 mb-3 leading-relaxed">
                The Application also supports Apple Sign-In as an authentication
                method. By using Apple Sign-In, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-4">
                <li>Provide accurate information from your Apple ID account</li>
                <li>
                  Maintain the security and confidentiality of your Apple ID
                  credentials
                </li>
                <li>
                  Be responsible for all activities that occur under your
                  account
                </li>
                <li>
                  Notify the Service Provider immediately of any unauthorized
                  use of your account
                </li>
              </ul>

              <p className="text-gray-600 mb-2 leading-relaxed">
                You acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  The Application accesses only basic profile information from
                  your Apple ID (name, email or private relay email, and user
                  ID)
                </li>
                <li>
                  You can revoke the Application's access to your Apple ID at
                  any time through your Apple ID Settings
                </li>
                <li>
                  Revoking access may limit or prevent your ability to use
                  certain features of the Application
                </li>
                <li>
                  The Service Provider is not responsible for any issues arising
                  from your Apple ID account, including account suspension or
                  termination by Apple
                </li>
              </ul>
            </div>

            {/* Account Termination */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Account Termination
              </h3>
              <p className="text-gray-600 mb-2 leading-relaxed">
                The Service Provider reserves the right to suspend or terminate
                your account at any time if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>You violate these Terms and Conditions</li>
                <li>
                  You engage in fraudulent, abusive, or illegal activities
                </li>
                <li>Your account has been inactive for an extended period</li>
                <li>
                  It is necessary to protect the Service Provider's rights or
                  other users
                </li>
              </ul>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Storage and Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Application stores and processes personal data that you have
              provided to the Service Provider in order to provide the Service.
              It is your responsibility to maintain the security of your phone
              and access to the Application. The Service Provider strongly
              advises against jailbreaking or rooting your phone, which involves
              removing software restrictions and limitations imposed by the
              official operating system of your device. Such actions could
              expose your phone to malware, viruses, malicious programs,
              compromise your phone's security features, and may result in the
              Application not functioning correctly or at all.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Please note that the Application utilizes third-party services
              that have their own Terms and Conditions. Below are the links to
              the Terms and Conditions of the third-party service providers used
              by the Application:
            </p>
            <ul className="space-y-2 ml-4 mb-4">
              <li>
                <a
                  href="https://policies.google.com/terms"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/terms"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Sign-In / Google APIs
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Apple Sign-In
                </a>
              </li>
              <li>
                <a
                  href="https://developers.google.com/admob/terms"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  AdMob
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/analytics/terms/"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/legal/terms/plain_text_terms"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.revenuecat.com/terms"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  RevenueCat
                </a>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              By using the Application, you also agree to comply with the terms
              and conditions of these third-party service providers,
              particularly Google's and Apple's Terms of Service for
              authentication services.
            </p>
          </section>

          {/* Internet Connection Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Internet Connection Requirements
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Please be aware that the Service Provider does not assume
              responsibility for certain aspects. Some functions of the
              Application require an active internet connection, which can be
              Wi-Fi or provided by your mobile network provider. The Service
              Provider cannot be held responsible if the Application does not
              function at full capacity due to lack of access to Wi-Fi or if you
              have exhausted your data allowance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you are using the Application outside of a Wi-Fi area, please
              be aware that your mobile network provider's agreement terms still
              apply. Consequently, you may incur charges from your mobile
              provider for data usage during the connection to the Application,
              or other third-party charges. By using the Application, you accept
              responsibility for any such charges, including roaming data
              charges if you use the Application outside of your home territory
              (i.e., region or country) without disabling data roaming. If you
              are not the bill payer for the device on which you are using the
              Application, they assume that you have obtained permission from
              the bill payer.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              User Responsibilities
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Similarly, the Service Provider cannot always assume
              responsibility for your usage of the Application. For instance, it
              is your responsibility to ensure that your device remains charged.
              If your device runs out of battery and you are unable to access
              the Service, the Service Provider cannot be held responsible.
            </p>
            <p className="text-gray-600 mb-2 leading-relaxed">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>
                Maintaining the confidentiality of your account information
              </li>
              <li>All activities conducted through your account</li>
              <li>
                Ensuring your use of the Application complies with applicable
                laws and regulations
              </li>
              <li>Any content you submit or share through the Application</li>
            </ul>
          </section>

          {/* Service Availability and Updates */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Service Availability and Updates
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In terms of the Service Provider's responsibility for your use of
              the Application, it is important to note that while they strive to
              ensure that it is updated and accurate at all times, they do rely
              on third parties to provide information to them so that they can
              make it available to you. The Service Provider accepts no
              liability for any loss, direct or indirect, that you experience as
              a result of relying entirely on this functionality of the
              Application.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The Service Provider may wish to update the Application at some
              point. The Application is currently available as per the
              requirements for the operating system (and for any additional
              systems they decide to extend the availability of the Application
              to) may change, and you will need to download the updates if you
              want to continue using the Application. The Service Provider does
              not guarantee that it will always update the Application so that
              it is relevant to you and/or compatible with the particular
              operating system version installed on your device. However, you
              agree to always accept updates to the Application when offered to
              you.
            </p>
          </section>

          {/* Service Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Service Termination
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Service Provider may also wish to cease providing the
              Application and may terminate its use at any time without
              providing termination notice to you. Unless they inform you
              otherwise, upon any termination, (a) the rights and licenses
              granted to you in these terms will end; (b) you must cease using
              the application, and (if necessary) delete it from your device.
            </p>
            <p className="text-gray-600 mb-2 leading-relaxed">
              Upon termination of your account or the Application:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>
                Your access to the Application will be immediately revoked
              </li>
              <li>
                Any data associated with your account may be deleted in
                accordance with the Privacy Policy
              </li>
              <li>
                You may request a copy of your data before termination by
                contacting the Service Provider
              </li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Prohibited Activities
            </h2>
            <p className="text-gray-600 mb-2 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>
                Use the Application for any illegal purpose or in violation of
                any laws
              </li>
              <li>
                Attempt to gain unauthorized access to the Application or
                related systems
              </li>
              <li>Interfere with or disrupt the Application or servers</li>
              <li>Impersonate another person or entity</li>
              <li>Transmit any viruses, malware, or other malicious code</li>
              <li>Use automated systems or bots to access the Application</li>
              <li>
                Attempt to bypass Google Sign-In or Apple Sign-In or create fake
                accounts
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-2 leading-relaxed">
              The Service Provider shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use or inability to use the Application, including but
              not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Loss of data or account access</li>
              <li>Service interruptions or errors</li>
              <li>
                Issues arising from third-party services, including Google
                Sign-In and Apple Sign-In
              </li>
              <li>Unauthorized access to your account</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to These Terms and Conditions
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The Service Provider may periodically update their Terms and
              Conditions. Therefore, you are advised to review this page
              regularly for any changes. The Service Provider will notify you of
              any changes by posting the new Terms and Conditions on this page.
            </p>
            <p className="text-sm text-gray-500 italic">
              These terms and conditions are effective as of 2025-11-09
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions or suggestions about the Terms and
              Conditions, please do not hesitate to contact the Service Provider
              at{" "}
              <a
                href="mailto:nattakit.len@icloud.com"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                nattakit.len@icloud.com
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>© 2024 Dibby. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
